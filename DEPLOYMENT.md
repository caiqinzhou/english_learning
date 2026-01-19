# 部署到 GitHub Pages

本文档说明如何将儿童英文字母学习网站部署到 GitHub Pages。

## 📋 前置要求

- GitHub 账号
- Git 已安装并配置
- Node.js 18+ 和 npm

## 🚀 部署步骤

### 1. 创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角的 `+` → `New repository`
3. 填写仓库信息：
   - **Repository name**: `english_learning`（必须与 `next.config.js` 中的 basePath 一致）
   - **Description**: 儿童英文字母学习网站
   - **Public** 或 **Private**（推荐 Public）
   - 不要勾选 "Initialize this repository with a README"
4. 点击 `Create repository`

### 2. 初始化本地仓库并推送代码

```bash
cd /Users/sadman/workspace/english_learning

# 初始化 Git 仓库
git init

# 添加远程仓库
git remote add origin https://github.com/caiqinzhou/english_learning.git

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: 儿童英文字母学习网站"

# 推送到 GitHub
git push -u origin main
```

### 3. 配置 GitHub Pages

1. 进入你的 GitHub 仓库页面
2. 点击 `Settings`（设置）
3. 在左侧菜单找到 `Pages`
4. 在 **Source** 部分选择：
   - Source: `GitHub Actions`
5. 保存设置

### 4. 启用 GitHub Actions 权限

1. 在仓库设置中，进入 `Actions` → `General`
2. 找到 **Workflow permissions**
3. 选择 `Read and write permissions`
4. 勾选 `Allow GitHub Actions to create and approve pull requests`
5. 点击 `Save`

### 5. 触发自动部署

每次推送到 `main` 分支时，GitHub Actions 会自动构建和部署：

```bash
# 修改代码后
git add .
git commit -m "Update: 描述你的修改"
git push
```

### 6. 访问你的网站

部署完成后（大约 2-3 分钟），访问：

```
https://caiqinzhou.github.io/english_learning/
```

## 🔧 本地测试生产构建

在推送到 GitHub 之前，可以本地测试构建：

```bash
# 构建静态站点
npm run build

# 使用简单的 HTTP 服务器测试
cd out
python3 -m http.server 8080

# 访问 http://localhost:8080
```

## 📁 项目结构说明

```
english_learning/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 部署配置
├── out/                        # 构建输出目录（不提交到 Git）
├── src/
│   ├── app/                    # Next.js 页面
│   ├── components/             # React 组件
│   ├── data/                   # 字母笔画数据
│   └── lib/                    # 工具函数
├── next.config.js              # Next.js 配置（包含 GitHub Pages 设置）
├── package.json
└── README.md
```

## ⚙️ 重要配置说明

### next.config.js

```javascript
const nextConfig = {
  output: 'export',              // 启用静态导出
  basePath: '/english_learning', // GitHub Pages 子路径
  assetPrefix: '/english_learning',
  images: {
    unoptimized: true,           // 静态导出需要
  },
}
```

**注意**：如果你的仓库名不是 `english_learning`，需要修改 `basePath` 和 `assetPrefix` 为你的仓库名。

### .github/workflows/deploy.yml

GitHub Actions 工作流配置，包含：
- 自动安装依赖
- 构建 Next.js 静态站点
- 部署到 GitHub Pages

## 🐛 常见问题

### 1. 页面显示 404

**原因**：basePath 配置不匹配

**解决**：确保 `next.config.js` 中的 `basePath` 和 `assetPrefix` 与你的仓库名一致。

### 2. CSS 样式丢失

**原因**：资源路径错误

**解决**：确保配置了 `assetPrefix`，并且 `.nojekyll` 文件存在于 `out` 目录。

### 3. GitHub Actions 部署失败

**检查**：
- 确保 GitHub Actions 有读写权限
- 查看 Actions 日志找到具体错误
- 确保 `package.json` 中的依赖版本兼容

### 4. 构建时出现 TypeScript 错误

**解决**：
```bash
# 安装缺失的类型定义
npm install --save-dev @types/canvas-confetti
```

## 🔄 更新网站

1. 修改代码
2. 提交并推送到 GitHub：
   ```bash
   git add .
   git commit -m "描述你的修改"
   git push
   ```
3. GitHub Actions 会自动构建并部署新版本

## 📱 测试响应式设计

部署后，在不同设备上测试：
- 桌面浏览器（Chrome, Firefox, Safari）
- 平板（iPad, Android Tablet）
- 手机（iPhone, Android Phone）

或使用浏览器开发者工具的设备模拟器。

## 🎉 部署完成

恭喜！你的儿童英文字母学习网站现在已经上线，任何人都可以通过你的 GitHub Pages 链接访问。

**分享你的网站**：
```
https://caiqinzhou.github.io/english_learning/
```

## 📞 技术支持

如果遇到问题，请：
1. 查看 GitHub Actions 日志
2. 检查浏览器控制台错误
3. 确认所有配置文件设置正确
