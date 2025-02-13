import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
// import CaseStudies from "./components/CaseStudies"
import CallToAction from "./components/CallToAction"
// import Stats from "./components/Stats"
import Footer from "./components/Footer"
import ServicesPage from "./pages/Services"
import PortfolioPage from "./pages/Portfolio"
import AboutPage from "./pages/About"
import BlogPage from "./pages/Blog"
import BlogPostPage from "./pages/BlogPostPage";
import ContactPage from "./pages/Contact"
import HowWeWorkPage from "./pages/HowWeWork"

const App = () => {
  return (
      <div className="overflow-hidden">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                {/* <Stats/> */}
                <Services />
                {/* <CaseStudies /> */}
                <CallToAction />
              </>
            }
          />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/client-portfolio" element={<PortfolioPage />} />
          <Route path="/how-we-work" element={<HowWeWorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage/>} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>

  )
}

export default App

