# 可信運算平台官方網站

**Codebat Technology Inc. - 加密上傳・隔離執行・可驗證證據包**

## 📋 專案概述

這是 Codebat Technology 可信運算平台的官方網站,採用純靜態 HTML/CSS/JavaScript 技術棧,部署於 GitHub Pages。

### 核心特色

- ✅ **零依賴**: 不使用任何外部框架或庫,純原生實作
- ✅ **高效能**: CSS < 20KB, JS < 8KB (壓縮後)
- ✅ **響應式設計**: 完整支援桌面、平板、手機
- ✅ **無障礙優化**: 符合 WCAG 2.1 AA 標準
- ✅ **SEO 友善**: 完整 meta tags 與 JSON-LD 結構化資料
- ✅ **動畫優雅**: 尊重 `prefers-reduced-motion` 偏好設定

## 📂 專案結構

```
codebatai.github.io/
├── index.html          # 首頁 (Hero + 三大價值 + 四步驟 + FAQ + CTA)
├── product.html        # 產品介紹 (為何更安全 + 承諾 + 信任帶)
├── how.html           # 運作方式 (四步驟詳細說明)
├── contact.html       # 聯絡表單
├── resources.html     # 資源中心 (白皮書、政策、條款)
├── css/
│   └── main.css       # 主樣式表 (~18KB)
├── js/
│   └── app.js         # 主 JavaScript (~7KB)
├── assets/
│   ├── logo.png       # 網站 Logo
│   └── og-image.png   # Open Graph 分享圖片 (1200×630)
└── README.md          # 專案說明 (本檔案)
```

## 🎨 設計系統

### 色彩

| 變數 | 顏色代碼 | 用途 |
|------|---------|------|
| `--bg` | `#0B1633` | 深藍背景 |
| `--teal` | `#00B8A9` | 品牌青綠色 (CTA、連結) |
| `--ink` | `#0b1220` | 主要文字 |
| `--muted` | `#627084` | 次要文字 |
| `--paper` | `#F2F5F8` | 淺灰背景 |

### 字體

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
             "Noto Sans TC", "Helvetica Neue", Arial,
             "PingFang TC", "Heiti TC", sans-serif;
```

### 圓角與間距

- 主要圓角: `16px`
- 小圓角: `12px`
- 間距單位: `8px` 的倍數 (8, 16, 24, 32, 48...)

## 🚀 本地開發

### 1. 複製專案

```bash
git clone https://github.com/codebatai/codebatai.github.io.git
cd codebatai.github.io
```

### 2. 啟動本地伺服器

使用 Python:
```bash
python -m http.server 8000
```

或使用 Node.js:
```bash
npx serve .
```

### 3. 開啟瀏覽器

訪問 `http://localhost:8000`

## 📦 部署至 GitHub Pages

### 方法 1: 直接推送

```bash
git add .
git commit -m "更新網站內容"
git push origin main
```

網站將自動部署至 `https://codebat.ai` (或 `https://codebatai.github.io`)

### 方法 2: GitHub Actions (可選)

建立 `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

## 🔧 自訂與調整

### 修改顏色主題

編輯 `css/main.css` 的 `:root` 變數:

```css
:root {
  --bg: #0B1633;      /* 深藍 → 改成你的品牌色 */
  --teal: #00B8A9;    /* 青綠 → 改成你的強調色 */
  /* ... */
}
```

### 修改文案

所有文案都在對應的 HTML 檔案中,直接編輯即可:

- `index.html` - 首頁
- `product.html` - 產品介紹
- `how.html` - 運作方式
- `contact.html` - 聯絡我們
- `resources.html` - 資源中心

### 修改 SEO 設定

編輯每個 HTML 檔案的 `<head>` 區塊:

```html
<title>你的標題</title>
<meta name="description" content="你的描述">
<meta property="og:title" content="你的標題">
<!-- ... -->
```

## ✅ 效能檢查清單

- [ ] 圖片使用 WebP/AVIF 格式
- [ ] 圖片加上 `width` 與 `height` 屬性
- [ ] 使用 `loading="lazy"` 延遲載入
- [ ] CSS/JS 壓縮 (可選)
- [ ] 啟用 HTTP/2 或 HTTP/3
- [ ] 設定適當的快取標頭

## 🧪 測試清單

### 功能測試

- [ ] 導覽列在各頁面正常運作
- [ ] 所有連結可正常點擊
- [ ] 表單驗證正常運作
- [ ] 平滑捲動功能正常
- [ ] 回到頂部按鈕正常顯示/隱藏

### 響應式測試

- [ ] 桌面 (1920×1080)
- [ ] 筆電 (1366×768)
- [ ] 平板 (768×1024)
- [ ] 手機 (375×667)

### 瀏覽器測試

- [ ] Chrome (最新版)
- [ ] Firefox (最新版)
- [ ] Safari (最新版)
- [ ] Edge (最新版)

### 無障礙測試

- [ ] 鍵盤導航 (Tab 鍵)
- [ ] 螢幕閱讀器相容性
- [ ] 顏色對比度 ≥ 4.5:1
- [ ] `prefers-reduced-motion` 支援

### SEO 測試

- [ ] Lighthouse 評分 ≥ 95 (各項指標)
- [ ] meta tags 完整
- [ ] JSON-LD 結構化資料正確
- [ ] Open Graph 分享預覽正常

## 📊 效能目標

| 指標 | 目標值 | 實際值 |
|------|--------|--------|
| **Lighthouse Performance** | ≥ 90 | - |
| **Lighthouse Accessibility** | ≥ 95 | - |
| **Lighthouse Best Practices** | ≥ 95 | - |
| **Lighthouse SEO** | ≥ 95 | - |
| **First Contentful Paint (FCP)** | < 1.8s | - |
| **Largest Contentful Paint (LCP)** | < 2.5s | - |
| **Cumulative Layout Shift (CLS)** | < 0.1 | - |
| **Total Blocking Time (TBT)** | < 300ms | - |

使用 [PageSpeed Insights](https://pagespeed.web.dev/) 測試。

## 🐛 已知問題

無

## 📝 更新日誌

### v1.0.0 (2025-01-XX)

- ✨ 全新設計:可信運算平台主題
- ✨ 完整五頁式結構
- ✨ 響應式設計與無障礙優化
- ✨ SEO 與效能優化
- ✨ 原生 JavaScript 動畫系統

## 📄 授權

Copyright © 2025 Codebat Technology Inc. All rights reserved.

## 🤝 貢獻

目前不開放外部貢獻。如有建議,請聯絡 support@codebat.ai

## 📧 聯絡我們

- **Email**: support@codebat.ai
- **GitHub**: [github.com/codebatai](https://github.com/codebatai)
- **網站**: [codebat.ai](https://codebat.ai)

---

**Made with ❤️ by Codebat Technology**
