# SoundMind AI - Website

Premium B2B AI consulting website for high-stakes decision intelligence. Built with Next.js, React, and Tailwind CSS.

## 📋 Project Structure

```
soundmindaisite2/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page with all sections
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── Navbar.tsx          # Sticky navigation header
│   ├── Hero.tsx            # Hero section with sailboat SVG
│   ├── TrustStrip.tsx      # Trust/credibility statement
│   ├── Capabilities.tsx    # Core capabilities grid
│   ├── Industries.tsx      # Industry-specific cards
│   ├── HowItWorks.tsx      # 3-step process flow
│   ├── Differentiators.tsx # Why choose us section
│   ├── CTASection.tsx      # Final call-to-action
│   ├── ContactModal.tsx    # Contact form modal
│   ├── Footer.tsx          # Footer navigation
│   └── shared/
│       ├── Button.tsx      # Reusable button component
│       ├── Card.tsx        # Reusable card component
│       └── Container.tsx   # Max-width container wrapper
├── lib/
│   └── utils.ts            # Utility functions (cn, etc.)
├── public/
│   └── svg/
│       └── sailboat.svg    # Hero section SVG graphic
├── tailwind.config.js      # Tailwind CSS configuration
├── next.config.js          # Next.js configuration
├── postcss.config.js       # PostCSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (recommended: v20 or v22)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the site in development mode.

## 🎨 Design System

### Colors
- **Primary Navy:** `#0F1929` - Main background
- **Navy 800:** `#1A2540` - Card backgrounds
- **Navy 700:** `#253354` - Borders and accents
- **Gold Accent:** `#D4AF37` - Primary accent for premium feel
- **Cream Text:** `#F5F5F5` - Secondary text color
- **White:** `#FFFFFF` - Primary text color

### Typography
- **Headlines:** Playfair Display (Google Fonts) - Serif, elegant
- **Body Text:** Inter (Google Fonts) - Clean sans-serif
- Hierarchy: H1 for hero, H2 for sections, body for descriptions

### Components
- **Button** - Primary (gold) and Secondary (outlined) variants
- **Card** - Hover effects with gold border highlighting
- **Container** - Max-width wrapper with responsive padding
- **Modal** - Contact form with smooth animations

## 📱 Responsive Design

- **Mobile:** 375px+ (iPhone SE)
- **Tablet:** 768px+ (iPad)
- **Desktop:** 1024px+ (standard)
- **Large Desktop:** 1920px+ (wide screens)

All components are fully responsive with mobile-first approach.

## 🎯 Key Sections

1. **Navbar** - Sticky navigation with mobile hamburger menu
2. **Hero** - Large headline with CTAs and sailboat SVG graphic
3. **Trust Strip** - Premium credibility statement
4. **Capabilities** - 6 core services in responsive grid
5. **Industries** - 4 target industry verticals
6. **How It Works** - 3-step process visualization
7. **Differentiators** - Why SoundMind AI is different
8. **CTA Section** - Final conversion-focused call-to-action
9. **Footer** - Navigation and links
10. **Contact Modal** - Form overlay for lead capture

## ✨ Features

- ✅ Production-ready code with TypeScript
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth animations and transitions (Framer Motion ready)
- ✅ Accessibility-focused (WCAG AA contrast, focus states)
- ✅ Fast loading (optimized images, code splitting)
- ✅ SEO-optimized metadata
- ✅ Dark navy + gold premium aesthetic
- ✅ Modal contact form
- ✅ Sticky navigation with scroll detection
- ✅ Custom components library

## 🔧 Development

### Adding New Sections

1. Create a new component in `components/`
2. Import and use in `app/page.tsx`
3. Add styling with Tailwind CSS classes
4. Use shared components (Button, Card, Container) for consistency

### Customizing Styles

Update `tailwind.config.js` to modify:
- Colors and color palette
- Typography and font family
- Animation keyframes
- Custom spacing and sizing

### Building for Production

```bash
npm run build
npm start
```

The production build includes:
- Optimized bundle size
- Compressed images
- Minified CSS/JS
- Static generation where possible

## 📊 Performance

Target metrics:
- Lighthouse Performance: >90
- Lighthouse Accessibility: >95
- Lighthouse Best Practices: >90
- Lighthouse SEO: >95

## 🔐 Security

- No external API calls (except Google Fonts)
- No sensitive data stored in client-side code
- Form data simulated (ready for integration)
- HTTPS-ready configuration

## 📝 License

Proprietary - SoundMind AI

## 🤝 Support

For questions or issues, contact the development team.
