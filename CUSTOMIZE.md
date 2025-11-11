# 作品集自定义指南

## 🎨 快速自定义

### 1. 修改个人信息

#### 导航栏品牌名称
在 `index.html` 中找到：
```html
<div class="nav-brand">我的作品集</div>
```
修改为您想要的名称。

#### 首页标题和描述
在 `index.html` 的 `#home` 部分：
```html
<h1 class="hero-title">
    <span class="gradient-text">你好，我是</span><br>
    全栈开发者
</h1>
<p class="hero-subtitle">
    专注于构建现代化的 Web 应用和 AI 驱动的解决方案
</p>
```

#### 关于我部分
在 `#about` 部分修改文本内容。

### 2. 添加/修改项目

编辑 `script.js` 文件中的 `projects` 数组：

```javascript
const projects = [
    {
        id: 1,
        title: "您的项目名称",
        description: "详细的项目描述，说明项目的功能、技术栈和亮点。",
        tags: ["React", "Python", "FastAPI"], // 技术标签
        image: "💼", // Emoji 或图片 URL
        demoUrl: "https://your-demo-url.com", // 演示链接
        codeUrl: "https://github.com/yourusername/repo" // 代码链接
    },
    // 添加更多项目...
];
```

**使用图片作为项目封面：**
```javascript
image: "https://via.placeholder.com/400x200", // 使用图片 URL
```

### 3. 修改技能标签

在 `index.html` 的 `#skills` 部分，找到各个技能分类：

```html
<div class="skill-category">
    <h3>前端开发</h3>
    <div class="skill-tags">
        <span class="skill-tag">React</span>
        <span class="skill-tag">TypeScript</span>
        <!-- 添加或删除标签 -->
    </div>
</div>
```

### 4. 更新联系方式

在 `index.html` 的 `#contact` 部分：

```html
<a href="https://github.com/yourusername" class="contact-link">
    <!-- GitHub 链接 -->
</a>
<a href="mailto:your.email@example.com" class="contact-link">
    <!-- Email 链接 -->
</a>
<a href="https://linkedin.com/in/yourusername" class="contact-link">
    <!-- LinkedIn 链接 -->
</a>
```

### 5. 修改颜色主题

在 `styles.css` 文件开头修改 CSS 变量：

```css
:root {
    --primary-color: #667eea;      /* 主色 */
    --secondary-color: #764ba2;    /* 次色 */
    --text-primary: #1a202c;       /* 主文本色 */
    --text-secondary: #4a5568;     /* 次文本色 */
    --bg-primary: #ffffff;         /* 主背景色 */
    --bg-secondary: #f7fafc;      /* 次背景色 */
}
```

**渐变颜色：**
```css
--gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### 6. 修改统计数据

在 `index.html` 的 `#about` 部分：

```html
<div class="stat-item">
    <div class="stat-number">10+</div>
    <div class="stat-label">项目</div>
</div>
```

## 🎯 高级自定义

### 添加新的部分

1. 在 `index.html` 中添加新的 `<section>`：

```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">新部分标题</h2>
        <!-- 内容 -->
    </div>
</section>
```

2. 在导航菜单中添加链接：

```html
<li><a href="#new-section">新部分</a></li>
```

3. 在 `styles.css` 中添加样式。

### 添加暗色模式

1. 在 `styles.css` 中添加暗色主题变量：

```css
[data-theme="dark"] {
    --bg-primary: #1a202c;
    --bg-secondary: #2d3748;
    --text-primary: #ffffff;
    --text-secondary: #cbd5e0;
}
```

2. 添加切换按钮和 JavaScript 逻辑。

### 添加动画效果

在 `styles.css` 中添加：

```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.element {
    animation: fadeInUp 0.6s ease-out;
}
```

### 添加博客部分

可以添加一个博客部分展示技术文章：

```html
<section id="blog" class="blog">
    <div class="container">
        <h2 class="section-title">技术文章</h2>
        <div class="blog-grid">
            <!-- 博客文章卡片 -->
        </div>
    </div>
</section>
```

### 添加简历下载

在联系部分添加：

```html
<a href="/resume.pdf" class="contact-link" download>
    <svg>...</svg>
    下载简历
</a>
```

## 📱 响应式调整

修改 `styles.css` 中的媒体查询：

```css
@media (max-width: 768px) {
    /* 移动端样式 */
}

@media (max-width: 480px) {
    /* 小屏幕样式 */
}
```

## 🔍 SEO 优化

在 `index.html` 的 `<head>` 部分添加：

```html
<meta name="description" content="您的作品集描述">
<meta name="keywords" content="关键词1, 关键词2">
<meta property="og:title" content="您的作品集">
<meta property="og:description" content="描述">
<meta property="og:image" content="预览图URL">
```

## 🎨 设计建议

1. **保持一致性**: 使用统一的颜色、字体和间距
2. **突出重点**: 使用对比色突出重要内容
3. **留白**: 适当的留白让页面更易读
4. **可读性**: 确保文字大小和对比度足够
5. **加载速度**: 优化图片和资源大小

## 📝 内容建议

- **项目描述**: 清晰说明项目解决的问题、使用的技术和取得的成果
- **技能标签**: 只列出您真正掌握的技能
- **关于我**: 简洁明了，突出您的优势和兴趣
- **联系方式**: 确保链接有效且可访问

---

**开始自定义您的作品集吧！** 🚀

