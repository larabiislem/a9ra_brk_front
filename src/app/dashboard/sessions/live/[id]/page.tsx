"use client"

import type React from "react"

import { useState, useEffect } from "react"
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  MessageSquare,
  Users,
  MoreVertical,
  Send,
  PhoneOff,
  Share2,
  Hand,
  Layout,
} from "lucide-react"

export default function LiveSessionPage({ params }: { params: { id: string } }) {
  const [videoEnabled, setVideoEnabled] = useState(true)
  const [micEnabled, setMicEnabled] = useState(true)
  const [handRaised, setHandRaised] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [participantsOpen, setParticipantsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [elapsedTime, setElapsedTime] = useState(0)

  // Mock session data
  const session = {
    id: params.id,
    title: "Web Development Fundamentals: HTML & CSS Basics",
    instructor: {
      name: "John Smith",
      image: "/placeholder.svg?height=80&width=80",
    },
  }

  // Mock participants data
  const participants = [
    { id: 1, name: "John Smith (Host)", image: "/placeholder.svg?height=40&width=40", isHost: true },
    { id: 2, name: "You", image: "/placeholder.svg?height=40&width=40", isYou: true },
    { id: 3, name: "Alex Johnson", image: "/placeholder.svg?height=40&width=40" },
    { id: 4, name: "Sarah Williams", image: "/placeholder.svg?height=40&width=40" },
    { id: 5, name: "Michael Brown", image: "/placeholder.svg?height=40&width=40" },
    { id: 6, name: "Emily Davis", image: "/placeholder.svg?height=40&width=40" },
  ]

  // Mock chat messages
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: "John Smith",
      message: "Welcome everyone to the Web Development Fundamentals session!",
      time: "2:00 PM",
    },
    { id: 2, sender: "Sarah Williams", message: "Excited to learn HTML and CSS basics!", time: "2:01 PM" },
    { id: 3, sender: "Alex Johnson", message: "Is VS Code the best editor for beginners?", time: "2:03 PM" },
    {
      id: 4,
      sender: "John Smith",
      message: "VS Code is great for beginners, but feel free to use any text editor you're comfortable with.",
      time: "2:04 PM",
    },
  ])

  // Timer for session duration
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatMessages([
        ...chatMessages,
        {
          id: chatMessages.length + 1,
          sender: "You",
          message: message.trim(),
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ])
      setMessage("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="h-screen flex flex-col bg-[#0f172a]">
      {/* Header */}
      <header className="bg-[#1e293b] text-white p-4 flex justify-between items-center">
        <div>
          <h1 className="font-bold">{session.title}</h1>
          <div className="flex items-center text-sm text-gray-300">
            <span>{formatTime(elapsedTime)}</span>
            <span className="mx-2">•</span>
            <span>{participants.length} participants</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setHandRaised(!handRaised)}
            className={`p-2 rounded-full ${
              handRaised ? "bg-[#5570f1] text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            <Hand size={20} />
          </button>
          <button className="p-2 rounded-full bg-gray-700 text-gray-300 hover:bg-gray-600">
            <Share2 size={20} />
          </button>
          <button className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700">
            <PhoneOff size={20} />
          </button>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Video grid */}
        <div className="flex-1 p-4 grid grid-cols-2 md:grid-cols-3 gap-4 overflow-auto">
          {/* Instructor video (larger) */}
          <div className="col-span-2 md:col-span-2 bg-gray-800 rounded-lg overflow-hidden relative aspect-video">
            <img src="/placeholder.svg?height=400&width=600" alt="Instructor" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                  <img
                    src={session.instructor.image || "/placeholder.svg"}
                    alt={session.instructor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>{session.instructor.name} (Host)</span>
              </div>
              <div className="flex items-center gap-1">
                <Mic size={16} />
              </div>
            </div>
          </div>

          {/* Participant videos */}
          {participants.slice(1).map((participant) => (
            <div key={participant.id} className="bg-gray-800 rounded-lg overflow-hidden relative aspect-video">
              <img
                src={participant.image || "/placeholder.svg"}
                alt={participant.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-sm">
                    {participant.name} {participant.isYou && "(You)"}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {participant.isYou ? <>{micEnabled ? <Mic size={16} /> : <MicOff size={16} />}</> : <Mic size={16} />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar - chat or participants */}
        {(chatOpen || participantsOpen) && (
          <div className="w-80 bg-[#1e293b] border-l border-gray-700 flex flex-col">
            {/* Tabs */}
            <div className="flex border-b border-gray-700">
              <button
                onClick={() => {
                  setChatOpen(true)
                  setParticipantsOpen(false)
                }}
                className={`flex-1 py-3 px-4 text-center ${
                  chatOpen ? "text-white border-b-2 border-[#5570f1]" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                Chat
              </button>
              <button
                onClick={() => {
                  setParticipantsOpen(true)
                  setChatOpen(false)
                }}
                className={`flex-1 py-3 px-4 text-center ${
                  participantsOpen ? "text-white border-b-2 border-[#5570f1]" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                Participants
              </button>
            </div>

            {/* Chat content */}
            {chatOpen && (
              <div className="flex-1 flex flex-col">
                <div className="flex-1 overflow-auto p-4 space-y-4">
                  {chatMessages.map((msg) => (
                    <div key={msg.id} className="flex flex-col">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-white">{msg.sender}</span>
                        <span className="text-xs text-gray-400">{msg.time}</span>
                      </div>
                      <p className="text-gray-200 bg-gray-700/50 rounded-lg p-2">{msg.message}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-gray-700">
                  <div className="flex items-center">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Type a message..."
                      className="flex-1 bg-gray-700 text-white rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#5570f1]"
                      rows={2}
                    ></textarea>
                    <button
                      onClick={handleSendMessage}
                      disabled={!message.trim()}
                      className="ml-2 p-2 rounded-full bg-[#5570f1] text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send size={20} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Participants content */}
            {participantsOpen && (
              <div className="flex-1 overflow-auto p-4">
                <div className="space-y-3">
                  {participants.map((participant) => (
                    <div key={participant.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                          <img
                            src={participant.image || "/placeholder.svg"}
                            alt={participant.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-white">
                            {participant.name} {participant.isHost && "(Host)"} {participant.isYou && "(You)"}
                          </p>
                        </div>
                      </div>
                      {!participant.isYou && (
                        <button className="text-gray-400 hover:text-white">
                          <MoreVertical size={16} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Controls */}
      <footer className="bg-[#1e293b] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMicEnabled(!micEnabled)}
            className={`p-3 rounded-full ${
              micEnabled ? "bg-gray-700 hover:bg-gray-600" : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {micEnabled ? <Mic size={20} /> : <MicOff size={20} />}
          </button>
          <button
            onClick={() => setVideoEnabled(!videoEnabled)}
            className={`p-3 rounded-full ${
              videoEnabled ? "bg-gray-700 hover:bg-gray-600" : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {videoEnabled ? <Video size={20} /> : <VideoOff size={20} />}
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setChatOpen(!chatOpen)
              if (!chatOpen) setParticipantsOpen(false)
            }}
            className={`p-3 rounded-full ${
              chatOpen ? "bg-[#5570f1] text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            <MessageSquare size={20} />
          </button>
          <button
            onClick={() => {
              setParticipantsOpen(!participantsOpen)
              if (!participantsOpen) setChatOpen(false)
            }}
            className={`p-3 rounded-full ${
              participantsOpen ? "bg-[#5570f1] text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            <Users size={20} />
          </button>
          <button className="p-3 rounded-full bg-gray-700 text-gray-300 hover:bg-gray-600">
            <Layout size={20} />
          </button>
        </div>

        <button
          onClick={() => (window.location.href = "/dashboard/session-complete")}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          End Session
        </button>
      </footer>
    </div>
  )
}
