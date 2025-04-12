"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  Video,
  Mic,
  MicOff,
  VideoOff,
  FileText,
  Download,
  ExternalLink,
  CheckCircle,
} from "lucide-react"

export default function JoinSessionPage({ params }: { params: { id: string } }) {
  const [videoEnabled, setVideoEnabled] = useState(true)
  const [micEnabled, setMicEnabled] = useState(true)
  const [isJoining, setIsJoining] = useState(false)

  // Mock session data - in a real app, you would fetch this based on the ID
  const session = {
    id: params.id,
    title: "Web Development Fundamentals: HTML & CSS Basics",
    instructor: {
      name: "John Smith",
      title: "Senior Web Developer",
      image: "/placeholder.svg?height=80&width=80",
    },
    date: "Tuesday, May 16, 2023",
    time: "2:00 PM - 3:30 PM",
    duration: "90 minutes",
    participants: 24,
    maxParticipants: 30,
    description:
      "Learn the fundamentals of web development with a focus on HTML and CSS. This session will cover basic structure, styling, responsive design principles, and best practices for modern web development.",
    prerequisites: ["Basic computer knowledge", "Text editor installed (VS Code recommended)"],
    materials: [
      { name: "Session Slides", type: "PDF", size: "2.4 MB" },
      { name: "Code Examples", type: "ZIP", size: "1.1 MB" },
    ],
  }

  const handleJoinSession = () => {
    setIsJoining(true)
    // In a real app, you would connect to the video conference here
    setTimeout(() => {
      window.location.href = `/dashboard/sessions/live/${params.id}`
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-[#f8f9fd] p-4">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link href="/dashboard" className="inline-flex items-center text-[#5570f1] mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content - session details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h1 className="text-2xl font-bold text-[#242331] mb-2">{session.title}</h1>
                <div className="flex items-center mb-4">
                  <img
                    src={session.instructor.image || "/placeholder.svg"}
                    alt={session.instructor.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium">{session.instructor.name}</p>
                    <p className="text-sm text-gray-500">{session.instructor.title}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="text-[#5570f1] mr-2" size={18} />
                    <span>{session.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-[#5570f1] mr-2" size={18} />
                    <span>{session.time}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-[#5570f1] mr-2" size={18} />
                    <span>
                      {session.participants}/{session.maxParticipants} Participants
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="font-medium mb-2">About This Session</h2>
                  <p className="text-gray-600">{session.description}</p>
                </div>

                <div className="mb-6">
                  <h2 className="font-medium mb-2">Prerequisites</h2>
                  <ul className="list-disc list-inside text-gray-600">
                    {session.prerequisites.map((prerequisite, index) => (
                      <li key={index}>{prerequisite}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Session materials */}
              <div className="p-6">
                <h2 className="font-medium mb-4">Session Materials</h2>
                <div className="space-y-3">
                  {session.materials.map((material, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center">
                        <FileText className="text-[#5570f1] mr-3" size={20} />
                        <div>
                          <p className="font-medium">{material.name}</p>
                          <p className="text-xs text-gray-500">
                            {material.type} • {material.size}
                          </p>
                        </div>
                      </div>
                      <button className="text-[#5570f1] hover:text-[#4560e1]">
                        <Download size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - join options */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden sticky top-6">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-bold mb-4">Join Session</h2>
                <div className="bg-[#5570f1]/5 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium">Session starts in</p>
                  </div>
                  <p className="text-2xl font-bold text-[#5570f1]">15:42</p>
                  <p className="text-xs text-gray-500">hours : minutes</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      {videoEnabled ? (
                        <Video className="text-[#5570f1] mr-2" size={20} />
                      ) : (
                        <VideoOff className="text-gray-400 mr-2" size={20} />
                      )}
                      <span>Camera</span>
                    </div>
                    <button
                      onClick={() => setVideoEnabled(!videoEnabled)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                        videoEnabled ? "bg-[#5570f1]" : "bg-gray-200"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                          videoEnabled ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      {micEnabled ? (
                        <Mic className="text-[#5570f1] mr-2" size={20} />
                      ) : (
                        <MicOff className="text-gray-400 mr-2" size={20} />
                      )}
                      <span>Microphone</span>
                    </div>
                    <button
                      onClick={() => setMicEnabled(!micEnabled)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                        micEnabled ? "bg-[#5570f1]" : "bg-gray-200"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                          micEnabled ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleJoinSession}
                  disabled={isJoining}
                  className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center ${
                    isJoining
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-[#5570f1] text-white hover:bg-[#4560e1]"
                  } transition-colors`}
                >
                  {isJoining ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Joining...
                    </>
                  ) : (
                    <>
                      <ExternalLink className="mr-2" size={18} />
                      Join Session Now
                    </>
                  )}
                </button>
              </div>

              <div className="p-6">
                <h3 className="font-medium mb-4">Before You Join</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <CheckCircle className="text-[#5570f1] mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Find a quiet place with minimal background noise</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#5570f1] mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Use headphones for better audio quality</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#5570f1] mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Ensure your internet connection is stable</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#5570f1] mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Have the session materials ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
