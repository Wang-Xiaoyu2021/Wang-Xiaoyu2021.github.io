---
layout: page
title: 关于我们
active: about
permalink: /about/
---
{% assign ui = site.data.ui[page.lang] %}
{% include page-hero.html title="关于我们" subtitle="WANG group for AI-assisted Materials Design & Innovation —— 面向人工智能辅助的材料设计与创新研究组。" %}

<div class="section section-alt">
  <div class="container">
    <div class="section-head">
      <h2 class="section-title">课题组简介</h2>
    </div>
    <div class="prose">
      <p>WANG 课题组依托于某大学材料科学与工程学院，专注于将<strong>人工智能与数据驱动方法</strong>应用于材料的设计、发现与优化。我们面向能源、催化与先进制造等重大需求，围绕机器学习、高通量计算与自动化实验三个维度，构建「计算-数据-实验」一体化的材料研发新范式。</p>
      <p>课题组在材料基因组、机器学习势函数、生成式材料设计、大语言模型材料应用等方向开展了系统研究，研究成果发表于 Nature Communications、JACS、Advanced Materials 等国际权威期刊。我们重视交叉融合与团队协作，与国内外多家高校、科研院所及企业保持着紧密的合作关系。</p>
      <p>课题组长期招募对人工智能与材料科学交叉方向感兴趣的博士后、博士与硕士研究生，欢迎有志之士加入我们，共同探索 AI 驱动的材料创新之路。</p>
    </div>

    <div class="stats-row">
      <div class="stat-card">
        <div class="stat-num"><span>20</span>+</div>
        <div class="stat-label">发表论文</div>
      </div>
      <div class="stat-card">
        <div class="stat-num"><span>8</span>+</div>
        <div class="stat-label">在研项目</div>
      </div>
      <div class="stat-card">
        <div class="stat-num"><span>6</span></div>
        <div class="stat-label">团队成员</div>
      </div>
      <div class="stat-card">
        <div class="stat-num"><span>5</span>+</div>
        <div class="stat-label">合作单位</div>
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
        <h3>{{ d.title_zh }}</h3>
        <p>{{ d.desc_zh }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</div>
