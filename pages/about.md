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
      <p>ADIWANG Team 隶属于吉林大学张立军教授团队，由王啸宇博士担任小组组长。身处<strong>人工智能重塑材料研发范式</strong>的时代，我们以 <strong>“数据 + 物理 + AI”</strong> 驱动的智能设计为核心，将第一性原理计算与机器学习深度融合，面向钙钛矿等新型半导体光电材料开展电子结构、缺陷钝化与界面工程、器件模拟与材料信息学平台（JAMIP）研究，成果发表于 Science、Nature、Nature Energy 等国际权威期刊。</p>
      <p>作为带头人，王啸宇博士在吉林大学完成本科（专业前 5%）至博士学业（师从张立军教授），是 <strong>Science（2023）与 Nature（2024）共同第一作者</strong>，并深度参与 JAMIP 平台研发。在这里，你将系统掌握计算与 AI 方法，获得科研选题、论文写作与国际合作的一手经验，少走弯路。我们长期招募博士后、博士与硕士，欢迎有志于计算材料与光电材料创新的你加入，共迎 AI 时代的机遇与挑战。</p>
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
        <h3>{{ d.title_zh }}</h3>
        <p>{{ d.desc_zh }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</div>
