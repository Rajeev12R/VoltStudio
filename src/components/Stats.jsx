import React from "react"
import { motion } from "framer-motion"

const Stats = () => {
  const stats = [
    { number: "150+", label: "Successful Projects" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "10+", label: "Years Experience" },
    { number: "50M+", label: "Revenue Generated" },
  ]

  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-green-500 mb-2">{stat.number}</h3>
              <p className="text-white text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats

