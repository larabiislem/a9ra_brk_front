import Link from "next/link"
import { ArrowLeft, GraduationCap, Building2 } from "lucide-react"

export default function SignupOptionsPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left gradient background */}
      <div className="hidden md:block w-1/4 bg-gradient-to-br from-[#94a6ff] to-[#5570f1]/30"></div>

      {/* Main content */}
      <div className="flex-1 bg-[#f6f6f6] flex flex-col items-center px-4 py-8">
        <div className="w-full max-w-md">
          {/* Back button */}
          <Link href="/" className="inline-block mb-8">
            <ArrowLeft className="text-[#242331]" />
          </Link>

          {/* Logo */}
          <div className="flex justify-center mb-10">
            <div className="relative flex items-center">
              <div className="text-[#5570f1]">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <div className="ml-2 flex items-center">
                <span className="text-4xl font-bold text-[#000000]">AQRA</span>
                <span className="ml-1 text-xs bg-[#94a6ff] text-white px-2 py-1 rounded-full">PRK</span>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-center text-2xl font-bold text-[#242331] mb-8">Choose Account Type</h1>

          {/* Account Type Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Student/Teacher Option */}
            <Link
              href="/signup/student"
              className="bg-white rounded-lg p-6 border border-transparent hover:border-[#5570f1] transition-colors flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#e1e6ff] flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-[#5570f1]" />
              </div>
              <h2 className="text-lg font-bold mb-2">Student/Teacher</h2>
              <p className="text-gray-600 text-sm">
                Learn, teach, and connect with others. Free access to courses and resources.
              </p>
            </Link>

            {/* Company Option */}
            <Link
              href="/signup/company"
              className="bg-white rounded-lg p-6 border border-transparent hover:border-[#5570f1] transition-colors flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#e1e6ff] flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-[#5570f1]" />
              </div>
              <h2 className="text-lg font-bold mb-2">Company</h2>
              <p className="text-gray-600 text-sm">
                Find top talent, view ratings, and connect with skilled professionals.
              </p>
            </Link>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-[#c5c5c5]"></div>
            <span className="px-4 text-[#a6a0a0]">or</span>
            <div className="flex-1 border-t border-[#c5c5c5]"></div>
          </div>

          {/* Login link */}
          <p className="text-center text-[#242331]">
            Already have an account?{" "}
            <Link href="/login" className="text-[#5570f1] font-medium">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
