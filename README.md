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
│   ├── Navbar.tsx          # Fixed navigation with scroll progress bar
│   ├── ContactModal.tsx    # Contact form modal
│   ├── Footer.tsx          # Footer navigation
│   ├── story/              # Homepage sections
│   │   ├── hooks.ts        # Reduced motion, reveal-on-view motion props, Unsplash image loader
│   │   ├── Starfield.tsx   # Fixed particle field that speeds up with scroll
│   │   ├── ChapterRail.tsx # Side chapter navigation
│   │   ├── Hero.tsx        # Full-bleed photo slideshow hero with Ken Burns motion
│   │   ├── SceneSignal.tsx # "40,000 pages" beats, illustrative insight brief, stats
│   │   ├── SceneCapabilities.tsx # Capability card grid
│   │   ├── SceneProcess.tsx      # Diagnose / Design / Deploy
│   │   ├── SceneIndustries.tsx   # Industry card grid
│   │   ├── SceneProof.tsx        # Testimonials + tilt-card differentiators
│   │   └── SceneFinale.tsx       # CTA over a photo backdrop, sample-report form
│   └── shared/             # Button, Card, Container
├── lib/
│   ├── content.ts          # All homepage copy and data
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

## 🎯 Homepage

The homepage is about seven screens long on desktop. Nothing is scroll-jacked: sections are
ordinary page flow, and cards tilt up out of depth (framer-motion `whileInView`) as they arrive.

1. **Hero** - full-bleed photo slideshow (data centers, financial markets, capital markets, renewables,
   commercial development) with a slow Ken Burns zoom, a navy color grade, and a pause control
2. **The signal** - "40,000 pages. Three weeks. One clause. We find it." beats, then an illustrative
   SoundMind brief that swings in beside the headline stats
3. **Capabilities**, 4. **Process**, 5. **Industries** - card grids (swipeable rows on phones)
6. **Why us** - sector marquee, testimonials, and mouse-tilt differentiator cards
7. **Begin** - closing CTA over a parallax city photo, plus the sample-report form

Visitors with `prefers-reduced-motion` get the same page with animations and slideshow autoplay off.
Copy lives in `lib/content.ts`.

### Photos

Hero and closing photos are listed in `lib/content.ts` (`HERO_SLIDES`, `FINALE_IMAGE`). They are
[Unsplash License](https://unsplash.com/license) photos served from the Unsplash CDN, sized per device by
`unsplashLoader` in `components/story/hooks.ts`. To swap one, replace its `src` with another
`https://images.unsplash.com/photo-...` URL. A photo that fails to load drops out of the rotation
and the navy backdrop shows instead.

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
