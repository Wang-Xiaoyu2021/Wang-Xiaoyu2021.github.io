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
          <p>College of Materials Science and Engineering<br>Jilin University, Changchun, China</p>
        </div>
      </div>
      <div class="contact-card">
        <div class="contact-icon">{% include icon.html name='scholar' %}</div>
        <div>
          <h3>Google Scholar</h3>
          <p><a href="{{ site.scholar_url }}" target="_blank" rel="noopener">Profile of Xiaoyu Wang</a></p>
        </div>
      </div>
      <div class="contact-card">
        <div class="contact-icon">{% include icon.html name='link' %}</div>
        <div>
          <h3>School Website</h3>
          <p><a href="https://dmse.jlu.edu.cn/" target="_blank" rel="noopener">College of Materials Science and Engineering, Jilin University</a></p>
        </div>
      </div>
      <div class="contact-card">
        <div class="contact-icon">{% include icon.html name='brain' %}</div>
        <div>
          <h3>Prof. Lijun Zhang</h3>
          <p><a href="https://dmse.jlu.edu.cn/info/1083/5555.htm" target="_blank" rel="noopener">Faculty homepage of Prof. Lijun Zhang</a></p>
        </div>
      </div>
      <div class="contact-card">
        <div class="contact-icon">{% include icon.html name='cpu' %}</div>
        <div>
          <h3>JAMIP Platform</h3>
          <p><a href="https://www.jamip-code.com/" target="_blank" rel="noopener">JAMIP · Materials Informatics Platform</a></p>
        </div>
      </div>
    </div>

    <div class="prose">
      <p>For inquiries about openings, academic collaboration or media interviews, please email the group. We typically respond within 1&ndash;2 business days.</p>
    </div>
  </div>
</div>
