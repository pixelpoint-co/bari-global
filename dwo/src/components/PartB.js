import { useSectionInView, fadeIn, motion } from "../hooks/useSectionInView";
import { Home, Settings, Users, Leaf, Heart } from "lucide-react"; // Icons

const PartB = () => {
  const { ref: titleRef, animation: titleAnimation } = useSectionInView();
  const { ref: overviewRef, animation: overviewAnimation } = useSectionInView();
  const { ref: featuresRef, animation: featuresAnimation } = useSectionInView();

  const features = [
    { 
      icon: <Home size={28} className="text-[#AA8453]" />, 
      title: "Biophilic Meditation Spaces", 
      desc: "Designed to promote relaxation and mindfulness with natural materials, greenery, and soothing water features."
    },
    { 
      icon: <Settings size={28} className="text-[#AA8453]" />, 
      title: "AI-Powered Energy Efficiency", 
      desc: "Smart home systems optimizing air purification, lighting, and temperature for a healthier indoor environment."
    },
    { 
      icon: <Users size={28} className="text-[#AA8453]" />, 
      title: "Community Wellness Hubs", 
      desc: "Integrated wellness centers featuring spa retreats, longevity clinics, and holistic healing experiences."
    },
    { 
      icon: <Leaf size={28} className="text-[#AA8453]" />, 
      title: "Sustainability & Nature", 
      desc: "Eco-friendly living spaces with solar energy, recycled water systems, and sustainable architecture."
    },
    { 
      icon: <Heart size={28} className="text-[#AA8453]" />, 
      title: "Luxury Wellness Retreat Villas", 
      desc: "Exclusive homes offering spa wellness programs and longevity treatments tailored for high-net-worth investors."
    },
    { 
      icon: <Users size={28} className="text-[#AA8453]" />, 
      title: "Premium Wellness Residences", 
      desc: "Community-driven real estate for mid-tier professionals and expats seeking holistic well-being."
    }
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FAF9F6] to-[#ECE9E6] text-gray-900 px-8 md:px-20 lg:px-40 py-24">
      
      {/* Title Section */}
      <motion.div ref={titleRef} initial="hidden" animate={titleAnimation} variants={fadeIn} className="mb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide uppercase text-[#2D2D2D] font-inter">
          Part B: Wellness-Oriented Living
        </h1>
        <p className="text-lg md:text-xl text-gray-700 font-worksans mt-4 italic">
          The Future of Real Estate in Dubai
        </p>
        <div className="w-20 h-1 bg-[#AA8453] mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Overview Section */}
      <motion.div ref={overviewRef} initial="hidden" animate={overviewAnimation} variants={fadeIn} className="max-w-3xl text-center mb-16 leading-loose">
        <p className="text-lg md:text-xl text-gray-700 font-worksans">
          <span className="bg-[#FDE68A] px-2 rounded-md">Wellness-Oriented Living</span> is a groundbreaking concept that integrates holistic well-being with cutting-edge technology, offering a new standard for modern real estate in Dubai.
        </p>
      </motion.div>

      {/* Subheading: Wellness-Living 3.0 */}
      <motion.div ref={featuresRef} initial="hidden" animate={featuresAnimation} variants={fadeIn} className="max-w-4xl text-center mb-10">
        <h2 className="text-3xl font-semibold text-[#2D2D2D] font-inter">
          Wellness-Living 3.0 – New Dubai’s Real Estate Model
        </h2>
        <p className="text-lg text-gray-700 font-worksans mt-2">
          A pioneering development blending luxury, wellness, and sustainability, shaping Dubai’s future as the global leader in holistic living.
        </p>
      </motion.div>

      {/* Key Features Section */}
      <motion.div ref={featuresRef} initial="hidden" animate={featuresAnimation} variants={fadeIn} className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {features.map(({ icon, title, desc }, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: index * 0.2 }} // Staggered fade-in effect
            className="flex flex-col items-center md:items-start bg-white shadow-lg rounded-xl px-8 py-6"
          >
            <div className="flex items-center gap-4">
              {icon}
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 font-inter">
                {title}
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed font-worksans mt-2">
              {desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
};

export default PartB;
