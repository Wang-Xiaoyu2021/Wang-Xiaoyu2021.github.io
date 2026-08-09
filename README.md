# ADIWANG Team 研究小组官网

人工智能辅助设计与创新小组（AI-assisted Design & Innovation，缩写 **ADIWANG Team**），
吉林大学张立军教授团队下属研究小组。官网基于 **Jekyll** 构建，兼容 GitHub Pages 原生部署，支持**中英双语**。

- 🌐 部署地址：<https://wang-xiaoyu2021.github.io/>
- 📚 Google Scholar：<https://scholar.google.com.hk/citations?user=c3w343cAAAAJ&hl=zh-CN>
- 🧪 技术栈：Jekyll · HTML/CSS · 少量原生 JavaScript

## 目录结构

```
.
├── _config.yml          # 站点配置（标题、URL、语言默认值）
├── Gemfile              # 依赖（github-pages）
├── _data/               # 站点内容数据（核心维护位置）
│   ├── ui.yml           # 界面文案（中/英）
│   ├── nav.yml          # 导航菜单
│   ├── directions.yml   # 研究方向
│   ├── projects.yml     # 研究项目
│   ├── members.yml      # 团队成员
│   ├── publications.yml # 发表论文
│   └── news.yml         # 新闻动态
├── _layouts/            # 页面布局
├── _includes/           # 组件（头部、页脚、图标、成员卡片等）
├── pages/               # 中文页面 (/about/ 等)
├── pages/en/            # 英文页面 (/en/about/ 等)
├── en/                  # 英文首页 (/en/)
├── index.md             # 中文首页 (/)
└── assets/              # 样式、脚本、图片
```

## 日常维护

大部分内容都在 `_data/` 下的 YAML 文件中，修改后提交即可自动更新：

| 想改什么 | 编辑哪个文件 |
| --- | --- |
| 团队信息 | `_data/members.yml` |
| 论文列表 | `_data/publications.yml` |
| 研究项目 | `_data/projects.yml` |
| 新闻动态 | `_data/news.yml` |
| 研究方向 | `_data/directions.yml` |
| 导航菜单 | `_data/nav.yml` |
| 界面文字 | `_data/ui.yml` |

> 成员照片：将真实照片放入 `assets/images/avatars/`，并在 `members.yml` 中把 `photo` 指向该文件。

## 本地预览

需要 Ruby ≥ 3.0。macOS 自带的系统 Ruby 版本较旧（如 2.6），建议通过 Homebrew 安装新版：

```bash
# 安装新版 Ruby（如已安装可跳过）
brew install ruby

# 将新版 Ruby 加入 PATH（仅当前终端生效）
export PATH="/opt/homebrew/opt/ruby/bin:/opt/homebrew/lib/ruby/gems/4.0.0/bin:$PATH"
```

首次安装依赖：

```bash
bundle install
```

> 说明：本项目使用 `github-pages` gem，其配置与 GitHub Pages 线上环境一致（safe 模式）。
> 在 Ruby ≥ 3.4 上，Jekyll 3.9 / Liquid 4.0.3 需要预先加载 `_plugins/ruby3_compat.rb` 兼容补丁。
> 因此请使用 `RUBYOPT` 启动本地服务：

```bash
# 启动本地服务（默认 http://localhost:4000）
RUBYOPT="-r$PWD/_plugins/ruby3_compat" jekyll serve --livereload
```

## 部署到 GitHub Pages

### 方式一：用户主页（username.github.io，推荐用于研究组官网）

1. 新建仓库 `wang-xiaoyu2021.github.io`（Public）。
2. 将本项目所有文件推送到该仓库的 `main` 分支：

```bash
git init
git add .
git commit -m "init lab website"
git remote add origin https://github.com/wang-xiaoyu2021/wang-xiaoyu2021.github.io.git
git push -u origin main
```

3. 仓库 **Settings → Pages**，Source 选择 `Deploy from a branch`，分支 `main`，目录 `/ (root)`，保存。
4. 等待 1–2 分钟构建完成，访问 <https://wang-xiaoyu2021.github.io/>。

### 方式二：项目仓库（username.github.io/repo）

- 将 `_config.yml` 中的 `baseurl` 改为 `/<repo>`，并保持 `url` 不变。
- 其余步骤同上。

## 许可证

内容版权归 WANG 课题组所有；代码部分基于 MIT 许可，可自由修改。
