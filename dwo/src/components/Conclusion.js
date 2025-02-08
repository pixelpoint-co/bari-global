import { useSectionInView, fadeIn, motion } from "../hooks/useSectionInView";

const Conclusion = () => {
  const { ref: titleRef, animation: titleAnimation } = useSectionInView(0.3);
  const { ref: contentRef, animation: contentAnimation } = useSectionInView(0.3, 0.2);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FAF9F6] to-[#ECE9E6] text-gray-900 px-8 md:px-20 lg:px-40 py-24">
      
      {/* Title Section */}
      <motion.div ref={titleRef} initial="hidden" animate={titleAnimation} variants={fadeIn} className="mb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide uppercase text-[#2D2D2D] font-inter">
          Conclusion
        </h1>
        <div className="w-20 h-1 bg-[#AA8453] mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Summary Paragraph */}
      <motion.div ref={contentRef} initial="hidden" animate={contentAnimation} variants={fadeIn} className="max-w-3xl text-center mb-12">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-worksans">
          The <strong>Dubai Wellness Oasis</strong> project presents an opportunity to integrate <strong>wellness, sustainability, and smart living</strong> into a <strong>transformational urban experience</strong>. 
          By aligning government policies, financial strategies, and cutting-edge wellness technology, this initiative aims to position Dubai as a <strong>global leader in wellness-focused living</strong>.
        </p>
      </motion.div>

      {/* Bullet Points Summary */}
      <motion.div ref={contentRef} initial="hidden" animate={contentAnimation} variants={fadeIn} className="max-w-3xl text-left">
        <ul className="list-disc text-lg md:text-xl text-gray-700 leading-relaxed font-worksans pl-6">
          <li><strong>Market Positioning</strong>: Establish Dubai as a premier wellness hub</li>
          <ul className="list-disc pl-6 text-gray-600 text-md md:text-lg">
            <li>Targeting wellness-conscious travelers and residents</li>
            <li>Strategic partnerships with global wellness brands</li>
            <li>Exclusive health-focused tourism incentives</li>
          </ul>

          <li><strong>Affordable & Smart Living</strong>: Making sustainable housing accessible</li>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Modular, eco-friendly smart homes</li>
            <li>Smart technology integration for optimal wellness</li>
            <li>Cost-efficient rental and ownership models</li>
          </ul>

          <li><strong>Infrastructure & Development</strong>: Innovative urban planning</li>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Wellness-focused urban layouts</li>
            <li>Green spaces and community wellness centers</li>
          </ul>

          <li><strong>Financial & Economic Impact</strong>: Long-term sustainability</li>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Investor-friendly revenue models</li>
            <li>Government-backed wellness incentives</li>
          </ul>

          <li><strong>Technology Integration</strong>: Advancing smart wellness</li>
          <ul className="list-disc pl-6 text-gray-600">
            <li>AI-driven wellness monitoring</li>
            <li>Renewable energy integration</li>
          </ul>

          <li><strong>Community & Cultural Influence</strong>: Creating a unique lifestyle</li>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Blending modern wellness with traditional values</li>
            <li>Encouraging a balanced and holistic way of life</li>
          </ul>

          <li><strong>Scalability & Future Expansion</strong>: Scaling the model globally</li>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Potential replication in other global cities</li>
            <li>Opportunities for international investment</li>
          </ul>
        </ul>
      </motion.div>

    </div>
  );
};

export default Conclusion;
