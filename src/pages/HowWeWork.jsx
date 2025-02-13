"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const ProcessItem = ({ number, title, description, isOpen, onToggle }) => (
  <motion.div
    className="border-b border-gray-200"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <button
      onClick={onToggle}
      className="w-full py-8 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-center gap-8">
        <span className="text-xl font-medium text-gray-400">{number}</span>
        <span className="text-2xl font-semibold">{title}</span>
      </div>
      {isOpen ? (
        <Minus className="h-6 w-6 text-gray-400" />
      ) : (
        <Plus className="h-6 w-6 text-gray-400" />
      )}
    </button>
    {isOpen && (
      <motion.div
        className="pb-8 pl-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-lg text-gray-600">{description}</p>
      </motion.div>
    )}
  </motion.div>
);

const ProcessSection = ({ title, description, items }) => {
  const [openItem, setOpenItem] = useState(0);

  return (
    <div className="py-16">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-lg text-gray-600 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {description}
      </motion.p>
      <div className="space-y-2">
        {items.map((item, index) => (
          <ProcessItem
            key={index}
            {...item}
            isOpen={openItem === index}
            onToggle={() => setOpenItem(openItem === index ? -1 : index)}
          />
        ))}
      </div>
    </div>
  );
};

const HowWeWork = () => {
  const videoProductionItems = [
    {
      number: "01",
      title: "Pre-Production Planning",
      description:
        "We start by understanding your vision, scripting, storyboarding, and planning the shoot. This includes location scouting, casting, and scheduling. Our team ensures every detail is meticulously planned to align with your brand and goals, setting the stage for a seamless production process.",
    },
    {
      number: "02",
      title: "Video Shoot",
      description:
        "Our team captures high-quality footage using professional equipment, ensuring every detail aligns with your brand and vision. We focus on lighting, framing, and audio quality to deliver raw footage that is ready for the next stage of post-production.",
    },
    {
      number: "03",
      title: "Post-Production Editing",
      description:
        "We edit the footage, add transitions, sound effects, color grading, and finalize the video after client reviews. Our editors work closely with you to ensure the final product meets your expectations and delivers your message effectively.",
    },
    {
      number: "04",
      title: "Final Delivery",
      description:
        "The completed video is delivered in the required formats, ready for publishing on your preferred platforms. We ensure the video is optimized for different devices and platforms, maximizing its reach and impact.",
    },
  ];

  const contentCreationItems = [
    {
      number: "01",
      title: "Research & Brainstorming",
      description:
        "We conduct in-depth research to understand your audience and industry, then brainstorm content ideas that align with your goals. Our team identifies key trends, pain points, and opportunities to create content that resonates with your target audience.",
    },
    {
      number: "02",
      title: "Content Drafting",
      description:
        "Our writers create the first draft of the content, ensuring it is engaging, informative, and tailored to your brand voice. We focus on clarity, creativity, and relevance to ensure the content stands out and drives engagement.",
    },
    {
      number: "03",
      title: "Editing & Formatting",
      description:
        "The content is refined, edited, and formatted for readability and visual appeal, ready for publishing. We ensure the content is free of errors, optimized for SEO, and visually appealing to enhance user experience.",
    },
    {
      number: "04",
      title: "Publishing & Distribution",
      description:
        "We publish the content on your chosen platforms and ensure it reaches your target audience effectively. Our team monitors performance and engagement, making adjustments as needed to maximize the content's impact.",
    },
  ];

  const webDevelopmentItems = [
    {
      number: "01",
      title: "UI/UX Design",
      description:
        "We create wireframes and prototypes using Figma, ensuring the design is user-friendly and aligns with your brand identity. Our designers focus on usability, accessibility, and aesthetics to create a seamless user experience.",
    },
    {
      number: "02",
      title: "Frontend Development",
      description:
        "Our developers build the frontend using modern technologies like React, ensuring a responsive and interactive experience. We focus on performance optimization and cross-browser compatibility to deliver a smooth user experience.",
    },
    {
      number: "03",
      title: "Backend Development",
      description:
        "We develop the backend infrastructure, including databases and APIs, to ensure seamless functionality. Our team ensures the backend is scalable, secure, and optimized for performance, supporting your website's long-term growth.",
    },
    {
      number: "04",
      title: "Testing & Launch",
      description:
        "The website is thoroughly tested for performance and usability before being launched. We conduct rigorous testing to identify and fix any issues, ensuring the website is ready to deliver an exceptional user experience.",
    },
  ];

  const graphicDesigningItems = [
    {
      number: "01",
      title: "Concept Development",
      description:
        "We start by understanding your brand, target audience, and goals to develop a creative concept. Our team brainstorms ideas, creates mood boards, and presents initial sketches to ensure the design aligns with your vision.",
    },
    {
      number: "02",
      title: "Design Drafting",
      description:
        "Our designers create the first draft of the design, incorporating your feedback and preferences. We focus on creativity, clarity, and visual appeal to ensure the design effectively communicates your message.",
    },
    {
      number: "03",
      title: "Refinement & Finalization",
      description:
        "The design is refined based on your feedback, ensuring every detail is perfect. We focus on typography, color schemes, and layout to create a polished and professional design that stands out.",
    },
    {
      number: "04",
      title: "Delivery & Implementation",
      description:
        "The final design is delivered in the required formats, ready for implementation. We ensure the design is optimized for different platforms and devices, maximizing its impact and usability.",
    },
  ];

  const seoItems = [
    {
      number: "01",
      title: "Keyword Research & Analysis",
      description:
        "We conduct in-depth keyword research to identify the most relevant and high-performing keywords for your business. Our team analyzes search trends, competition, and user intent to create a targeted SEO strategy.",
    },
    {
      number: "02",
      title: "On-Page Optimization",
      description:
        "We optimize your website's content, meta tags, and structure to improve search engine rankings. Our team ensures your website is technically sound, user-friendly, and aligned with SEO best practices.",
    },
    {
      number: "03",
      title: "Content Strategy & Creation",
      description:
        "We develop a content strategy that aligns with your SEO goals, creating high-quality, keyword-rich content. Our team focuses on creating content that is engaging, informative, and optimized for search engines.",
    },
    {
      number: "04",
      title: "Performance Monitoring & Reporting",
      description:
        "We monitor your website's performance, track key metrics, and provide detailed reports. Our team makes data-driven adjustments to ensure your SEO strategy delivers consistent results and drives organic growth.",
    },
  ];

  const brandingItems = [
    {
      number: "01",
      title: "Brand Discovery",
      description:
        "We start by understanding your business, values, and target audience to define your brand identity. Our team conducts workshops and interviews to gather insights and create a strong foundation for your brand.",
    },
    {
      number: "02",
      title: "Visual Identity Design",
      description:
        "We design your brand's visual identity, including logo, color palette, typography, and brand guidelines. Our team ensures the design is unique, memorable, and aligned with your brand's personality.",
    },
    {
      number: "03",
      title: "Brand Messaging",
      description:
        "We craft your brand's messaging, including taglines, mission statements, and tone of voice. Our team ensures your messaging is clear, consistent, and resonates with your target audience.",
    },
    {
      number: "04",
      title: "Brand Implementation",
      description:
        "We implement your brand across all touchpoints, ensuring consistency and coherence. Our team provides guidance and support to ensure your brand is effectively communicated and recognized.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-medium text-gray-400 mb-6 block">
                AGENCY SERVICES
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold mb-8">How We Work</h1>
              <p className="text-2xl font-light mb-8">
                We're more than an agency. We're your creative partner.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                From video production to web development, we collaborate with you to bring your vision to life. Our structured process ensures clarity, creativity, and results.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Process Sections */}
      <div className="bg-[#f5f5f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProcessSection
            title="Video Production & Editing"
            description="From pre-production planning to final delivery, we handle every aspect of video creation to ensure your message is compelling and visually stunning."
            items={videoProductionItems}
          />
          <ProcessSection
            title="Content Creation & Writing"
            description="We craft engaging content that resonates with your audience, from research and drafting to editing and publishing."
            items={contentCreationItems}
          />
          <ProcessSection
            title="Web Development & Design"
            description="We build modern, responsive websites that reflect your brand and deliver exceptional user experiences."
            items={webDevelopmentItems}
          />
          <ProcessSection
            title="Graphic Designing"
            description="We create visually stunning designs that communicate your brand's message effectively, from concept development to final implementation."
            items={graphicDesigningItems}
          />
          <ProcessSection
            title="SEO & Digital Marketing"
            description="We optimize your online presence to drive organic traffic and improve search engine rankings, ensuring your business stands out in the digital landscape."
            items={seoItems}
          />
          <ProcessSection
            title="Branding & Identity"
            description="We develop a strong and cohesive brand identity that resonates with your audience and sets you apart from the competition."
            items={brandingItems}
          />
        </div>
      </div>

</div>
  );
};

export default HowWeWork;