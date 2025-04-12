"use client"

import Link from "next/link"
import { useState } from "react"
import { Search, Bell, Mail, Globe, User, Settings, Edit, LogOut, Plus } from "lucide-react"

export default function CompanyDashboardPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Sample data for teachers/professionals
  const professionals = [
    {
      id: 1,
      name: "Zidane Anais",
      title: "Back End Developer",
      rating: 4.98,
    },
    {
      id: 2,
      name: "Arab Rimel",
      title: "Graphic Designer",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Larabi Islem",
      title: "Back End Developer",
      rating: 4.0,
    },
    {
      id: 4,
      name: "Sekfali Rayan",
      title: "AI Engineer",
      rating: 3.7,
    },
    {
      id: 5,
      name: "Personne1",
      title: "Interpreter",
      rating: 3.2,
    },
    {
      id: 6,
      name: "Personne 2",
      title: "Law Student",
      rating: 2.0,
    },
    {
      id: 7,
      name: "Personne3",
      title: "Teacher",
      rating: 1.25,
    },
    {
      id: 8,
      name: "Personne 4",
      title: "Manager",
      rating: 0.9,
    },
  ]

  // Filter professionals based on search term
  const filteredProfessionals = professionals.filter(
    (pro) =>
      pro.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pro.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen bg-[#f8f9fd]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b">
          <Link href="/company/dashboard" className="flex items-center gap-2">
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
                href="/company/dashboard"
                className="flex items-center gap-3 px-6 py-3 text-white bg-[#5570f1] font-medium"
              >
                <Globe className="w-5 h-5" />
                <span>Explore</span>
              </Link>
            </li>
            <li>
              <Link
                href="/company/profile"
                className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-100 font-medium"
              >
                <User className="w-5 h-5" />
                <span>Profile</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Settings and Logout */}
        <div className="p-4 border-t">
          <Link
            href="/company/settings"
            className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-100 font-medium"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
          <Link
            href="/company/profile/edit"
            className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-100 font-medium"
          >
            <Edit className="w-5 h-5" />
            <span>Edit Profile</span>
          </Link>
          <Link href="/login" className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-100 font-medium">
            <LogOut className="w-5 h-5" />
            <span>Log Out</span>
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
              <h2 className="text-xl font-bold">Hi, Cosider</h2>
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
                  <h3 className="font-medium">Cosider</h3>
                  <p className="text-xs text-gray-500">Owner</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-[#5570f1] overflow-hidden">
                  <img src="/placeholder.svg?height=40&width=40" alt="Profile" className="h-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Mobile search - visible only on mobile */}
          <div className="relative mb-6 md:hidden">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search professionals..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#5570f1] focus:border-transparent"
            />
          </div>

          {/* Professionals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfessionals.map((professional) => (
              <div key={professional.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-[#5570f1]/10 mr-4">
                    <img
                      src="/placeholder.svg?height=64&width=64"
                      alt={professional.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{professional.name}</h3>
                    <p className="text-gray-600 text-sm">{professional.title}</p>
                    <div className="flex items-center mt-1">
                      <span
                        className={`font-bold ${
                          professional.rating >= 4
                            ? "text-green-500"
                            : professional.rating >= 3
                              ? "text-yellow-500"
                              : "text-red-500"
                        }`}
                      >
                        {professional.rating.toFixed(2)}
                      </span>
                      <span className="text-gray-500">/5</span>
                    </div>
                  </div>
                  <button className="w-8 h-8 rounded-full border border-[#5570f1] flex items-center justify-center text-[#5570f1] hover:bg-[#5570f1] hover:text-white transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No results message */}
          {filteredProfessionals.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No professionals found matching your search.</p>
              <button
                onClick={() => setSearchTerm("")}
                className="mt-4 px-4 py-2 bg-[#5570f1] text-white rounded-md hover:bg-[#5570f1]/90 transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
