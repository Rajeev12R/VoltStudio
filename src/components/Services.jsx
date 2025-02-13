import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Video, Paintbrush, Globe, Search, Briefcase, Users, MessageSquare } from "lucide-react"

const ServiceCard = ({ icon: Icon, title, description, link }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg p-8 shadow-lg">
    <Icon className="w-12 h-12 text-purple-600 mb-4" />
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    {/* <Link to={link} className="text-purple-600 font-medium hover:text-purple-800 transition-colors">
      Know More &rarr;
    </Link> */}
  </motion.div>
)

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Video Editing",
      description: "Video editing isn't just about cropping clips- It's about storytelling.",
      link: "/services/video-editing",
    },
    {
      icon: Paintbrush,
      title: "Graphics Design",
      description: "Create designs that graphically inclines with your ideas",
      link: "/services/graphics-design",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Develop websites that are fast, intuitive, and designed for success.",
      link: "/services/web-development",
    },
    {
      icon: Search,
      title: "SEO",
      description: "Your brand deserves the spotlight! We turn whispers into roars with SEO that dominates.",
      link: "/services/seo",
    },
    {
      icon: Briefcase,
      title: "Branding",
      description: "Build a brand that turns heads, builds recognition, and stands out in any market.",
      link: "/services/branding",
    },
    {
      icon: Users,
      title: "Consultancy",
      description: "Get expert advice and strategies to take your business to the next level.",
      link: "/services/consultancy",
    },
    {
      icon: MessageSquare,
      title: "Social Media Management",
      description: "Turn followers into fans and grow your brand with strategic social media engagement.",
      link: "/services/social-media",
    },
  ]

  return (
    <div className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
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

