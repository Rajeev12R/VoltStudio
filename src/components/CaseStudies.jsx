import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const CaseStudyCard = ({ title, description, image, category, link }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg overflow-hidden shadow-lg">
    <img src={image || "/placeholder.svg"} alt={title} className="w-full h-64 object-cover" />
    <div className="p-6">
      <span className="text-purple-600 font-medium">{category}</span>
      <h3 className="text-2xl font-bold mt-2 mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors"
      >
        Read Case Study
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  </motion.div>
)

const CaseStudies = () => {
  const cases = [
    {
      title: "Viral Video Campaign",
      description: "How we helped a startup achieve 1M+ views with a creative video strategy",
      image:
        "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Video Marketing",
      link: "/case-studies/viral-video-campaign",
    },
    {
      title: "E-commerce Redesign",
      description: "Boosting online sales by 200% through UX improvements and SEO optimization",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      category: "Web Development & SEO",
      link: "/case-studies/ecommerce-redesign",
    },
    {
      title: "Brand Transformation",
      description: "Revitalizing a traditional company with a modern, cohesive brand identity",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Branding",
      link: "/case-studies/brand-transformation",
    },
  ]

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses across various industries achieve remarkable growth and success.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <CaseStudyCard key={index} {...caseStudy} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/case-studies"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-purple-700 transition-colors"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CaseStudies

