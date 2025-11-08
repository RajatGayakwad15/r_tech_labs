import { Link } from 'react-router-dom'
import { ArrowRight, Code, Smartphone, Cloud, Shield, Zap, Briefcase, User, Lightbulb, Quote, ChevronDown, HelpCircle } from 'lucide-react'
import profileImage from '../assets/IMG20250608125155.jpg'
import { useState, useEffect } from 'react'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security',
      description: 'Enterprise-grade security and compliance',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimized applications for speed and efficiency',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Innovative Software
              <span className="text-primary-600 dark:text-primary-400 block">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              We build cutting-edge software solutions that drive business
              growth and digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/services" className="btn-secondary inline-flex items-center justify-center">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive software solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                25+
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-400">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                10+
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-400">
                Happy Clients
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                2+
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-400">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Philosophy Section */}
      <section className={`py-20 bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Decorative Quote Icon */}
            <div className="absolute -top-8 -left-8 w-24 h-24 text-primary-200 dark:text-primary-900/30 opacity-50">
              <Quote className="w-full h-full" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 text-primary-200 dark:text-primary-900/30 opacity-50 rotate-180">
              <Quote className="w-full h-full" />
            </div>

            {/* Philosophy Card */}
            <div className="card relative overflow-hidden border-2 border-primary-200 dark:border-primary-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              {/* Gradient Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent dark:from-primary-900/10 pointer-events-none"></div>
              
              <div className="relative p-8 md:p-12">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Philosophy Text */}
                <blockquote className="text-center mb-8">
                  <p className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white leading-relaxed mb-6 italic">
                    <span className="text-primary-600 dark:text-primary-400 text-4xl md:text-5xl font-serif leading-none mr-2">"</span>
                    Technology should solve real problems and create value. At R Tech Labs, 
                    we don't just write code—we build solutions that transform businesses and 
                    empower our clients to achieve their goals.
                    <span className="text-primary-600 dark:text-primary-400 text-4xl md:text-5xl font-serif leading-none ml-2">"</span>
                  </p>
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4 pt-6 border-t border-primary-200 dark:border-primary-800">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-md">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-900 dark:text-white text-lg">
                      Rajat Gayakwad
                    </p>
                    <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                      Founder & CEO, R Tech Labs
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary-200/20 dark:bg-primary-800/20 rounded-full blur-3xl -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary-200/20 dark:bg-primary-800/20 rounded-full blur-3xl translate-x-16 translate-y-16"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      {/* <section className={`py-20 bg-white dark:bg-gray-900 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Founder
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Visionary leader driving innovation and excellence in software development
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="card overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                
                <div className="flex justify-center lg:justify-start">
                  <div className="relative">
                    <div className="w-64 h-64 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-primary-200 dark:ring-primary-800 transition-all duration-300 group-hover:scale-105 group-hover:ring-primary-400 dark:group-hover:ring-primary-600 group-hover:shadow-primary-500/50">
                      <img
                        src={profileImage}
                        alt="Rajat Gayakwad - Founder & CEO"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 rounded-full flex items-center justify-center shadow-xl border-4 border-white dark:border-gray-900 animate-pulse">
                      <Briefcase className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute top-4 left-4 w-16 h-16 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <User className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                </div>

              
                <div className="text-center lg:text-left space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                      Rajat Gayakwad
                    </h3>
                    <p className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-4">
                      Founder & CEO
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Lightbulb className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Rajat Gayakwad founded R Tech Labs with a vision to bridge the gap between 
                        cutting-edge technology and business needs. As a passionate technologist and 
                        entrepreneur, he leads the company in delivering innovative solutions.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border border-primary-200 dark:border-primary-800 hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-1">
                        500+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        Projects
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border border-primary-200 dark:border-primary-800 hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-1">
                        200+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        Clients
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      to="/about"
                      className="btn-primary inline-flex items-center justify-center group/btn hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Learn More About Us
                      <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQs Section */}
      <section className={`py-20 bg-white dark:bg-gray-900 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
              <HelpCircle className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about our services and processes
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'What services does R Tech Labs offer?',
                answer: 'We offer comprehensive software development services including web development, mobile app development, cloud solutions, UI/UX design, database management, and DevOps services. We provide end-to-end solutions from concept to deployment.',
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex enterprise application could take 3-6 months. We provide detailed timelines during the initial consultation and keep you updated throughout the development process.',
              },
              {
                question: 'What technologies do you work with?',
                answer: 'We work with modern technologies including React, Next.js, Node.js, Python, Django, MongoDB, PostgreSQL, AWS, and more. Our team stays updated with the latest frameworks and tools to deliver cutting-edge solutions.',
              },
              {
                question: 'Do you provide ongoing support and maintenance?',
                answer: 'Yes, we offer comprehensive support and maintenance services. This includes bug fixes, security updates, performance optimization, feature additions, and technical support. We have flexible support packages to meet your needs.',
              },
              {
                question: 'How do you ensure project quality?',
                answer: 'We follow industry best practices including code reviews, automated testing, continuous integration, and regular client feedback. Our team conducts thorough quality assurance testing before deployment to ensure your project meets the highest standards.',
              },
              {
                question: 'Can you work with our existing team?',
                answer: 'Absolutely! We excel at collaborating with in-house teams. We can integrate seamlessly with your existing workflows, provide technical guidance, and work as an extension of your team to deliver exceptional results.',
              },
              {
                question: 'What is your pricing model?',
                answer: 'We offer flexible pricing models including fixed-price projects, hourly rates, and dedicated team arrangements. Pricing depends on project scope, complexity, and requirements. We provide transparent quotes with no hidden costs.',
              },
              {
                question: 'How do I get started with a project?',
                answer: 'Getting started is easy! Simply contact us through our contact form or email. We\'ll schedule a consultation to understand your requirements, discuss your vision, and provide a detailed proposal. Once approved, we\'ll kick off the project immediately.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="card overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white pr-8 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center transition-all duration-300 ${openFaq === index ? 'bg-primary-600 dark:bg-primary-700 rotate-180' : ''}`}>
                    <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${openFaq === index ? 'text-white' : 'text-primary-600 dark:text-primary-400'}`} />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions CTA */}
          <div className="mt-12 text-center">
            <div className="card bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border-2 border-primary-200 dark:border-primary-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Still have questions?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We're here to help! Get in touch with our team.
              </p>
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center justify-center group/btn hover:scale-105 transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with
            innovative software solutions
          </p>
          <Link to="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

