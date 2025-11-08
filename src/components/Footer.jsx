import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <ScrollReveal direction="up" delay={0}>
            <div className="col-span-1 md:col-span-2">
              <motion.div
                className="flex items-center space-x-2 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-white font-bold text-xl">R</span>
                </motion.div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Tech Labs
                </span>
              </motion.div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Leading software solutions provider delivering innovative technology
                services to businesses worldwide.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
                  { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
                  { icon: <Mail className="w-5 h-5" />, label: 'Email' },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal direction="up" delay={0.1}>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {[
                  { path: '/', label: 'Home' },
                  { path: '/about', label: 'About' },
                  { path: '/services', label: 'Services' },
                  { path: '/contact', label: 'Contact' },
                ].map((link, index) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal direction="up" delay={0.2}>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Contact
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                {[
                  'Email: info@rtechlabs.com',
                  'Phone: +91 8379070258',
                  'Address: Powai, Mumbai',
                ].map((info, index) => (
                  <motion.li
                    key={info}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {info}
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <motion.div
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p>&copy; {new Date().getFullYear()} R Tech Labs. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

