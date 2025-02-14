import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GlowingBackground from "../components/GlowingBackground";
import sparshworldschool from "../assets/school.png";

// Import all images and videos for the slideshow
import schoolImage1 from "../assets/school_assets/1.jpeg";
import schoolImage2 from "../assets/school_assets/2.jpeg";
import schoolImage3 from "../assets/school_assets/3.jpeg";
import schoolImage4 from "../assets/school_assets/4.jpeg";
import schoolImage5 from "../assets/school_assets/5.jpeg";
import schoolImage6 from "../assets/school_assets/6.jpeg";
import schoolImage7 from "../assets/school_assets/7.jpeg";
import schoolImage8 from "../assets/school_assets/8.jpeg";
import schoolImage9 from "../assets/school_assets/9.jpeg";
import schoolImage10 from "../assets/school_assets/10.jpeg";

import sunnyImage2 from "../assets/sunny_assets/2.jpg";
import sunnyImage3 from "../assets/sunny_assets/3.jpg";
import sunnyImage4 from "../assets/sunny_assets/4.jpg";
import sunnyImage5 from "../assets/sunny_assets/5.jpg";
import sunnyVideo1 from "../assets/sunny_assets/1.mp4";

import gupshupImage2 from "../assets/gupshup_assets/2.jpg";
import gupshupImage3 from "../assets/gupshup_assets/3.jpg";
import gupshupImage4 from "../assets/gupshup_assets/4.jpg";
import gupshupImage5 from "../assets/gupshup_assets/5.jpg";
import gupshupImage6 from "../assets/gupshup_assets/6.jpg";
import gupshupImage7 from "../assets/gupshup_assets/7.jpg";
import gupshupVideo1 from "../assets/gupshup_assets/1.mp4";

import retroImage1 from "../assets/retro_assets/1.jpg";
import retroImage2 from "../assets/retro_assets/2.jpg";
import retroImage3 from "../assets/retro_assets/3.jpg";
import retroImage4 from "../assets/retro_assets/4.jpg";
import retroImage5 from "../assets/retro_assets/5.jpg";
import retroImage6 from "../assets/retro_assets/6.jpg";
import retroVideo1 from "../assets/retro_assets/1.mp4";

import retroMiniImage2 from "../assets/retromini_assets/2.jpg";
import retroMiniImage3 from "../assets/retromini_assets/3.png";
import retroMiniImage4 from "../assets/retromini_assets/4.png";
import retroMiniImage5 from "../assets/retromini_assets/5.png";
import retroMiniImage6 from "../assets/retromini_assets/6.png";
import retroMiniImage7 from "../assets/retromini_assets/7.png";
import retroMiniVideo1 from "../assets/retromini_assets/1.mp4";

import satvaImage1 from "../assets/satva_assets/1.jpg";
import satvaImage2 from "../assets/satva_assets/2.jpg";
import satvaImage3 from "../assets/satva_assets/3.jpg";
import satvaImage4 from "../assets/satva_assets/4.jpg";

