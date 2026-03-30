# Modern Personal Portfolio Website

A production-ready personal portfolio website built with **React 19**, **Tailwind CSS 4**, and **Framer Motion**. Features a modern minimalist design with dark/light mode toggle, smooth animations, and full responsiveness.

## 🎨 Design Philosophy

This portfolio follows a **Modern Minimalist** aesthetic with Swiss-style precision and contemporary tech credibility. The design features:

- **Dark Charcoal Background** (#1a1a1a) with pure white text
- **Vibrant Cyan Accent** (#00d9ff) for interactive elements
- **Asymmetric Layouts** with generous whitespace
- **Smooth Animations** using Framer Motion
- **Professional Typography** with Poppins, Inter, and Roboto Mono

## 📋 Features

✅ **Responsive Design** - Mobile, tablet, and desktop optimized  
✅ **Smooth Animations** - Scroll-triggered animations and micro-interactions  
✅ **Hero Section** - Animated introduction with CTA buttons  
✅ **About Section** - Professional summary with key strengths  
✅ **Skills Section** - Categorized technical skills with proficiency levels  
✅ **Projects Section** - Filterable project showcase with GitHub/Live links  
✅ **Contact Section** - EmailJS integration for contact form  
✅ **Sticky Navbar** - Smooth navigation with scroll detection  
✅ **SEO Optimized** - Meta tags and semantic HTML  
✅ **Performance Optimized** - Code splitting and lazy loading  

## 🚀 Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with custom theme
- **Animations**: Framer Motion
- **Navigation**: React Scroll for smooth scrolling
- **Email Service**: EmailJS for contact form
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify-ready

## 📁 Project Structure

```
portfolio/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx              # Sticky navigation with theme toggle
│   │   │   ├── Footer.tsx              # Footer with social links
│   │   │   └── sections/
│   │   │       ├── Hero.tsx            # Hero section with CTA
│   │   │       ├── About.tsx           # About section
│   │   │       ├── Skills.tsx          # Skills showcase
│   │   │       ├── Projects.tsx        # Projects with filtering
│   │   │       └── Contact.tsx         # Contact form with EmailJS
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx        # Dark/light mode context
│   │   ├── hooks/
│   │   │   └── useScrollAnimation.ts   # Scroll animation hook
│   │   ├── lib/
│   │   │   └── utils.ts                # Utility functions
│   │   ├── App.tsx                     # Main app component
│   │   ├── main.tsx                    # React entry point
│   │   └── index.css                   # Global styles & theme
│   ├── index.html                      # HTML template
│   └── public/                         # Static assets
├── package.json                        # Dependencies
├── tailwind.config.ts                  # Tailwind configuration
├── tsconfig.json                       # TypeScript configuration
└── vite.config.ts                      # Vite configuration
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ and npm/pnpm
- Git

### Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd portfolio
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
```

3. **Configure EmailJS** (Optional but recommended)
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Get your Service ID, Template ID, and Public Key
   - Update these values in `client/src/components/sections/Contact.tsx`:
   ```typescript
   emailjs.init('YOUR_PUBLIC_KEY');
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     { /* form data */ }
   );
   ```

4. **Customize your portfolio**
   - Update personal information in each section component
   - Replace placeholder images with your own
   - Update social media links in Navbar and Footer
   - Modify project details in `Projects.tsx`

5. **Start development server**
```bash
pnpm dev
# or
npm run dev
```

The site will be available at `http://localhost:3000`

## 🎯 Customization Guide

### Update Personal Information

**Hero Section** (`client/src/components/sections/Hero.tsx`):
```typescript
<h1>Hi, I'm <span className="text-accent">Your Name</span></h1>
<p>Full-Stack Developer | UI/UX Enthusiast | Problem Solver</p>
```

**About Section** (`client/src/components/sections/About.tsx`):
- Update professional summary
- Modify key strengths list

**Skills Section** (`client/src/components/sections/Skills.tsx`):
- Update skill categories and items
- Customize color gradients

**Projects Section** (`client/src/components/sections/Projects.tsx`):
- Add your own projects with descriptions
- Update GitHub and live demo links
- Replace project images

**Contact Section** (`client/src/components/sections/Contact.tsx`):
- Update email, phone, and location
- Configure EmailJS credentials
- Update social media links

### Theme Customization

Edit `client/src/index.css` to modify:
- Primary colors
- Accent colors
- Typography system
- Spacing and radius values

```css
:root {
  --primary: #00d9ff;           /* Accent color */
  --background: #1a1a1a;        /* Dark background */
  --foreground: #ffffff;        /* Text color */
  --card: #262626;              /* Card background */
  /* ... more variables ... */
}
```

### Font Customization

Update Google Fonts import in `client/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet" />
```

Then update the font families in `client/src/index.css`:
```css
body {
  font-family: 'YourFont', sans-serif;
}
```

## 📱 Responsive Breakpoints

The portfolio is optimized for:
- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

All components use Tailwind's responsive utilities (`md:`, `lg:`, etc.)

## 🚀 Deployment

### Netlify Deployment (Recommended)

1. **Build the project**
```bash
pnpm build
# or
npm run build
```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `pnpm build`
   - Set publish directory: `dist`
   - Deploy!

### Manual Netlify Deployment

1. **Build locally**
```bash
pnpm build
```

2. **Drag and drop the `dist` folder** to Netlify's deployment area

### Other Hosting Options

The portfolio can be deployed to:
- **Vercel**: `vercel deploy`
- **GitHub Pages**: Configure GitHub Actions workflow
- **AWS S3 + CloudFront**: Static hosting
- **Firebase Hosting**: `firebase deploy`

## 🔐 Environment Variables

Create a `.env.local` file (if needed):
```
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

## 📊 Performance Optimization

- **Code Splitting**: Automatic with Vite
- **Image Optimization**: Use compressed formats (WebP)
- **Lazy Loading**: Sections load on scroll
- **CSS Minification**: Automatic in production build
- **Tree Shaking**: Unused code removed automatically

## 🎬 Animation Details

### Scroll-Triggered Animations
- Hero section: Staggered fade-in on load
- About section: Slide-up animations on scroll
- Projects: Scale and lift effects on hover
- Contact form: Smooth transitions

### Micro-Interactions
- Button hover effects (scale + shadow)
- Theme toggle smooth transition
- Navigation link underlines
- Form input focus states

## 🧪 Testing

### Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

### Responsive Testing
- Test on various screen sizes
- Use Chrome DevTools device emulation
- Test touch interactions on mobile

## 🐛 Troubleshooting

### Theme not persisting
- Check browser localStorage is enabled
- Clear browser cache and try again

### EmailJS not sending
- Verify Service ID, Template ID, and Public Key
- Check email template format in EmailJS dashboard
- Ensure form data matches template variables

### Animations not smooth
- Check browser hardware acceleration is enabled
- Reduce animation complexity for older devices
- Use Chrome DevTools Performance tab to profile

### Build errors
- Clear `node_modules` and reinstall: `pnpm install`
- Clear Vite cache: `rm -rf dist .vite`
- Check Node.js version compatibility

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [Netlify Deployment Guide](https://docs.netlify.com/)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them back!

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review component documentation in code comments
3. Check browser console for error messages
4. Verify all configuration steps were completed

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
