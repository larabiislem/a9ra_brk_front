"use client"

import Link from "next/link"
import { useState } from "react"
import {
  Search,
  Bell,
  Mail,
  Globe,
  BookOpen,
  Layers,
  User,
  Award,
  Settings,
  ChevronRight,
  Target,
  Video,
  Headphones,
  FileText,
} from "lucide-react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"videos" | "podcasts" | "documents">("videos")

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
                className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-100 font-medium"
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
                className="flex items-center gap-3 px-6 py-3 text-white bg-[#5570f1] font-medium"
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
          <div className="max-w-5xl mx-auto">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#5570f1]/20 bg-[#5570f1]/10">
                  <img
                    src="/placeholder.svg?height=112&width=112"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <h1 className="text-2xl font-bold mb-2">Rimel Arab</h1>
                <p className="text-gray-600 mb-1">rimelarab@gmail.com</p>
                <p className="text-[#5570f1] mb-4">https://www.linkedin.com/rimelarab</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Filed1</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Field2</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Field3</span>
                </div>

                <div className="mb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="w-5 h-5 text-[#5570f1]" />
                    <h2 className="font-bold">Top Skills</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Filed1</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Field2</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Field3</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Tabs */}
            <div className="mb-8">
              <div className="flex rounded-lg overflow-hidden border border-gray-200">
                <button
                  className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 ${
                    activeTab === "videos"
                      ? "bg-white text-gray-800"
                      : "bg-[#5570f1] text-white hover:bg-[#4560e1] transition-colors"
                  }`}
                  onClick={() => setActiveTab("videos")}
                >
                  <Video className="w-5 h-5" />
                  <span>Videos</span>
                </button>
                <button
                  className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 ${
                    activeTab === "podcasts"
                      ? "bg-white text-gray-800"
                      : "bg-[#5570f1] text-white hover:bg-[#4560e1] transition-colors"
                  }`}
                  onClick={() => setActiveTab("podcasts")}
                >
                  <Headphones className="w-5 h-5" />
                  <span>Podcasts</span>
                </button>
                <button
                  className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 ${
                    activeTab === "documents"
                      ? "bg-white text-gray-800"
                      : "bg-[#5570f1] text-white hover:bg-[#4560e1] transition-colors"
                  }`}
                  onClick={() => setActiveTab("documents")}
                >
                  <FileText className="w-5 h-5" />
                  <span>Documents</span>
                </button>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Course Card 1 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="aspect-square bg-gray-50 rounded-lg mb-4 flex items-center justify-center">
                    <DevicesIllustration />
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">Main Title</h3>
                    <span className="text-green-500 text-sm">Online</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    small description of what he gonna present in the sessions...
                  </p>
                </div>
                <div className="flex justify-end p-4 border-t">
                  <button className="text-[#5570f1]">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Course Card 2 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="aspect-square bg-gray-50 rounded-lg mb-4 flex items-center justify-center">
                    <DevicesIllustration />
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">Main Title</h3>
                    <span className="text-red-500 text-sm">Recorded</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    small description of what he gonna present in the sessions...
                  </p>
                </div>
                <div className="flex justify-end p-4 border-t">
                  <button className="text-[#5570f1]">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Course Card 3 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="aspect-square bg-gray-50 rounded-lg mb-4 flex items-center justify-center">
                    <DevicesIllustration />
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">Main Title</h3>
                    <span className="text-green-500 text-sm">Online</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    small description of what he gonna present in the sessions...
                  </p>
                </div>
                <div className="flex justify-end p-4 border-t">
                  <button className="text-[#5570f1]">
                    <ChevronRight className="w-5 h-5" />
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

// Custom component for the devices illustration
function DevicesIllustration() {
  return (
    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(10, 10) scale(0.85)">
        {/* Computer */}
        <rect x="30" y="40" width="60" height="45" rx="5" fill="#E1E6FF" stroke="#5570f1" strokeWidth="2" />
        <rect x="35" y="45" width="50" height="30" rx="2" fill="white" stroke="#5570f1" strokeWidth="1" />
        <rect x="45" y="85" width="30" height="5" rx="2" fill="#5570f1" />

        {/* Tablet */}
        <rect x="100" y="50" width="40" height="50" rx="4" fill="#E1E6FF" stroke="#5570f1" strokeWidth="2" />
        <rect x="105" y="55" width="30" height="35" rx="2" fill="white" stroke="#5570f1" strokeWidth="1" />
        <circle cx="120" cy="95" r="2" fill="#5570f1" />

        {/* Phone */}
        <rect x="70" y="10" width="25" height="40" rx="4" fill="#E1E6FF" stroke="#5570f1" strokeWidth="2" />
        <rect x="73" y="15" width="19" height="25" rx="1" fill="white" stroke="#5570f1" strokeWidth="1" />
        <circle cx="82.5" cy="45" r="2" fill="#5570f1" />

        {/* Connection lines */}
        <path d="M70 30 L50 45" stroke="#94A6FF" strokeWidth="1.5" strokeDasharray="2 2" />
        <path d="M95 30 L110 50" stroke="#94A6FF" strokeWidth="1.5" strokeDasharray="2 2" />
        <path d="M90 60 L100 70" stroke="#94A6FF" strokeWidth="1.5" strokeDasharray="2 2" />

        {/* Connection dots */}
        <circle cx="70" cy="30" r="3" fill="#94A6FF" />
        <circle cx="50" cy="45" r="3" fill="#94A6FF" />
        <circle cx="95" cy="30" r="3" fill="#94A6FF" />
        <circle cx="110" cy="50" r="3" fill="#94A6FF" />
        <circle cx="90" cy="60" r="3" fill="#94A6FF" />
        <circle cx="100" cy="70" r="3" fill="#94A6FF" />

        {/* Smiley faces */}
        <circle cx="60" cy="60" r="8" fill="#94A6FF" opacity="0.5" />
        <path d="M56 58 L58 58 M62 58 L64 58 M57 63 C58 65, 62 65, 63 63" stroke="#5570f1" strokeWidth="1" />

        <circle cx="120" cy="72" r="6" fill="#94A6FF" opacity="0.5" />
        <path d="M117 71 L118 71 M122 71 L123 71 M118 74 C119 75, 121 75, 122 74" stroke="#5570f1" strokeWidth="1" />

        <circle cx="82.5" cy="27" r="5" fill="#94A6FF" opacity="0.5" />
        <path d="M80 26 L81 26 M84 26 L85 26 M81 29 C82 30, 83 30, 84 29" stroke="#5570f1" strokeWidth="1" />
      </g>
    </svg>
  )
}
