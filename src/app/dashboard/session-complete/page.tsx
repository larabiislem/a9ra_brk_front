"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle, ArrowLeft } from "lucide-react"
import SessionRatingModal from "@/components/session-rating-modal"

export default function SessionCompletePage() {
  const [showRatingModal, setShowRatingModal] = useState(true)
  const [hasRated, setHasRated] = useState(false)

  const handleRatingSubmit = (rating: number, feedback: string) => {
    // Here you would typically send the rating to your backend
    console.log("Rating submitted:", rating)
    console.log("Feedback:", feedback)
    setShowRatingModal(false)
    setHasRated(true)
  }

  return (
    <div className="min-h-screen bg-[#f8f9fd] p-4">
      <div className="max-w-2xl mx-auto">
        {/* Back button */}
        <Link href="/dashboard" className="inline-flex items-center text-[#5570f1] mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-[#5570f1]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-[#5570f1]" />
            </div>
            <h1 className="text-2xl font-bold text-[#242331] mb-2">Session Completed!</h1>
            <p className="text-gray-600 mb-6">
              You've successfully completed your Web Development Fundamentals session with John Smith.
            </p>

            {hasRated ? (
              <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6">
                <p className="font-medium">Thank you for your feedback!</p>
                <p className="text-sm">Your rating helps improve our platform for everyone.</p>
              </div>
            ) : (
              <button
                onClick={() => setShowRatingModal(true)}
                className="bg-[#5570f1] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#4560e1] transition-colors"
              >
                Rate This Session
              </button>
            )}

            <div className="mt-8 border-t pt-8">
              <h2 className="text-lg font-medium mb-4">Session Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-sm text-gray-500">Session</p>
                  <p className="font-medium">Web Development Fundamentals</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Instructor</p>
                  <p className="font-medium">John Smith</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date & Time</p>
                  <p className="font-medium">May 15, 2023 • 2:00 PM - 3:30 PM</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-medium">90 minutes</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard/courses"
                className="px-6 py-3 border border-[#5570f1] text-[#5570f1] rounded-lg font-medium hover:bg-[#5570f1]/5 transition-colors"
              >
                View My Courses
              </Link>
              <Link
                href="/dashboard"
                className="px-6 py-3 bg-[#5570f1] text-white rounded-lg font-medium hover:bg-[#4560e1] transition-colors"
              >
                Return to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Rating Modal */}
      {showRatingModal && (
        <SessionRatingModal
          sessionTitle="Web Development Fundamentals"
          teacherName="John Smith"
          sessionTime="Today, 2:00 PM - 3:30 PM"
          sessionDuration="90 minutes"
          onClose={() => setShowRatingModal(false)}
          onSubmit={handleRatingSubmit}
        />
      )}
    </div>
  )
}
