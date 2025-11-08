import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AdminLayout from './layouts/AdminLayout'
import { AnimatePresence } from 'framer-motion'
import AnimatedPage from './components/AnimatedPage'

// Public Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard'
import AdminProjects from './pages/admin/Projects'
import AdminClients from './pages/admin/Clients'
import AdminSettings from './pages/admin/Settings'

// Public Layout Component
const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <AnimatedPage>
          <Outlet />
        </AnimatedPage>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  )
}

function AppRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="clients" element={<AdminClients />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App

