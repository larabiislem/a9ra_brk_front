"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, MessageSquare, Send, ArrowLeft } from "lucide-react"

export default function SessionRatingPage() {
  const [rating, setRating] = useState<number>(0)
  const [hoverRating, setHoverRating] = useState<number>(0)
  const [feedback, setFeedback] = useState<string>("")
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const handleRatingSubmit = () => {
    // Here you would typically send the rating to your backend
    console.log("Rating submitted:", rating)
    console.log("Feedback:", feedback)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#f8f9fd] flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-md max-w-md w-full p-8 text-center">
          <div className="w-20 h-20 bg-[#5570f1]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#5570f1]"
            >
              <path
                d="M20 6L9 17L4 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">Your feedback helps us improve our sessions for everyone.</p>
          <Link
            href="/dashboard"
            className="inline-block bg-[#5570f1] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#4560e1] transition-colors"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    )
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
          {/* Session info */}
          <div className="p-6 border-b border-gray-100">
            <h1 className="text-2xl font-bold text-[#242331] mb-2">Rate Your Session</h1>
            <p className="text-gray-600">
              Web Development Fundamentals with <span className="font-medium">John Smith</span>
            </p>
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <span>Today, 2:00 PM - 3:30 PM</span>
              <span className="mx-2">•</span>
              <span>90 minutes</span>
            </div>
          </div>

          {/* Rating section */}
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-lg font-medium mb-6">How would you rate this session?</h2>
              <div className="flex justify-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="focus:outline-none transition-transform hover:scale-110"
                  >
                    <Star
                      size={40}
                      className={`${
                        star <= (hoverRating || rating)
                          ? "fill-[#5570f1] text-[#5570f1]"
                          : "fill-gray-200 text-gray-200"
                      } transition-colors`}
                    />
                  </button>
                ))}
              </div>
              <p className="mt-4 text-gray-600">
                {rating === 1
                  ? "Poor - Did not meet expectations"
                  : rating === 2
                    ? "Fair - Needs improvement"
                    : rating === 3
                      ? "Good - Met expectations"
                      : rating === 4
                        ? "Very Good - Exceeded expectations"
                        : rating === 5
                          ? "Excellent - Outstanding experience"
                          : "Select a rating"}
              </p>
            </div>

            {/* Feedback section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <MessageSquare className="text-[#5570f1] mr-2" size={20} />
                <h3 className="text-lg font-medium">Additional Feedback (Optional)</h3>
              </div>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your thoughts about the session..."
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5570f1] min-h-[120px]"
              ></textarea>
            </div>

            {/* Submit button */}
            <div className="flex justify-end">
              <button
                onClick={handleRatingSubmit}
                disabled={rating === 0}
                className={`flex items-center px-6 py-3 rounded-lg font-medium ${
                  rating === 0
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-[#5570f1] text-white hover:bg-[#4560e1]"
                } transition-colors`}
              >
                <Send className="mr-2" size={18} />
                Submit Feedback
              </button>
            </div>
          </div>
        </div>

        {/* Rating explanation */}
        <div className="mt-6 bg-white rounded-xl shadow-md p-6">
          <h3 className="font-medium text-[#242331] mb-4">Rating Guide</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center">
              <div className="flex mr-2">
                <Star size={16} className="fill-[#5570f1] text-[#5570f1]" />
              </div>
              <span className="text-gray-600">Poor - Did not meet expectations</span>
            </div>
            <div className="flex items-center">
              <div className="flex mr-2">
                <Star size={16} className="fill-[#5570f1] text-[#5570f1]" />
                <Star size={16} className="fill-[#5570f1] text-[#5570f1]" />
              </div>
              <span className="text-gray-600">Fair - Needs improvement</span>
            </div>
            <div className="flex items-center">
              <div className="flex mr-2">
                <Star size={16} className="fill-[#5570f1] text-[#5570f1]" />
                <Star size={16} className="fill-[#5570f1] text-[#5570f1]" />
                <Star size={16} className="fill-[#5570f1] text-[#5570f1]" />
              </div>
              <span className="text-gray-600">Good - Met expectations</span>
            </div>
            <div className="flex items-center">
              <div className="flex mr-2">
                <Star size={16} className="fill-[#5570f1] text-[#5570f1]" />
                <Star size={16} className="fill-[#5570f1] text-[#5570f1]" />
                <Star size={16} className="fill-[#5570f1] text-[#5570f1]" />
                <Star size={16} className="fill-[#5570f1] text-[#5570f1]" />
              </div>
              <span className="text-gray-600">Very Good - Exceeded expectations</span>
            </div>
            <div className="flex items-center">
              <div className="flex mr-2">
                <Star size={16} className="fill-[#5570f1] text-[#5570f1]" />
                <Star size={16} className="fill-[#5570f1] text-[#5570f1]" />
                <Star size={16} className="fill-[#5570f1] text-[#5570f1]" />
                <Star size={16} className="fill-[#5570f1] text-[#5570f1]" />
                <Star size={16} className="fill-[#5570f1] text-[#5570f1]" />
              </div>
              <span className="text-gray-600">Excellent - Outstanding experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
