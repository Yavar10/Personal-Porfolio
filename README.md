# 🚀 Personal Portfolio Website

A modern, video-enhanced portfolio website built with React, featuring smooth animations, a looping background video, and a clean, professional design.

![Under Construction](https://img.shields.io/badge/Status-Under%20Construction-yellow)
![React](https://img.shields.io/badge/React-18+-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Cinematic Background Video**: Seamless looping video background with custom start/end points
- **Under Construction Banner**: Dismissible marquee notification system
- **Responsive Design**: Fully responsive layout that works on all devices
- **Component Architecture**: Modular design with reusable components
- **Tech Stack Showcase**: Animated technology logo carousel
- **Loading States**: Smooth loading indicators for better UX

## 🛠️ Tech Stack

- **React** - UI library
- **CSS3** - Styling and animations
- **Vite** - Build tool and dev server

## 📦 Project Structure

```
├── src/
│   ├── components/
│   │   ├── About/
│   │   ├── NavBar/
│   │   ├── Work/
│   │   ├── Footer/
│   │   └── TechLogoLoop.jsx
│   ├── assets/
│   │   └── x.svg
│   ├── App.jsx
│   └── App.css
└── public/
    └── [video files]
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yavar10/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎥 Video Background Configuration

The app features a smart video looping system that:
- Starts from the beginning (0s)
- Loops before the last 5.2 seconds to avoid end-screen artifacts
- Automatically handles video loading states
- Optimized for performance with proper event cleanup

## 📱 Components

### NavBar
Navigation bar component for site navigation

### About
Personal introduction and bio section

### TechLogoLoop
Animated carousel showcasing technical skills and tools

### Work
Portfolio projects and work showcase

### Footer
Contact information and social links

## 🎨 Customization

### Changing the Background Video

Replace the video file in the `public` directory and update the source path in `App.jsx`:

```jsx
<source src="/your-video-file.mp4" type="video/mp4" />
```

### Adjusting Loop Points

Modify the loop timing in the `useEffect` hook:

```jsx
const loopStart = 0; 
loopEnd = video.duration - 5.2; // Adjust the 5.2 value
```

### Styling

Edit `App.css` to customize colors, fonts, and layout according to your preferences.

## 🔧 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` directory.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

## 👤 Author

**Your Name**

- Website: [yavar-taupe.vercel.app](https://yavar-taupe.vercel.app)
- GitHub: [@yavar10](https://github.com/Yavar10/)
- LinkedIn: [@mohdyavar](https://linkedin.com/in/mohdyavar)

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Made with ❤️ and React