const LogoScroll = () => {
  const logos = [
    { name: "sparshworldschool", image: sparshworldschool },
  ];

  return (
    <div className="w-full overflow-hidden bg-black py-12">
      <motion.div 
        className="flex justify-center"
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        {[...logos].map((logo, index) => (
          <motion.img
            key={index}
            src={logo.image || "/placeholder.svg"}
            alt={logo.name}
            className="h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300 mx-8"
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

const ImageSlider = ({ images, videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const items = [...videos, ...images];
  const timerRef = useRef(null);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, items.length]);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPaused) {
        goToNext();
      }
    }, 5000);
  }, [goToNext, isPaused]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div 
      className="relative w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {index < videos.length ? (
            <video
              src={item}
              className="w-full h-full object-contain object-center"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img src={item || "/placeholder.svg"} alt={`Slide ${index + 1}`} className="w-full h-full object-contain object-center" />
          )}
        </motion.div>
      ))}
      
      {/* Navigation Buttons */}
      <motion.button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
        whileHover={{ scale: 1.1 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      <motion.button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
        whileHover={{ scale: 1.1 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Navigation Indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center">
        {items.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full mx-1 transition-all ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-gray-400'
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  );
};

const CaseStudy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {[
        {
          title: "Sparsh World School, Suratgarh",
          category: "INTERNATIONAL SCHOOL",
          description: "Logo Designing • Content Writing • Social Media Management • Branding • Post Creation • Taglines",
          images: [
            schoolImage1,
            schoolImage2,
            schoolImage3,
            schoolImage4,
            schoolImage5,
            schoolImage6,
            schoolImage7,
            schoolImage8,
            schoolImage9,
            schoolImage10,
          ],
          videos: [],
        },
        {
          title: "Sunny side up",
          category: "RESTAURANT AND FINE DINING",
          description: "Video Editing • Video Shoots",
          images: [
            sunnyImage2,
            sunnyImage3,
            sunnyImage4,
            sunnyImage5,
          ],
          videos: [sunnyVideo1],
        },
        {
          title: "GupShup @ chhat",
          category: "ROOFTOP DINING",
          description: "Video Editing • Video Shoots",
          images: [
            gupshupImage2,
            gupshupImage3,
            gupshupImage4,
            gupshupImage5,
            gupshupImage6,
            gupshupImage7,
          ],
          videos: [gupshupVideo1],
        },
        {
          title: "Retro",
          category: "CAFE VENTURE",
          description: "Video Editing • Video Shoots • Post Creation • Graphics Designing",
          images: [
            retroImage1,
            retroImage2,
            retroImage3,
            retroImage4,
            retroImage5,
            retroImage6,
          ],
          videos: [retroVideo1],
        },
        {
          title: "Retro Mini",
          category: "MINI CAFE",
          description: "Video Editing • Video Shoots • Post Creation • Graphics Designing",
          images: [
            retroMiniImage2,
            retroMiniImage3,
            retroMiniImage4,
            retroMiniImage5,
            retroMiniImage6,
            retroMiniImage7,
          ],
          videos: [retroMiniVideo1],
        },
        {
          title: "Satva",
          category: "BAR & LOUNGE",
          description: "Video Editing • Video Shoots",
          images: [
            satvaImage1,
            satvaImage2,
            satvaImage3,
            satvaImage4,
          ],
          videos: [],
        },
      ].map((study, index) => (
        <React.Fragment key={index}>
          <motion.div
            className="bg-black p-12 lg:p-32 flex flex-col justify-center"
            variants={itemVariants}
          >
            <span className="text-sm font-medium text-gray-400 mb-6">
              {study.category}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">
              {study.title}
            </h2>
            <p className="text-gray-400 mb-8">
              {study.description}
            </p>
          </motion.div>
          <motion.div
            className="h-[500px] lg:h-auto flex items-center justify-center p-12"
            variants={itemVariants}
          >
            <ImageSlider images={study.images} videos={study.videos} />
          </motion.div>
        </React.Fragment>
      ))}
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className="bg-black min-h-screen">
      <GlowingBackground className="relative" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span
            className="text-sm font-medium text-white/60 px-6 py-2 outline-orange-100 outline max-w-fit mx-auto rounded-2xl mb-6 block"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            AGENCY CLIENT PORTFOLIO
          </motion.span>
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Client satisfaction is our success
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Discover how businesses of all sizes, from local cafés to
            international schools, have partnered with{" "}
            <span className="text-white font-bold">WIDE TAKE</span> – the
            marketing agency that drives growth and success.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex justify-center" // Center the button
          >
            <Link
              to="/contact"
              className="absolute inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full cursor-pointer text-lg font-medium transition-colors"
            >
              WORK WITH US
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <LogoScroll />
      <CaseStudy />
    </div>
  );
};

export default Portfolio;