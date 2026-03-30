# Portfolio Setup & Customization Guide

Welcome! This guide will walk you through setting up and customizing your new portfolio website.

## 🚀 Quick Start (5 minutes)

### 1. Install Dependencies
```bash
cd portfolio
pnpm install
```

### 2. Start Development Server
```bash
pnpm dev
```

Visit `http://localhost:3000` in your browser. You should see the portfolio homepage with the modern dark theme and cyan accents.

### 3. Make Your First Change
Open `client/src/components/sections/Hero.tsx` and change:
```typescript
<h1>Hi, I'm <span className="text-accent">Your Name</span></h1>
```

Save the file and watch the changes appear instantly in your browser!

---

## 📝 Customization Checklist

### Step 1: Personal Information

#### Hero Section (`client/src/components/sections/Hero.tsx`)
```typescript
// Change these lines:
<h1>Hi, I'm <span className="text-accent">Your Name</span></h1>
<p>Full-Stack Developer | UI/UX Enthusiast | Problem Solver</p>
<p>I craft beautiful, functional digital experiences using modern web technologies...</p>
```

#### About Section (`client/src/components/sections/About.tsx`)
```typescript
// Update the professional summary paragraphs
// Update the key strengths list:
{['Full-Stack Development', 'React & Modern JavaScript', 'UI/UX Design', 'Database Design', 'API Development'].map((skill) => (
```

#### Footer (`client/src/components/Footer.tsx`)
```typescript
// Update copyright name:
<p>&copy; {currentYear} Your Name. All rights reserved.</p>
```

### Step 2: Social Media Links

Update in three places:

**Navbar** (`client/src/components/Navbar.tsx`):
```typescript
// Already configured - no changes needed
```

**Hero Section** (`client/src/components/sections/Hero.tsx`):
```typescript
{[
  { icon: Github, href: 'https://github.com/yourprofile', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
]}
```

**Contact Section** (`client/src/components/sections/Contact.tsx`):
```typescript
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'San Francisco, CA',
    href: '#',
  },
];

// Also update social links:
{[
  { label: 'GitHub', url: 'https://github.com/yourprofile' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
  { label: 'Twitter', url: 'https://twitter.com/yourprofile' },
]}
```

### Step 3: Skills

Edit `client/src/components/sections/Skills.tsx`:

```typescript
const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js', 'Redux'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    color: 'from-purple-500 to-pink-500',
  },
  // Add or modify categories as needed
];
```

### Step 4: Projects

Edit `client/src/components/sections/Projects.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description goes here...',
    image: 'https://your-image-url.com/image.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'fullstack',
    github: 'https://github.com/yourprofile/project',
    live: 'https://project-live-url.com',
  },
  // Add more projects...
];
```

**Adding Project Images:**
1. Prepare your project screenshots
2. Upload them using: `manus-upload-file path/to/image.png`
3. Copy the returned CDN URL
4. Paste into the `image` field

### Step 5: Contact Form (EmailJS Setup)

