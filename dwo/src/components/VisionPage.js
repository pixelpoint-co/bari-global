import React, { useRef } from "react";
import { useSectionInView, fadeIn, motion } from "../hooks/useSectionInView";

const VisionPage = () => {
  const { ref: visionRef, animation: visionAnimation } = useSectionInView();
  const { ref: quoteRef, animation: quoteAnimation } = useSectionInView();
  const { ref: explanationRef, animation: explanationAnimation } = useSectionInView();
  const { ref: keyPointsRef, animation: keyPointsAnimation } = useSectionInView();
  const { ref: conclusionRef, animation: conclusionAnimation } = useSectionInView();

  const keyPoints = [
    { number: "1", title: "A One-Year Marketing Campaign", desc: "Launching a global branding campaign to position Dubai as a premier wellness destination." },
    { number: "2", title: "A Solution for Affordable Housing", desc: "Introducing innovative tiny housing and smart living concepts to provide sustainable, affordable living solutions." }
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FDFBF7] to-[#EDE8DF] text-gray-900 px-8 md:px-20 lg:px-40 py-24">
      
      {/* Title Section */}
      <motion.div ref={visionRef} initial="hidden" animate={visionAnimation} variants={fadeIn} className="mb-12">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide uppercase text-[#2D2D2D] font-inter">
          Vision
        </h1>
        <div className="w-20 h-1 bg-[#AA8453] mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Quote Section */}
      <motion.div ref={quoteRef} initial="hidden" animate={quoteAnimation} variants={fadeIn} className="relative max-w-3xl text-center mb-16">
        <p className="text-xl md:text-2xl italic text-gray-700 font-worksans leading-relaxed">
          "And give the relative his right, and [also] the poor and the traveler, and do not spend wastefully."
        </p>
        <span className="block mt-4 text-lg text-[#AA8453] font-medium">
          – Quran 17:26 (Surah Al-Isra)
        </span>
      </motion.div>

      {/* Explanation Section */}
      <motion.div ref={explanationRef} initial="hidden" animate={explanationAnimation} variants={fadeIn} className="max-w-3xl text-center mb-16">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-worksans">
          <span className="bg-[#FDE68A] px-1 rounded-md">Our mission</span> is to transform Dubai into a global wellness hub, seamlessly combining luxury, innovation, and cultural authenticity. 
          <br />
          <br />
          <span className="bg-[#FDE68A] px-1 rounded-md">The goal</span> is to attract tourists, investors, and locals alike, fostering a holistic environment for rejuvenation and growth.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-worksans mt-6">
          <span className="bg-[#FDE68A] px-1 rounded-md">This project will address two critical tasks:</span>
        </p>
      </motion.div>

      {/* Key Points Section */}
      <motion.div ref={keyPointsRef} initial="hidden" animate={keyPointsAnimation} variants={fadeIn} className="mt-8 max-w-5xl flex flex-col md:flex-row items-center md:items-start justify-between gap-12 text-center md:text-left">
        {keyPoints.map(({ number, title, desc }) => (
          <div key={number} className="flex flex-col items-center md:items-start md:w-1/2 gap-y-6">
            <div className="flex items-center justify-center md:justify-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#AA8453] text-white text-2xl font-semibold font-plex aspect-square">
                {number}
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 font-inter ml-4 md:ml-6">
                {title}
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-worksans">
              {desc}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Conclusion Section */}
      <motion.div ref={conclusionRef} initial="hidden" animate={conclusionAnimation} variants={fadeIn} className="text-center max-w-2xl mt-12">
        <p className="text-3xl md:text-4xl font-light text-[#AA8453] leading-snug font-worksans">
          The theme revolves around wellness, health, family, authenticity, and innovation, positioning Dubai as a "Pokémon Center" for rejuvenation and growth.
        </p>
      </motion.div>
    </div>
  );
};

export default VisionPage;
