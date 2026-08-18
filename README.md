# HEYDAY VIDEO — AI创意视频集

科技风视频预览网站，移动端优先设计，适合客户在线浏览视频作品。

> **当前视频已压缩**：所有视频已从 4K 压缩至 1080p（总计 996MB → 424MB，
> 单文件均 < 100MB），满足 GitHub 直接推送要求。

## 快速部署到 GitHub Pages（推荐）

1. 在 GitHub 创建新仓库（如 `video-gallery`，必须选 **Public**）
2. 将本项目所有文件推送到仓库：
   ```bash
   cd video-site
   git init
   git add .
   git commit -m "AI创意视频集"
   git branch -M main
   git remote add origin https://github.com/你的用户名/video-gallery.git
   git push -u origin main
   ```
   > 推送时如提示输入账号密码，用户名填 GitHub 用户名，
   > 密码填 **Personal Access Token**（不是登录密码）。
   > 生成方式：GitHub → Settings → Developer settings → Personal access tokens → 勾选 `repo` 权限。
3. 进入仓库 **Settings → Pages**
4. Source 选择 **Deploy from a branch**
5. Branch 选择 `main`，文件夹选 `/ (root)`
6. 点击 Save，等待 1-2 分钟即可访问 `https://你的用户名.github.io/video-gallery/`

### 备选方案：视频外链 + 轻量部署（生产环境更佳）

视频加载速度受限 GitHub 网络，若客户访问慢，可将视频上传到云存储
（如腾讯云 COS、阿里云 OSS），然后在 `js/videos-data.js` 中把 `src` 替换为外链 URL：

```js
{
  id: "v01",
  src: "https://your-cdn.com/videos/1东方明珠搭建.mp4",
  title: "东方明珠搭建",
  // ...
}
```

## 功能说明

- **转发分享**：卡片右上角分享按钮 / 播放器内"转发"按钮。
  手机端调用系统分享（微信/QQ等），电脑端自动复制带视频定位的链接（`#v01` 格式）。
  收到链接的人打开页面后会自动定位并播放该视频。
- **下载防护**：已全面禁用视频下载，包括：
  - 播放器控制条不显示下载按钮（`controlsList="nodownload"`）
  - 禁用右键菜单（无法"另存为/复制视频地址"）
  - 禁用拖拽视频到本地
  - 禁用手机长按保存视频
  - 禁用画中画（避免录屏导出）
  - 拦截 Ctrl/Cmd + S 另存为

> 说明：前端防下载无法做到绝对安全（浏览器开发者工具仍可抓包），
> 但足以阻止普通客户误操作下载。

## 修改视频信息

编辑 `js/videos-data.js` 文件，更新每个视频的：
- `title` — 标题
- `desc` — 描述文案
- `category` — 分类
- `tag` — 标签

## 本地预览

```bash
cd video-site
python3 -m http.server 8765
# 浏览器打开 http://localhost:8765
```

## 技术栈

- 纯 HTML / CSS / JavaScript（无构建依赖）
- 移动端优先响应式设计
- 深色科技风 UI
- 浏览器自动提取视频首帧作为缩略图
