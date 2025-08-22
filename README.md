# 🏗️ Construction Website

A modern, multilingual construction company website built with Next.js, featuring beautiful animations and responsive design.

## ✨ Features

- **🌍 Multilingual Support** - Romanian, English, German, French, Spanish, Arabic, and Italian
- **🎨 Modern Design** - Construction-themed UI with orange/yellow color scheme
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile
- **✨ Rich Animations** - Smooth Framer Motion animations throughout
- **🖼️ Professional Gallery** - High-quality construction project images
- **📧 Contact Form** - Interactive contact form with validation

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - Latest React with hooks
- **Framer Motion** - Advanced animations and transitions
- **next-intl** - Internationalization support
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/[username]/construction-website.git
cd construction-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Available Languages

- **Romanian (ro)**
- **English (en)**
- **German (de)**
- **French (fr)**
- **Spanish (es)**
- **Arabic (ar)**
- **Italian (it)**

Access different languages via:
- Romanian: `http://localhost:3000/ro`
- English: `http://localhost:3000/en`

## 📱 Sections

- **Hero** - Eye-catching landing section with call-to-action
- **About** - Company information and statistics
- **Services** - Construction services offered
- **Projects** - Portfolio of completed projects
- **Contact** - Contact information and form

## 🎨 Animations

The website features extensive animations powered by Framer Motion:
- Fade-in effects on scroll
- Hover animations on cards and buttons
- Floating elements and rotating icons
- Smooth page transitions
- Interactive form elements

## 🛠️ Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
├── app/
│   ├── [locale]/          # Internationalized pages
│   ├── globals.css        # Global styles
│   └── layout.js          # Root layout
├── components/            # React components
├── messages/              # Translation files
├── public/               # Static assets
├── i18n.js              # Internationalization config
└── middleware.js        # Next.js middleware
```

## 🎯 Customization

### Colors
The construction theme uses these primary colors:
- Orange: `#FF6B35`
- Yellow: `#F7931E`
- Blue: `#004AAD`
- Dark: `#1F2937`

### Images
Replace images in the components with your own construction photos. Current images are sourced from Unsplash.

### Content
Update translations in the `messages/` directory:
- `messages/ro.json` - Romanian content
- `messages/en.json` - English content
- `messages/de.json` - German content
- `messages/fr.json` - French content
- `messages/es.json` - Spanish content
- `messages/ar.json` - Arabic content
- `messages/it.json` - Italian content

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ for the construction industry
