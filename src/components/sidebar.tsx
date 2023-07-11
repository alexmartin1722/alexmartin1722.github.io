"use client";
import Link from "next/link";
// import { LayoutGroup, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems = {
  "/": {
    name: "About",
  },
  "/cv": {
    name: "CV",
  },
  "/publications": {
    name: "Publications",
  },
  "/projects": {
    name: "Projects",
  },
};

export default function NavBar() {
  const pathname = usePathname();

  function isActive(yo: String) {
    if (pathname === yo) {
      return "";
    } else {
      return "text-neutral-500";
    }
  }

  return (
    <aside className="md:w-[155px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <nav className="flex overflow-hidden flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
        <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
          <Link
            className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px] ${isActive(
              "/"
            )}`}
            href="/"
          >
            About
          </Link>
          {/* <Link
            className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px] ${isActive(
              "/projects"
            )}`}
            href="/projects"
          >
            Project Pages
          </Link> */}
          <Link
            className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px] ${isActive(
              "/publications"
            )}`}
            href="/publications"
          >
            Publications
          </Link>

          <Link
            className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px] ${isActive(
              "/cv"
            )}`}
            href="CV.pdf"
            target="_blank"
          >
            CV
          </Link>
        </div>
      </nav>
    </aside>
  );
}
