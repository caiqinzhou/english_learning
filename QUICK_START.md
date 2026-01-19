# 🚀 快速开始指南

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

## 构建静态站点

```bash
# 构建生产版本
npm run build

# 测试构建结果
cd out && python3 -m http.server 8080
```

## 部署到 GitHub Pages

### 步骤 1：创建 GitHub 仓库

仓库名：`english_learning`（必须与配置一致）

### 步骤 2：推送代码

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/english_learning.git
git push -u origin main
```

### 步骤 3：配置 GitHub Pages

1. 仓库 → Settings → Pages
2. Source: **GitHub Actions**
3. Settings → Actions → General
4. Workflow permissions: **Read and write permissions**

### 步骤 4：等待部署完成

查看 Actions 标签页，等待绿色 ✓

### 步骤 5：访问网站

```
https://YOUR_USERNAME.github.io/english_learning/
```

## 📝 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run lint` | 代码检查 |

## 🔧 修改仓库名

如果你的仓库名不是 `english_learning`，修改 `next.config.js`：

```javascript
basePath: '/你的仓库名',
assetPrefix: '/你的仓库名',
```

## 📚 详细文档

- [DEPLOYMENT.md](./DEPLOYMENT.md) - 完整部署指南
- [README.md](./README.md) - 项目说明
- [GITHUB_PAGES_SUMMARY.md](./GITHUB_PAGES_SUMMARY.md) - 部署总结

## 🐛 问题排查

### 构建失败

```bash
# 检查 TypeScript 错误
npm run lint

# 清理重建
rm -rf .next out node_modules
npm install
npm run build
```

### 页面 404

确保 `basePath` 与仓库名一致。

### CSS 丢失

检查 `.nojekyll` 文件是否存在于 `out` 目录。

## 💡 提示

- 每次 push 到 main 分支会自动部署
- 部署需要 2-3 分钟
- 查看 Actions 页面了解部署状态
