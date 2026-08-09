---
layout: page
title: Contact
active: contact
permalink: /en/contact/
---
{% assign ui = site.data.ui[page.lang] %}
{% include page-hero.html title=ui.contact.title subtitle="Feel free to reach out to us through the following channels." %}

<div class="section">
  <div class="container">
    <div class="contact-grid">
      <div class="contact-card">
        <div class="contact-icon">{% include icon.html name='mail' %}</div>
        <div>
          <h3>Email</h3>
          <p><a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
        </div>
      </div>
      <div class="contact-card">
        <div class="contact-icon">{% include icon.html name='pin' %}</div>
        <div>
          <h3>Address</h3>
          <p>School of Materials Science and Engineering<br>Your University, City, China</p>
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
      <p>For inquiries about openings, academic collaboration or media interviews, please email the group. We typically respond within 1&ndash;2 business days.</p>
    </div>
  </div>
</div>
