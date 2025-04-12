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
  Settings,
  ChevronRight,
  Calendar,
  Clock,
  Star,
  Filter,
} from "lucide-react"

export default function MySessionsPage() {
  const [filterStatus, setFilterStatus] = useState<"all" | "upcoming" | "completed">("all")

  // Mock session data
  const sessions = [
    {
      id: "1",
      title: "Web Development Fundamentals: HTML & CSS Basics",
      instructor: "John Smith",
      date: "May 16, 2023",
      time: "2:00 PM - 3:30 PM",
      status: "upcoming",
      image: "/placeholder.svg?height=200&width=200",
      rating: null,
    },
    {
      id: "2",
      title: "JavaScript for Beginners",
      instructor: "Sarah Johnson",
      date: "May 14, 2023",
      time: "10:00 AM - 11:30 AM",
      status: "completed",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
    },
    {
      id: "3",
      title: "Responsive Design Principles",
      instructor: "Michael Chen",
      date: "May 10, 2023",
      time: "3:00 PM - 4:30 PM",
      status: "completed",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
    },
    {
      id: "4",
      title: "Introduction to React",
      instructor: "Emily Rodriguez",
      date: "May 18, 2023",
      time: "1:00 PM - 3:00 PM",
      status: "upcoming",
      image: "/placeholder.svg?height=200&width=200",
      rating: null,
    },
    {
      id: "5",
      title: "Backend Development with Node.js",
      instructor: "David Wilson",
      date: "May 8, 2023",
      time: "11:00 AM - 1:00 PM",
      status: "completed",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4,
    },
    {
      id: "6",
      title: "Database Design Fundamentals",
      instructor: "Lisa Thompson",
      date: "May 20, 2023",
      time: "9:00 AM - 11:00 AM",
      status: "upcoming",
      image: "/placeholder.svg?height=200&width=200",
      rating: null,
    },
  ]

  // Filter sessions based on status
  const filteredSessions = sessions.filter((session) => {
    if (filterStatus === "all") return true
    return session.status === filterStatus
  })

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
              <div className="h-10 w-10 rounded-full bg-[#5570f1] overflow-hidden">
                <img src="/placeholder.svg?height=40&width=40" alt="Profile" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">My Sessions</h1>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilterStatus("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  filterStatus === "all"
                    ? "bg-[#5570f1] text-white"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterStatus("upcoming")}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  filterStatus === "upcoming"
                    ? "bg-[#5570f1] text-white"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setFilterStatus("completed")}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  filterStatus === "completed"
                    ? "bg-[#5570f1] text-white"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                Completed
              </button>
              <button className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50">
                <Filter className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Sessions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSessions.map((session) => (
              <div key={session.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-video bg-gray-100 relative">
                  <img
                    src={session.image || "/placeholder.svg"}
                    alt={session.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                      session.status === "upcoming" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {session.status === "upcoming" ? "Upcoming" : "Completed"}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{session.title}</h3>
                  <p className="text-gray-600 mb-3">with {session.instructor}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{session.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{session.time}</span>
                    </div>
                  </div>

                  {session.status === "completed" && (
                    <div className="flex items-center mb-4">
                      <div className="flex mr-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={16}
                            className={`${
                              star <= Math.round(session.rating || 0)
                                ? "fill-[#5570f1] text-[#5570f1]"
                                : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">{session.rating?.toFixed(1) || "Not rated"}</span>
                    </div>
                  )}

                  <div className="flex justify-end">
                    {session.status === "upcoming" ? (
                      <Link
                        href={`/dashboard/sessions/join/${session.id}`}
                        className="px-4 py-2 bg-[#5570f1] text-white rounded-lg text-sm font-medium hover:bg-[#4560e1] transition-colors"
                      >
                        Join Session
                      </Link>
                    ) : session.rating ? (
                      <Link
                        href={`/dashboard/sessions/details/${session.id}`}
                        className="flex items-center text-[#5570f1] hover:underline"
                      >
                        View Details
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    ) : (
                      <Link
                        href={`/dashboard/session-rating?id=${session.id}`}
                        className="px-4 py-2 border border-[#5570f1] text-[#5570f1] rounded-lg text-sm font-medium hover:bg-[#5570f1]/5 transition-colors"
                      >
                        Rate Session
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredSessions.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">No sessions found</h3>
              <p className="text-gray-500 mb-6">
                {filterStatus === "upcoming"
                  ? "You don't have any upcoming sessions."
                  : filterStatus === "completed"
                    ? "You haven't completed any sessions yet."
                    : "You haven't enrolled in any sessions yet."}
              </p>
              <Link
                href="/dashboard"
                className="px-4 py-2 bg-[#5570f1] text-white rounded-lg text-sm font-medium hover:bg-[#4560e1] transition-colors"
              >
                Explore Sessions
              </Link>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
