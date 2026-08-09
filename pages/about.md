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
      <p>ADIWANG Team 是隶属于吉林大学张立军教授团队的研究小组，由王啸宇博士担任小组组长。我们正处于一个激动人心的时代——<strong>人工智能正在深刻重塑材料研发范式</strong>：从依赖经验与试错的传统模式，转向“数据 + 物理 + AI”驱动的智能设计。这既为光电半导体材料带来了前所未有的发现机遇，也对数据质量、模型可解释性与跨学科协作提出了全新挑战。我们坚信，<strong>AI 与第一性原理计算的深度融合</strong>，是抓住时代机遇、直面挑战的关键路径。</p>
      <p>小组围绕钙钛矿及新型半导体光电材料，开展电子结构计算、缺陷钝化与界面工程、光伏器件模拟以及材料信息学基础设施建设等研究，并深度参与自研 JAMIP 材料信息学平台。相关成果发表于 Science、Nature、Nature Energy、Nature Communications、Advanced Materials、National Science Review 等国际权威期刊。</p>
      <p>作为小组带头人，王啸宇博士先后在吉林大学完成本科（专业前 5%）、硕士与博士阶段学习（师从张立军教授），并作为<strong>共同第一作者在 Science（2023）与 Nature（2024）</strong>发表高水平论文，拥有从第一性原理计算、机器学习到材料信息学平台开发的完整一线经验。在这里，你不仅能掌握扎实的计算与 AI 方法，更能获得科研选题、论文写作与国际合作的第一手经验，在科研起步阶段少走弯路。</p>
      <p>小组长期招募对计算材料学、光电材料与人工智能交叉方向感兴趣的博士后、博士与硕士研究生。在这里，你将接触前沿课题与国际合作平台，在 AI 时代的浪潮中找到属于自己的科研方向与成长路径。欢迎有志之士加入我们，共同探索人工智能辅助的光电材料创新之路！</p>
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
