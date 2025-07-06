# Interactive Product Advertisement

A modern, responsive interactive advertising unit showcasing a fictional product with engaging animations and user interactions.

## Features

- **Mobile-First Responsive Design** - Optimized for all screen sizes
- **Scene-Based Architecture** - Three distinct scenes with smooth transitions
- **Interactive Product Gallery** - Swiper.js powered image carousel
- **Video Integration** - Context-aware video player positioning
- **Orientation Lock** - Landscape mode detection for mobile devices
- **Event Tracking** - Comprehensive user interaction monitoring
- **Modern Animations** - GSAP-powered smooth transitions

## Scenes

### Scene 1: Intro
- Displays product headline on page load
- Automatically transitions to gallery after 8 seconds
- Features animated entrance effects

### Scene 2: Gallery 
- Interactive product image carousel
- Pulsing CTA button
- Click any image to view related video

### Scene 3: Video
- Looping product video
- Dynamic positioning based on gallery interaction:
  - Slide 1 → Top-left video placement
  - Slide 2 → Top-right video placement  
  - Slide 3 → Bottom-left video placement
  - Slide 4 → Bottom-right video placement

## Technical Stack

- **JavaScript (ES6+)** - Modern class-based architecture
- **HTML5** - Semantic markup structure
- **SCSS** - Advanced styling with variables and mixins
- **Webpack** - Module bundling and asset processing
- **Swiper.js** - Touch-enabled gallery component
- **GSAP** - High-performance animations


## Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Lukk133/SampleShoesAd.git
cd RecTask

# Install dependencies
npm install
```

### Development
```bash
# Start development server
npm start

# Access at http://localhost:3000
```

### Production Build
```bash
# Build optimized bundle
npm run build

# Output in dist/ directory
```

## Event Tracking

The application tracks these user interactions:

- `ad_load` - Page loaded
- `window_resize` - Browser window resized
- `page_hide` - User leaves page/switches tabs
- `scene_change:intro` - Intro scene displayed
- `scene_change:gallery` - Gallery scene displayed  
- `scene_change:video` - Video scene displayed
- `user_interaction:slide_click:N` - Gallery slide N clicked
- `user_interaction:cta_click` - CTA button clicked

## Design Decisions

### Architecture
- **Component-based structure** for maintainability
- **Scene pattern** for clear state management
- **Event-driven interactions** for responsive user experience

### Performance
- **Mobile-first approach** ensures optimal mobile performance
- **CSS animations** with hardware acceleration
- **Webpack optimization** for minimal bundle size
- **Lazy loading** of assets where possible

### User Experience
- **Smooth transitions** between scenes using GSAP
- **Touch-friendly interactions** for mobile devices
- **Visual feedback** for all interactive elements
- **Accessibility considerations** with proper focus states

### Technical Choices
- **Webpack** chosen for its mature ecosystem and optimization features
- **SCSS** for advanced styling capabilities and maintainability
- **Swiper.js** for production-ready touch gallery functionality
- **GSAP** for high-performance animations with cross-browser compatibility

## Build Configuration

The webpack configuration includes:
- **ES6+ transpilation** via Babel
- **SCSS compilation** with auto-prefixing
- **Asset optimization** and compression
- **Development server** with hot reloading
- **Production optimization** with minification