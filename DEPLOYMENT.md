# 作品集部署指南

## 🚀 GitHub Pages 部署步骤

### 步骤 1: 准备仓库

1. 在 GitHub 上创建一个新仓库（或使用现有仓库）
2. 将作品集文件推送到仓库

```bash
git init
git add .
git commit -m "Initial commit: Add portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

### 步骤 2: 启用 GitHub Pages

#### 方法 A: 使用 GitHub Actions (推荐)

1. 仓库已包含 `.github/workflows/deploy-portfolio.yml` 工作流文件
2. 在仓库设置中：
   - 进入 **Settings** → **Pages**
   - 在 **Source** 下选择 **GitHub Actions**
   - 保存设置

3. 每次推送到 `main` 分支时，工作流会自动部署作品集

#### 方法 B: 使用 gh-pages 分支

1. 在仓库设置中：
   - 进入 **Settings** → **Pages**
   - 在 **Source** 下选择 **Deploy from a branch**
   - 选择分支: `gh-pages`
   - 选择文件夹: `/ (root)`
   - 点击 **Save**

2. 使用以下命令部署：

```bash
# 安装 gh-pages (如果未安装)
npm install -g gh-pages

# 部署
cd portfolio
gh-pages -d . -t true
```

#### 方法 C: 手动设置 Pages 源

1. 在仓库设置中：
   - 进入 **Settings** → **Pages**
   - 在 **Source** 下选择分支（如 `main`）
   - 选择文件夹: `/portfolio`
   - 点击 **Save**

2. 访问: `https://yourusername.github.io/repository-name/`

### 步骤 3: 自定义域名 (可选)

1. 在 `portfolio` 文件夹中创建 `CNAME` 文件
2. 添加您的域名（如 `portfolio.yourdomain.com`）
3. 在您的 DNS 提供商处添加 CNAME 记录
4. 在 GitHub Pages 设置中配置自定义域名

## 🔧 本地测试

在部署前，建议先在本地测试：

```bash
# 进入作品集目录
cd portfolio

# 使用 Python 启动本地服务器
python -m http.server 8000

# 或使用 Node.js
npx http-server -p 8000

# 访问 http://localhost:8000
```

## 📝 更新内容

### 更新项目列表

1. 编辑 `portfolio/script.js` 中的 `projects` 数组
2. 提交更改：

```bash
git add portfolio/script.js
git commit -m "Update projects"
git push
```

### 更新个人信息

1. 编辑 `portfolio/index.html`
2. 提交并推送更改

## 🐛 故障排除

### 页面无法访问

- 检查 GitHub Pages 是否已启用
- 确认文件路径正确
- 查看 GitHub Actions 日志（如果使用 Actions）

### 样式未加载

- 确认 `styles.css` 文件路径正确
- 检查浏览器控制台是否有错误
- 确认文件已提交到仓库

### 图片未显示

- 确认图片路径正确
- 检查图片文件是否已提交
- 考虑使用绝对 URL 或 GitHub 的 raw 链接

## 📊 性能优化

1. **压缩图片**: 使用工具压缩图片大小
2. **使用 CDN**: 考虑使用 CDN 加载外部资源
3. **延迟加载**: 为图片添加懒加载
4. **缓存策略**: 配置适当的缓存头

## 🔒 安全建议

- 不要在代码中硬编码敏感信息
- 使用环境变量存储 API 密钥（如果需要）
- 定期更新依赖项

## 📚 相关资源

- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [HTML/CSS 最佳实践](https://developer.mozilla.org/en-US/docs/Web)

---

**部署成功后，您的作品集将在几分钟内上线！** 🎉

