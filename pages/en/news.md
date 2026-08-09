---
layout: page
title: News
active: news
permalink: /en/news/
---
{% assign ui = site.data.ui[page.lang] %}
{% include page-hero.html title=ui.news.title subtitle=ui.news.subtitle %}

<div class="section">
  <div class="container">
    {% assign items = site.data.news | sort: "date" | reverse %}
    {% if items.size == 0 %}
      <p>{{ ui.news.empty }}</p>
    {% else %}
    <div class="news-list">
      {% for n in items %}
      <article class="news-item">
        <time class="news-date" datetime="{{ n.date }}">{{ n.date | date: "%Y-%m-%d" }}</time>
        <div class="news-body">
          <span class="news-tag">{{ n.tag_en }}</span>
          <h3 class="news-title">{{ n.title_en }}</h3>
          <p class="news-excerpt">{{ n.content_en | newline_to_br }}</p>
        </div>
      </article>
      {% endfor %}
    </div>
    {% endif %}
  </div>
</div>
