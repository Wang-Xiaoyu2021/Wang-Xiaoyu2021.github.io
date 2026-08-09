---
layout: page
title: 联系方式
active: contact
permalink: /contact/
---
{% assign ui = site.data.ui[page.lang] %}
{% include page-hero.html title=ui.contact.title subtitle="欢迎通过以下方式与我们取得联系。" %}

<div class="section">
  <div class="container">
    <div class="contact-grid">
      <div class="contact-card">
        <div class="contact-icon">{% include icon.html name='mail' %}</div>
        <div>
          <h3>电子邮箱</h3>
          <p><a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
        </div>
      </div>
      <div class="contact-card">
        <div class="contact-icon">{% include icon.html name='pin' %}</div>
        <div>
          <h3>地址</h3>
          <p>中国 · 某市 · 某大学<br>材料科学与工程学院</p>
        </div>
      </div>
      <div class="contact-card">
        <div class="contact-icon">{% include icon.html name='link' %}</div>
        <div>
          <h3>GitHub</h3>
          <p><a href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener">@{{ site.github_username }}</a></p>
        </div>
      </div>
    </div>

    <div class="prose">
      <p>如需了解招生信息、学术合作或媒体采访，欢迎发送邮件至课题组邮箱，我们会在 1-2 个工作日内回复。</p>
    </div>
  </div>
</div>
