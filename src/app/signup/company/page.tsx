import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CompanySignupPage() {
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
          <h1 className="text-center text-2xl font-bold text-[#242331] mb-8">
            Company <span className="text-[#5570f1]">Premium</span> Subscription
          </h1>

          {/* Subscription Info */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-xl font-bold text-[#5570f1] mb-4">Premium Benefits</h2>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-[#5570f1] mr-2">✓</span>
                <span>Access to teacher and professional ratings</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5570f1] mr-2">✓</span>
                <span>Direct contact with top talent</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5570f1] mr-2">✓</span>
                <span>Advanced filtering and search options</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5570f1] mr-2">✓</span>
                <span>Exclusive hiring events</span>
              </li>
            </ul>
            <div className="flex justify-between items-center border-t pt-4">
              <div>
                <span className="text-2xl font-bold text-[#242331]">$99</span>
                <span className="text-gray-500 ml-1">/month</span>
              </div>
              <span className="text-sm text-gray-500">Cancel anytime</span>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4" action="/company/dashboard">
            <div>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-3 border border-[#c5c5c5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5570f1]"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Business Email Address"
                className="w-full p-3 border border-[#c5c5c5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5570f1]"
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Business Phone"
                className="w-full p-3 border border-[#c5c5c5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5570f1]"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-[#c5c5c5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5570f1]"
              />
            </div>

            <div className="flex items-start">
              <input type="checkbox" id="terms" className="mt-1" />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to the{" "}
                <Link href="/terms" className="text-[#5570f1]">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-[#5570f1]">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#5570f1] text-white py-3 rounded-md hover:bg-[#5570f1]/90 transition-colors"
            >
              Subscribe & Create Account
            </button>
          </form>

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
