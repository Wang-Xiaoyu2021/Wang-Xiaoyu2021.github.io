---
layout: page
title: 研究项目
active: projects
permalink: /projects/
---
{% include page-hero.html title="研究项目" subtitle="围绕人工智能辅助材料设计的前沿方向，开展理论、计算与实验相结合的系统研究。" %}

<div class="section">
  <div class="container">
    <div class="project-grid">
      {% for p in site.data.projects %}
      <article class="project-card">
        <div class="project-card-top">
          <div class="project-icon">{% include icon.html name=p.icon %}</div>
          <span class="project-status">{{ p.status_zh }}</span>
        </div>
        <h3 class="project-title">{{ p.title_zh }}</h3>
        <p class="project-desc">{{ p.desc_zh }}</p>
        <div class="project-tags">
          {% for t in p.tags %}<span class="tag">{{ t }}</span>{% endfor %}
        </div>
        {% include project-papers.html papers=p.papers lang=page.lang %}
      </article>
      {% endfor %}
    </div>
  </div>
</div>
