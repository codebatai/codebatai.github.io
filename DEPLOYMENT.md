# 🚀 部署指南

## 快速開始 (5 分鐘內上線)

### 方法 1: GitHub Pages (推薦)

1. **確認檔案結構**
   ```bash
   git status
   ```

2. **提交所有變更**
   ```bash
   git add .
   git commit -m "🎉 重新設計:可信運算平台官網"
   ```

3. **推送至 GitHub**
   ```bash
   git push origin main
   ```

4. **啟用 GitHub Pages**
   - 前往 GitHub Repository > Settings > Pages
   - Source: Deploy from a branch
   - Branch: `main` / `root`
   - 點擊 Save

5. **等待部署完成** (約 1-2 分鐘)
   - 訪問 `https://codebatai.github.io`
   - 或自訂網域 `https://codebat.ai`

---

## 自訂網域設定

### 1. 在 GitHub 設定 Custom Domain

Repository Settings > Pages > Custom domain:
```
codebat.ai
```

### 2. 設定 DNS 記錄

在你的網域註冊商 (如 Cloudflare、GoDaddy) 設定:

**A 記錄** (指向 GitHub Pages):
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**CNAME 記錄** (www 子網域):
```
Type: CNAME
Name: www
Value: codebatai.github.io
```

### 3. 等待 DNS 生效 (10 分鐘 - 48 小時)

檢查 DNS:
```bash
dig codebat.ai
nslookup codebat.ai
```

### 4. 啟用 HTTPS

GitHub Pages 會自動提供免費的 Let's Encrypt SSL 憑證:
- ✅ Enforce HTTPS (建議勾選)

---

## 本地測試

### 使用 Python (推薦)

```bash
cd codebatai.github.io
python -m http.server 8000
```

訪問: `http://localhost:8000`

### 使用 Node.js

```bash
npx serve .
```

### 使用 PHP

```bash
php -S localhost:8000
```

---

## 效能優化 (可選)

### 1. 壓縮 CSS/JS

**使用線上工具**:
- CSS: [cssnano](https://cssnano.co/)
- JS: [terser](https://try.terser.org/)

**或使用 CLI**:
```bash
# 安裝工具
npm install -g cssnano-cli terser

# 壓縮 CSS
cssnano css/main.css css/main.min.css

# 壓縮 JS
terser js/app.js -o js/app.min.js -c -m
```

更新 HTML 中的參考:
```html
<link rel="stylesheet" href="./css/main.min.css">
<script src="./js/app.min.js"></script>
```

### 2. 圖片優化

**轉換為 WebP**:
```bash
# 使用 cwebp (需安裝 libwebp)
cwebp -q 80 assets/logo.png -o assets/logo.webp
```

**HTML 中使用 `<picture>`**:
```html
<picture>
  <source srcset="./assets/logo.webp" type="image/webp">
  <img src="./assets/logo.png" alt="Logo">
</picture>
```

### 3. 加入 `robots.txt`

建立 `robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://codebat.ai/sitemap.xml
```

### 4. 建立 `sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://codebat.ai/</loc>
    <lastmod>2025-01-17</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://codebat.ai/product.html</loc>
    <lastmod>2025-01-17</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://codebat.ai/how.html</loc>
    <lastmod>2025-01-17</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://codebat.ai/contact.html</loc>
    <lastmod>2025-01-17</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://codebat.ai/resources.html</loc>
    <lastmod>2025-01-17</lastmod>
    <priority>0.7</priority>
  </url>
</urlset>
```

---

## 監控與分析

### Google Analytics (可選)

在 `</head>` 前加入:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 輕量替代方案

- [Plausible](https://plausible.io/) (隱私友善)
- [Simple Analytics](https://simpleanalytics.com/)
- [Umami](https://umami.is/) (開源、自架)

---

## 測試清單

部署前請確認:

- [ ] 所有連結正常運作
- [ ] 圖片正常載入
- [ ] 表單可正常提交
- [ ] 響應式在各裝置正常顯示
- [ ] 無 JavaScript 錯誤 (開 Console 檢查)
- [ ] Lighthouse 評分 ≥ 90 (所有指標)
- [ ] meta tags 正確
- [ ] favicon 正常顯示

### 使用 Lighthouse 測試

```bash
# 安裝 Lighthouse CLI
npm install -g lighthouse

# 測試網站
lighthouse https://codebat.ai --view
```

或使用線上工具:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

---

## 備份策略

### 自動備份 (GitHub)

✅ GitHub 自動保留所有版本歷史

### 手動備份

```bash
# 建立完整備份
git archive --format=zip --output=backup-$(date +%Y%m%d).zip HEAD

# 或直接複製整個資料夾
cp -r codebatai.github.io codebatai-backup-$(date +%Y%m%d)
```

---

## 常見問題

### Q: GitHub Pages 更新需要多久?

A: 通常 1-2 分鐘,最長不超過 10 分鐘。

### Q: 如何強制重新部署?

A: 做一個空 commit 並推送:
```bash
git commit --allow-empty -m "Trigger rebuild"
git push origin main
```

### Q: 自訂網域 HTTPS 無法啟用?

A:
1. 確認 DNS 記錄已生效
2. 等待 10-60 分鐘
3. 嘗試取消勾選再重新勾選 "Enforce HTTPS"

### Q: 網站顯示 404?

A:
1. 確認 Branch 設定正確 (`main` / `root`)
2. 確認 `index.html` 存在於根目錄
3. 等待幾分鐘讓 GitHub Pages 完成部署

---

## 進階:使用 Cloudflare CDN

1. 將網域 DNS 託管至 Cloudflare
2. 設定 CNAME 指向 `codebatai.github.io`
3. 啟用 Cloudflare CDN 與快取
4. 效能提升 30-50%

---

## 緊急復原

如果部署出問題:

```bash
# 回到上一個版本
git log --oneline  # 找到正常運作的 commit hash
git reset --hard <commit-hash>
git push --force origin main
```

⚠️ **注意**: `--force` 會覆寫遠端歷史,請謹慎使用。

---

## 聯絡支援

如有部署問題:
- 📧 Email: support@codebat.ai
- 🔗 GitHub Issues: [github.com/codebatai/codebatai.github.io/issues](https://github.com/codebatai/codebatai.github.io/issues)

---

**祝部署順利! 🎉**
