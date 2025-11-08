import { useState } from 'react'
import { Plus, Search, Mail, Phone, Building2, Edit, Trash2 } from 'lucide-react'

const Clients = () => {
  const [clients] = useState([
    {
      id: 1,
      name: 'Tech Corp',
      email: 'contact@techcorp.com',
      phone: '+1 (555) 123-4567',
      company: 'Tech Corp Inc',
      projects: 5,
      status: 'Active',
    },
    {
      id: 2,
      name: 'StartupXYZ',
      email: 'hello@startupxyz.com',
      phone: '+1 (555) 234-5678',
      company: 'StartupXYZ LLC',
      projects: 2,
      status: 'Active',
    },
    {
      id: 3,
      name: 'Business Inc',
      email: 'info@businessinc.com',
      phone: '+1 (555) 345-6789',
      company: 'Business Inc',
      projects: 8,
      status: 'Active',
    },
    {
      id: 4,
      name: 'Company ABC',
      email: 'contact@companyabc.com',
      phone: '+1 (555) 456-7890',
      company: 'Company ABC Corp',
      projects: 3,
      status: 'Active',
    },
    {
      id: 5,
      name: 'Enterprise Ltd',
      email: 'info@enterpriseltd.com',
      phone: '+1 (555) 567-8901',
      company: 'Enterprise Ltd',
      projects: 12,
      status: 'Active',
    },
  ])

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Clients
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage your client relationships
            </p>
          </div>
          <button className="btn-primary mt-4 sm:mt-0 inline-flex items-center">
            <Plus className="w-5 h-5 mr-2" />
            Add Client
          </button>
        </div>

        {/* Search */}
        <div className="card mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search clients..."
              className="input-field pl-10"
            />
          </div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client) => (
            <div key={client.id} className="card hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                  {client.status}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {client.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex items-center">
                <Building2 className="w-4 h-4 mr-2" />
                {client.company}
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Mail className="w-4 h-4 mr-2" />
                  {client.email}
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Phone className="w-4 h-4 mr-2" />
                  {client.phone}
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {client.projects} {client.projects === 1 ? 'project' : 'projects'}
                </span>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Clients

