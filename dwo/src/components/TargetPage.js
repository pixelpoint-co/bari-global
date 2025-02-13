import React from "react";
import { useSectionInView, fadeIn, motion } from "../hooks/useSectionInView";
import { FaRegGem, FaGlobe, FaBriefcase, FaUsers, FaBuilding, FaLightbulb } from "react-icons/fa";

const targetAudiences = [
  { title: "HNWIs & Global Investors", icon: <FaRegGem className="text-[#AA8453] text-4xl" /> },
  { title: "Wellness Tourists & Luxury Travelers", icon: <FaGlobe className="text-[#AA8453] text-4xl" /> },
  { title: "Remote Professionals", icon: <FaBriefcase className="text-[#AA8453] text-4xl" /> },
  { title: "Corporate Executives & Wellness Brands", icon: <FaUsers className="text-[#AA8453] text-4xl" /> },
  { title: "UAE Nationals & Emirati Families", icon: <FaBuilding className="text-[#AA8453] text-4xl" /> },
  { title: "Global Tech Innovators", icon: <FaLightbulb className="text-[#AA8453] text-4xl" /> },
];

const TargetPage = () => {
  const { ref: titleRef, animation: titleAnimation } = useSectionInView();
  const { ref: overviewRef, animation: overviewAnimation } = useSectionInView();
  const { ref: audienceRef, animation: audienceAnimation } = useSectionInView();

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FDFBF7] to-[#EDE8DF] text-gray-900 px-8 md:px-20 lg:px-40 py-24">
      
      {/* Title Section */}
      <motion.div
        ref={titleRef}
        initial="hidden"
        animate={titleAnimation}
        variants={fadeIn}
        className="mb-12 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide uppercase text-[#2D2D2D] font-inter">
          Target
        </h1>
        <div className="w-20 h-1 bg-[#AA8453] mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Overview Section */}
      <motion.div
        ref={overviewRef}
        initial="hidden"
        animate={overviewAnimation}
        variants={fadeIn}
        className="max-w-3xl text-center mb-16"
      >
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-worksans">
          We cater to a diverse audience who value wellness, investment, and sustainable living.
        </p>
      </motion.div>

      {/* Target Audience Section (Cascading Effect) */}
      <motion.div
        ref={audienceRef}
        initial="hidden"
        animate={audienceAnimation}
        variants={fadeIn}
        className="max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {targetAudiences.map(({ title, icon }, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: index * 0.1 }} // Cascading fade-in effect
            className="flex flex-col items-center bg-white shadow-lg rounded-xl px-6 py-6"
          >
            {/* Icon Above Title */}
            <div className="text-4xl mb-3">{icon}</div>
            <h3 className="text-md md:text-lg font-bold text-gray-900 font-inter text-center">
              {title}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TargetPage;