1. **Create EmailJS Account**
   - Go to [emailjs.com](https://www.emailjs.com/)
   - Sign up for a free account
   - Verify your email

2. **Create Email Service**
   - Go to Email Services
   - Click "Create New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup steps
   - Copy your **Service ID**

3. **Create Email Template**
   - Go to Email Templates
   - Click "Create New Template"
   - Use this template:
   ```
   Subject: New Portfolio Contact from {{from_name}}
   
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```
   - Copy your **Template ID**

4. **Get Your Public Key**
   - Go to Account → API Keys
   - Copy your **Public Key**

5. **Update Contact Component**
   - Open `client/src/components/sections/Contact.tsx`
   - Find the `handleSubmit` function
   - Replace:
   ```typescript
   emailjs.init('YOUR_PUBLIC_KEY');
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     { /* ... */ }
   );
   ```

---

## 🎨 Theme Customization

### Colors

Edit `client/src/index.css` in the `:root` section:

```css
:root {
  /* Primary accent color */
  --primary: #00d9ff;           /* Change this to your brand color */
  
  /* Background and text */
  --background: #1a1a1a;        /* Dark background */
  --foreground: #ffffff;        /* Text color */
  
  /* Card backgrounds */
  --card: #262626;
  --card-foreground: #ffffff;
  
  /* Secondary colors */
  --secondary: #333333;
  --secondary-foreground: #ffffff;
  
  /* Accent variations */
  --muted: #4a4a4a;
  --muted-foreground: #b0b0b0;
}
```

### Typography

Update fonts in `client/index.html`:

```html
<!-- Change the font families in the Google Fonts link -->
<link href="https://fonts.googleapis.com/css2?family=YourDisplayFont:wght@700&family=YourBodyFont:wght@400;500;600&display=swap" rel="stylesheet" />
```

Then update `client/src/index.css`:

```css
body {
  font-family: 'YourBodyFont', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'YourDisplayFont', sans-serif;
}
```

### Spacing & Radius

```css
:root {
  --radius: 0.5rem;  /* Change border radius */
}
```

---

## 📱 Testing Your Portfolio

### Desktop
- Open `http://localhost:3000` in your browser
- Test all navigation links
- Test theme toggle (sun/moon icon)
- Test form submission

### Mobile
- Open DevTools (F12)
- Click the device toggle icon
- Test on iPhone 12, Pixel 5, etc.
- Test touch interactions

### Different Browsers
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers

---

## 🔧 Troubleshooting

### Port 3000 already in use
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
pnpm dev -- --port 3001
```

### Changes not showing
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Restart dev server: `pnpm dev`

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules dist .vite
pnpm install
pnpm build
```

### EmailJS not working
- Verify Service ID, Template ID, and Public Key are correct
- Check EmailJS dashboard for errors
- Test with `pnpm dev` locally first
- Check browser console for error messages

---

## 📚 File Structure Reference

```
portfolio/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx              # Update social links here
│   │   │   ├── Footer.tsx              # Update copyright and links
│   │   │   └── sections/
│   │   │       ├── Hero.tsx            # Update name and intro
│   │   │       ├── About.tsx           # Update about text
│   │   │       ├── Skills.tsx          # Update skills list
│   │   │       ├── Projects.tsx        # Update projects
│   │   │       └── Contact.tsx         # Update contact info & EmailJS
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx        # Theme logic (don't modify)
│   │   ├── App.tsx                     # Main component (don't modify)
│   │   └── index.css                   # Update colors and fonts here
│   └── index.html                      # Update meta tags and title
├── PORTFOLIO_README.md                 # Main documentation
├── DEPLOYMENT.md                       # Deployment instructions
└── SETUP_GUIDE.md                      # This file
```

---

## 🚀 Deployment

Once you're happy with your portfolio:

1. **Build for production**
```bash
pnpm build
```

2. **Deploy to Netlify** (Recommended)
   - See `DEPLOYMENT.md` for detailed instructions
   - Takes 5 minutes to set up

3. **Add Custom Domain** (Optional)
   - Purchase domain from GoDaddy, Namecheap, etc.
   - Configure DNS in Netlify
   - Your portfolio is live!

---

## 💡 Pro Tips

1. **Use Real Images**
   - Replace placeholder images with your own
   - Use high-quality screenshots of your projects
   - Optimize images for web (compress, use WebP)

2. **Keep Content Updated**
   - Update projects regularly
   - Add new skills as you learn them
   - Keep contact information current

3. **Test Before Deploying**
   - Test all links and forms
   - Check on mobile devices
   - Test in different browsers
   - Verify form submissions work

4. **Monitor Analytics** (Optional)
   - Enable Netlify Analytics
   - Track visitor numbers and traffic sources
   - Use Google Analytics for detailed insights

5. **SEO Optimization**
   - Update meta tags in `index.html`
   - Use descriptive project titles
   - Include relevant keywords
   - Add structured data (JSON-LD)

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [Web Performance Tips](https://web.dev/performance/)

---

## 📞 Need Help?

1. Check the troubleshooting section above
2. Review component comments in the code
3. Check browser console for error messages
4. Read the main `PORTFOLIO_README.md`
5. Check platform-specific docs (Netlify, Vercel, etc.)

---

**Happy customizing! Your portfolio is going to look amazing! 🚀**
