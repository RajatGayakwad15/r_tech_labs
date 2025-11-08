import { Code, Smartphone, Cloud, Database, Shield, Zap, Palette, BarChart } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Web Development',
      description: 'Custom web applications built with React, Vue, Angular, and other modern frameworks. Responsive, fast, and scalable solutions.',
      features: ['Frontend Development', 'Backend Development', 'Full-Stack Solutions', 'API Development'],
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'Mobile App Development',
      description: 'Native iOS and Android apps, as well as cross-platform solutions using React Native and Flutter.',
      features: ['iOS Development', 'Android Development', 'Cross-Platform', 'App Maintenance'],
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure setup, migration, and management on AWS, Azure, and Google Cloud Platform.',
      features: ['Cloud Migration', 'DevOps', 'Infrastructure Setup', 'Cloud Security'],
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: 'Database Solutions',
      description: 'Database design, optimization, and management for optimal performance and scalability.',
      features: ['Database Design', 'Performance Optimization', 'Data Migration', 'Backup & Recovery'],
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Security Services',
      description: 'Comprehensive security audits, penetration testing, and implementation of security best practices.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Security Training'],
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Performance Optimization',
      description: 'Improve application speed, efficiency, and user experience through comprehensive optimization.',
      features: ['Code Optimization', 'Load Testing', 'Caching Strategies', 'CDN Setup'],
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces designed with user experience and conversion in mind.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: 'Analytics & Reporting',
      description: 'Data analytics solutions to help you make informed business decisions.',
      features: ['Business Intelligence', 'Custom Dashboards', 'Data Visualization', 'Reporting Tools'],
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive software solutions tailored to meet your business
            needs and drive growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="card hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-primary-600 dark:text-primary-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-600 dark:text-gray-400"
                  >
                    <span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="card max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your needs' },
              { step: '02', title: 'Planning', desc: 'Designing the solution' },
              { step: '03', title: 'Development', desc: 'Building with quality' },
              { step: '04', title: 'Launch', desc: 'Deploying and supporting' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 dark:bg-primary-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

