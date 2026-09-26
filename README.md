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
│   ├── story/              # Scrollytelling homepage scenes
│   │   ├── hooks.ts        # Scroll progress, reduced motion, seeded layout helpers
│   │   ├── Starfield.tsx   # Fixed particle field that speeds up with scroll
│   │   ├── ChapterRail.tsx # Side chapter navigation
│   │   ├── SceneDive.tsx   # Hero: camera dives through a 3D "data room"
│   │   ├── SceneSignal.tsx # Illustrative insight brief + stats zoom
│   │   ├── SceneCapabilities.tsx # Z-axis corridor of capability panels
│   │   ├── SceneProcess.tsx      # Cover-flow Diagnose / Design / Deploy
│   │   ├── SceneIndustries.tsx   # Rotating 3D ring of industries
│   │   ├── SceneProof.tsx        # Testimonials + tilt-card differentiators
│   │   ├── SceneFinale.tsx       # Zoom-out CTA with sonar rings
│   │   └── StaticStory.tsx       # Reduced-motion fallback layout
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

## 🎯 Homepage Story

The homepage is a scroll-driven story. Each scene is a tall scroll track with a
sticky stage; scroll progress (framer-motion `useScroll`) drives a CSS 3D camera.

1. **The data room** - the camera flies through the hero headline and a tunnel of documents ("40,000 pages. Three weeks. One clause.") to a glowing signal
2. **The signal** - an illustrative SoundMind brief tilts in from depth, then the stats zoom toward the viewer
3. **Capabilities** - six panels arranged along the Z axis; scrolling moves the camera through each one
4. **Process** - Diagnose, Design, Deploy as a 3D cover-flow with a progress rail
5. **Industries** - a rotating 3D ring of industry cards
6. **Why us** - sector marquee, testimonials, and mouse-tilt differentiator cards
7. **Begin** - the camera pulls back from the closing headline to the CTAs and sample-report form

Visitors with `prefers-reduced-motion` get a static layout with the same content and anchors.
Copy lives in `lib/content.ts`; scene timing lives in each `Scene*.tsx` file.

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
