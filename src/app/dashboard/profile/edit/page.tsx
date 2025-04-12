"use client"

import type React from "react"

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
  ArrowLeft,
  Plus,
  X,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react"

export default function EditProfilePage() {
  const [skills, setSkills] = useState<string[]>(["Web Development", "UI/UX Design", "JavaScript"])
  const [newSkill, setNewSkill] = useState<string>("")
  const [interests, setInterests] = useState<string[]>(["Technology", "Design", "Education"])
  const [newInterest, setNewInterest] = useState<string>("")

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill))
  }

  const addInterest = () => {
    if (newInterest.trim() && !interests.includes(newInterest.trim())) {
      setInterests([...interests, newInterest.trim()])
      setNewInterest("")
    }
  }

  const removeInterest = (interest: string) => {
    setInterests(interests.filter((i) => i !== interest))
  }

  const handleSkillKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addSkill()
    }
  }

  const handleInterestKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addInterest()
    }
  }

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
                className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-100 font-medium"
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
                className="flex items-center gap-3 px-6 py-3 text-white bg-[#5570f1] font-medium"
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
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Link href="/dashboard/profile" className="inline-flex items-center text-[#5570f1] mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Profile
            </Link>

            <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>

            <form className="space-y-8">
              {/* Profile picture section */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-lg font-bold mb-1">Profile Picture</h2>
                  <p className="text-gray-500 text-sm">Update your profile photo</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-[#5570f1]/10 mr-6">
                      <img
                        src="/placeholder.svg?height=96&width=96"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-3">
                        <button
                          type="button"
                          className="px-4 py-2 bg-[#5570f1] text-white rounded-lg text-sm font-medium hover:bg-[#4560e1] transition-colors"
                        >
                          Upload New Photo
                        </button>
                        <button
                          type="button"
                          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Allowed file types: PNG, JPG, GIF. Maximum file size: 2MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Basic information section */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-lg font-bold mb-1">Basic Information</h2>
                  <p className="text-gray-500 text-sm">Update your personal information</p>
                </div>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        defaultValue="Rimel"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5570f1]"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        defaultValue="Arab"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5570f1]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      rows={4}
                      defaultValue="Web developer with 5 years of experience specializing in frontend technologies."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5570f1]"
                    ></textarea>
                    <p className="text-xs text-gray-500 mt-1">Brief description for your profile.</p>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      defaultValue="San Francisco, CA"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5570f1]"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      defaultValue="https://rimelarab.com"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5570f1]"
                    />
                  </div>
                </div>
              </div>

              {/* Skills section */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-lg font-bold mb-1">Skills</h2>
                  <p className="text-gray-500 text-sm">Add your professional skills</p>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center bg-[#5570f1]/10 text-[#5570f1] px-3 py-1.5 rounded-full"
                      >
                        <span className="text-sm">{skill}</span>
                        <button
                          type="button"
                          onClick={() => removeSkill(skill)}
                          className="ml-2 text-[#5570f1] hover:text-[#4560e1]"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyDown={handleSkillKeyDown}
                      placeholder="Add a skill..."
                      className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#5570f1]"
                    />
                    <button
                      type="button"
                      onClick={addSkill}
                      className="bg-[#5570f1] text-white px-4 rounded-r-lg hover:bg-[#4560e1] transition-colors"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Press Enter to add a skill</p>
                </div>
              </div>

              {/* Interests section */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-lg font-bold mb-1">Interests</h2>
                  <p className="text-gray-500 text-sm">Add your personal interests</p>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {interests.map((interest) => (
                      <div
                        key={interest}
                        className="flex items-center bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full"
                      >
                        <span className="text-sm">{interest}</span>
                        <button
                          type="button"
                          onClick={() => removeInterest(interest)}
                          className="ml-2 text-gray-500 hover:text-gray-700"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      value={newInterest}
                      onChange={(e) => setNewInterest(e.target.value)}
                      onKeyDown={handleInterestKeyDown}
                      placeholder="Add an interest..."
                      className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#5570f1]"
                    />
                    <button
                      type="button"
                      onClick={addInterest}
                      className="bg-[#5570f1] text-white px-4 rounded-r-lg hover:bg-[#4560e1] transition-colors"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Press Enter to add an interest</p>
                </div>
              </div>

              {/* Social links section */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-lg font-bold mb-1">Social Links</h2>
                  <p className="text-gray-500 text-sm">Connect your social media accounts</p>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#0077b5]/10 text-[#0077b5] rounded-lg mr-4">
                      <Linkedin size={20} />
                    </div>
                    <input
                      type="url"
                      defaultValue="https://linkedin.com/in/rimelarab"
                      placeholder="LinkedIn URL"
                      className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5570f1]"
                    />
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#333]/10 text-[#333] rounded-lg mr-4">
                      <Github size={20} />
                    </div>
                    <input
                      type="url"
                      defaultValue="https://github.com/rimelarab"
                      placeholder="GitHub URL"
                      className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5570f1]"
                    />
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#1DA1F2]/10 text-[#1DA1F2] rounded-lg mr-4">
                      <Twitter size={20} />
                    </div>
                    <input
                      type="url"
                      defaultValue="https://twitter.com/rimelarab"
                      placeholder="Twitter URL"
                      className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5570f1]"
                    />
                  </div>
                </div>
              </div>

              {/* Save buttons */}
              <div className="flex justify-end gap-4">
                <Link
                  href="/dashboard/profile"
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#5570f1] text-white rounded-lg font-medium hover:bg-[#4560e1] transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}
