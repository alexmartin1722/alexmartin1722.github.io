---
layout: page
permalink: /mars/
title: MARS
display_title: <strong>M</strong>ultimodal <strong>A</strong>ugmented <strong>R</strong>easoning and <strong>S</strong>earch (MARS)
nav: true
nav_order: 5
description:
---

{% assign mars = site.data.mars %}

<div class="mars-logo">
  {% include figure.liquid path="assets/img/mars_logo.png" alt="The MARS mascot, a smiling planet Mars sitting at a computer" sizes="(min-width: 576px) 240px, 60vw" class="img-fluid rounded z-depth-1" %}
</div>

## Research Areas

{% for area in mars.areas %}

### {{ area.title }}

{{ area.body }}
{% endfor %}

## Join Us

If you're a Johns Hopkins student interested in any of these projects, send me an email. Search for **Alexander Martin** in the Hopkins Outlook directory and I'll come up. I especially love it when students bring their own ideas, so if you have something you want to work on, tell me about it!

If you're interested in working with [Ben Van Durme](https://www.cs.jhu.edu/~vandurme/), [Xiang Xiang](https://sites.google.com/view/xxiang), or [Reno Kriz](https://hltcoe.jhu.edu/researcher/reno-kriz/), feel free to email them directly too.

## People

{% if mars.collaborators.size > 0 %}

### Collaborators

<ul class="mars-people">
  {% for person in mars.collaborators %}{% include mars_person.liquid person=person %}{% endfor %}
</ul>
{% endif %}

{% if mars.students.size > 0 %}

### Students

<ul class="mars-people">
  {% for person in mars.students %}{% include mars_person.liquid person=person %}{% endfor %}
</ul>
{% endif %}

{% if mars.alumni.size > 0 %}

### Alumni

<ul class="mars-people">
  {% for person in mars.alumni %}{% include mars_person.liquid person=person %}{% endfor %}
</ul>
{% endif %}
