import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const CallToAction = () => {
  return (
    <div className="bg-purple-900 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Elevate Your Digital Presence?</h2>
          <p className="text-xl text-purple-200 mb-12">
            Let's discuss how our comprehensive digital solutions can help you achieve your business goals and stand out
            in the digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-purple-900 px-8 py-3 rounded-full text-lg font-medium hover:bg-purple-100 transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/client-portfolio"
              className="inline-block bg-transparent text-white px-8 py-3 rounded-full text-lg font-medium border-2 border-white hover:bg-white hover:text-purple-900 transition-colors"
            >
              Explore Our Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CallToAction

