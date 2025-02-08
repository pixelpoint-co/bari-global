import { useSectionInView, fadeIn, motion } from "../hooks/useSectionInView";
import { FaSearch, FaTools, FaBullhorn, FaChartBar } from "react-icons/fa";

const phases = [
  {
    title: "Planning",
    timeline: "1–2 Months",
    icon: <FaSearch className="text-white text-2xl md:text-3xl" />,
    description: [
      "Conduct feasibility study for tiny housing.",
      "Secure partnerships with government entities and private sector stakeholders.",
      "Finalize budget and timeline for marketing campaign.",
    ],
  },
  {
    title: "Development",
    timeline: "3–6 Months",
    icon: <FaTools className="text-white text-2xl md:text-3xl" />,
    description: [
      "Begin construction of pilot tiny housing community.",
      "Launch digital campaign and announce wellness events.",
      "Set up logistics for outdoor yoga, cinema, and ice cream trucks.",
    ],
  },
  {
    title: "Execution",
    timeline: "7–12 Months",
    icon: <FaBullhorn className="text-white text-2xl md:text-3xl" />,
    description: [
      "Host wellness festivals, cultural tours, and outdoor events.",
      "Monitor occupancy rates and community feedback for tiny housing.",
      "Adjust campaign strategies based on real-time data.",
    ],
  },
  {
    title: "Evaluation",
    timeline: "13 Month",
    icon: <FaChartBar className="text-white text-2xl md:text-3xl" />,
    description: [
      "Analyze campaign performance (e.g., tourist numbers, social media engagement).",
      "Assess tiny housing project success (e.g., occupancy rates, resident satisfaction).",
      "Prepare reports for stakeholders and plan for scaling up.",
    ],
  },
];

const ImplementationPlan = () => {
  const { ref: titleRef, animation: titleAnimation } = useSectionInView();
  const { ref: timelineRef, animation: timelineAnimation } = useSectionInView();

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FAF9F6] to-[#ECE9E6] text-gray-900 px-6 md:px-16 lg:px-32 py-24">
      
      {/* Title Section */}
      <motion.div
        ref={titleRef}
        initial="hidden"
        animate={titleAnimation}
        variants={fadeIn}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide uppercase text-[#2D2D2D] font-inter">
          Implementation Plan
        </h1>
        <div className="w-20 h-1 bg-[#AA8453] mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Responsive Grid Layout (4 per row on large, 2 per row on medium, 1 per row on small) */}
      <motion.div
        ref={timelineRef}
        initial="hidden"
        animate={timelineAnimation}
        variants={fadeIn}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {phases.map(({ title, timeline, icon, description }, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            
            {/* Icon & Timeline */}
            <div className="flex flex-col items-center mb-6">
              <div className="w-14 h-14 flex items-center justify-center bg-[#AA8453] rounded-full shadow-lg border-4 border-[#FAF9F6]">
                {icon}
              </div>
              <div className="text-lg text-gray-700 font-worksans mt-2">{timeline}</div>
            </div>

            {/* Content Box */}
            <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-sm">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 font-inter">{title}</h2>
              <ul className="list-disc text-gray-700 text-md text-left pl-6 mt-2">
                {description.map((desc, i) => (
                  <li key={i} className="mb-2">{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImplementationPlan;
