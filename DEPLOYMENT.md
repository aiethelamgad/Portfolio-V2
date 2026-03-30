# Deployment Guide

This guide covers deploying your portfolio to various platforms.

## 🚀 Netlify Deployment (Recommended)

### Option 1: Git-Connected Deployment (Easiest)

1. **Push your code to GitHub**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub and authorize
   - Choose your portfolio repository
   - Configure build settings:
     - **Build command**: `pnpm build`
     - **Publish directory**: `dist`
   - Click "Deploy site"

3. **Set Environment Variables** (if using EmailJS)
   - Go to Site settings → Build & deploy → Environment
   - Add variables:
     - `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key
     - `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
     - `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID

4. **Custom Domain** (Optional)
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Follow DNS configuration steps

### Option 2: Manual Deployment

1. **Build the project**
```bash
pnpm build
```

2. **Deploy to Netlify**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `dist` folder
   - Your site is live!

## 📦 Vercel Deployment

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel
```

3. **Follow the prompts**
   - Link to your Vercel account
   - Select project settings
   - Deploy!

4. **Set Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add your EmailJS credentials

## 🔧 GitHub Pages Deployment

1. **Update vite.config.ts**
```typescript
export default defineConfig({
  base: '/portfolio/', // Change to your repo name
  plugins: [react()],
})
```

2. **Create GitHub Actions workflow** (`.github/workflows/deploy.yml`)
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch
   - Save

## ☁️ AWS S3 + CloudFront

1. **Create S3 bucket**
   - Go to AWS S3 console
   - Create new bucket (e.g., `my-portfolio`)
   - Enable static website hosting

2. **Upload files**
```bash
pnpm build
aws s3 sync dist/ s3://my-portfolio/
```

3. **Create CloudFront distribution**
   - Set S3 bucket as origin
   - Configure caching policies
   - Get CloudFront domain

## 🔥 Firebase Hosting

1. **Install Firebase CLI**
```bash
npm install -g firebase-tools
```

2. **Initialize Firebase**
```bash
firebase login
firebase init hosting
```

3. **Deploy**
```bash
pnpm build
firebase deploy
```

## 📋 Pre-Deployment Checklist

- [ ] Update all personal information
- [ ] Replace placeholder images
- [ ] Update social media links
- [ ] Test all links and forms
- [ ] Test responsive design on mobile
- [ ] Test dark/light mode toggle
- [ ] Configure EmailJS (if using contact form)
- [ ] Add custom domain (optional)
- [ ] Set up analytics (optional)
- [ ] Test form submissions
- [ ] Check SEO meta tags
- [ ] Optimize images
- [ ] Test on different browsers

## 🔒 Security Considerations

1. **Never commit secrets**
   - Use environment variables for API keys
   - Add `.env.local` to `.gitignore`

2. **HTTPS**
   - All deployment platforms provide free HTTPS
   - Ensure HTTPS is enforced

3. **Content Security Policy**
   - Already configured in `.netlify.toml`
   - Review headers for your platform

4. **Email Security**
   - EmailJS handles email securely
   - Never expose service credentials in frontend code

## 📊 Post-Deployment

### Analytics Setup (Optional)

1. **Google Analytics**
   - Create property at [analytics.google.com](https://analytics.google.com)
   - Add tracking code to `index.html`

2. **Netlify Analytics**
   - Enable in Netlify dashboard
   - View traffic and performance

### Monitoring

- Monitor build logs for errors
- Check error rates in analytics
- Test contact form submissions
- Monitor page load times

## 🔄 Continuous Deployment

Most platforms (Netlify, Vercel, GitHub Pages) automatically deploy when you push to your main branch.

### Deployment Workflow

1. Make changes locally
2. Test with `pnpm dev`
3. Commit and push to GitHub
4. Platform automatically builds and deploys
5. Check deployment status in platform dashboard

## 🚨 Troubleshooting Deployments

### Build fails
- Check build logs in platform dashboard
- Ensure all dependencies are listed in `package.json`
- Verify Node.js version compatibility
- Run `pnpm build` locally to test

### Site shows 404
- Verify publish directory is correct (`dist`)
- Check `.netlify.toml` configuration
- Ensure SPA routing is configured

### EmailJS not working
- Verify environment variables are set
- Check EmailJS dashboard for errors
- Test with `pnpm dev` locally first
- Ensure template variables match form data

### Slow performance
- Optimize images (use WebP format)
- Enable gzip compression
- Configure CDN caching
- Use performance monitoring tools

## 📞 Platform Support

- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **GitHub Pages**: [pages.github.com](https://pages.github.com)
- **AWS**: [aws.amazon.com/s3](https://aws.amazon.com/s3)
- **Firebase**: [firebase.google.com/docs/hosting](https://firebase.google.com/docs/hosting)

---

**Choose the platform that best fits your needs. Netlify is recommended for ease of use.**
