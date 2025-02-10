import React from "react";
import { useSectionInView, fadeIn, motion } from "../hooks/useSectionInView";

const TargetPage = () => {
  const { ref: visionRef, animation: visionAnimation } = useSectionInView();
  const { ref: imageRef, animation: imageAnimation } = useSectionInView();
  const { ref: keyPointsRef, animation: keyPointsAnimation } = useSectionInView();
  const { ref: conclusionRef, animation: conclusionAnimation } = useSectionInView();

  const keyPoints = [
    {
      number: "1",
      title: "Wellness",
      descList: [
        "Health Check-ups & Preventive Care",
        "Yoga, Meditation & Pilates Studios",
        "Personalized Fitness & Workout Programs",
      ]
    },
    {
      number: "2",
      title: "Holistic Living",
      descList: [
        "Holistic Treatments & Alternative Therapies",
        "Mental Health Support & Counseling",
        "IV Drips & Wellness Boosters",
      ],
    }
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FDFBF7] to-[#EDE8DF] text-gray-900 px-8 md:px-20 lg:px-40 py-24">

      {/* Title Section */}
      <motion.div ref={visionRef} initial="hidden" animate={visionAnimation} variants={fadeIn} className="mb-12">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide uppercase text-[#2D2D2D] font-inter">
          Target
        </h1>
        <div className="w-20 h-1 bg-[#AA8453] mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Image Section */}
      <motion.div ref={imageRef} initial="hidden" animate={imageAnimation} variants={fadeIn} className="w-full max-w-5xl px-4 mb-12">
        <p className="text-lg md:text-xl text-gray-700 mt-2 max-w-3xl mx-auto  ">We cater to a diverse audience who value wellness, investment, and sustainable living.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-center">HNWIs & Global Investors</h3>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-center">Wellness Tourists & Luxury Travelers</h3>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-center">Remote Professionals</h3>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-center">Corporate Executives & Wellness Brands</h3>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-center">UAE Nationals & Emirati Families</h3>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-center">Global Tech Innovators</h3>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default TargetPage;
