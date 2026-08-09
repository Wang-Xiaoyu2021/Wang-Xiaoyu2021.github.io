---
layout: page
title: Join Us
active: join
permalink: /en/join/
---
{% assign ui = site.data.ui[page.lang] %}
{% include page-hero.html title=ui.join.title subtitle="We welcome talented people interested in computational materials science, optoelectronic materials and AI to join ADIWANG Team." %}

<div class="section">
  <div class="container">
    <div class="join-grid">
      <div class="join-card">
        <h3><span class="sec-icon">{% include icon.html name='brain' %}</span>PhD / Master Positions</h3>
        <p>We recruit graduate students in the following directions:</p>
        <ul>
          <li>Machine learning for materials (graph neural networks, generative models)</li>
          <li>High-throughput computation and materials database development</li>
          <li>Large language models for materials science</li>
          <li>Combined computational–experimental materials optimization</li>
        </ul>
        <p>Requirements: background in materials, physics, chemistry, computer science or related fields; solid mathematics and programming skills; good command of English.</p>
      </div>

      <div class="join-card">
        <h3><span class="sec-icon">{% include icon.html name='flask' %}</span>Postdoc / Research Assistant</h3>
        <p>We welcome applications for postdoctoral fellows and research assistants:</p>
        <ul>
          <li>PhD degree in a related field with a strong publication record</li>
          <li>Experience with machine learning or first-principles calculations is a plus</li>
          <li>Ability to conduct independent research and write papers</li>
          <li>Competitive salary and support for talent programs</li>
        </ul>
        <p>Please send your CV and selected publications to the group email.</p>
      </div>
    </div>

    <div class="join-note">
      <strong>How to apply:</strong> Please send your CV and transcripts to
      <a href="mailto:{{ site.email }}">{{ site.email }}</a> with the subject
      "Position + Name" (e.g., "PhD Application - Jane Doe"). We will reply as soon as possible.
    </div>
  </div>
</div>
