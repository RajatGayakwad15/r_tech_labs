# R Tech Labs - Software Company Website

A modern, responsive React application built with Vite and Tailwind CSS featuring a beautiful UI with dark/light theme toggle, public pages, and a comprehensive admin panel.

## Features

- 🎨 **Modern UI Design** - Beautiful, responsive interface with smooth animations
- 🌓 **Dark/Light Theme** - Toggle between themes with sun/moon icon in navbar
- 📱 **Fully Responsive** - Works perfectly on all devices (mobile, tablet, desktop)
- 🏠 **Public Pages** - Home, About, Services, and Contact pages
- 👨‍💼 **Admin Panel** - Complete admin dashboard with projects, clients, and settings management
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎯 **Tailwind CSS** - Utility-first CSS framework for rapid UI development

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
r-tech-labs/
├── src/
│   ├── components/       # Reusable components (Navbar, Footer, etc.)
│   ├── contexts/         # React contexts (ThemeContext)
│   ├── layouts/          # Layout components (AdminLayout)
│   ├── pages/            # Page components
│   │   ├── admin/        # Admin panel pages
│   │   └── ...           # Public pages
│   ├── App.jsx           # Main app component with routing
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── postcss.config.js     # PostCSS configuration
```

## Theme Toggle

The theme toggle is located in the navbar. Click the sun icon to switch to dark mode (icon changes to moon), and click the moon icon to switch back to light mode (icon changes to sun). The theme preference is saved in localStorage.

## Pages

### Public Pages
- **Home** (`/`) - Landing page with hero section, services overview, and stats
- **About** (`/about`) - Company information, values, and team details
- **Services** (`/services`) - Detailed list of services offered
- **Contact** (`/contact`) - Contact form and company information

### Admin Panel
- **Dashboard** (`/admin`) - Overview with stats and recent activity
- **Projects** (`/admin/projects`) - Project management interface
- **Clients** (`/admin/clients`) - Client management interface
- **Settings** (`/admin/settings`) - Admin settings and preferences

## Technologies Used

- **React 18** - UI library
- **React Router DOM** - Routing
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **PostCSS** - CSS processing

## License

MIT License

