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
      <p>ADIWANG Team is a research subgroup of Prof. Lijun Zhang's group at Jilin University, led by Dr. Xiaoyu Wang. In an era when <strong>AI is reshaping the materials R&amp;D paradigm</strong>, we combine first-principles calculations with machine learning under a <strong>"data + physics + AI"</strong> philosophy to design and optimize optoelectronic semiconductors — from electronic structure and defect/interface engineering to device simulation and the in-house JAMIP materials-informatics platform. Our results appear in leading journals such as Science, Nature and Nature Energy.</p>
      <p>As group leader, Dr. Xiaoyu Wang completed his studies at Jilin University (Top 5%) under Prof. Lijun Zhang and is a <strong>co-first author of papers in Science (2023) and Nature (2024)</strong>, with deep involvement in the JAMIP platform. Members gain solid skills in computation and AI, plus first-hand experience in research topic selection, scientific writing and international collaboration. We welcome postdocs, PhD and master students passionate about computational and optoelectronic materials — join us to seize the opportunities of the AI era.</p>
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

{% include cv.html lang=page.lang %}

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
