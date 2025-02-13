import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import rajeev from "../assets/rajeev.jpeg"
import arun from "../assets/arun3.jpeg"
import aditi from "../assets/aditi.jpeg"
import sneha from "../assets/sneha.jpg"

const TeamMember = ({ name, role, image }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="group relative overflow-hidden">
    <img src={image || "/placeholder.svg"} alt={name} className="w-full aspect-square object-cover" />
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-emerald-400">{role}</p>
      </div>
    </div>
  </motion.div>
)

const About = () => {
  const teamMembers = [
    {
      name: "Arun Changra",
      role: "Founder & CEO",
      image: arun,
    },
    {
      name: "Rajeev Ranjan",
      role: "Web Developer",
      image: rajeev,
    },
    {
      name: "Aditi Sable",
      role: "Graphics Designer",
      image: aditi,
    },
    {
      name: "Sneha Tiwari",
      role: "Content Writer",
      image: sneha,
    },
  ]

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-2 leading-tight">
            We are a visionary squad of digital Innovators.
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="aspect-video bg-gray-900 rounded-lg overflow-hidden"
          >
            <img src={teamMembers[0].image || "/placeholder.svg"} alt="Team" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-400 text-lg mb-6">
            At WIDE TAKE, we don’t just create digital marketing strategies—we craft experiences. We believe that every brand, big or small, deserves to stand out and leave a lasting impact in the digital world. We’re a team of passionate marketers, innovators, and storytellers who specialize in taking your vision and turning it into a digital presence that speaks for itself.
            </p>
            <p className="text-gray-400 text-lg">
            Our team is passionate about staying ahead of the curve, always learning, and adapting to bring fresh, innovative ideas to the table. What drives us is a deep commitment to delivering results that truly matter for our clients—while staying honest, transparent, and focused on their success every step of the way.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-600 transition-colors mt-8"
            >
              Work With Us
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center text-white space-y-8">
            <div>
              <p className="text-gray-400 text-lg">
                In 2023, we launched <span className="text-emerald-400">WIDE TAKE</span>, our self-serve marketing
                agency for small businesses.
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-lg">
                In 2024, we introduced <span className="text-emerald-400">WIDE TAKE Connect</span> to help cafés,
                international schools, and other businesses find expert marketing consultants.
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-lg">
                We share valuable marketing insights in our monthly{" "}
                <Link to="/newsletter" className="text-emerald-400 hover:underline">
                  newsletter
                </Link>{" "}
                and on our{" "}
                <Link to="/blog" className="text-emerald-400 hover:underline">
                  blog
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Meet the Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About

