import { useSectionInView, fadeIn, motion } from "../hooks/useSectionInView";
import { FaLeaf, FaFilm, FaIceCream, FaSpa, FaUsers, FaMobileAlt } from "react-icons/fa";

const PartA = () => {
  const { ref: titleRef, animation: titleAnimation } = useSectionInView();
  const { ref: overviewRef, animation: overviewAnimation } = useSectionInView();
  const { ref: campaignRef, animation: campaignAnimation } = useSectionInView();

  const campaigns = [
    { 
      title: "Outdoor Yoga Sessions", 
      desc: "Hosted at Dubai Marina, Jumeirah Beach, and Al Qudra Lakes, attracting wellness travelers and influencers.", 
      icon: <FaLeaf className="text-[#AA8453] text-3xl" />
    },
    { 
      title: "Outdoor Cinema Experiences", 
      desc: "Partnering with luxury car brands for car cinema during the hot summer, and cozy VIP screenings in winter.", 
      icon: <FaFilm className="text-[#AA8453] text-3xl" />
    },
    { 
      title: "Healthy Ice Cream Trucks", 
      desc: "Partnering with UAE organic brands to create limited-edition flavors inspired by Dubai’s heritage like saffron and dates, bringing these ice cream trucks around Dubai.", 
      icon: <FaIceCream className="text-[#AA8453] text-3xl" />
    },
    { 
      title: "Wellness Festivals", 
      desc: "Bringing together both local & international wellness leaders, brands, and investors in quarterly experiences. i.e. Lululemon, Siro hotel.", 
      icon: <FaUsers className="text-[#AA8453] text-3xl" />
    },
    { 
      title: "Cultural Wellness Tours", 
      desc: "Exclusive Emirati healing traditions, spa treatments, and desert wellness retreats for executive clients.", 
      icon: <FaSpa className="text-[#AA8453] text-3xl" />
    },
    { 
      title: "Digital Campaign & App", 
      desc: "AI-based health tracking, VIP wellness memberships, and real estate integration. Exclusive access for investors i.e. Emaar’s high-net-worth clients receive priority access to luxury wellness properties.", 
      icon: <FaMobileAlt className="text-[#AA8453] text-3xl" />
    }
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FAF9F6] to-[#ECE9E6] text-gray-900 px-8 md:px-20 lg:px-40 py-24">
      
      {/* Title Section */}
      <motion.div ref={titleRef} initial="hidden" animate={titleAnimation} variants={fadeIn} className="mb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide uppercase text-[#2D2D2D] font-inter">
          Part A: One-Year Marketing Campaign
        </h1>
        <p className="text-lg md:text-xl text-gray-700 font-worksans mt-4 italic">
          "Dubai Wellness Oasis"
        </p>
        <div className="w-20 h-1 bg-[#AA8453] mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Overview Section */}
      <motion.div ref={overviewRef} initial="hidden" animate={overviewAnimation} variants={fadeIn} className="max-w-3xl text-center mb-16">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-worksans">
          The <span className="bg-[#FDE68A] px-1 rounded-md">Dubai Wellness Oasis</span> campaign is a one-year initiative designed to position Dubai as the world's leading wellness destination. 
        </p>
      </motion.div>

      {/* Campaign Ideas Section */}
      <motion.div ref={campaignRef} initial="hidden" animate={campaignAnimation} variants={fadeIn} className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {campaigns.map(({ title, desc, icon }, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: index * 0.1 }} // Cascading fade-in effect
            className="flex flex-col items-center md:items-start bg-white shadow-lg rounded-xl px-8 py-6"
          >
            <div className="flex items-center gap-4">
              {icon} {/* Icon */}
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 font-inter">
                {title}
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed font-worksans mt-2">
              <span className="px-1 rounded-md">{desc}</span>
            </p>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
};

export default PartA;
