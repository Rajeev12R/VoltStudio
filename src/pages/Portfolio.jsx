import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import GlowingBackground from "../components/GlowingBackground"
const LogoScroll = () => {
  const logos = [
    { name: "Diligent", image: "/placeholder.svg?height=40&width=120" },
    { name: "LinkedIn", image: "/placeholder.svg?height=40&width=120" },
    { name: "Safer", image: "/placeholder.svg?height=40&width=120" },
    { name: "Stellar", image: "/placeholder.svg?height=40&width=120" },
    { name: "Heartland", image: "/placeholder.svg?height=40&width=120" },
    { name: "Sosafe", image: "/placeholder.svg?height=40&width=120" },
    { name: "Envoy", image: "/placeholder.svg?height=40&width=120" },
    { name: "Momentum", image: "/placeholder.svg?height=40&width=120" },
    { name: "ElationHealth", image: "/placeholder.svg?height=40&width=120" },
    { name: "ServiceNow", image: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <div className="w-full overflow-hidden bg-black py-12">
      <div className="flex space-x-16 animate-scroll">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.image || "/placeholder.svg"}
            alt={logo.name}
            className="h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </div>
    </div>
  )
}

const CaseStudy = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
    <div className="bg-black p-12 lg:p-32 flex flex-col justify-center">
      <span className="text-sm font-medium text-gray-400 mb-6">PUBLIC COMPANY</span>
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
        New branding, product launch, and go-to-market strategy for ServiceNow
      </h2>
      <p className="text-gray-400 mb-8">Cloud-based enterprise solutions • Public Company, NYSE: NOW</p>
    </div>
    <div className=" h-[400px] lg:h-auto flex items-center justify-center p-12">
      <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZyUyMGNvdmVyfGVufDB8fDB8fHww" alt="ServiceNow" className="object-cover w-full" />
    </div>
  </div>
)

const Portfolio = () => {
  return (
    <div className="bg-black min-h-screen">
<GlowingBackground />
<div className="absolute inset-0 bg-gradient-to-b from-[#060606] via-purple-900/30 to-[#060606] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-sm font-medium text-white mb-6 block">AGENCY CLIENT PORTFOLIO</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8">Client satisfaction is our success</h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Discover how businesses of all sizes, from local cafés to international schools, have partnered with <span className="text-white font-bold">Volt</span> – the marketing agency that drives growth and success.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
          >
            WORK WITH US
          </Link>
        </motion.div>
      </div>

      <LogoScroll />
      <CaseStudy />
    </div>
  )
}

export default Portfolio

