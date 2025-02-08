import { useSectionInView, fadeIn, motion } from "../hooks/useSectionInView";
import { Home, Settings, Users, MapPin, Heart } from "lucide-react"; // Icons

const PartB = () => {
  const { ref: titleRef, animation: titleAnimation } = useSectionInView();
  const { ref: overviewRef, animation: overviewAnimation } = useSectionInView();
  const { ref: featuresRef, animation: featuresAnimation } = useSectionInView();

  const features = [
    { 
      icon: <Home size={28} className="text-[#AA8453]" />, 
      title: "Tiny Housing Design", 
      desc: "Compact homes (200-400 sq. ft.), built with sustainable, locally sourced materials and modular layouts."
    },
    { 
      icon: <Settings size={28} className="text-[#AA8453]" />, 
      title: "Smart Living Technology", 
      desc: "IoT-enabled lighting, security, and solar-powered energy-efficient appliances."
    },
    { 
      icon: <Users size={28} className="text-[#AA8453]" />, 
      title: "Community Spaces", 
      desc: "Co-working areas, wellness centers, shared gardens, and cultural hubs for social engagement."
    },
    { 
      icon: <MapPin size={28} className="text-[#AA8453]" />, 
      title: "Location & Scalability", 
      desc: "Pilot community in Dubai South or Al Qudra, with future expansion across the Emirates."
    },
    { 
      icon: <Heart size={28} className="text-[#AA8453]" />, 
      title: "Wellness-Oriented Living", 
      desc: "Designed with meditation corners, air purification, and green spaces."
    }
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FAF9F6] to-[#ECE9E6] text-gray-900 px-8 md:px-20 lg:px-40 py-24">
      
      {/* Title Section */}
      <motion.div ref={titleRef} initial="hidden" animate={titleAnimation} variants={fadeIn} className="mb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide uppercase text-[#2D2D2D] font-inter">
          Part B: Affordable Housing Solution
        </h1>
        <p className="text-lg md:text-xl text-gray-700 font-worksans mt-4 italic">
          Smart Tiny Living
        </p>
        <div className="w-20 h-1 bg-[#AA8453] mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Overview Section */}
      <motion.div ref={overviewRef} initial="hidden" animate={overviewAnimation} variants={fadeIn} className="max-w-3xl text-center mb-16 leading-loose">
      <p className="text-lg md:text-xl text-gray-700 font-worksans">
        <span className="bg-[#FDE68A] px-2 rounded-md">Our mission</span> is to redefine modern living with
        <span className="inline-block underline decoration-[#AA8453] decoration-2 ml-1">affordable</span> and
        <span className="inline-block underline decoration-[#AA8453] decoration-2 ml-1">sustainable</span> housing solutions in Dubai.
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
