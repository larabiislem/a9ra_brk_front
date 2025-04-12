"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Upload } from "lucide-react"

export default function CreateSessionPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  const tags = [
    "Language",
    "Technology",
    "Film Making",
    "Communication",
    "Management",
    "Art",
    "History",
    "Law",
    "Science",
    "Freelance",
  ]

  return (
    <div className="min-h-screen bg-[#f8f9fd] p-6">
      {/* Back button */}
      <Link href="/dashboard/courses" className="inline-flex items-center text-[#5570f1] mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to My Courses
      </Link>

      <div className="max-w-4xl mx-auto bg-white rounded-lg border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-[#5570f1] mb-8">Create a session</h1>

        <form className="space-y-6">
          {/* Title */}
          <div>
            <input
              type="text"
              placeholder="Title"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5570f1]"
            />
          </div>

          {/* Two columns for Program and Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Program */}
            <div>
              <div className="relative">
                <select
                  className="w-full p-4 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#5570f1]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Program It
                  </option>
                  <option value="program1">Program 1</option>
                  <option value="program2">Program 2</option>
                  <option value="program3">Program 3</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Types */}
            <div>
              <div className="relative">
                <select
                  className="w-full p-4 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#5570f1]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Types
                  </option>
                  <option value="type1">Video</option>
                  <option value="type2">Audio</option>
                  <option value="type3">Document</option>
                  <option value="type4">Live Session</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="bg-[#f5f5f5] p-4 rounded-lg">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTags.includes(tag)
                      ? "bg-[#5570f1] text-white"
                      : "bg-[#e1e6ff] text-[#242331] hover:bg-[#c5d0ff]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Two columns for Description and Upload */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Description */}
            <div>
              <textarea
                placeholder="Description"
                className="w-full p-4 border border-gray-300 rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-[#5570f1]"
              ></textarea>
            </div>

            {/* Upload Documents */}
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 h-40">
              <div className="text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">Upload Documents</h3>
                <p className="mt-1 text-xs text-gray-500">PDF, DOC, PPT up to 10MB</p>
                <div className="mt-4">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer bg-[#e1e6ff] text-[#5570f1] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#d8e0ff] transition-colors"
                  >
                    Browse Files
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Create Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#5570f1] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#4560e1] transition-colors"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
