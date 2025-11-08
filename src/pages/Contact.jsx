import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'info@rtechlabs.com',
      link: 'mailto:info@rtechlabs.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '+91 8379070258',
      link: 'tel:+8379070258',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      content: 'Powai, Mumbai',
      link: '#',
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-16">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Get In Touch
            </motion.h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Have a project in mind? We'd love to hear from you. Send us a
              message and we'll respond as soon as possible.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={index} direction="left" delay={index * 0.1}>
                <motion.a
                  href={info.link}
                  className="card block group"
                  whileHover={{ y: -8, scale: 1.02, x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="text-primary-600 dark:text-primary-400 flex-shrink-0"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      {info.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ScrollReveal direction="right" delay={0.2}>
              <motion.div
                className="card"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {submitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="input-field resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                    <motion.button
                      type="submit"
                      className="btn-primary w-full md:w-auto inline-flex items-center justify-center group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

