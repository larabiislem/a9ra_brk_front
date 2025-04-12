import Link from "next/link"
import { Search, Bell, Mail, Globe, BookOpen, Layers, User, Award, Settings, ChevronDown } from "lucide-react"

export default function CollectionPage() {
  return (
    <div className="flex min-h-screen bg-[#f8f9fd]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="text-[#5570f1]">
              <svg width="32" height="32" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 10C15 7.79086 16.7909 6 19 6H41C43.2091 6 45 7.79086 45 10V50C45 52.2091 43.2091 54 41 54H19C16.7909 54 15 52.2091 15 50V10Z"
                  fill="#5570f1"
                />
                <path
                  d="M30 6V54M15 10C15 7.79086 16.7909 6 19 6H41C43.2091 6 45 7.79086 45 10V50C45 52.2091 43.2091 54 41 54H19C16.7909 54 15 52.2091 15 50V10Z"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="flex items-center">
              <span className="text-xl font-bold text-black">AQRA</span>
              <span className="ml-1 text-xs bg-[#94a6ff] text-white px-1.5 py-0.5 rounded-full">PRK</span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6">
          <ul className="space-y-2">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-100 font-medium"
              >
                <Globe className="w-5 h-5" />
                <span>Explore</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/collection"
                className="flex items-center gap-3 px-6 py-3 text-white bg-[#5570f1] font-medium"
              >
                <BookOpen className="w-5 h-5" />
                <span>My Collection</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/courses"
                className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-100 font-medium"
              >
                <Layers className="w-5 h-5" />
                <span>My Courses</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/profile"
                className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-100 font-medium"
              >
                <User className="w-5 h-5" />
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/exams"
                className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-100 font-medium"
              >
                <Award className="w-5 h-5" />
                <span>Exams</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Settings */}
        <div className="p-4 border-t">
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-100 font-medium"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b py-4 px-6">
          <div className="flex items-center justify-between">
            {/* Welcome message - visible on mobile and larger */}
            <div>
              <h2 className="text-xl font-bold">Hi, Rimel</h2>
              <p className="text-sm text-gray-500">Let's push your rating today</p>
            </div>

            {/* Search bar */}
            <div className="relative hidden md:block w-1/3 max-w-md">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#5570f1] focus:border-transparent"
              />
            </div>

            {/* User actions */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 h-5 w-5 flex items-center justify-center bg-red-500 text-white text-xs rounded-full">
                  1
                </span>
              </button>
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <Mail className="w-6 h-6" />
                <span className="absolute top-0 right-0 h-5 w-5 flex items-center justify-center bg-red-500 text-white text-xs rounded-full">
                  3
                </span>
              </button>
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <h3 className="font-medium">Rimel Arab</h3>
                  <p className="text-xs text-gray-500">Owner</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-[#5570f1] overflow-hidden">
                  <img src="/placeholder.svg?height=40&width=40" alt="Profile" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Collection Card 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Content"
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">Main Title</h3>
                  <span className="text-green-500 text-sm">Online</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  small description of what he gonna present in the sessions...
                </p>
                <div className="flex justify-end">
                  <button className="text-[#5570f1]">
                    <ChevronDown className="w-5 h-5 transform rotate-270" />
                  </button>
                </div>
              </div>
            </div>

            {/* Collection Card 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Content"
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">Main Title</h3>
                  <span className="text-red-500 text-sm">Recorded</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  small description of what he gonna present in the sessions...
                </p>
                <div className="flex justify-end">
                  <button className="text-[#5570f1]">
                    <ChevronDown className="w-5 h-5 transform rotate-270" />
                  </button>
                </div>
              </div>
            </div>

            {/* Collection Card 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Content"
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">Main Title</h3>
                  <span className="text-green-500 text-sm">Online</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  small description of what he gonna present in the sessions...
                </p>
                <div className="flex justify-end">
                  <button className="text-[#5570f1]">
                    <ChevronDown className="w-5 h-5 transform rotate-270" />
                  </button>
                </div>
              </div>
            </div>

            {/* Collection Card 4 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Content"
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">Main Title</h3>
                  <span className="text-red-500 text-sm">Recorded</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  small description of what he gonna present in the sessions...
                </p>
                <div className="flex justify-end">
                  <button className="text-[#5570f1]">
                    <ChevronDown className="w-5 h-5 transform rotate-270" />
                  </button>
                </div>
              </div>
            </div>

            {/* Collection Card 5 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Content"
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">Main Title</h3>
                  <span className="text-green-500 text-sm">Online</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  small description of what he gonna present in the sessions...
                </p>
                <div className="flex justify-end">
                  <button className="text-[#5570f1]">
                    <ChevronDown className="w-5 h-5 transform rotate-270" />
                  </button>
                </div>
              </div>
            </div>

            {/* Collection Card 6 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Content"
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">Main Title</h3>
                  <span className="text-green-500 text-sm">Online</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  small description of what he gonna present in the sessions...
                </p>
                <div className="flex justify-end">
                  <button className="text-[#5570f1]">
                    <ChevronDown className="w-5 h-5 transform rotate-270" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
