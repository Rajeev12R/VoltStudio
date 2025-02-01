import React from "react"
import { motion } from "framer-motion"
import { Video, Paintbrush, Globe, Search, Briefcase, Users, MessageSquare } from "lucide-react"

const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg p-8 shadow-lg">
    <Icon className="w-12 h-12 text-purple-600 mb-4" />
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Video Editing",
      description: "Transform raw footage into captivating stories that resonate with your audience.",
    },
    {
      icon: Paintbrush,
      title: "Graphics Design",
      description: "Create stunning visuals that elevate your brand and leave a lasting impression.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Build responsive, user-friendly websites that drive engagement and conversions.",
    },
    {
      icon: Search,
      title: "SEO",
      description: "Boost your online visibility and drive organic traffic to your website.",
    },
    {
      icon: Briefcase,
      title: "Branding",
      description: "Develop a strong, cohesive brand identity that sets you apart from the competition.",
    },
    {
      icon: Users,
      title: "Consultancy",
      description: "Get expert advice and strategies to take your business to the next level.",
    },
    {
      icon: MessageSquare,
      title: "Social Media Management",
      description: "Engage your audience and grow your brand across all major social platforms.",
    },
  ]

  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive suite of digital solutions to help your business thrive in the online world.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services

