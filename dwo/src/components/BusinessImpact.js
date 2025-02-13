import { useSectionInView, fadeIn, motion } from "../hooks/useSectionInView";

const BusinessImpact = () => {
  const { ref: titleRef, animation: titleAnimation } = useSectionInView(0.3);
  const { ref: businessRef, animation: businessAnimation } = useSectionInView(0.3, 0.2);
  const { ref: culturalRef, animation: culturalAnimation } = useSectionInView(0.3, 0.4);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FAF9F6] to-[#ECE9E6] text-gray-900 px-8 md:px-20 lg:px-40 py-24">

      {/* Title Section */}
      <motion.div ref={titleRef} initial="hidden" animate={titleAnimation} variants={fadeIn} className="mb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide uppercase text-[#2D2D2D] font-inter">
          Business & Cultural Impact
        </h1>
        <div className="w-20 h-1 bg-[#AA8453] mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Business Impact */}
      <motion.div ref={businessRef} initial="hidden" animate={businessAnimation} variants={fadeIn} className="max-w-5xl flex flex-col md:flex-row items-center gap-12 text-left mb-16">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4">Business Aspect</h2>
          <ul className="list-disc pl-6 text-gray-600 text-md md:text-lg space-y-2">
            <li><strong>Tourism:</strong> Attract medical tourists and wellness enthusiasts.</li>
            <li><strong>Real Estate:</strong> Generate income from tiny housing rentals and sales.</li>
            <li><strong>Partnerships:</strong> Collaborate with wellness brands and local businesses.</li>
            <li><strong>Investment:</strong> Attract investors in sustainable housing and wellness tourism.</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img fetchpriority="low" src="https://cdn.pixabay.com/photo/2020/02/18/08/35/finance-4858797_960_720.jpg" alt="Real Estate" className="w-full h-64 object-cover opacity-70" />
        </div>
      </motion.div>

      {/* Cultural Impact */}
      <motion.div ref={culturalRef} initial="hidden" animate={culturalAnimation} variants={fadeIn} className="max-w-5xl flex flex-col md:flex-row-reverse items-center gap-12 text-left">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4">Cultural Aspect</h2>
          <ul className="list-disc pl-6 text-gray-600 text-md md:text-lg space-y-2">
            <li><strong>Local Engagement:</strong> Celebrate Emirati culture through wellness events and housing designs.</li>
            <li><strong>Global Awareness:</strong> Establish Dubai as a leader in wellness innovation and cultural authenticity.</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img fetchpriority="low" src="https://cdn.pixabay.com/photo/2016/02/03/20/23/arab-1177906_960_720.jpg" alt="Emirati Culture" className="w-full h-64 object-cover opacity-70" />
        </div>
      </motion.div>

    </div>
  );
};

export default BusinessImpact;
