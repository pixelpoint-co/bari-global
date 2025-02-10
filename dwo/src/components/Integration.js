import { useSectionInView, fadeIn, motion } from "../hooks/useSectionInView";

const Integration = () => {
  const { ref: titleRef, animation: titleAnimation } = useSectionInView();
  const { ref: contentRef, animation: contentAnimation } = useSectionInView();

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FAF9F6] to-[#ECE9E6] text-gray-900 px-8 md:px-20 lg:px-40 py-24">

      {/* Title Section */}
      <motion.div ref={titleRef} initial="hidden" animate={titleAnimation} variants={fadeIn} className="mb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide uppercase text-[#2D2D2D] font-inter">
          Benefits
        </h1>
        <div className="w-20 h-1 bg-[#AA8453] mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Two-Column Layout */}
      <motion.div ref={contentRef} initial="hidden" animate={contentAnimation} variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">

        {/* Left Column (Text) */}
        <div className="flex flex-col justify-center">

          {/* Workforce Wellness Benefits */}

          <ul className="list-disc pl-6 text-gray-600 text-md md:text-lg">
            <li><span className="font-semibold">Free annual health check-ups:</span> Basic healthcare packages with wellness consultations for preventive care.</li>
            <li><span className="font-semibold">Exclusive discounts:</span> Access to gyms, wellness events, and spa treatments for a healthier lifestyle.</li>
            <li><span className="font-semibold">Career opportunities:</span> Employment within wellness centers, supporting skill development and community engagement.</li>
          </ul>

          <hr className="my-8 border-[#AA8453]" />

          {/* Elderly & Family Care */}


          <ul className="list-disc pl-6 text-gray-600 text-md md:text-lg">
            <li><span className="font-semibold">Comprehensive healthcare for UAE nationals:</span> Regular check-ups, preventive screenings, and specialized wellness services.</li>
            <li><span className="font-semibold">On-site nurseries with wellness programs:</span> Supporting working parents with childcare, early development, and holistic well-being initiatives.</li>
          </ul>

        </div>

        {/* Right Column (Full-Sized Image Grid) */}
        <div className="grid grid-cols-2 gap-2 w-full opacity-70">
          <img fetchpriority="low" src="https://cdn.pixabay.com/photo/2021/07/27/17/42/stethoscope-6497490_1280.jpg" alt="Medical Wellness" className="w-full h-40 md:h-48 object-cover" />
          <img fetchpriority="low" src="https://cdn.pixabay.com/photo/2021/02/03/11/32/gym-5977600_960_720.jpg" alt="Fitness Center" className="w-full h-40 md:h-48 object-cover" />
          <img fetchpriority="low" src="https://cdn.pixabay.com/photo/2017/06/18/18/39/baby-2416718_1280.jpg" alt="Family Wellness" className="w-full h-40 md:h-48 object-cover" />
          <img fetchpriority="low" src="https://cdn.pixabay.com/photo/2016/11/13/16/05/hospice-1821429_1280.jpg" alt="Elderly Care" className="w-full h-40 md:h-48 object-cover" />
        </div>

      </motion.div>
    </div>
  );
};

export default Integration;
