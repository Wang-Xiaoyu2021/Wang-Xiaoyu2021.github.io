---
layout: page
title: About
active: about
permalink: /en/about/
---
{% assign ui = site.data.ui[page.lang] %}
{% include page-hero.html title="About Us" subtitle="WANG group for AI-assisted Materials Design & Innovation." %}

<div class="section section-alt">
  <div class="container">
    <div class="section-head">
      <h2 class="section-title">Who We Are</h2>
    </div>
    <div class="prose">
      <p>The WANG group, hosted by the School of Materials Science and Engineering, focuses on applying <strong>artificial intelligence and data-driven methods</strong> to the design, discovery and optimization of materials. Addressing grand challenges in energy, catalysis and advanced manufacturing, we build a "computation–data–experiment" paradigm for accelerated materials research across machine learning, high-throughput computation and automated experiments.</p>
      <p>Our research spans materials genomics, machine-learned interatomic potentials, generative materials design and LLM-powered materials knowledge systems. Our work has been published in leading journals such as Nature Communications, JACS and Advanced Materials. We highly value interdisciplinary collaboration and maintain close partnerships with universities, institutes and industry at home and abroad.</p>
      <p>We are always looking for talented postdocs, PhD students and master students interested in the intersection of AI and materials science. Join us to explore AI-driven materials innovation!</p>
    </div>

    <div class="stats-row">
      <div class="stat-card">
        <div class="stat-num"><span>20</span>+</div>
        <div class="stat-label">Publications</div>
      </div>
      <div class="stat-card">
        <div class="stat-num"><span>8</span>+</div>
        <div class="stat-label">Active Projects</div>
      </div>
      <div class="stat-card">
        <div class="stat-num"><span>6</span></div>
        <div class="stat-label">Team Members</div>
      </div>
      <div class="stat-card">
        <div class="stat-num"><span>5</span>+</div>
        <div class="stat-label">Partners</div>
      </div>
    </div>
  </div>
</div>

<div class="section">
  <div class="container">
    <div class="section-head">
      <h2 class="section-title">{{ ui.home.section_directions_title }}</h2>
      <p class="section-desc">{{ ui.home.section_directions_desc }}</p>
    </div>
    <div class="direction-grid">
      {% for d in site.data.directions %}
      <div class="direction-card">
        <div class="direction-icon">{% include icon.html name=d.icon %}</div>
        <h3>{{ d.title_en }}</h3>
        <p>{{ d.desc_en }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</div>
