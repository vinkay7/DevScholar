"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"

interface RequestFormProps {
  onClose: () => void
}

export default function RequestForm({ onClose }: RequestFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    description: "",
    deadline: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/submit-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error(result.error || 'Failed to submit request')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to submit project request. Please check your internet connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-[#162040] rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold">Request a Project</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-[#0c1425] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-[#0c1425] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-[#0c1425] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-1">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-[#0c1425] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="">Select Project Type</option>
                    <option value="bsc">BSc Project (₦75,000)</option>
                    <option value="msc">MSc Project (₦200,000)</option>
                    <option value="phd">PhD Research (₦350,000)</option>
                    <option value="other">Other (Custom Quote)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">
                  Project Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#0c1425] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Please describe your project requirements in detail..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="deadline" className="block text-sm font-medium mb-1">
                  Deadline
                </label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#0c1425] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 text-[#0c1425] py-3 rounded-md font-semibold hover:bg-yellow-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-[#0c1425] border-t-transparent"></div>
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-2 text-green-400">Request Submitted Successfully!</h3>
              <p className="text-gray-300 mb-6">
                Thank you for your project request, {formData.name}! We've received your {formData.projectType} project details 
                and have sent you a confirmation email at {formData.email}. Our team will review your requirements and 
                get back to you within 24 hours with a detailed quote.
              </p>
              <div className="bg-[#0c1425] p-4 rounded-lg mb-6 border border-yellow-400">
                <p className="text-sm text-yellow-400 mb-2">
                  <strong>What's Next?</strong>
                </p>
                <ul className="text-sm text-gray-300 text-left space-y-1">
                  <li>• Check your email for confirmation details</li>
                  <li>• We'll send you a detailed quote within 24 hours</li>
                  <li>• Our team will contact you to discuss project specifics</li>
                </ul>
              </div>
              <button
                onClick={onClose}
                className="bg-yellow-400 text-[#0c1425] px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
