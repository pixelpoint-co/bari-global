import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Motion animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.5, ease: "easeInOut" } },
};

// Image Links
const imageLinks = {
  vision: "https://cdn.pixabay.com/photo/2019/03/14/07/22/city-4054326_1280.jpg",
  marketing: "https://cdn.pixabay.com/photo/2019/12/01/14/00/desert-4665569_1280.jpg",
  housing: "https://cdn.pixabay.com/photo/2021/02/05/07/07/building-5983598_1280.jpg",
  integration: "https://cdn.pixabay.com/photo/2021/12/28/14/37/flower-6899466_1280.jpg",
  businessImpact: "https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg",
  budget: "https://cdn.pixabay.com/photo/2020/11/18/22/31/staple-5756894_1280.jpg",
  stakeholders: "https://cdn.pixabay.com/photo/2019/11/29/17/05/hand-4661763_1280.jpg",
  implementation: "https://cdn.pixabay.com/photo/2019/10/23/11/53/architecture-4571361_1280.jpg",
};

// Sections Data
const sections = [
  { title: "Vision", subtitle: "Oasis of the Future", img: imageLinks.vision, id: "vision" },
  { title: "Marketing Campaign", subtitle: "Dubai Wellness Oasis", img: imageLinks.marketing, id: "part-a" },
  { title: "Housing Solution", subtitle: "Smart Tiny Living", img: imageLinks.housing, id: "part-b" },
  { title: "Workforce Benefits", subtitle: "Wellness & Housing Merge", img: imageLinks.integration, id: "integration" },
  { title: "Business Impact", subtitle: "Economic & Cultural Influence", img: imageLinks.businessImpact, id: "business-impact" },
  { title: "Projected Goal", subtitle: "Economic & Strategic Growth", img: imageLinks.budget, id: "budget-timeline" },
  { title: "Stakeholders", subtitle: "Key Partners & Collaborators", img: imageLinks.stakeholders, id: "stakeholders" },
  { title: "Timeline", subtitle: "Execution Strategy & Phases", img: imageLinks.implementation, id: "implementation" },
];

const ContentsPage = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="contentsPage"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={fadeIn}
        className="w-full min-h-screen flex flex-col items-center justify-center 
        bg-gradient-to-b from-[#FDFBF7] to-[#EDE8DF] px-4 md:px-12 py-16"
      >
        {/* Title */}
        <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-extrabold uppercase text-[#2D2D2D] tracking-widest font-inter text-center mb-8">
          Contents
        </motion.h1>

        {/* Sections Grid */}
        <motion.div variants={fadeIn} className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {sections.map(({ number, title, subtitle, img, id }, index) => (
            <motion.button
              key={id}
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(id)}
              className="flex flex-col items-center text-center space-y-3 focus:outline-none"
            >

              {/* Section Title & Description */}
              <motion.div variants={fadeIn} className="text-center">
                <h2 className="text-sm md:text-md font-semibold text-gray-900 uppercase font-inter">
                  {title}
                </h2>
                <p className="text-xs md:text-sm text-gray-700 font-worksans">{subtitle}</p>
              </motion.div>

              {/* Section Image (B&W with Hover Effect) */}
              <motion.div
                variants={fadeIn}
                className="w-24 h-16 md:w-32 md:h-20 bg-gray-300 overflow-hidden opacity-80 rounded-md"
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContentsPage;
