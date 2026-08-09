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
      <p>ADIWANG Team is a research subgroup of Prof. Lijun Zhang's group at Jilin University, led by Dr. Xiaoyu Wang. We are living in an exciting era in which <strong>artificial intelligence is reshaping the materials R&amp;D paradigm</strong> — shifting from trial-and-error to data-, physics- and AI-driven intelligent design. This transformation brings unprecedented opportunities for discovering optoelectronic semiconductor materials, yet also poses new challenges in data quality, model interpretability and cross-disciplinary collaboration. We believe the <strong>deep integration of AI with first-principles calculations</strong> is the key to seizing these opportunities and meeting these challenges.</p>
      <p>Our research spans electronic structure calculations, defect passivation and interface engineering, photovoltaic device simulation, and materials informatics infrastructure — including the in-house JAMIP platform — with a focus on perovskite and emerging semiconductor optoelectronic materials. Our results have been published in leading journals such as Science, Nature, Nature Energy, Nature Communications, Advanced Materials and National Science Review.</p>
      <p>As group leader, Dr. Xiaoyu Wang completed his B.Eng. (Top 5%), M.Eng. and Ph.D. at Jilin University under Prof. Lijun Zhang, and is a <strong>co-first author of papers in Science (2023) and Nature (2024)</strong>. He brings hands-on experience spanning first-principles calculations, machine learning and materials-informatics platform development. Beyond solid skills in computation and AI, members gain first-hand experience in research topic selection, scientific writing and international collaboration — helping you avoid detours early in your research career.</p>
      <p>We are always looking for talented postdocs, PhD students and master students interested in computational materials science, optoelectronic materials and AI. Here you will engage with frontier topics and international collaboration platforms, and forge your own research path in the age of AI. Join us to explore AI-assisted innovation of optoelectronic materials!</p>
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
