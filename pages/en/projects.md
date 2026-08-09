---
layout: page
title: Research
active: projects
permalink: /en/projects/
---
{% include page-hero.html title="Research Projects" subtitle="Systematic research combining theory, computation and experiment at the frontier of AI-assisted materials design." %}

<div class="section">
  <div class="container">
    <div class="project-grid">
      {% for p in site.data.projects %}
      <article class="project-card">
        <div class="project-card-top">
          <div class="project-icon">{% include icon.html name=p.icon %}</div>
          <span class="project-status">{{ p.status_en }}</span>
        </div>
        <h3 class="project-title">{{ p.title_en }}</h3>
        <p class="project-desc">{{ p.desc_en }}</p>
        <div class="project-tags">
          {% for t in p.tags_en %}<span class="tag">{{ t }}</span>{% endfor %}
        </div>
        {% include project-papers.html papers=p.papers lang=page.lang %}
      </article>
      {% endfor %}
    </div>
  </div>
</div>
