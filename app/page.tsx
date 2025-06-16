"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight } from "lucide-react"
import RequestForm from "@/components/request-form"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showRequestForm, setShowRequestForm] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleRequestForm = () => setShowRequestForm(!showRequestForm)

  return (
    <div className="bg-[#0c1425] text-white min-h-screen font-sans">
      {/* Navigation */}
      <nav className="w-full fixed top-0 left-0 bg-[#0c1425]/90 backdrop-blur-sm z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-white">
            Dev Scholar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="hover:text-yellow-400 transition-colors">
              Services
            </Link>
            <Link href="/about" className="hover:text-yellow-400 transition-colors">
              About
            </Link>
            <Link href="/faq" className="hover:text-yellow-400 transition-colors">
              FAQ
            </Link>
            <button
              onClick={toggleRequestForm}
              className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#0c1425] px-4 py-2 rounded transition-colors"
            >
              Request a Project
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0c1425] py-4 px-4">
            <div className="flex flex-col space-y-4">
              <Link href="/services" className="hover:text-yellow-400 transition-colors py-2">
                Services
              </Link>
              <Link href="/about" className="hover:text-yellow-400 transition-colors py-2">
                About
              </Link>
              <Link href="/faq" className="hover:text-yellow-400 transition-colors py-2">
                FAQ
              </Link>
              <button
                onClick={toggleRequestForm}
                className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#0c1425] px-4 py-2 rounded transition-colors"
              >
                Request a Project
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-0 flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-3xl">Elevate Your Academic Journey
</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
          Expert help for research projects from coding to comprehensive documentation.
        </p>
        <button
          onClick={toggleRequestForm}
          className="bg-yellow-400 text-[#0c1425] px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition-colors"
        >
          Request a Project
        </button>
      </section>

      {/* Features */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Code Implementation",
              description:
                "Expert development of algorithms, applications, and systems in various programming languages.",
              icon: "💻",
            },
            {
              title: "Literature Review",
              description: "Comprehensive analysis of academic papers and research in your field of study.",
              icon: "📚",
            },
            {
              title: "Data Visualization",
              description: "Transform complex data into clear, insightful visual representations.",
              icon: "📊",
            },
            {
              title: "Report Writing",
              description: "Professional academic writing services for dissertations, theses, and research papers.",
              icon: "📝",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#162040] p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#162040] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "Submit",
                description: "Fill out our project request form with your requirements and deadline.",
              },
              {
                step: "Quote",
                description: "Receive a detailed quote and timeline for your project within 24 hours.",
              },
              {
                step: "Pay",
                description: "Make a secure payment to begin the project development process.",
              },
              {
                step: "Deliver",
                description: "Receive your completed project with unlimited revisions until you're satisfied.",
              },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="flex flex-col items-center">
                  <div className="bg-yellow-400 text-[#0c1425] w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.step}</h3>
                  <p className="text-center text-gray-300">{step.description}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gray-700 -z-10 transform -translate-x-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center">Project Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "BSc Projects",
              price: "₦100,000",
              features: ["Code implementation", "Basic documentation", "14-day delivery", "1 revision"],
            },
            {
              title: "MSc Projects",
              price: "₦200,000",
              features: ["Advanced implementation", "Comprehensive documentation", "21-day delivery", "3 revisions"],
              featured: true,
            },
            {
              title: "PhD Research",
              price: "₦350,000",
              features: [
                "Complex system development",
                "Publication ready documentation",
                "Custom timeline",
                "Unlimited revisions",
              ],
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`${
                plan.featured ? "bg-yellow-400 text-[#0c1425] scale-105 shadow-xl" : "bg-[#162040] text-white"
              } p-8 rounded-lg text-center relative`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-max px-4 py-1 bg-[#0c1425] text-yellow-400 text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? "text-[#0c1425]" : "text-white"}`}>
                {plan.title}
              </h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="text-left space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={toggleRequestForm}
                className={`w-full py-3 px-4 rounded font-semibold transition-colors ${
                  plan.featured
                    ? "bg-[#0c1425] text-white hover:bg-[#162040]"
                    : "bg-yellow-400 text-[#0c1425] hover:bg-yellow-500"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#162040] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The team delivered my BSc project ahead of schedule. The code was well-documented and easy to understand.",
                author: "David O.",
                role: "Computer Science Student",
              },
              {
                quote:
                  "My dissertation received top marks thanks to the excellent research and implementation provided by Dev Scholar.",
                author: "Sarah M.",
                role: "MSc Data Science Graduate",
              },
              {
                quote:
                  "The quality of work exceeded my expectations. I've recommended Dev Scholar to all my colleagues.",
                author: "Prof. James K.",
                role: "Research Supervisor",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-[#0c1425] p-6 rounded-lg">
                <p className="italic mb-4 text-gray-300">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              question: "What is the process for requesting a project?",
              answer:
                "Fill out our project request form with your requirements, and we'll get back to you within 24 hours with a quote and timeline.",
            },
            {
              question: "How long does it take to complete a project?",
              answer:
                "Delivery times vary based on project complexity. BSc projects typically take 2 weeks, MSc projects 3 weeks, and PhD research varies based on scope.",
            },
            {
              question: "Do you offer revisions?",
              answer:
                "Yes, we offer revisions to ensure your complete satisfaction. The number of revisions depends on your project package.",
            },
            {
              question: "What payment methods do you accept?",
              answer:
                "We accept bank transfers, credit/debit cards, and mobile money payments. All transactions are secure and encrypted.",
            },
            {
              question: "Is my project information kept confidential?",
              answer:
                "Absolutely. We have strict confidentiality policies in place to protect your intellectual property and personal information.",
            },
            {
              question: "Can I request updates during the development process?",
              answer:
                "Yes, we provide regular updates and maintain open communication throughout the development process.",
            },
          ].map((faq, idx) => (
            <div key={idx} className="bg-[#162040] p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-[#0c1425] to-[#162040]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Excel in Your Academic Journey?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Let us help you achieve academic excellence with our expert assistance.
          </p>
          <button
            onClick={toggleRequestForm}
            className="bg-yellow-400 text-[#0c1425] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors"
          >
            Request a Project Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0c1425] py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Dev Scholar</h3>
              <p className="text-gray-400">Your gateway to academic excellence and professional development.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/services/code-implementation" className="hover:text-yellow-400 transition-colors">
                    Code Implementation
                  </Link>
                </li>
                <li>
                  <Link href="/services/literature-review" className="hover:text-yellow-400 transition-colors">
                    Literature Review
                  </Link>
                </li>
                <li>
                  <Link href="/services/data-visualization" className="hover:text-yellow-400 transition-colors">
                    Data Visualization
                  </Link>
                </li>
                <li>
                  <Link href="/services/report-writing" className="hover:text-yellow-400 transition-colors">
                    Report Writing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-yellow-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-yellow-400 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-yellow-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-yellow-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: devscholar19@gmail.com</li>
                <li>Phone: +234 912 450 3785</li>
                <li>Hours: Mon-Fri, 9am-5pm</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Dev Scholar. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Project Request Modal */}
      {showRequestForm && <RequestForm onClose={toggleRequestForm} />}
    </div>
  )
}
