# 纯净视图 - flashscore 网站内容净化脚本

一个用户脚本，用于在访问 [flashscore.com](https://www.flashscore.com) 及其子页面时，自动隐藏页面中的干扰元素（如头部导航、顶部菜单和遮罩层），为你提供一个清爽、专注的阅读体验。

## 🌟 功能亮点

- ✅ **无闪烁隐藏**：在元素渲染前即应用隐藏样式，彻底避免“闪现”问题。
- ✅ **自动净化**：每次访问页面时自动生效，无需手动操作。
- ✅ **高效简洁**：仅保留核心内容区域，提升阅读专注度。
- ✅ **动态监听**：支持 JavaScript 动态加载的内容，确保后续插入的干扰元素也能被及时隐藏。

## 🧩 隐藏的元素

本脚本会自动隐藏以下页面元素：

- `<header class="header">` —— 页面头部
- `<nav class="menuTop menuTop--motorsport-auto-racing">` —— 顶部导航菜单
- `<div class="container__overlay">` —— 页面遮罩层（常用于弹窗或广告）

## ⚙️ 使用方法

1. 安装 [Tampermonkey](https://www.tampermonkey.net/)（Chrome/Edge/Firefox）或类似用户脚本管理器。
2. 新建一个脚本，将 [`hide-unwanted-elements.user.js`](hide-unwanted-elements.user.js) 的全部内容粘贴进去。
3. 保存脚本。
4. 访问 [flashscore.com](https://www.flashscore.com) 的任意页面，即可享受无干扰浏览体验。

## 📦 脚本文件

- [`hide-unwanted-elements.user.js`](hide-unwanted-elements.user.js) - 主脚本文件

## 🔐 安全说明

- 本脚本 **不收集任何用户数据**。
- 仅在匹配的域名下运行（`flashscore.com`）。
- 使用 `@grant none`，无额外权限请求。
- 代码开源，可审计。


