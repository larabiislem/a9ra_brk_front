import Link from "next/link"
import { ShoppingBag, GraduationCap } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#94a6ff]/30 to-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between border-b">
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

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-[#5570f1] font-medium">
            Log In
          </Link>
          <Link
            href="/signup"
            className="bg-[#5570f1] text-white px-6 py-2 rounded-full font-medium hover:bg-[#5570f1]/90 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-2xl">
            {/* Logo */}
            <div className="flex items-center gap-4 mb-8">
              <div className="text-[#5570f1]">
                <svg width="80" height="80" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <span className="text-5xl font-bold text-black">AQRA</span>
                <span className="ml-2 text-sm bg-[#94a6ff] text-white px-2 py-1 rounded-full">PRK</span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">Learn. Hire. Grow.</h1>

            {/* Description */}
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              Our platform brings together education and employment. those who want to learn or teach get free access to
              high-quality courses and a smart hiring system designed to connect learning with real job opportunities.
              for companies, it's a chance to discover and recruit talent by exploring their actual skills in action.
              while access is free for learners, businesses pay to hire smarter because great recruitment is worth
              investing in.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup/company"
                className="flex items-center justify-center gap-2 border-2 border-[#5570f1] text-[#5570f1] px-6 py-3 rounded-full font-medium hover:bg-[#5570f1]/5 transition-colors"
              >
                <ShoppingBag size={20} />
                <span>Company</span>
              </Link>
              <Link
                href="/signup/student"
                className="flex items-center justify-center gap-2 bg-[#5570f1] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5570f1]/90 transition-colors"
              >
                <GraduationCap size={20} />
                <span>Student/Teacher</span>
              </Link>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
              >
                {/* Globe */}
                <circle cx="200" cy="200" r="150" stroke="#000" strokeWidth="2" fill="#f5f5f5" />
                <path
                  d="M100 200 A100 100 0 0 1 300 200 A100 100 0 0 1 100 200"
                  stroke="#5570f1"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M150 100 A100 100 0 0 1 150 300 A100 100 0 0 1 150 100"
                  stroke="#5570f1"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M250 100 A100 100 0 0 1 250 300 A100 100 0 0 1 250 100"
                  stroke="#5570f1"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M100 150 A100 100 0 0 0 300 150 A100 100 0 0 0 100 150"
                  stroke="#5570f1"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M100 250 A100 100 0 0 0 300 250 A100 100 0 0 0 100 250"
                  stroke="#5570f1"
                  strokeWidth="1.5"
                  fill="none"
                />

                {/* Laptop */}
                <rect x="120" y="220" width="160" height="120" rx="10" fill="#5570f1" />
                <rect x="130" y="230" width="140" height="90" rx="5" fill="white" />
                <rect x="100" y="340" width="200" height="10" rx="5" fill="#333" />

                {/* Book on screen */}
                <rect x="160" y="250" width="80" height="60" rx="2" fill="#f0f0f0" stroke="#5570f1" />
                <path d="M200 250 L200 310" stroke="#5570f1" strokeWidth="1" />
                <path d="M170 265 L190 265" stroke="#94a6ff" strokeWidth="2" />
                <path d="M170 275 L190 275" stroke="#94a6ff" strokeWidth="2" />
                <path d="M170 285 L190 285" stroke="#94a6ff" strokeWidth="2" />
                <path d="M210 265 L230 265" stroke="#94a6ff" strokeWidth="2" />
                <path d="M210 275 L230 275" stroke="#94a6ff" strokeWidth="2" />
                <path d="M210 285 L230 285" stroke="#94a6ff" strokeWidth="2" />

                {/* Camera */}
                <circle cx="200" cy="240" r="2" fill="#333" />
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
