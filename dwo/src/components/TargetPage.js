import React from "react";
import { useSectionInView, fadeIn, motion } from "../hooks/useSectionInView";
import { FaRegGem, FaGlobe, FaBriefcase, FaUsers, FaBuilding, FaLightbulb } from "react-icons/fa";

const targetAudiences = [
  { title: "HNWIs & Global Investors", icon: <FaRegGem /> },
  { title: "Wellness Tourists & Luxury Travelers", icon: <FaGlobe /> },
  { title: "Remote Professionals", icon: <FaBriefcase /> },
  { title: "Corporate Executives & Wellness Brands", icon: <FaUsers /> },
  { title: "UAE Nationals & Emirati Families", icon: <FaBuilding /> },
  { title: "Global Tech Innovators", icon: <FaLightbulb /> },
];

const TargetPage = () => {
  const { ref: visionRef, animation: visionAnimation } = useSectionInView();
  const { ref: imageRef, animation: imageAnimation } = useSectionInView();
  
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FDFBF7] to-[#EDE8DF] text-gray-900 px-8 md:px-20 lg:px-40 py-24">
      
      {/* Title Section */}
      <motion.div
        ref={visionRef}
        initial="hidden"
        animate={visionAnimation}
        variants={fadeIn}
        className="mb-12 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide uppercase text-[#2D2D2D] font-inter">
          Target
        </h1>
        <div className="w-20 h-1 bg-[#AA8453] mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Description */}
      <motion.div
        ref={imageRef}
        initial="hidden"
        animate={imageAnimation}
        variants={fadeIn}
        className="w-full max-w-4xl px-4 mb-12 text-center"
      >
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          We cater to a diverse audience who value wellness, investment, and sustainable living.
        </p>
      </motion.div>

      {/* Target Audience Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 max-w-5xl"
      >
        {targetAudiences.map(({ title, icon }, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            variants={fadeIn}
          >
            <div className="w-12 h-12 flex items-center justify-center text-2xl text-white bg-[#AA8453] rounded-full shadow-md">
              {icon}
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-4">{title}</h3>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
};

export default TargetPage;
