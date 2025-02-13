import React, { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", link: "/" },
    {
      name: "Why Volt?",
      link: "/about",
      submenu: [
        { name: "About", link: "/about" },
        { name: "Client Protfolio", link: "/client-portfolio" },
        { name: "How We Work", link: "/how-we-work" },
      ],
    },
    { name: "Services", link: "/services" },
    { name: "Blog", link: "/blog" },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent/60"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-2xl font-bold">
              WIDE TAKE
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.link}
                  className="text-white hover:text-purple-400 transition-colors flex items-center"
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.link}
                          className="relative block px-4 py-2 text-sm text-white"
                        >
                          <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 
                          after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300
                          hover:after:w-full hover:after:left-0">
                            {subItem.name}
                          </span>
                        </Link>

                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <React.Fragment key={item.name}>
                  <Link
                    to={item.link}
                    className="text-white block px-3 py-2 hover:bg-purple-600/10"
                  >
                    {item.name}
                  </Link>
                  {item.submenu &&
                    item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.link}
                        className="text-gray-300 block px-3 py-2 pl-6 text-sm hover:bg-purple-600/10"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                </React.Fragment>
              ))}
              <Link
                to="/contact"
                className="text-white block px-3 py-2 bg-purple-600 rounded-full text-center mt-4"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
