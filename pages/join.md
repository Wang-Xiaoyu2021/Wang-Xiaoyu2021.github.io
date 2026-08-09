---
layout: page
title: 加入我们
active: join
permalink: /join/
---
{% assign ui = site.data.ui[page.lang] %}
{% include page-hero.html title=ui.join.title subtitle="欢迎对计算材料学、光电材料与人工智能交叉方向感兴趣的优秀人才加入 ADIWANG Team。" %}

<div class="section">
  <div class="container">
    <div class="join-grid">
      <div class="join-card">
        <h3><span class="sec-icon">{% include icon.html name='brain' %}</span>博士 / 硕士研究生</h3>
        <p>课题组长期招收对以下方向感兴趣的硕士与博士研究生：</p>
        <ul>
          <li>机器学习与材料设计（图神经网络、生成模型）</li>
          <li>高通量计算与材料数据库建设</li>
          <li>大语言模型在材料科学中的应用</li>
          <li>计算与实验相结合的材料优化</li>
        </ul>
        <p>要求：具有材料、物理、化学、计算机或相关专业背景，具备良好的数学基础与编程能力，英语读写流利。</p>
      </div>

      <div class="join-card">
        <h3><span class="sec-icon">{% include icon.html name='flask' %}</span>博士后 / 研究助理</h3>
        <p>课题组常年招聘博士后与研究助理，开展前沿交叉研究：</p>
        <ul>
          <li>在相关领域取得博士学位，科研成果突出</li>
          <li>熟悉机器学习方法或第一性原理计算者优先</li>
          <li>具有独立开展科研与撰写论文的能力</li>
          <li>待遇从优，支持申请各类人才项目</li>
        </ul>
        <p>有意者请将个人简历、代表性论文发送至课题组邮箱。</p>
      </div>
    </div>

    <div class="join-note">
      <strong>申请方式：</strong>请将个人简历与成绩单发送至
      <a href="mailto:{{ site.email }}">{{ site.email }}</a>，
      邮件主题请注明「岗位 + 姓名」（如「博士申请 - 张三」）。我们会在收到邮件后尽快回复。
    </div>
  </div>
</div>
