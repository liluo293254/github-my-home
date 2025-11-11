# 个人作品集 Portfolio

一个现代化的个人作品集网站，展示我的项目、技能和经验。

## ✨ 特性

- 🎨 现代化设计，响应式布局
- 🚀 快速加载，优化性能
- 📱 移动端友好
- 🎯 清晰的项目展示
- 💼 技能标签和分类
- 📧 联系方式集成

## 🚀 快速开始

### 本地预览

1. 克隆或下载此仓库
2. 直接在浏览器中打开 `index.html`
3. 或使用本地服务器：

```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js (需要安装 http-server)
npx http-server -p 8000

# 使用 PHP
php -S localhost:8000
```

然后访问 http://localhost:8000

## 📝 自定义内容

### 修改个人信息

编辑 `index.html` 中的以下部分：

- **导航栏品牌**: 修改 `.nav-brand` 中的文本
- **首页标题**: 修改 `.hero-title` 中的内容
- **关于我**: 修改 `#about` 部分的内容
- **联系方式**: 更新 `#contact` 部分的链接

### 添加/修改项目

编辑 `script.js` 中的 `projects` 数组：

```javascript
const projects = [
    {
        id: 1,
        title: "项目名称",
        description: "项目描述",
        tags: ["标签1", "标签2"],
        image: "🎨", // 可以使用 emoji 或图片 URL
        demoUrl: "https://demo-url.com",
        codeUrl: "https://github.com/username/repo"
    },
    // 添加更多项目...
];
```

### 修改技能标签

编辑 `index.html` 中 `#skills` 部分的技能标签。

### 修改颜色主题

编辑 `styles.css` 中的 CSS 变量：

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    /* 修改其他颜色变量... */
}
```

## 🌐 部署到 GitHub Pages

### 方法 1: 使用 GitHub Actions (推荐)

1. 在仓库根目录创建 `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./portfolio
```

2. 在仓库设置中启用 GitHub Pages，选择 "GitHub Actions" 作为源

### 方法 2: 手动部署

1. 将 `portfolio` 文件夹的内容推送到 GitHub 仓库
2. 在仓库设置中：
   - 进入 "Pages" 设置
   - 选择源分支（通常是 `main`）
   - 选择 `/portfolio` 作为根目录
   - 保存

3. 访问 `https://yourusername.github.io/repository-name/`

### 方法 3: 使用 gh-pages 分支

```bash
# 安装 gh-pages
npm install -g gh-pages

# 部署
cd portfolio
gh-pages -d . -t true
```

## 📁 项目结构

```
portfolio/
├── index.html          # 主 HTML 文件
├── styles.css          # 样式文件
├── script.js           # JavaScript 逻辑
└── README.md           # 本文件
```

## 🎨 自定义建议

- **添加图片**: 在 `project.image` 中使用图片 URL 而不是 emoji
- **添加动画**: 可以在 `styles.css` 中添加更多 CSS 动画
- **添加博客**: 可以添加一个博客部分展示技术文章
- **添加简历下载**: 在联系部分添加简历 PDF 下载链接
- **添加暗色模式**: 实现主题切换功能

## 📄 许可证

MIT License - 可自由使用和修改

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**享受展示您的作品！** 🎉

