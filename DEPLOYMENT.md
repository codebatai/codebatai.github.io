# 🚀 Deployment Guide

## Quick Start (Live in 5 Minutes)

### Method 1: GitHub Pages (Recommended)

1. **Verify File Structure**
   ```bash
   git status
   ```

2. **Commit All Changes**
   ```bash
   git add .
   git commit -m "🎉 Launch: Trusted Computing Platform Website"
   ```

3. **Push to GitHub**
   ```bash
   git push origin main
   ```

4. **Enable GitHub Pages**
   - Go to GitHub Repository > Settings > Pages
   - Source: Deploy from a branch
   - Branch: `main` / `root`
   - Click Save

5. **Wait for Deployment** (approximately 1-2 minutes)
   - Visit `https://codebatai.github.io`
   - Or custom domain `https://codebat.ai`

---

## Custom Domain Setup

### 1. Set Custom Domain in GitHub

Repository Settings > Pages > Custom domain:
```
codebat.ai
```

### 2. Configure DNS Records

Set up in your domain registrar (e.g., Cloudflare, GoDaddy):

**A Records** (pointing to GitHub Pages):
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**CNAME Record** (www subdomain):
```
Type: CNAME
Name: www
Value: codebatai.github.io
```

### 3. Wait for DNS Propagation (10 minutes - 48 hours)

Check DNS:
```bash
dig codebat.ai
nslookup codebat.ai
```

### 4. Enable HTTPS

GitHub Pages automatically provides free Let's Encrypt SSL certificate:
- ✅ Enforce HTTPS (recommended)

---

## Local Testing

### Using Python (Recommended)

```bash
cd codebatai.github.io
python -m http.server 8000
```

Visit: `http://localhost:8000`

### Using Node.js

```bash
npx serve .
```

### Using PHP

```bash
php -S localhost:8000
```

---

## Performance Optimization (Optional)

### 1. Minify CSS/JS

**Using Online Tools**:
- CSS: [cssnano](https://cssnano.co/)
- JS: [terser](https://try.terser.org/)

**Or Using CLI**:
```bash
# Install tools
npm install -g cssnano-cli terser

# Minify CSS
cssnano css/main.css css/main.min.css

# Minify JS
terser js/app.js -o js/app.min.js -c -m
```

Update HTML references:
```html
<link rel="stylesheet" href="./css/main.min.css">
<script src="./js/app.min.js"></script>
```

### 2. Image Optimization

**Convert to WebP**:
```bash
# Using cwebp (requires libwebp)
cwebp -q 80 assets/logo.png -o assets/logo.webp
```

**Use `<picture>` in HTML**:
```html
<picture>
  <source srcset="./assets/logo.webp" type="image/webp">
  <img src="./assets/logo.png" alt="Logo">
</picture>
```

### 3. robots.txt Configuration

✅ Already created at `robots.txt`

### 4. sitemap.xml Configuration

✅ Already created at `sitemap.xml`

---

## Monitoring & Analytics

### Google Analytics (Optional)

Add before `</head>`:
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

### Lightweight Alternatives

- [Plausible](https://plausible.io/) (privacy-friendly)
- [Simple Analytics](https://simpleanalytics.com/)
- [Umami](https://umami.is/) (open-source, self-hosted)

---

## Pre-Deployment Checklist

Before deploying, verify:

- [ ] All links work properly
- [ ] Images load correctly
- [ ] Forms submit successfully
- [ ] Responsive design works on all devices
- [ ] No JavaScript errors (check Console)
- [ ] Lighthouse score ≥ 90 (all metrics)
- [ ] Meta tags are correct
- [ ] Favicon displays properly
- [ ] robots.txt is accessible
- [ ] sitemap.xml is accessible

### Using Lighthouse Testing

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Test website
lighthouse https://codebat.ai --view
```

Or use online tools:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

---

## Backup Strategy

### Automatic Backup (GitHub)

✅ GitHub automatically preserves all version history

### Manual Backup

```bash
# Create complete backup
git archive --format=zip --output=backup-$(date +%Y%m%d).zip HEAD

# Or copy entire directory
cp -r codebatai.github.io codebatai-backup-$(date +%Y%m%d)
```

---

## Common Issues

### Q: How long does GitHub Pages deployment take?

A: Usually 1-2 minutes, maximum 10 minutes.

### Q: How to force redeployment?

A: Make an empty commit and push:
```bash
git commit --allow-empty -m "Trigger rebuild"
git push origin main
```

### Q: Custom domain HTTPS won't enable?

A:
1. Verify DNS records have propagated
2. Wait 10-60 minutes
3. Try unchecking and re-checking "Enforce HTTPS"

### Q: Website shows 404?

A:
1. Verify Branch setting is correct (`main` / `root`)
2. Verify `index.html` exists in root directory
3. Wait a few minutes for GitHub Pages to complete deployment

---

## Advanced: Using Cloudflare CDN

1. Transfer domain DNS hosting to Cloudflare
2. Set CNAME pointing to `codebatai.github.io`
3. Enable Cloudflare CDN and caching
4. Performance improvement: 30-50%

---

## Emergency Recovery

If deployment fails:

```bash
# Revert to previous version
git log --oneline  # Find working commit hash
git reset --hard <commit-hash>
git push --force origin main
```

⚠️ **Warning**: `--force` overwrites remote history, use with caution.

---

## Support

For deployment issues:
- 📧 Email: support@codebat.ai
- 🔗 GitHub Issues: [github.com/codebatai/codebatai.github.io/issues](https://github.com/codebatai/codebatai.github.io/issues)

---

**Happy Deploying! 🎉**
