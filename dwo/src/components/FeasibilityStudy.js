import { useSectionInView, fadeIn, motion } from "../hooks/useSectionInView";
import { FaRegLightbulb, FaMapMarkedAlt, FaRegClipboard, FaChartLine, FaLeaf } from "react-icons/fa";

const FeasibilityStudy = () => {
  const { ref: titleRef, animation: titleAnimation } = useSectionInView();
  const { ref: contentRef, animation: contentAnimation } = useSectionInView();

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FAF9F6] to-[#ECE9E6] text-gray-900 px-8 md:px-20 lg:px-40 py-24">
      
      {/* Title Section */}
      <motion.div ref={titleRef} initial="hidden" animate={titleAnimation} variants={fadeIn} className="mb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide uppercase text-[#2D2D2D] font-inter">
          Feasibility Study
        </h1>
        <div className="w-20 h-1 bg-[#AA8453] mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Content Section (One Row per Item) */}
      <motion.div ref={contentRef} initial="hidden" animate={contentAnimation} variants={fadeIn} className="flex flex-col gap-12 max-w-4xl w-full">

        {/* Market Analysis */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <FaRegLightbulb className="text-[#AA8453] text-4xl" />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 font-inter">
              Market Analysis
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mt-3">
              Dubai has a growing demand for affordable housing, especially among low-income workers, young professionals, and expats.  
              The market is dominated by luxury real estate, leaving a gap for sustainable and affordable housing solutions.
            </p>
          </div>
        </div>

        {/* Location Analysis */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <FaMapMarkedAlt className="text-[#AA8453] text-4xl" />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 font-inter">
              Location Analysis
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mt-3">
              Identified sites: Dubai South (proximity to Expo City) and Al Qudra (eco-tourism potential).  
              The Dubai 2040 Urban Master Plan supports sustainable housing developments.
            </p>
          </div>
        </div>

        {/* Regulatory Feasibility */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <FaRegClipboard className="text-[#AA8453] text-4xl" />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 font-inter">
              Regulatory Feasibility
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mt-3">
              Tiny homes require rezoning and special permits. Collaboration with Dubai Municipality and RERA will be crucial.  
              Compliance with safety, energy efficiency, and sustainability regulations is essential.
            </p>
          </div>
        </div>

        {/* Financial Feasibility */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <FaChartLine className="text-[#AA8453] text-4xl" />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 font-inter">
              Financial Feasibility
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mt-3">
              Land Costs: AED 50–100 per sq. ft.  
              Construction Costs: AED 200–300 per sq. ft.  
              Infrastructure: AED 10–20 million (utilities, roads, community spaces).  
              Revenue Model: Rental (AED 2,000–4,000/month per unit) & Sales (AED 150,000–300,000/unit).  
              Break-even: 3–5 years depending on occupancy.
            </p>
          </div>
        </div>

        {/* Sustainability */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <FaLeaf className="text-[#AA8453] text-4xl" />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 font-inter">
              Sustainability
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mt-3">
              Implementing solar energy, rainwater harvesting, and waste recycling.  
              Supports sustainable urban growth and reduces carbon footprint.
            </p>
          </div>
        </div>

      </motion.div>

    </div>
  );
};

export default FeasibilityStudy;
