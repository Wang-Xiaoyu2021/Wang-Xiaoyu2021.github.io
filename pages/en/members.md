---
layout: page
title: Team
active: members
permalink: /en/members/
---
{% assign ui = site.data.ui[page.lang] %}
{% include page-hero.html title=ui.members.title subtitle=ui.members.subtitle %}

<div class="section">
  <div class="container">
    {% assign groups = "pi|postdoc|phd|ms|ra|alumni" | split: "|" %}
    {% for g in groups %}
      {% assign members = site.data.members | where: "role", g %}
      {% if members.size > 0 %}
      <div class="content-section">
        {% if g == 'pi' %}<h2><span class="sec-icon">{% include icon.html name='crystal' %}</span>{{ ui.members.group_pi }}</h2>
        {% elsif g == 'postdoc' %}<h2><span class="sec-icon">{% include icon.html name='flask' %}</span>{{ ui.members.group_postdoc }}</h2>
        {% elsif g == 'phd' %}<h2><span class="sec-icon">{% include icon.html name='brain' %}</span>{{ ui.members.group_phd }}</h2>
        {% elsif g == 'ms' %}<h2><span class="sec-icon">{% include icon.html name='graph' %}</span>{{ ui.members.group_ms }}</h2>
        {% elsif g == 'ra' %}<h2><span class="sec-icon">{% include icon.html name='cpu' %}</span>{{ ui.members.group_ra }}</h2>
        {% else %}<h2><span class="sec-icon">{% include icon.html name='link' %}</span>{{ ui.members.group_alumni }}</h2>{% endif %}

        <div class="member-grid">
          {% for m in members %}
            {% include member-card.html member=m lang=page.lang %}
          {% endfor %}
        </div>
      </div>
      {% endif %}
    {% endfor %}
  </div>
</div>
