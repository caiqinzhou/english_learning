# 🎨 English Learning Website for Kids

A colorful and interactive website designed to help children learn English alphabet writing with stroke animations, pronunciation, and printable practice sheets.

**🌐 Live Demo**: [https://caiqinzhou.github.io/english_learning/](https://caiqinzhou.github.io/english_learning/)

**中文名称**：儿童英文字母学习网站

## Features

### 🎨 Letter Writing Demonstration
- **Stroke-by-stroke animation** for all 26 letters (uppercase and lowercase)
- Clear visualization of writing direction and order
- Interactive replay controls
- Number indicators showing stroke sequence

### 📄 PDF Practice Sheet Generator
- Generate custom practice sheets with selected letters
- Standard four-line grid format suitable for children
- Includes stroke order numbers on example letters
- A4 paper format ready for printing
- Choose between uppercase, lowercase, or both

### 🔊 Audio Pronunciation
- Web Speech API integration for letter pronunciation
- Clear, child-friendly voice
- One-click playback for each letter

### ⭐ Reward System
- Confetti celebrations when completing animations
- Encouraging messages to motivate learning
- Smooth animations and transitions

### 📱 Responsive Design
- Fully responsive for both desktop and mobile devices
- Touch-friendly interface for tablets
- Optimized performance across all devices

## Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **PDF Generation**: jsPDF
- **Language**: TypeScript
- **Effects**: canvas-confetti

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── learn/             # Letter learning pages
│   │   ├── page.tsx       # Letter selection
│   │   └── [letter]/      # Individual letter page
│   ├── practice/          # PDF generator page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── LetterStroke.tsx   # Stroke animation component
│   ├── AudioPlayer.tsx    # Pronunciation player
│   ├── PDFGenerator.tsx   # PDF generation UI
│   └── RewardAnimation.tsx # Celebration effects
├── data/
│   └── letterStrokes.ts   # Letter stroke data (SVG paths)
└── lib/
    └── pdf-generator.ts   # PDF generation logic
```

## Features in Detail

### Letter Stroke Data
Each letter has precisely defined SVG paths for every stroke, ensuring accurate representation of proper writing technique. The data structure includes:
- Stroke paths (SVG path data)
- Stroke order (numerical sequence)
- Separate data for uppercase and lowercase

### PDF Practice Sheets
Generated practice sheets include:
- Four-line writing grid (top, middle, baseline, bottom)
- One example letter with stroke numbers
- Five empty grids for practice
- Professional A4 format (210mm × 297mm)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

**Quick Deploy**:
1. Create a GitHub repository named `english_learning`
2. Push code to GitHub
3. Enable GitHub Pages with GitHub Actions
4. Your site will be live at `https://caiqinzhou.github.io/english_learning/`

## 📸 Screenshots

### Home Page
![Home](docs/home-screenshot.png)

### Letter Learning
![Letter Learning](docs/learn-screenshot.png)

### PDF Generator
![PDF Generator](docs/pdf-screenshot.png)

## License

MIT

## Author

Created with ❤️ for children learning English
