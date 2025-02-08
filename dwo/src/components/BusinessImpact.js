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
      <motion.div ref={businessRef} initial="hidden" animate={businessAnimation} variants={fadeIn} className="max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-12 text-center md:text-left mb-16">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 font-inter mb-4">
            Business Aspect
          </h2>
          <ul className="list-disc pl-6 text-gray-700 text-lg md:text-xl leading-relaxed font-worksans">
            <li><span className="bg-[#FDE68A] px-2 rounded-md">Tourism</span>: Attract medical tourists and wellness enthusiasts.</li>
            <li><span className="bg-[#FDE68A] px-2 rounded-md">Real Estate</span>: Generate income from tiny housing rentals and sales.</li>
            <li><span className="bg-[#FDE68A] px-2 rounded-md">Partnerships</span>: Collaborate with global wellness brands and local businesses.</li>
            <li><span className="bg-[#FDE68A] px-2 rounded-md">Investment</span>: Attract investors interested in sustainable housing and wellness tourism.</li>
          </ul>
        </div>

        {/* Business Image */}
        <div className="md:w-1/2">
          <img fetchpriority="low" src="https://cdn.pixabay.com/photo/2020/02/18/08/35/finance-4858797_960_720.jpg" alt="Real Estate" className="w-full h-64 object-cover opacity-70" />
        </div>
      </motion.div>

      {/* Cultural Impact */}
      <motion.div ref={culturalRef} initial="hidden" animate={culturalAnimation} variants={fadeIn} className="max-w-5xl flex flex-col md:flex-row-reverse items-center md:items-start gap-12 text-center md:text-left">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 font-inter mb-4">
            Cultural Aspect
          </h2>
          <ul className="list-disc pl-6 text-gray-700 text-lg md:text-xl leading-relaxed font-worksans">
            <li><span className="bg-[#FDE68A] px-2 rounded-md">Local Engagement</span>: Foster community pride by integrating Emirati culture into wellness events and housing designs.</li>
            <li><span className="bg-[#FDE68A] px-2 rounded-md">Global Awareness</span>: Position Dubai as a leader in wellness innovation and cultural authenticity.</li>
          </ul>
        </div>

        {/* Cultural Image */}
        <div className="md:w-1/2">
          <img fetchpriority="low" src="https://cdn.pixabay.com/photo/2016/02/03/20/23/arab-1177904_1280.jpg" alt="Emirati Culture" className="w-full h-64 object-cover opacity-70" />
        </div>
      </motion.div>

    </div>
  );
};

export default BusinessImpact;
