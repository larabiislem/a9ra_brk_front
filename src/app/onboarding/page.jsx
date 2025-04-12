import Link from "next/link"
import { Search } from "lucide-react"

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#94a6ff]/30 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between border-b">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
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

        {/* Welcome message - visible on mobile and larger */}
        <div className="hidden sm:block">
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

        {/* User profile */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <h3 className="font-medium">Rimel Arab</h3>
            <p className="text-xs text-gray-500">Owner</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-[#5570f1] overflow-hidden">
            <img src="/placeholder.svg?height=40&width=40" alt="Profile" className="h-full w-full object-cover" />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-10">Pick Your Interest</h1>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          {/* Row 1 */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              History
            </button>
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              Web Developement
            </button>
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              Architecture
            </button>
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              Cyber Security
            </button>
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              Languages
            </button>
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              Design
            </button>
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              History
            </button>
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              Web Developement
            </button>
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              Architecture
            </button>
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              Cyber Security
            </button>
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              Languages
            </button>
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              Design
            </button>
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              History
            </button>
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              Web Developement
            </button>
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              Architecture
            </button>
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              Cyber Security
            </button>
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              Languages
            </button>
          </div>

          {/* Row 4 */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              Design
            </button>
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              History
            </button>
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              Web Developement
            </button>
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              Architecture
            </button>
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              Cyber Security
            </button>
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              Languages
            </button>
          </div>

          {/* Row 5 */}
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              Design
            </button>
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              History
            </button>
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              Web Developement
            </button>
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              Architecture
            </button>
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              Cyber Security
            </button>
            <button className="px-6 py-3 bg-[#d8e0ff] text-[#242331] rounded-full hover:bg-[#c5d0ff] transition-colors">
              Languages
            </button>
          </div>
        </div>

        {/* Next button */}
        <div className="flex justify-end mt-8">
          <Link
            href="/dashboard"
            className="px-10 py-3 bg-[#5570f1] text-white rounded-full font-medium hover:bg-[#5570f1]/90 transition-colors"
          >
            Next
          </Link>
        </div>
      </main>
    </div>
  )
}
