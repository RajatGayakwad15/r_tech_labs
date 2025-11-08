import { Users, FolderOpen, DollarSign, TrendingUp, Activity, Clock } from 'lucide-react'

const Dashboard = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Total Clients',
      value: '245',
      change: '+12%',
      positive: true,
    },
    {
      icon: <FolderOpen className="w-6 h-6" />,
      title: 'Active Projects',
      value: '38',
      change: '+5%',
      positive: true,
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Revenue',
      value: '$125K',
      change: '+18%',
      positive: true,
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Growth',
      value: '24%',
      change: '+3%',
      positive: true,
    },
  ]

  const recentProjects = [
    { id: 1, name: 'E-commerce Platform', client: 'Tech Corp', status: 'In Progress', progress: 75 },
    { id: 2, name: 'Mobile App', client: 'StartupXYZ', status: 'In Progress', progress: 45 },
    { id: 3, name: 'Web Dashboard', client: 'Business Inc', status: 'Completed', progress: 100 },
    { id: 4, name: 'API Integration', client: 'Company ABC', status: 'In Progress', progress: 60 },
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome back! Here's what's happening with your business today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="card">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                  {stat.icon}
                </div>
                <span
                  className={`text-sm font-semibold ${
                    stat.positive
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-red-600 dark:text-red-400'
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {stat.title}
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Recent Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Recent Projects
              </h2>
              <Activity className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </div>
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <div
                  key={project.id}
                  className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {project.name}
                    </h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        project.status === 'Completed'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {project.client}
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-primary-600 dark:bg-primary-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {project.progress}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Recent Activity
              </h2>
              <Clock className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </div>
            <div className="space-y-4">
              {[
                { action: 'New project created', time: '2 hours ago', type: 'project' },
                { action: 'Client payment received', time: '5 hours ago', type: 'payment' },
                { action: 'Project milestone completed', time: '1 day ago', type: 'milestone' },
                { action: 'New client registered', time: '2 days ago', type: 'client' },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0"
                >
                  <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 dark:text-white">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

