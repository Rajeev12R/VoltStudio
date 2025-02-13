import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import GlowingBackground from "./GlowingBackground";

const Hero = () => {
  const textRef = useRef(null);
  const words = ["Digital Success", "Digital World", "Digital Progress"];
  let index = 0;

  useEffect(() => {
    const changeText = () => {
      gsap.to(textRef.current, {
        y: -130,
        opacity: 0,
        duration: 0.1,
        onComplete: () => {
          textRef.current.innerText = words[index];
          index = (index + 1) % words.length;
          gsap.fromTo(
            textRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.1}
          );
        },
      });
    };
    const interval = setInterval(changeText, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-black min-h-screen flex items-center overflow-hidden">
      <GlowingBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/30 to-black pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Clipping your dreams of <br />
            <span className="">
              <span ref={textRef} className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Digital Success
              </span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Turning digital clutter into seamless strategy - just like a WIDE TAKE, keeping things neat and effective! <br />
            Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition-colors transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
            <Link
              to="/client-portfolio"
              className="inline-block bg-transparent text-white px-8 py-4 rounded-full text-lg font-medium border-2 border-white hover:bg-white hover:text-black transition-colors transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
};

export default Hero;
