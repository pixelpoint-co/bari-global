import { useSectionInView, fadeIn, motion } from "../hooks/useSectionInView";
import { FaChartLine, FaHome, FaBullseye } from "react-icons/fa";
const projectedGoals = [
  {
    icon: <FaChartLine className="text-[#AA8453] text-3xl" />,
    heading: "$580B+ Wellness Market",
    text: "Dubai leads the global wellness real estate boom.",
  },
  {
    icon: <FaHome className="text-[#AA8453] text-3xl" />,
    heading: "250K+ Wellness Tourists",
    text: "Elite travelers investing in Dubai’s wellness lifestyle.",
  },
  {
    icon: <FaBullseye className="text-[#AA8453] text-3xl" />,
    heading: "Sustainable Smart Living",
    text: "Luxury meets eco-friendly design in Smart Tiny Living.",
  },
];

const MarketingBudgetTimeline = () => {
  const { ref: titleRef, animation: titleAnimation } = useSectionInView();
  const { ref: goalRef, animation: goalAnimation } = useSectionInView();

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FAF9F6] to-[#ECE9E6] text-gray-900 px-8 md:px-20 lg:px-40 py-24">

      {/* Title Section */}
      <motion.div ref={titleRef} initial="hidden" animate={titleAnimation} variants={fadeIn} className="mb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide uppercase text-[#2D2D2D] font-inter">
          PROJECTED GOAL
        </h1>
        <div className="w-20 h-1 bg-[#AA8453] mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Projected Goals Section */}
      <motion.div ref={goalRef} initial="hidden" animate={goalAnimation} variants={fadeIn} className="max-w-5xl flex flex-col gap-8">
        {projectedGoals.map(({ icon, text, heading }, index) => (
          <div className="flex flex-col" key="index">
              <h2 className="text-center text-2xl font-semibold mb-2">{heading}</h2>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">{icon}</div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-worksans">{text}</p>
            </div>
          </div>
        ))}
      </motion.div>

    </div>
  );
};

export default MarketingBudgetTimeline;
