# Fairy Forest - Parallax Effect with Next.js

A beautiful parallax scrolling website featuring a fairy forest theme, built with Next.js 15 and modern web technologies.

## Features

- 🎨 Stunning parallax scrolling effects
- ✨ Interactive particle animations
- 🖼️ Layered background images
- 📱 Responsive design
- ⚡ Built with Next.js 15
- 🎯 TypeScript support
- 🎭 GSAP animations
- 🎨 CSS Modules

## Technologies Used

- Next.js 15
- React
- TypeScript
- GSAP (GreenSock Animation Platform)
- CSS Modules
- HTML5 Canvas

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd fairy-forest-next
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
fairy-forest-next/
├── public/
│   ├── img/           # Background images and assets
│   └── fonts/         # Custom fonts
├── src/
│   ├── app/          # Next.js app directory
│   │   ├── page.tsx  # Main page component
│   │   └── layout.tsx # Root layout
│   └── components/   # React components
│       └── Particles.tsx # Particle animation component
└── package.json
```

## Features Implementation

### Parallax Effect
The parallax effect is implemented using GSAP's ScrollTrigger and ScrollSmoother plugins, creating a smooth scrolling experience with layered backgrounds.

### Particle Animation
The particle effect is created using HTML5 Canvas and React hooks, providing an interactive and dynamic background animation.

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Original design by GdoubleA
- Converted to Next.js by [Your Name]
