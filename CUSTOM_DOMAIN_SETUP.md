# Custom Domain Setup for Demon Slayer Portfolio

## 🌐 Domain Configuration

### Recommended Domain Options
1. **Primary Option**: `taibui-portfolio.com`
2. **Alternative Options**:
   - `tai-bui.dev`
   - `demonslayerdev.com`
   - `waterhashira.dev`
   - `taibui.tech`

## 🚀 Step-by-Step Setup Process

### 1. Domain Purchase
Purchase your chosen domain from any of these providers:
- **Namecheap** (recommended for developers)
- **Cloudflare Registrar** (best pricing + security)
- **GoDaddy** (most popular)
- **Google Domains** (now part of Squarespace)

### 2. Vercel Dashboard Setup
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to your project: `demonslayer-portfolio`
3. Click on **Settings** tab
4. Select **Domains** from the sidebar
5. Click **Add Domain**
6. Enter your domain: `taibui-portfolio.com`

### 3. DNS Configuration
Configure these DNS records with your domain provider:

#### A Records (for apex domain)
```
Type: A
Name: @
Value: 76.76.19.19
TTL: 3600
```

#### CNAME Records (for www subdomain)
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

#### Alternative: CNAME for apex (if supported)
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
TTL: 3600
```

### 4. SSL Certificate
- **Automatic**: Vercel automatically provisions SSL certificates
- **Let's Encrypt**: Free SSL certificates are auto-renewed
- **Custom SSL**: Can upload custom certificates if needed

### 5. Verification Process
1. **DNS Propagation**: Wait 24-48 hours for DNS changes
2. **Domain Verification**: Vercel will verify domain ownership
3. **SSL Provisioning**: Automatic SSL certificate generation
4. **Live Status**: Domain becomes active once verified

## 🔧 Advanced Configuration

### Security Headers (Already Configured)
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`

### Redirects (Already Configured)
- Automatic redirect from `www` to apex domain
- HTTPS enforcement
- Trailing slash normalization

### Performance Optimizations
- **Edge Network**: Global CDN deployment
- **Static Optimization**: Pre-rendered pages
- **Image Optimization**: Next.js automatic image optimization
- **Compression**: Automatic Gzip/Brotli compression

## 📋 Post-Setup Checklist

### Immediate Actions
- [ ] Purchase domain from registrar
- [ ] Add domain in Vercel dashboard
- [ ] Configure DNS records
- [ ] Wait for DNS propagation
- [ ] Verify SSL certificate

### Testing & Validation
- [ ] Test `https://taibui-portfolio.com`
- [ ] Test `https://www.taibui-portfolio.com` (should redirect)
- [ ] Verify mobile responsiveness
- [ ] Test all Demon Slayer features (music, animations)
- [ ] Check loading speed with GTmetrix/PageSpeed Insights

### SEO & Analytics Setup
- [ ] Submit to Google Search Console
- [ ] Add Google Analytics (if desired)
- [ ] Create social media meta tags
- [ ] Test Open Graph previews

## 🎯 Professional Benefits

### Custom Domain Advantages
1. **Professional Appearance**: `taibui-portfolio.com` vs `random-name.vercel.app`
2. **Branding**: Memorable URL for business cards/LinkedIn
3. **SEO Benefits**: Better search engine ranking
4. **Trust Factor**: Increased credibility with employers/clients
5. **Email Setup**: Can create `tai@taibui-portfolio.com`

### Portfolio Impact
- **First Impression**: Shows attention to detail
- **Technical Skills**: Demonstrates domain/DNS knowledge
- **Investment**: Shows commitment to professional presence
- **Accessibility**: Easy to remember and share

## 🌊 Demon Slayer Branding Ideas

### Domain Naming Strategies
- **Personal Brand**: `taibui.dev`, `tai-bui.com`
- **Anime Theme**: `waterhashira.dev`, `demonslayerdev.com`
- **Tech Focus**: `taibui.tech`, `taibui.engineer`
- **Professional**: `taibui-portfolio.com`, `taibui-resume.com`

## 💡 Alternative Free Options

If you prefer to start free:
1. **Vercel Subdomain**: Keep `project-name.vercel.app`
2. **GitHub Pages**: `taibui324.github.io`
3. **Netlify**: `project-name.netlify.app`
4. **Freenom**: Free domains (.tk, .ml, .ga) - not recommended for professional use

## 🔗 Useful Resources
- [Vercel Custom Domains Guide](https://vercel.com/docs/projects/domains)
- [DNS Checker Tool](https://dnschecker.org/)
- [SSL Certificate Checker](https://www.sslshopper.com/ssl-checker.html)
- [GTmetrix Performance Testing](https://gtmetrix.com/)

---

**Next Step**: Choose your domain and follow the setup process above. The Demon Slayer portfolio will look even more professional with a custom domain! ⚔️🌊

