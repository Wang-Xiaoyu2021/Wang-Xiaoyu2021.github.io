---
layout: page
title: 关于我们
active: about
permalink: /about/
---
{% assign ui = site.data.ui[page.lang] %}
{% include page-hero.html title="关于我们" subtitle="ADIWANG Team —— 吉林大学张立军教授团队下属研究小组，聚焦人工智能辅助的光电材料设计与创新。" %}

<div class="section section-alt">
  <div class="container">
    <div class="section-head">
      <h2 class="section-title">课题组简介</h2>
    </div>
    <div class="prose">
      <p>ADIWANG Team 是隶属于吉林大学张立军教授团队的研究小组，由王啸宇博士担任小组组长。我们专注于将<strong>第一性原理计算与人工智能方法</strong>相结合，应用于光电半导体材料的设计、发现与优化。</p>
      <p>小组围绕钙钛矿及新型半导体光电材料，开展电子结构计算、缺陷钝化与界面工程、光伏器件模拟以及材料信息学基础设施建设等研究。研究成果发表于 Science、Nature、Nature Energy、Nature Communications、Advanced Materials、National Science Review 等国际权威期刊。</p>
      <p>小组长期招募对计算材料学、光电材料与人工智能交叉方向感兴趣的博士后、博士与硕士研究生，欢迎有志之士加入我们，共同探索人工智能辅助的光电材料创新之路。</p>
    </div>

    <div class="stats-row">
      <div class="stat-card">
        <div class="stat-num"><span>23</span></div>
        <div class="stat-label">发表论文</div>
      </div>
      <div class="stat-card">
        <div class="stat-num"><span>2574</span>+</div>
        <div class="stat-label">总被引</div>
      </div>
      <div class="stat-card">
        <div class="stat-num"><span>14</span></div>
        <div class="stat-label">h 指数</div>
      </div>
      <div class="stat-card">
        <div class="stat-num"><span>1</span></div>
        <div class="stat-label">Nature 论文</div>
      </div>
    </div>
  </div>
</div>

{% include cv.html lang=page.lang %}

<div class="section about-section">
  <div class="container">
    <div class="section-head">
      <h2 class="section-title">{{ ui.home.section_directions_title }}</h2>
      <p class="section-desc">{{ ui.home.section_directions_desc }}</p>
    </div>
    <div class="direction-grid">
      {% for d in site.data.directions %}
      <div class="direction-card">
        <div class="direction-icon">{% include icon.html name=d.icon %}</div>
        <h3>{{ d.title_zh }}</h3>
        <p>{{ d.desc_zh }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</div>
