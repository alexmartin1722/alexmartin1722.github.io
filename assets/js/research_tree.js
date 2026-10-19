// Research tree: renders _data/research_tree.yml as an SVG tree.
// Goal = sun, branches = research threads (bending toward the sun), papers = leaves/fruit,
// foundations = roots. "builds_on" links are drawn as vines with sap flowing along them.
(function () {
  const SVG_NS = "http://www.w3.org/2000/svg";
  const W = 1000;
  const H = 1050;
  const CX = 500;
  const GOAL = { x: 500, y: 130 };
  const FORK_Y = 720;
  const GROUND_Y = 890;
  const BRANCH_LEN = 350;
  const ROOT_LEN = 150;

  function el(tag, attrs, parent) {
    const node = document.createElementNS(SVG_NS, tag);
    for (const k in attrs) node.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(node);
    return node;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  }

  // point and tangent on a cubic bezier
  function cubic(p0, p1, p2, p3, t) {
    const u = 1 - t;
    return {
      x: u * u * u * p0.x + 3 * u * u * t * p1.x + 3 * u * t * t * p2.x + t * t * t * p3.x,
      y: u * u * u * p0.y + 3 * u * u * t * p1.y + 3 * u * t * t * p2.y + t * t * t * p3.y,
      tx: 3 * u * u * (p1.x - p0.x) + 6 * u * t * (p2.x - p1.x) + 3 * t * t * (p3.x - p2.x),
      ty: 3 * u * u * (p1.y - p0.y) + 6 * u * t * (p2.y - p1.y) + 3 * t * t * (p3.y - p2.y),
    };
  }

  // every paper's leaf or fruit grows bigger the more papers build on it
  function markSize(p) {
    return 7 + 3 * Math.sqrt(p.led_to.length);
  }

  // how far a paper's mark reaches from its center (leaves are longer than fruit is wide)
  function markExtent(p) {
    return p.type === "dataset" || p.type === "both" ? markSize(p) : (markSize(p) * 10) / 7;
  }

  // split text into at most two lines of roughly equal length
  function splitTwo(text, minWords = 4) {
    const words = text.split(" ");
    if (words.length < minWords) return [text];
    let best = 1;
    let bestDiff = Infinity;
    for (let i = 1; i < words.length; i++) {
      const diff = Math.abs(words.slice(0, i).join(" ").length - words.slice(i).join(" ").length);
      if (diff < bestDiff) {
        bestDiff = diff;
        best = i;
      }
    }
    return [words.slice(0, best).join(" "), words.slice(best).join(" ")];
  }

  function byYear(a, b) {
    return a.year - b.year || a._idx - b._idx;
  }

  function init() {
    const container = document.getElementById("research-tree");
    const dataEl = document.getElementById("research-tree-data");
    if (!container || !dataEl) return;
    const data = JSON.parse(dataEl.textContent);
    const branches = data.branches || [];
    const papers = (data.papers || []).map((p, i) => Object.assign({ _idx: i, builds_on: [] }, p));
    const paperById = {};
    papers.forEach((p) => (paperById[p.id] = p));
    const branchById = { roots: Object.assign({ id: "roots" }, data.roots) };
    branches.forEach((b) => (branchById[b.id] = b));

    // "led to" = reverse of builds_on
    papers.forEach((p) => (p.led_to = []));
    papers.forEach((p) => {
      p.builds_on = p.builds_on.filter((id) => paperById[id]);
      p.builds_on.forEach((id) => paperById[id].led_to.push(p.id));
    });

    const svg = el("svg", {
      viewBox: `0 0 ${W} ${H}`,
      class: "rt-svg",
      role: "img",
      "aria-label": `Research tree growing toward: ${data.goal.title}`,
    });
    const defs = el("defs", {}, svg);
    const glow = el("radialGradient", { id: "rt-goal-glow" }, defs);
    el("stop", { offset: "0%", class: "rt-glow-stop0" }, glow);
    el("stop", { offset: "100%", class: "rt-glow-stop1" }, glow);
    const beam = el("linearGradient", { id: "rt-beam", x1: "0", y1: "0", x2: "0", y2: "1" }, defs);
    el("stop", { offset: "0%", class: "rt-beam-stop0" }, beam);
    el("stop", { offset: "100%", class: "rt-beam-stop1" }, beam);

    const layers = {};
    ["bush", "canopy", "ground", "wood", "vines", "leaves", "labels"].forEach((name) => (layers[name] = el("g", { class: `rt-layer-${name}` }, svg)));

    // ---- ground & trunk ----
    el("path", { class: "rt-soil", d: `M40,${GROUND_Y} Q${CX},${GROUND_Y - 14} ${W - 40},${GROUND_Y} L${W - 40},${H} L40,${H} Z` }, layers.ground);
    el("path", { class: "rt-ground", d: `M40,${GROUND_Y} Q${CX},${GROUND_Y - 14} ${W - 40},${GROUND_Y}` }, layers.ground);
    el(
      "path",
      {
        class: "rt-trunk",
        d:
          `M${CX - 28},${GROUND_Y} C${CX - 14},${GROUND_Y - 40} ${CX - 11},${FORK_Y + 60} ${CX - 10},${FORK_Y} ` +
          `L${CX + 10},${FORK_Y} C${CX + 11},${FORK_Y + 60} ${CX + 14},${GROUND_Y - 40} ${CX + 28},${GROUND_Y} Z`,
      },
      layers.wood
    );

    const pos = {}; // paper id -> {x, y}
    const branchEls = {}; // branch id -> [svg elements]

    // ---- goal: the sun ----
    // soft beams of light falling on the canopy
    [-48, -22, 0, 22, 48].forEach((deg) => {
      const a = (deg * Math.PI) / 180;
      const spread = 0.05;
      const reach = 460;
      const pt = (ang) => `${GOAL.x + Math.sin(ang) * reach},${GOAL.y + Math.cos(ang) * reach}`;
      el("path", { class: "rt-beam", d: `M${GOAL.x},${GOAL.y} L${pt(a - spread)} L${pt(a + spread)} Z` }, layers.canopy);
    });
    const goalG = el("g", { class: "rt-goal", tabindex: "0", role: "button", "aria-label": `Goal: ${data.goal.title}` }, layers.labels);
    el("circle", { cx: GOAL.x, cy: GOAL.y, r: 95, fill: "url(#rt-goal-glow)" }, goalG);
    const rays = el("g", { class: "rt-rays", style: `transform-origin:${GOAL.x}px ${GOAL.y}px` }, goalG);
    for (let i = 0; i < 16; i++) {
      const a = (Math.PI / 8) * i;
      const r1 = 32;
      const r2 = i % 2 ? 42 : 52;
      el("line", { x1: GOAL.x + Math.cos(a) * r1, y1: GOAL.y + Math.sin(a) * r1, x2: GOAL.x + Math.cos(a) * r2, y2: GOAL.y + Math.sin(a) * r2 }, rays);
    }
    el("circle", { cx: GOAL.x, cy: GOAL.y, r: 25, class: "rt-goal-core" }, goalG);
    // the sun is wearing sunglasses
    const shades = el("g", { class: "rt-shades" }, goalG);
    const lensY = GOAL.y - 3;
    [-1, 1].forEach((side) => {
      const lx = GOAL.x + side * 10.5;
      el("path", { class: "rt-lens", d: `M${lx - 8.5},${lensY - 4} L${lx + 8.5},${lensY - 4} Q${lx + 8.5},${lensY + 7} ${lx},${lensY + 7} Q${lx - 8.5},${lensY + 7} ${lx - 8.5},${lensY - 4} Z` }, shades);
      el("path", { class: "rt-glint", d: `M${lx - 4.5},${lensY - 1} L${lx - 1.5},${lensY + 2.5}` }, shades);
      el("path", { class: "rt-frame", d: `M${GOAL.x + side * 19},${lensY - 3} L${GOAL.x + side * 24.5},${lensY - 6}` }, shades);
    });
    el("path", { class: "rt-frame", d: `M${GOAL.x - 2.5},${lensY - 3} Q${GOAL.x},${lensY - 5.5} ${GOAL.x + 2.5},${lensY - 3}` }, shades);
    el("path", { class: "rt-frame", d: `M${GOAL.x - 8},${GOAL.y + 11} Q${GOAL.x},${GOAL.y + 17} ${GOAL.x + 8},${GOAL.y + 11}` }, shades);
    splitTwo(data.goal.title).forEach((line, i, arr) => {
      const t = el("text", { x: GOAL.x, y: GOAL.y - 66 - (arr.length - 1 - i) * 22, class: "rt-goal-text" }, goalG);
      t.textContent = line;
    });

    // ---- branches ----
    const crownPoints = []; // everything the canopy must cover
    const n = branches.length;
    branches.forEach((b, i) => {
      const deg = n === 1 ? 0 : -64 + (128 * i) / (n - 1);
      const a = (deg * Math.PI) / 180;
      const p0 = { x: CX, y: FORK_Y };
      const p2 = { x: CX + Math.sin(a) * BRANCH_LEN, y: FORK_Y - Math.cos(a) * BRANCH_LEN };
      const c1 = { x: CX + Math.sin(a) * BRANCH_LEN * 0.45, y: FORK_Y - Math.cos(a) * BRANCH_LEN * 0.45 };
      // the tip leans toward the sun: its direction blends outward (weighted 2x) with sunward
      const sunDist = Math.hypot(GOAL.x - p2.x, GOAL.y - p2.y);
      const lean = { x: 2 * Math.sin(a) + (GOAL.x - p2.x) / sunDist, y: -2 * Math.cos(a) + (GOAL.y - p2.y) / sunDist };
      const leanLen = Math.hypot(lean.x, lean.y);
      const c2 = { x: p2.x - (lean.x / leanLen) * BRANCH_LEN * 0.23, y: p2.y - (lean.y / leanLen) * BRANCH_LEN * 0.23 };
      branchEls[b.id] = [];

      branchEls[b.id].push(el("path", { class: "rt-branch", stroke: b.color, d: `M${p0.x},${p0.y} C${c1.x},${c1.y} ${c2.x},${c2.y} ${p2.x},${p2.y}` }, layers.wood));

      // branch name on (up to) two short lines centered over the tip, to keep the crown narrow at the top
      const nameLines = splitTwo(b.name, 2);
      // optional nudge from the data file (label_dx / label_dy)
      const labelX = p2.x + (b.label_dx || 0);
      const labelY = p2.y - 40 - (nameLines.length - 1) * 20 + (b.label_dy || 0);
      const label = el("text", { x: labelX, y: labelY, class: "rt-branch-label", fill: b.color, "text-anchor": "middle", tabindex: "0", role: "button" }, layers.labels);
      nameLines.forEach((line, k) => {
        el("tspan", { x: labelX, dy: k ? 20 : 0 }, label).textContent = line;
        crownPoints.push(...textExtent(labelX, labelY + k * 20, line, "middle", 7.5));
      });
      label.addEventListener("click", () => showBranch(b.id));
      label.addEventListener("keydown", (e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), showBranch(b.id)));
      branchEls[b.id].push(label);

      const onBranch = papers.filter((p) => p.branch === b.id).sort(byYear);
      onBranch.forEach((p, j) => {
        const t = onBranch.length === 1 ? 0.7 : 0.34 + (0.63 * j) / (onBranch.length - 1);
        const q = cubic(p0, c1, c2, p2, t);
        const len = Math.hypot(q.tx, q.ty);
        const tx = q.tx / len;
        const ty = q.ty / len;
        const side = j % 2 ? 1 : -1;
        const r = markExtent(p);
        const twig = 26 + Math.max(0, r - 10);
        const x = q.x - ty * side * twig + tx * 10;
        const y = q.y + tx * side * twig + ty * 10;
        const gap = Math.max(13, r + 5);
        el("path", { class: "rt-twig", stroke: b.color, d: `M${q.x},${q.y} Q${(q.x + x) / 2 + tx * 6},${(q.y + y) / 2 + ty * 6} ${x},${y}` }, layers.wood);
        pos[p.id] = { x, y, ux: x - q.x, uy: y - q.y, labelAnchor: x < CX ? "end" : "start", labelDx: x < CX ? -gap : gap, labelDy: 4 };
        crownPoints.push({ x, y: y - r }, ...textExtent(x + pos[p.id].labelDx, y, p.label || p.title, pos[p.id].labelAnchor, 6.3));
      });
    });
    drawCrown(layers.bush, crownPoints);

    // ---- roots ----
    const rootPapers = papers.filter((p) => p.branch === "roots").sort(byYear);
    const m = rootPapers.length;
    branchEls.roots = [];
    rootPapers.forEach((p, i) => {
      const deg = m === 1 ? 0 : -62 + (124 * i) / (m - 1);
      const a = (deg * Math.PI) / 180;
      const x = CX + Math.sin(a) * ROOT_LEN;
      const y = GROUND_Y + Math.cos(a) * ROOT_LEN * 0.72;
      const sx = CX + Math.sin(a) * 18;
      const c = { x: CX + Math.sin(a) * ROOT_LEN * 0.35, y: GROUND_Y + 50 };
      branchEls.roots.push(el("path", { class: "rt-root", d: `M${sx},${GROUND_Y - 4} Q${c.x},${c.y} ${x},${y}` }, layers.wood));
      pos[p.id] = { x, y, ux: x - c.x, uy: y - c.y, labelAnchor: "middle", labelDx: 0, labelDy: Math.max(26, markExtent(p) + 18) };
    });
    if (data.roots && m) {
      const rl = el("text", { x: CX - 190, y: GROUND_Y + 32, class: "rt-branch-label rt-under", fill: data.roots.color, "text-anchor": "end", tabindex: "0", role: "button" }, layers.labels);
      rl.textContent = data.roots.name;
      rl.addEventListener("click", () => showBranch("roots"));
      rl.addEventListener("keydown", (e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), showBranch("roots")));
      branchEls.roots.push(rl);
    }

    // ---- vines (builds_on) ----
    const vineEls = {}; // paper id -> [vine elements touching it]
    const calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let vineCount = 0;
    papers.forEach((p) => {
      if (!pos[p.id]) return;
      p.builds_on.forEach((src) => {
        if (!pos[src]) return;
        const a = pos[src];
        const b = pos[p.id];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const bow = 0.18;
        const c = { x: (a.x + b.x) / 2 - dy * bow, y: (a.y + b.y) / 2 + dx * bow };
        const color = branchById[p.branch].color;
        const vine = el("g", { class: "rt-vine" }, layers.vines);
        const pathId = `rt-vine-${vineCount++}`;
        el("path", { id: pathId, class: "rt-vine-path", stroke: color, d: `M${a.x},${a.y} Q${c.x},${c.y} ${b.x},${b.y}` }, vine);
        // sap flows from the earlier work into the work that builds on it
        if (!calm) {
          const dur = Math.max(2.5, Math.hypot(dx, dy) / 55);
          [0, 0.5].forEach((phase) => {
            const sap = el("circle", { class: "rt-sap", r: 2.4, fill: color }, vine);
            const motion = el("animateMotion", { dur: `${dur}s`, repeatCount: "indefinite", begin: `-${(phase + Math.random() * 0.2) * dur}s` }, sap);
            el("mpath", { href: `#${pathId}` }, motion);
          });
        }
        (vineEls[p.id] = vineEls[p.id] || []).push(vine);
        (vineEls[src] = vineEls[src] || []).push(vine);
      });
    });

    // ---- leaves ----
    const leafEls = {};
    let order = 0;
    papers
      .filter((p) => pos[p.id])
      .sort(byYear)
      .forEach((p) => {
        const b = branchById[p.branch];
        const { x, y, ux, uy } = pos[p.id];
        const g = el(
          "g",
          {
            class: "rt-leaf" + (p.status === "ongoing" ? " rt-ongoing" : ""),
            tabindex: "0",
            role: "button",
            "aria-label": `${p.title} (${typeLabel(p.type)}, ${p.year})`,
            style: `--rt-delay:${order++ * 45}ms`,
          },
          layers.leaves
        );
        el("circle", { cx: x, cy: y, r: Math.max(16, markExtent(p) + 6), class: "rt-hit" }, g);
        drawMark(el("g", { class: "rt-mark" }, g), x, y, ux, uy, p.type, b.color, markSize(p));
        const label = el(
          "text",
          {
            x: x + pos[p.id].labelDx,
            y: y + pos[p.id].labelDy,
            class: "rt-leaf-label" + (p.first_author ? " rt-first" : "") + (p.branch === "roots" ? " rt-under" : ""),
            "text-anchor": pos[p.id].labelAnchor,
          },
          g
        );
        label.textContent = p.label || p.title;
        g.addEventListener("mouseenter", () => preview(p.id));
        g.addEventListener("mouseleave", restore);
        g.addEventListener("focus", () => preview(p.id));
        g.addEventListener("blur", restore);
        g.addEventListener("click", () => pin(p.id));
        g.addEventListener("keydown", (e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), pin(p.id)));
        leafEls[p.id] = g;
      });

    const legend = container.querySelector(".rt-legend");
    if (legend) {
      ["method", "dataset", "both"].forEach((type) => {
        const item = document.createElement("span");
        const icon = el("svg", { viewBox: "0 0 24 24", width: "22", height: "22" }, item);
        drawMark(icon, 12, 12, 0.7, -0.7, type, "currentColor");
        item.appendChild(document.createTextNode(typeLabel(type)));
        legend.appendChild(item);
      });
      const size = document.createElement("span");
      size.textContent = "Bigger leaf or fruit = more work grows from it";
      legend.appendChild(size);
      const first = document.createElement("span");
      first.innerHTML = "<b>Bold</b>&nbsp;= first / co-first author";
      legend.appendChild(first);
    }

    const scroller = container.querySelector(".rt-scroll");
    scroller.appendChild(svg);
    // on narrow screens start scrolled to the trunk
    scroller.scrollLeft = (scroller.scrollWidth - scroller.clientWidth) / 2;
    const panel = container.querySelector(".rt-panel");
    const defaultPanel = panel.innerHTML;
    let pinned = null; // {type: 'paper'|'branch'|'goal', id}

    goalG.addEventListener("click", showGoal);
    goalG.addEventListener("keydown", (e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), showGoal()));

    // ---- highlighting & panel ----
    function clearHighlight() {
      svg.classList.remove("rt-dim");
      svg.querySelectorAll(".rt-on").forEach((e) => e.classList.remove("rt-on"));
    }

    function highlightPaper(id) {
      clearHighlight();
      svg.classList.add("rt-dim");
      const p = paperById[id];
      [id, ...p.builds_on, ...p.led_to].forEach((k) => leafEls[k] && leafEls[k].classList.add("rt-on"));
      (vineEls[id] || []).forEach((v) => v.classList.add("rt-on"));
      (branchEls[p.branch] || []).forEach((e) => e.classList.add("rt-on"));
      leafEls[id].classList.add("rt-focus");
    }

    function highlightBranch(bid) {
      clearHighlight();
      svg.classList.add("rt-dim");
      (branchEls[bid] || []).forEach((e) => e.classList.add("rt-on"));
      papers.filter((p) => p.branch === bid).forEach((p) => leafEls[p.id] && leafEls[p.id].classList.add("rt-on"));
    }

    function chip(id) {
      const q = paperById[id];
      return `<button type="button" class="rt-chip" data-id="${escapeHtml(id)}" style="--rt-c:${escapeHtml(branchById[q.branch].color)}">${escapeHtml(q.label || q.title)}</button>`;
    }

    function paperHtml(id) {
      const p = paperById[id];
      const b = branchById[p.branch];
      let html = `<div class="rt-kicker" style="color:${escapeHtml(b.color)}">${escapeHtml(b.name)} · ${typeLabel(p.type)}</div>`;
      html += `<div class="rt-title">${p.url ? `<a href="${escapeHtml(p.url)}" target="_blank" rel="noopener">${escapeHtml(p.title)}</a>` : escapeHtml(p.title)}</div>`;
      html += `<div class="rt-meta">${[p.venue, p.year, p.status === "ongoing" ? "in progress" : ""].filter(Boolean).map(escapeHtml).join(" · ")}</div>`;
      if (p.blurb) html += `<p class="rt-blurb">${escapeHtml(p.blurb)}</p>`;
      if (p.builds_on.length) html += `<div class="rt-rel"><span>Builds on</span>${p.builds_on.map(chip).join("")}</div>`;
      if (p.led_to.length) html += `<div class="rt-rel"><span>Led to</span>${p.led_to.map(chip).join("")}</div>`;
      return html;
    }

    function branchHtml(bid) {
      const b = branchById[bid];
      const list = papers.filter((p) => p.branch === bid).sort(byYear);
      return (
        `<div class="rt-kicker" style="color:${escapeHtml(b.color)}">${bid === "roots" ? "Roots" : "Branch"}</div>` +
        `<div class="rt-title">${escapeHtml(b.name)}</div>` +
        (b.blurb ? `<p class="rt-blurb">${escapeHtml(b.blurb)}</p>` : "") +
        `<div class="rt-rel">${list.map((p) => chip(p.id)).join("")}</div>`
      );
    }

    function goalHtml() {
      return `<div class="rt-kicker">The goal</div><div class="rt-title">${escapeHtml(data.goal.title)}</div>` + (data.goal.blurb ? `<p class="rt-blurb">${escapeHtml(data.goal.blurb)}</p>` : "");
    }

    function render(state) {
      if (!state) {
        clearHighlight();
        panel.innerHTML = defaultPanel;
        return;
      }
      if (state.type === "paper") {
        highlightPaper(state.id);
        panel.innerHTML = paperHtml(state.id);
      } else if (state.type === "branch") {
        highlightBranch(state.id);
        panel.innerHTML = branchHtml(state.id);
      } else {
        clearHighlight();
        panel.innerHTML = goalHtml();
      }
      panel.querySelectorAll(".rt-chip").forEach((c) => {
        c.addEventListener("click", () => pin(c.dataset.id));
        c.addEventListener("mouseenter", () => highlightPaper(c.dataset.id));
        c.addEventListener("mouseleave", () => render(pinned));
      });
      if (pinned) panel.insertAdjacentHTML("beforeend", `<button type="button" class="rt-close" aria-label="Close">×</button>`);
      const close = panel.querySelector(".rt-close");
      if (close) close.addEventListener("click", () => ((pinned = null), render(null)));
    }

    function preview(id) {
      render({ type: "paper", id });
    }
    function restore() {
      render(pinned);
    }
    function pin(id) {
      pinned = pinned && pinned.type === "paper" && pinned.id === id ? null : { type: "paper", id };
      render(pinned || { type: "paper", id });
    }
    function showBranch(bid) {
      pinned = { type: "branch", id: bid };
      render(pinned);
    }
    function showGoal() {
      pinned = { type: "goal" };
      render(pinned);
    }

    container.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        pinned = null;
        render(null);
      }
    });

    // grow the tree once it scrolls into view
    if ("IntersectionObserver" in window) {
      svg.classList.add("rt-seed");
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            svg.classList.remove("rt-seed");
            io.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      io.observe(svg);
    }
  }

  // the two ends of a text label (approximate width from character count)
  function textExtent(x, y, text, anchor, charW) {
    x = parseFloat(x);
    const w = text.length * charW;
    const x0 = anchor === "end" ? x - w : anchor === "middle" ? x - w / 2 : x;
    return [
      { x: x0, y: y - 8 },
      { x: x0 + w, y: y + 4 },
    ];
  }

  // a cartoon tree crown covering `points`: a dome with a scalloped top and a flat underside, plus an outline
  function drawCrown(parent, points) {
    if (!points.length) return;
    const xs = points.map((p) => p.x);
    const ys = points.map((p) => p.y);
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
    const base = Math.max(...ys) + 22; // the flat underside
    const bump = 40;
    const a = Math.min((Math.max(...xs) - Math.min(...xs)) / 2, cx - bump - 6, W - cx - bump - 6);
    // a superellipse (|x/a|^n + |y/b|^n = 1): n < 2 gives a pointier, more triangular dome than an ellipse;
    // points far out at the sides are left to the scallops
    const n = 1.8;
    const b = Math.max(
      base - Math.min(...ys),
      ...points.filter((p) => Math.abs(p.x - cx) / a <= 0.78).map((p) => (base - p.y) / Math.pow(1 - Math.pow(Math.abs(p.x - cx) / a, n), 1 / n))
    );
    const edge = [];
    for (let i = 0; i <= 120; i++) {
      const t = Math.PI + (Math.PI * i) / 120;
      const c = Math.cos(t);
      edge.push({ x: cx + a * Math.sign(c) * Math.pow(Math.abs(c), 2 / n), y: base - b * Math.pow(Math.abs(Math.sin(t)), 2 / n) });
    }
    const sag = 16; // the underside bows down slightly
    const dome = (grow) => {
      const pts = edge.map((p) => `${cx + (p.x - cx) * ((a + grow) / a)},${base - (base - p.y) * ((b + grow) / b)}`);
      return `M${pts.join(" L")} Q${cx},${base + sag + grow * 2} ${pts[0]} Z`;
    };
    // scallops spaced evenly along the top edge only
    const lengths = [0];
    for (let i = 1; i < edge.length; i++) lengths.push(lengths[i - 1] + Math.hypot(edge[i].x - edge[i - 1].x, edge[i].y - edge[i - 1].y));
    const total = lengths[lengths.length - 1];
    const count = Math.round(total / 58);
    const bumps = [];
    for (let i = 0; i <= count; i++) {
      const target = total * (0.02 + (0.96 * i) / count);
      const k = lengths.findIndex((l) => l >= target);
      const r = bump + (i % 3 ? 0 : 7) - (i % 2 ? 4 : 0);
      // keep the corner scallops from hanging below the flat underside
      bumps.push({ x: edge[k].x, y: Math.min(edge[k].y, base - r * 0.75), r });
    }
    const line = el("g", { class: "rt-crown-line" }, parent);
    const fill = el("g", { class: "rt-crown" }, parent);
    el("path", { d: dome(3) }, line);
    el("path", { d: dome(0) }, fill);
    bumps.forEach((p) => {
      el("circle", { cx: p.x, cy: p.y, r: p.r + 3 }, line);
      el("circle", { cx: p.x, cy: p.y, r: p.r }, fill);
    });
    // a few cartoon tufts inside the crown
    bumps.forEach((p, i) => {
      if (i % 3 !== 1) return;
      const tx = cx + (p.x - cx) * 0.8;
      const ty = base + (p.y - base) * 0.8;
      el("path", { class: "rt-tuft", d: `M${tx - 14},${ty} A16,16 0 0 1 ${tx + 14},${ty}` }, parent);
    });
  }

  function typeLabel(type) {
    return type === "dataset" ? "Dataset" : type === "both" ? "Dataset + method" : "Method";
  }

  // methods are leaves, datasets are fruit, and dataset + method papers are fruit with a leaf
  function drawMark(parent, x, y, ux, uy, type, color, r = 8) {
    const len = Math.hypot(ux, uy) || 1;
    const u = { x: ux / len, y: uy / len };
    if (type === "dataset" || type === "both") {
      drawFruit(parent, x, y + r / 8, r, color, type === "both");
    } else {
      el("path", { class: "rt-mark-shape", d: leafPath(x, y, u.x, u.y, (r * 10) / 7, (r * 9) / 7), fill: color, stroke: color }, parent);
    }
  }

  // an upright apple with a stem; `withLeaf` adds a leaf on the stem
  function drawFruit(parent, cx, cy, r, color, withLeaf) {
    const top = cy - r * 0.6;
    el("path", { class: "rt-stem", d: `M${cx},${top + 1} Q${cx},${top - r * 0.4} ${cx + r * 0.25},${top - r * 0.65}` }, parent);
    if (withLeaf) {
      el("path", { class: "rt-mark-shape", d: leafPath(cx + r * 0.75, top - r * 0.55, 1, -0.35, r * 0.65, r * 0.6), fill: color, stroke: color }, parent);
    }
    el(
      "path",
      {
        class: "rt-mark-shape",
        d:
          `M${cx},${top} ` +
          `C${cx + r * 0.5},${cy - r * 1.1} ${cx + r * 1.15},${cy - r * 0.6} ${cx + r},${cy + r * 0.1} ` +
          `C${cx + r * 0.9},${cy + r * 0.8} ${cx + r * 0.45},${cy + r * 1.05} ${cx},${cy + r * 0.85} ` +
          `C${cx - r * 0.45},${cy + r * 1.05} ${cx - r * 0.9},${cy + r * 0.8} ${cx - r},${cy + r * 0.1} ` +
          `C${cx - r * 1.15},${cy - r * 0.6} ${cx - r * 0.5},${cy - r * 1.1} ${cx},${top} Z`,
        fill: color,
        stroke: color,
      },
      parent
    );
    el("circle", { class: "rt-shine", cx: cx - r * 0.45, cy: cy - r * 0.2, r: r * 0.22 }, parent);
  }

  // a pointed almond leaf centered on (x, y), growing along (ux, uy)
  function leafPath(x, y, ux, uy, half = 10, width = 9) {
    const len = Math.hypot(ux, uy) || 1;
    const u = { x: ux / len, y: uy / len };
    const n = { x: -u.y, y: u.x };
    const base = { x: x - u.x * half, y: y - u.y * half };
    const tip = { x: x + u.x * half, y: y + u.y * half };
    return (
      `M${base.x},${base.y} Q${x + n.x * width},${y + n.y * width} ${tip.x},${tip.y} ` +
      `Q${x - n.x * width},${y - n.y * width} ${base.x},${base.y} Z`
    );
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
