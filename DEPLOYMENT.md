# Deployment Guide - Kaspar Works Inc

This guide will help you deploy the Kaspar Works website to production.

## Prerequisites

### Node.js Version
**Important**: Vite 6 requires Node.js 18.0 or higher.

Current detected version: Node 16.20.2 ❌

**Solution**: Upgrade Node.js to version 18 or higher:
```bash
# Using nvm (recommended)
nvm install 18
nvm use 18

# Or download from https://nodejs.org/
```

## Environment Variables

### Required Environment Variables
Create a `.env` file in the project root:

```bash
GEMINI_API_KEY=your_gemini_api_key_here
```

**Security Note**: Never commit the `.env` file to version control. Use your hosting platform's environment variable settings in production.

## Building for Production

Once Node.js 18+ is installed:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

The build output will be in the `dist` folder.

## Production Optimizations

The Vite configuration includes:

- ✅ Code splitting for optimal loading
- ✅ Minification with esbuild
- ✅ Vendor chunk separation (React, Lucide Icons, Google AI)
- ✅ Console logs removed in production (when using esbuild minification)
- ✅ Source maps disabled in production

## Deployment Options

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

**Vercel Configuration** (`vercel.json`):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {
    "GEMINI_API_KEY": "@gemini-api-key"
  }
}
```

### Option 2: Netlify
1. Push code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables in Netlify dashboard

### Option 3: AWS S3 + CloudFront
1. Build the project: `npm run build`
2. Upload `dist` folder to S3 bucket
3. Enable static website hosting
4. Create CloudFront distribution
5. Point domain to CloudFront URL

### Option 4: GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

## Post-Deployment Checklist

- [ ] Node.js version is 18 or higher
- [ ] Environment variables are set correctly
- [ ] FormSubmit email is verified (kaspar@kaspar.works)
- [ ] Production build completes successfully
- [ ] All images and assets load correctly
- [ ] Contact form sends emails properly
- [ ] AI chat widget functions correctly
- [ ] All animations work smoothly
- [ ] Mobile responsiveness is tested
- [ ] SSL certificate is active (HTTPS)
- [ ] Custom domain is configured (if applicable)

## Troubleshooting

### Build Fails with "crypto$2.getRandomValues is not a function"
**Cause**: Node.js version is below 18.0
**Solution**: Upgrade to Node.js 18 or higher

### FormSubmit Not Sending Emails
**Cause**: Email not verified
**Solution**: Check kaspar@kaspar.works inbox for FormSubmit verification email and click the verification link

### AI Chat Not Working
**Cause**: Missing or invalid GEMINI_API_KEY
**Solution**: Verify the API key in environment variables

### Images Not Loading
**Cause**: Incorrect paths in production
**Solution**: Ensure all image paths start with `/` for absolute paths from the public directory

## Performance Tips

1. **Enable Caching**: Configure your CDN/hosting to cache static assets
2. **Compress Assets**: Enable gzip/brotli compression on your server
3. **CDN**: Use a CDN for faster global delivery
4. **Lazy Loading**: Images are already optimized with lazy loading

## Security Recommendations

1. **Never commit** `.env` files
2. **Use environment variables** on hosting platforms
3. **Enable HTTPS** (most platforms do this automatically)
4. **Set CORS policies** if needed for API calls
5. **Keep dependencies updated**: Run `npm audit` regularly

## Support

For deployment issues, contact: kaspar@kaspar.works
