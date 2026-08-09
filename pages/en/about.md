---
layout: page
title: About
active: about
permalink: /en/about/
---
{% assign ui = site.data.ui[page.lang] %}
{% include page-hero.html title="About Us" subtitle="ADIWANG Team — a research subgroup of Prof. Lijun Zhang's group at Jilin University, focusing on AI-assisted design and innovation of optoelectronic materials." %}

<div class="section section-alt">
  <div class="container">
    <div class="section-head">
      <h2 class="section-title">Who We Are</h2>
    </div>
    <div class="prose">
      <p>ADIWANG Team is a research subgroup affiliated with Prof. Lijun Zhang's group at Jilin University, led by Dr. Xiaoyu Wang. We focus on combining <strong>first-principles calculations with artificial intelligence</strong> for the design, discovery and optimization of optoelectronic semiconductor materials.</p>
      <p>Our research spans electronic structure calculations, defect passivation and interface engineering, photovoltaic device simulation, and materials informatics infrastructure, with a focus on perovskite and emerging semiconductor optoelectronic materials. Our results have been published in leading journals such as Science, Nature, Nature Energy, Nature Communications, Advanced Materials and National Science Review.</p>
      <p>We are always looking for talented postdocs, PhD students and master students interested in computational materials science, optoelectronic materials and AI. Join us to explore AI-assisted innovation of optoelectronic materials!</p>
    </div>

    <div class="stats-row">
      <div class="stat-card">
        <div class="stat-num"><span>23</span></div>
        <div class="stat-label">Publications</div>
      </div>
      <div class="stat-card">
        <div class="stat-num"><span>2574</span>+</div>
        <div class="stat-label">Total Citations</div>
      </div>
      <div class="stat-card">
        <div class="stat-num"><span>14</span></div>
        <div class="stat-label">h-index</div>
      </div>
      <div class="stat-card">
        <div class="stat-num"><span>1</span></div>
        <div class="stat-label">Nature Papers</div>
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
