import { useSectionInView, fadeIn, motion } from "../hooks/useSectionInView";

const MarketingBudgetTimeline = () => {
  const { ref: titleRef, animation: titleAnimation } = useSectionInView();
  const { ref: budgetRef, animation: budgetAnimation } = useSectionInView();
  const { ref: timelineRef, animation: timelineAnimation } = useSectionInView();

  const budgetItems = [
    { item: "Outdoor Yoga Sessions", cost: 500000 },
    { item: "Outdoor Cinema Experiences", cost: 1000000 },
    { item: "Healthy Ice Cream Trucks", cost: 300000 },
    { item: "Wellness Festivals", cost: 2000000 },
    { item: "Cultural Wellness Tours", cost: 1500000 },
    { item: "Digital Campaign", cost: 1200000 },
    { item: "Miscellaneous (Contingency)", cost: 500000 }
  ];

  const totalCost = budgetItems.reduce((acc, curr) => acc + curr.cost, 0).toLocaleString() + " AED (~$2M USD)";

  const timelinePhases = [
    { phase: "Planning and Partnerships", timeline: "Month 1-2" },
    { phase: "Event Setup and Logistics", timeline: "Month 3-4" },
    { phase: "Campaign Launch", timeline: "Month 5" },
    { phase: "Ongoing Events and Activities", timeline: "Month 6-12" },
    { phase: "Evaluation and Reporting", timeline: "Month 13" }
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FAF9F6] to-[#ECE9E6] text-gray-900 px-8 md:px-20 lg:px-40 py-24">
      
      {/* Title Section */}
      <motion.div ref={titleRef} initial="hidden" animate={titleAnimation} variants={fadeIn} className="mb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide uppercase text-[#2D2D2D] font-inter">
          Detailed Budget & Timeline
        </h1>
        <div className="w-20 h-1 bg-[#AA8453] mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Budget Table */}
      <motion.div ref={budgetRef} initial="hidden" animate={budgetAnimation} variants={fadeIn} className="w-full max-w-3xl mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 font-inter mb-6">Marketing Budget (AED)</h2>
        <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#AA8453] text-white">
                <th className="p-4 text-left">Item</th>
                <th className="p-4 text-right">Cost (AED)</th>
              </tr>
            </thead>
            <tbody>
              {budgetItems.map(({ item, cost }, index) => (
                <tr key={index} className="border-b border-gray-300 hover:bg-gray-100 transition">
                  <td className="p-4">{item}</td>
                  <td className="p-4 text-right">{cost.toLocaleString()} AED</td>
                </tr>
              ))}
              <tr className="font-bold bg-gray-200">
                <td className="p-4">Total</td>
                <td className="p-4 text-right">{totalCost}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Timeline Table */}
      <motion.div ref={timelineRef} initial="hidden" animate={timelineAnimation} variants={fadeIn} className="w-full max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 font-inter mb-6">Campaign Timeline</h2>
        <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#AA8453] text-white">
                <th className="p-4 text-left">Phase</th>
                <th className="p-4 text-right">Timeline</th>
              </tr>
            </thead>
            <tbody>
              {timelinePhases.map(({ phase, timeline }, index) => (
                <tr key={index} className="border-b border-gray-300 hover:bg-gray-100 transition">
                  <td className="p-4">{phase}</td>
                  <td className="p-4 text-right">{timeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

    </div>
  );
};

export default MarketingBudgetTimeline;
