"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const ProcessItem = ({ number, title, description, isOpen, onToggle }) => (
  <div className="border-b border-gray-200">
    <button onClick={onToggle} className="w-full py-8 flex items-center justify-between text-left focus:outline-none">
      <div className="flex items-center gap-8">
        <span className="text-xl font-medium text-gray-400">{number}</span>
        <span className="text-2xl font-semibold">{title}</span>
      </div>
      {isOpen ? <Minus className="h-6 w-6 text-gray-400" /> : <Plus className="h-6 w-6 text-gray-400" />}
    </button>
    {isOpen && (
      <div className="pb-8 pl-20">
        <p className="text-lg text-gray-600">{description}</p>
      </div>
    )}
  </div>
)

const ProcessSection = ({ title, description, items }) => {
  const [openItem, setOpenItem] = useState(0)

  return (
    <div className="py-16">
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      <p className="text-lg text-gray-600 mb-12">{description}</p>
      <div className="space-y-2">
        {items.map((item, index) => (
          <ProcessItem
            key={index}
            {...item}
            isOpen={openItem === index}
            onToggle={() => setOpenItem(openItem === index ? -1 : index)}
          />
        ))}
      </div>
    </div>
  )
}

const HowWeWork = () => {
  const marketingItems = [
    {
      number: "01",
      title: "Intake & Discovery",
      description:
        "We begin by understanding who you are targeting, what you are selling, and where you are heading, in order to plan the overall approach, timeline and process.",
    },
    {
      number: "02",
      title: "Strategy & Workshops",
      description:
        "Through a series of strategic workshops, we develop a comprehensive marketing strategy aligned with your business goals.",
    },
    {
      number: "03",
      title: "Test Project",
      description: "We start with a small test project to ensure our approach meets your needs and expectations.",
    },
    {
      number: "04",
      title: "Retainer",
      description: "Based on successful collaboration, we move into a long-term partnership model.",
    },
  ]

  const brandingItems = [
    {
      number: "01",
      title: "Intake & Strategy",
      description:
        "We begin by understanding who you are and what you do. We then lead your team through a series of strategic workshops. These workshops help us build a strong foundation for us to execute from.",
    },
    {
      number: "02",
      title: "Brand Identity",
      description: "We develop your visual identity, including logo, color palette, typography, and brand guidelines.",
    },
    {
      number: "03",
      title: "Content & Design",
      description: "Our team creates compelling content and designs that reflect your brand identity.",
    },
    {
      number: "04",
      title: "Website Development",
      description: "We build a modern, responsive website that showcases your brand and drives results.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-sm font-medium text-gray-400 mb-6 block">AGENCY SERVICES</span>
              <h1 className="text-5xl sm:text-6xl font-bold mb-8">How We Work</h1>
              <p className="text-2xl font-light mb-8">We're more than an agency. We're your partner.</p>
              <p className="text-lg text-gray-400 mb-8">
                We've worked with dozens of companies as true strategic partners to position and launch products and
                brands, manage cross-functional teams, and keep things aligned and on track.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Process Sections */}
      <div className="bg-[#f5f5f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProcessSection
            title="Product Marketing & Sales Enablement projects"
            description="For product marketing and sales enablement work, we like to start with a series of strategic workshops and a test project to see if there is a good fit, and then we move into a retainer model."
            items={marketingItems}
          />
          <ProcessSection
            title="Branding & Website Projects"
            description="We follow a structured approach to create and implement your brand identity and web presence."
            items={brandingItems}
          />
        </div>
      </div>

      {/* Project Management Section */}
      <div className="bg-[#f5f5f3] pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8">How we manage our relationship with you</h2>
          <p className="text-lg text-gray-600 mb-12">
            To execute projects smoothly, we normally implement a series of tools and processes such as a shared project
            management board (Asana or the tool of your choice), Gantt charts, and project status reports as well as a
            shared Slack channel including both teams.
          </p>
          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="Project Management Tools"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowWeWork

