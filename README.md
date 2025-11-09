![Portfolio Preview](https://github.com/pranav271103/portfolio-website/blob/016273a757380406b5445fa96f3565733ccc5a23/public/assets/nav-link-previews/about.png)

# Modern Portfolio Website

A stunning, interactive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a custom 3D interactive keyboard, smooth animations, and a clean, modern design.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-000?style=for-the-badge)](https://pranavsingh.site)
[![GitHub stars](https://img.shields.io/github/stars/pranav271103/portfolio-website?style=for-the-badge)](https://github.com/pranav271103/portfolio-website/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

## Features

- **3D Interactive Keyboard** - Custom-built with Spline for an engaging experience
- **Real-time Cursor Sharing** - See where other visitors are clicking
- **Dark/Light Mode** - With smooth theme transitions
- **Responsive Design** - Works on all device sizes
- **Performance Optimized** - Fast loading with Next.js
- **Type Safety** - Built with TypeScript
- **Modern UI** - Clean, minimalist design with subtle animations

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **3D & Animations**: Spline, Framer Motion, GSAP
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: React Context API
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pranav271103/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization

### Personal Information
Update your personal details in the following files:
- `src/data/config.ts` - Basic info, social links, and SEO
- `src/data/projects.tsx` - Your project showcase
- `src/data/skills.ts` - Your skills and expertise

### Theme Customization
Edit the theme colors in `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        // Add your custom colors here
      },
    },
  },
}
```

### 3D Keyboard Customization
1. Open your Spline project
2. Export the scene as a React component
3. Replace the existing keyboard component in `src/components/3d-keyboard`
4. Update interaction logic in `src/components/3d-keyboard/KeyboardInteractions.tsx`

## Project Structure

```
src/
├── app/                 # App router pages and layouts
├── components/          # Reusable UI components
│   ├── 3d-keyboard/     # Interactive 3D keyboard components
│   ├── sections/        # Page sections
│   └── ui/              # UI components
├── contexts/            # React contexts
├── data/                # Static data and configuration
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── styles/              # Global styles
├── types/               # TypeScript type definitions
└── utils/               # Helper utilities
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the repository to [Vercel](https://vercel.com/import)
3. Configure environment variables if needed
4. Deploy!

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` directory

## Contributing

Contributions are what make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Pranav Singh  
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/pranav271103)  
[![Portfolio](https://img.shields.io/badge/Portfolio-000?style=for-the-badge)](https://pranavsingh.site)

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Spline](https://spline.design/) for 3D assets
- [Framer Motion](https://www.framer.com/motion/) for animations

---
From [Pranav Singh](https://github.com/pranav271103)
