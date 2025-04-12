"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Search,
  Bell,
  Mail,
  Globe,
  BookOpen,
  Layers,
  User,
  Award,
  SettingsIcon,
  Lock,
  BellIcon,
  Eye,
  EyeOff,
  LogOut,
  ChevronRight,
} from "lucide-react"

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false)

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
            className="flex items-center gap-3 px-6 py-3 text-white bg-[#5570f1] font-medium"
          >
            <SettingsIcon className="w-5 h-5" />
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
              <div className="h-10 w-10 rounded-full bg-[#5570f1] overflow-hidden">
                <img src="/placeholder.svg?height=40&width=40" alt="Profile" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Settings</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sidebar */}
              <div className="md:col-span-1">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <nav className="divide-y divide-gray-100">
                    <Link
                      href="/dashboard/settings"
                      className="flex items-center justify-between p-4 bg-[#5570f1]/5 border-l-4 border-[#5570f1]"
                    >
                      <div className="flex items-center">
                        <User className="w-5 h-5 text-[#5570f1] mr-3" />
                        <span className="font-medium">Account</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-[#5570f1]" />
                    </Link>
                    <Link href="/dashboard/settings/security" className="flex items-center justify-between p-4">
                      <div className="flex items-center">
                        <Lock className="w-5 h-5 text-gray-500 mr-3" />
                        <span>Security</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </Link>
                    <Link href="/dashboard/settings/notifications" className="flex items-center justify-between p-4">
                      <div className="flex items-center">
                        <BellIcon className="w-5 h-5 text-gray-500 mr-3" />
                        <span>Notifications</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </Link>
                    <Link href="/dashboard/settings/privacy" className="flex items-center justify-between p-4">
                      <div className="flex items-center">
                        <Eye className="w-5 h-5 text-gray-500 mr-3" />
                        <span>Privacy</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </Link>
                  </nav>
                  <div className="p-4 border-t">
                    <Link href="/login" className="flex items-center text-red-600 hover:text-red-700 font-medium">
                      <LogOut className="w-5 h-5 mr-3" />
                      <span>Log Out</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Main settings content */}
              <div className="md:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6 border-b">
                    <h2 className="text-lg font-bold mb-1">Account Settings</h2>
                    <p className="text-gray-500 text-sm">Manage your account information</p>
                  </div>

                  <form className="p-6 space-y-6">
                    {/* Profile picture */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Profile Picture</label>
                      <div className="flex items-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden bg-[#5570f1]/10 mr-4">
                          <img
                            src="/placeholder.svg?height=80&width=80"
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <button
                            type="button"
                            className="px-4 py-2 bg-[#5570f1] text-white rounded-lg text-sm font-medium hover:bg-[#4560e1] transition-colors"
                          >
                            Change Photo
                          </button>
                          <p className="text-xs text-gray-500 mt-1">JPG, GIF or PNG. Max size 2MB</p>
                        </div>
                      </div>
                    </div>

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        defaultValue="Rimel Arab"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5570f1]"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        defaultValue="rimelarab@gmail.com"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5570f1]"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        defaultValue="+1 (555) 123-4567"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5570f1]"
                      />
                    </div>

                    {/* Password */}
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          defaultValue="••••••••••••"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5570f1] pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Last changed 3 months ago</p>
                    </div>

                    {/* Save button */}
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-[#5570f1] text-white rounded-lg font-medium hover:bg-[#4560e1] transition-colors"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
