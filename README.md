# Trusted Computing Platform - Official Website

**Codebat Technology Inc. - Encrypted Upload · Isolated Execution · Verifiable Evidence Packages**

## 📋 Project Overview

This is the official website for Codebat Technology's Trusted Computing Platform, built with pure static HTML/CSS/JavaScript stack and deployed on GitHub Pages.

### Core Features

- ✅ **Zero Dependencies**: No external frameworks or libraries, pure native implementation
- ✅ **High Performance**: CSS < 20KB, JS < 8KB (minified)
- ✅ **Responsive Design**: Full support for desktop, tablet, and mobile
- ✅ **Accessibility Optimized**: WCAG 2.1 AA compliant
- ✅ **SEO Friendly**: Complete meta tags and JSON-LD structured data
- ✅ **Graceful Animations**: Respects `prefers-reduced-motion` preferences

## 📂 Project Structure

```
codebatai.github.io/
├── index.html          # Homepage (Hero + Core Values + 4 Steps + FAQ + CTA)
├── product.html        # Product Overview (Security Features + Promises)
├── contact.html        # Contact Form
├── resources.html      # Resource Center (Whitepaper, Tools)
├── css/
│   └── main.css       # Main Stylesheet (~18KB)
├── js/
│   └── app.js         # Main JavaScript (~7KB)
├── assets/
│   ├── logo.png       # Website Logo
│   ├── logo-word.png  # Logo with Wordmark
│   └── demo/
│       └── whitepaper.pdf  # Technical Whitepaper
├── CNAME              # Custom domain configuration
├── robots.txt         # Search engine crawler rules
├── sitemap.xml        # XML sitemap for SEO
└── README.md          # Project Documentation (this file)
```

## 🎨 Design System

### Colors

| Variable | Color Code | Usage |
|----------|-----------|-------|
| `--bg` | `#0B1633` | Deep blue background |
| `--teal` | `#00B8A9` | Brand teal (CTA, links) |
| `--ink` | `#0b1220` | Primary text |
| `--muted` | `#627084` | Secondary text |
| `--paper` | `#F2F5F8` | Light gray background |

### Typography

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
             "Noto Sans TC", "Helvetica Neue", Arial,
             "PingFang TC", "Heiti TC", sans-serif;
```

### Borders & Spacing

- Primary radius: `16px`
- Small radius: `12px`
- Spacing unit: Multiples of `8px` (8, 16, 24, 32, 48...)

## 🚀 Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/codebatai/codebatai.github.io.git
cd codebatai.github.io
```

### 2. Start Local Server

Using Python:
```bash
python -m http.server 8000
```

Or using Node.js:
```bash
npx serve .
```

### 3. Open Browser

Navigate to `http://localhost:8000`

## 📦 Deploy to GitHub Pages

### Method 1: Direct Push

```bash
git add .
git commit -m "Update website content"
git push origin main
```

Website will automatically deploy to `https://codebat.ai` (or `https://codebatai.github.io`)

### Method 2: GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

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

## 🔧 Customization

### Modify Color Theme

Edit `:root` variables in `css/main.css`:

```css
:root {
  --bg: #0B1633;      /* Deep blue → Change to your brand color */
  --teal: #00B8A9;    /* Teal → Change to your accent color */
  /* ... */
}
```

### Modify Content

All content is in the corresponding HTML files:

- `index.html` - Homepage
- `product.html` - Product Overview
- `contact.html` - Contact Us
- `resources.html` - Resource Center

### Modify SEO Settings

Edit the `<head>` section in each HTML file:

```html
<title>Your Title</title>
<meta name="description" content="Your description">
<meta property="og:title" content="Your title">
<!-- ... -->
```

## ✅ Performance Checklist

- [ ] Images use WebP/AVIF format
- [ ] Images include `width` and `height` attributes
- [ ] Use `loading="lazy"` for deferred loading
- [ ] Minify CSS/JS (optional)
- [ ] Enable HTTP/2 or HTTP/3
- [ ] Set appropriate cache headers

## 🧪 Testing Checklist

### Functionality Tests

- [ ] Navigation works on all pages
- [ ] All links are clickable
- [ ] Form validation works properly
- [ ] Smooth scrolling functions correctly
- [ ] Back-to-top button shows/hides properly

### Responsive Tests

- [ ] Desktop (1920×1080)
- [ ] Laptop (1366×768)
- [ ] Tablet (768×1024)
- [ ] Mobile (375×667)

### Browser Tests

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Accessibility Tests

- [ ] Keyboard navigation (Tab key)
- [ ] Screen reader compatibility
- [ ] Color contrast ratio ≥ 4.5:1
- [ ] `prefers-reduced-motion` support

### SEO Tests

- [ ] Lighthouse score ≥ 95 (all metrics)
- [ ] Complete meta tags
- [ ] Valid JSON-LD structured data
- [ ] Open Graph preview works correctly

## 📊 Performance Targets

| Metric | Target | Actual |
|--------|--------|--------|
| **Lighthouse Performance** | ≥ 90 | - |
| **Lighthouse Accessibility** | ≥ 95 | - |
| **Lighthouse Best Practices** | ≥ 95 | - |
| **Lighthouse SEO** | ≥ 95 | - |
| **First Contentful Paint (FCP)** | < 1.8s | - |
| **Largest Contentful Paint (LCP)** | < 2.5s | - |
| **Cumulative Layout Shift (CLS)** | < 0.1 | - |
| **Total Blocking Time (TBT)** | < 300ms | - |

Test using [PageSpeed Insights](https://pagespeed.web.dev/)

## 🐛 Known Issues

None

## 📝 Changelog

### v1.0.0 (2025-01-XX)

- ✨ New design: Trusted Computing Platform theme
- ✨ Complete five-page structure
- ✨ Responsive design and accessibility optimization
- ✨ SEO and performance optimization
- ✨ Native JavaScript animation system

## 📄 License

Copyright © 2025 Codebat Technology Inc. All rights reserved.

## 🤝 Contributing

External contributions are not currently accepted. For suggestions, please contact support@codebat.ai

## 📧 Contact Us

- **Email**: support@codebat.ai
- **GitHub**: [github.com/codebatai](https://github.com/codebatai)
- **Website**: [codebat.ai](https://codebat.ai)

---

**Made with ❤️ by Codebat Technology**
