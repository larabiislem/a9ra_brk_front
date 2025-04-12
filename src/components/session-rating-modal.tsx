"use client"

import { useState } from "react"
import { Star, MessageSquare, X } from "lucide-react"

interface SessionRatingModalProps {
  sessionTitle: string
  teacherName: string
  sessionTime: string
  sessionDuration: string
  onClose: () => void
  onSubmit: (rating: number, feedback: string) => void
}

export default function SessionRatingModal({
  sessionTitle,
  teacherName,
  sessionTime,
  sessionDuration,
  onClose,
  onSubmit,
}: SessionRatingModalProps) {
  const [rating, setRating] = useState<number>(0)
  const [hoverRating, setHoverRating] = useState<number>(0)
  const [feedback, setFeedback] = useState<string>("")

  const handleSubmit = () => {
    if (rating > 0) {
      onSubmit(rating, feedback)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-[#242331]">Rate Your Session</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        {/* Session info */}
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-medium text-[#242331]">{sessionTitle}</h3>
          <p className="text-gray-600">
            with <span className="font-medium">{teacherName}</span>
          </p>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <span>{sessionTime}</span>
            <span className="mx-2">•</span>
            <span>{sessionDuration}</span>
          </div>
        </div>

        {/* Rating section */}
        <div className="p-6">
          <div className="text-center mb-6">
            <h3 className="text-base font-medium mb-4">How would you rate this session?</h3>
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
                    size={32}
                    className={`${
                      star <= (hoverRating || rating) ? "fill-[#5570f1] text-[#5570f1]" : "fill-gray-200 text-gray-200"
                    } transition-colors`}
                  />
                </button>
              ))}
            </div>
            <p className="mt-3 text-sm text-gray-600">
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
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <MessageSquare className="text-[#5570f1] mr-2" size={18} />
              <h3 className="text-base font-medium">Additional Feedback (Optional)</h3>
            </div>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your thoughts about the session..."
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5570f1] min-h-[100px] text-sm"
            ></textarea>
          </div>

          {/* Submit button */}
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              disabled={rating === 0}
              className={`px-5 py-2 rounded-lg font-medium ${
                rating === 0
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-[#5570f1] text-white hover:bg-[#4560e1]"
              } transition-colors`}
            >
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
