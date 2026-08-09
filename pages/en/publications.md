---
layout: page
title: Publications
active: publications
permalink: /en/publications/
---
{% assign ui = site.data.ui[page.lang] %}
{% include page-hero.html title=ui.publications.title subtitle=ui.publications.subtitle %}

<div class="section">
  <div class="container">
    {% assign years = site.data.publications | map: "year" | uniq | sort | reverse %}

    <div class="pub-filter">
      <button class="pub-filter-btn active" data-filter="all">{{ ui.publications.all_years }}</button>
      {% for y in years %}
      <button class="pub-filter-btn" data-filter="{{ y }}">{{ y }}</button>
      {% endfor %}
    </div>

    {% for y in years %}
    <h3 class="pub-year" data-year="{{ y }}">{{ y }}</h3>
    {% assign pubs = site.data.publications | where: "year", y %}
    {% for p in pubs %}
    <article class="pub-item" data-year="{{ y }}">
      <div class="pub-index">{{ forloop.index }}</div>
      <div class="pub-body">
        <h4 class="pub-title">{{ p.title }}</h4>
        <p class="pub-authors">{{ p.authors }}</p>
        <p class="pub-venue">{{ p.venue }}</p>
        <div class="pub-meta">
          <span class="pub-type {% if p.type == 'journal' %}journal{% endif %}">{{ p.type }}</span>
          {% if p.citations and p.citations > 0 %}
          <span class="pub-citations" title="{{ ui.publications.citations }}">{{ ui.publications.citations }}: {{ p.citations }}</span>
          {% endif %}
          {% if p.doi and p.doi != "" %}<span class="pub-doi">DOI: {{ p.doi }}</span>{% endif %}
          {% if p.url %}
          <a class="pub-link" href="{{ p.url }}" target="_blank" rel="noopener">
            {% include icon.html name='link' %}{{ ui.publications.btn_view }}
          </a>
          {% endif %}
        </div>
      </div>
    </article>
    {% endfor %}
    {% endfor %}
  </div>
</div>
