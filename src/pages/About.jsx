import { Users, Target, Award, Heart, Linkedin, Mail, Briefcase, Code, Lightbulb, Zap, Rocket, TrendingUp } from 'lucide-react'
import profileImage from '../assets/IMG20250608125155.jpg'
import { useState, useEffect } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'We work closely with clients to understand their unique needs',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for perfection in every project we undertake',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Integrity',
      description: 'We build trust through transparency and honest communication',
    },
  ]

  const skills = [
    { name: 'React & Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'Node.js & Express', level: 90, color: 'from-green-500 to-emerald-500' },
    { name: 'Python & Django', level: 88, color: 'from-yellow-500 to-orange-500' },
    { name: 'JavaScript & TypeScript', level: 92, color: 'from-purple-500 to-pink-500' },
    { name: 'MongoDB & PostgreSQL', level: 85, color: 'from-indigo-500 to-blue-500' },
    { name: 'AWS & Cloud Services', level: 80, color: 'from-orange-500 to-red-500' },
    { name: 'UI/UX Design', level: 88, color: 'from-pink-500 to-rose-500' },
    { name: 'DevOps & CI/CD', level: 82, color: 'from-teal-500 to-cyan-500' },
  ]

  const projects = [
    { name: 'Web Applications', count: 20, icon: <Code className="w-6 h-6" /> },
    { name: 'Mobile Apps', count: 2, icon: <Zap className="w-6 h-6" /> },
    { name: 'Cloud Solutions', count: 21, icon: <Rocket className="w-6 h-6" /> },
    { name: 'E-commerce Platforms', count: 3, icon: <TrendingUp className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            About R Tech Labs
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We are a leading software development company dedicated to
            delivering innovative solutions that drive business success
          </p>
        </div>

        {/* Story Section */}
        <div className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="card max-w-4xl mx-auto hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Rocket className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" />
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>
                R Tech Labs is a dynamic software development company that emerged from a passion 
                for creating innovative digital solutions. What started as a vision to bridge the 
                gap between cutting-edge technology and business needs has grown into a trusted 
                partner for businesses worldwide.
              </p>
              <p>
                We specialize in creating custom software solutions that solve
                real business problems. Our team combines technical expertise
                with business acumen to deliver products that not only work
                flawlessly but also drive measurable results.
              </p>
              <p>
                Today, we've completed numerous projects for clients ranging
                from startups to established companies. Our commitment to
                quality, innovation, and client success drives everything we do.
              </p>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Founder
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Visionary leader driving innovation and excellence in software development
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="card overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Founder Image/Profile */}
                <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
                  <div className="relative mb-6 group">
                    <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-xl ring-4 ring-primary-200 dark:ring-primary-800 transition-transform duration-300 group-hover:scale-105 group-hover:ring-primary-400 dark:group-hover:ring-primary-600">
                      <img
                        src={profileImage}
                        alt="Rajat Gayakwad - Founder & CEO"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary-600 dark:bg-primary-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900 animate-pulse">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Rajat Gayakwad
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">
                    Founder & CEO
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Founder Details */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Lightbulb className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 animate-pulse" />
                      Vision & Mission
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Rajat Gayakwad founded R Tech Labs with a vision to bridge the gap between 
                      cutting-edge technology and business needs. As a passionate technologist and 
                      entrepreneur, Rajat has been instrumental in building a company that 
                      delivers innovative solutions while maintaining the highest standards of quality 
                      and client satisfaction.
                    </p>
                  </div>

                  <div className="transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Code className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
                      Expertise & Leadership
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      As a passionate technologist and entrepreneur, Rajat brings a unique blend of 
                      technical expertise and business acumen. His leadership has guided R Tech Labs 
                      through continuous growth, establishing the company as a trusted partner for 
                      businesses worldwide.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border border-primary-200 dark:border-primary-800 hover:shadow-lg transition-all duration-300 hover:scale-105">
                        <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-1">
                          25+
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                          Projects Completed
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border border-primary-200 dark:border-primary-800 hover:shadow-lg transition-all duration-300 hover:scale-105">
                        <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-1">
                          10+
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                          Happy Clients
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Philosophy
                    </h4>
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 to-primary-600 rounded-full"></div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic pl-4">
                        "Technology should solve real problems and create value. At R Tech Labs, 
                        we don't just write code—we build solutions that transform businesses and 
                        empower our clients to achieve their goals."
                      </p>
                      <p className="text-gray-500 dark:text-gray-500 mt-2 text-sm pl-4 font-semibold">
                        — Rajat Gayakwad
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className={`mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and tools we master to deliver exceptional solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Stats Section */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Diverse range of successful projects across different domains
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 group"
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-2">
                  {project.count}+
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className={`mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className={`card max-w-4xl mx-auto hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Users className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" />
            Our Team
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
            Our team consists of experienced developers, designers, project
            managers, and business analysts who work together to deliver
            exceptional results. We believe in continuous learning and staying
            updated with the latest technologies and best practices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:shadow-xl">
                <span className="text-white text-2xl font-bold">5+</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Developers
              </h3>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:shadow-xl">
                <span className="text-white text-2xl font-bold">5+</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Designers
              </h3>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:shadow-xl">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Countries
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

