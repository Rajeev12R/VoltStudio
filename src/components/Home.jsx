import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useNavigate } from "react-router-dom"
import video from "../assets/file_example_MP4_480_1_5MG.mp4"

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const navigate = useNavigate()
  const videoRef = useRef(null)
  const headingRef = useRef(null)
  const subheadingRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(subheadingRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5,
      })

      gsap.from(".cta-button", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
        delay: 1,
      })

      gsap.to(".content-wrapper", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: ".home-container",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

      gsap.to(".video-overlay", {
        opacity: 0.8,
        scrollTrigger: {
          trigger: ".home-container",
          start: "top top",
          end: "30% top",
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="home-container relative overflow-hidden bg-gray-900 text-white">
      <div className="absolute inset-0">
        <div className="video-overlay absolute inset-0 bg-black opacity-50 z-10"></div>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-48 lg:py-56">
        <div className="content-wrapper">
          <h1 ref={headingRef} className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">We are the working unit</span>
            <span className="block mt-2">for the difference of your</span>
            <span className="block mt-2 text-indigo-400">Brand's present and FUTURE.</span>
          </h1>
          <p ref={subheadingRef} className="mt-6 max-w-lg text-xl text-gray-300 sm:max-w-3xl">
            Elevate your brand with our innovative digital solutions. We're here to transform your vision into reality.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <button
                onClick={() => navigate("/services")}
                className="cta-button w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Discover Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

