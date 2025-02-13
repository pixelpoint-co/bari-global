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
  target: "https://cdn.pixabay.com/photo/2023/01/25/12/48/overcast-7743510_1280.jpg",
  marketing: "https://cdn.pixabay.com/photo/2019/12/01/14/00/desert-4665569_1280.jpg",
  housing: "https://cdn.pixabay.com/photo/2021/02/05/07/07/building-5983598_1280.jpg",
  benefits: "https://cdn.pixabay.com/photo/2017/06/18/18/39/baby-2416718_1280.jpg",
  businessImpact: "https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg",
  projectedGoal: "https://cdn.pixabay.com/photo/2020/11/18/22/31/staple-5756894_1280.jpg",
  keyPartners: "https://cdn.pixabay.com/photo/2019/11/29/17/05/hand-4661763_1280.jpg",
  timeline: "https://cdn.pixabay.com/photo/2019/10/23/11/53/architecture-4571361_1280.jpg",
};

// Sections Data (No Subtitles)
const sections = [
  { title: "Vision", img: imageLinks.vision, id: "vision" },
  { title: "Target", img: imageLinks.target, id: "target" },
  { title: "Marketing", img: imageLinks.marketing, id: "part-a" },
  { title: "Housing Solution", img: imageLinks.housing, id: "part-b" },
  { title: "Benefits", img: imageLinks.benefits, id: "integration" },
  { title: "Business Impact", img: imageLinks.businessImpact, id: "business-impact" },
  { title: "Projected Goal", img: imageLinks.projectedGoal, id: "budget-timeline" },
  { title: "Key Partners", img: imageLinks.keyPartners, id: "stakeholders" },
  { title: "Timeline", img: imageLinks.timeline, id: "implementation" },
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
        <motion.h1
          variants={fadeIn}
          className="text-3xl md:text-4xl font-extrabold uppercase text-[#2D2D2D] tracking-widest font-inter text-center mb-8"
        >
          Contents
        </motion.h1>

        {/* Sections Grid (Fixed 3x3 Layout) */}
        <motion.div
          variants={fadeIn}
          className="grid grid-cols-3 gap-6 w-full max-w-5xl place-items-center"
        >
          {sections.map(({ title, img, id }, index) => (
            <motion.button
              key={id}
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(id)}
              className="flex flex-col items-center text-center w-32 md:w-40"
            >
              {/* Section Title (Fixed Height for Alignment, Smaller Font) */}
              <motion.div
                variants={fadeIn}
                className="h-8 flex items-center justify-center"
              >
                <h2 className="text-xs md:text-sm font-bold text-gray-900 uppercase font-inter tracking-wide">
                  {title}
                </h2>
              </motion.div>

              {/* Section Image (Smaller with Hover Effect) */}
              <motion.div
                variants={fadeIn}
                className="w-20 h-14 md:w-28 md:h-20 bg-gray-300 overflow-hidden opacity-80 rounded-md"
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
