import { useSectionInView, fadeIn, motion } from "../hooks/useSectionInView";
import { FaBuilding, FaHandshake, FaUsers, FaMoneyBillWave, FaBullhorn } from "react-icons/fa"; 

const KeyStakeholders = () => {
  const { ref: titleRef, animation: titleAnimation } = useSectionInView();
  const { ref: stakeholdersRef, animation: stakeholdersAnimation } = useSectionInView();

  const stakeholders = [
    {
      title: "Government Entities",
      icon: <FaBuilding className="text-[#AA8453] text-4xl" />, 
      items: [
        "Dubai Municipality: For zoning approvals and regulatory compliance.",
        "Dubai Tourism: To promote wellness tourism and integrate campaigns.",
        "Dubai Land Department: For land acquisition and real estate development."
      ],
    },
    {
      title: "Private Sector Partners",
      icon: <FaHandshake className="text-[#AA8453] text-4xl" />, 
      items: [
        "Real Estate Developers: Emaar, Nakheel, and DAMAC for tiny housing construction.",
        "Wellness Brands: Lululemon, Headspace, and local spas for event collaborations.",
        "Technology Providers: Siemens or Honeywell for smart home solutions."
      ],
    },
    {
      title: "Community & Cultural Organizations",
      icon: <FaUsers className="text-[#AA8453] text-4xl" />, 
      items: [
        "Emirati Cultural Associations: To ensure cultural authenticity in events and housing designs.",
        "Local Artisans and SMEs: For cultural wellness tours and markets."
      ],
    },
    {
      title: "Financial Institutions",
      icon: <FaMoneyBillWave className="text-[#AA8453] text-4xl" />, 
      items: [
        "Banks: Emirates NBD or Mashreq for financing tiny housing projects.",
        "Investors: Sovereign wealth funds and private equity firms interested in sustainable development."
      ],
    },
    {
      title: "Media & Influencers",
      icon: <FaBullhorn className="text-[#AA8453] text-4xl" />, 
      items: [
        "Media Outlets: Gulf News, Khaleej Times, and Arabian Business for campaign coverage.",
        "Influencers: Global wellness influencers and local Emirati personalities."
      ],
    }
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FAF9F6] to-[#ECE9E6] text-gray-900 px-8 md:px-20 lg:px-40 py-24">
      
      {/* Title Section */}
      <motion.div ref={titleRef} initial="hidden" animate={titleAnimation} variants={fadeIn} className="mb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide uppercase text-[#2D2D2D] font-inter">
          Key Stakeholders & Partners
        </h1>
        <div className="w-20 h-1 bg-[#AA8453] mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Stakeholders Section */}
      <motion.div ref={stakeholdersRef} initial="hidden" animate={stakeholdersAnimation} variants={fadeIn} className="w-full max-w-4xl space-y-12">
        {stakeholders.map(({ title, icon, items }, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-xl flex items-start gap-6">
            {/* Icon */}
            <div className="flex-shrink-0">{icon}</div>

            {/* Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 font-inter mb-4">
                {title}
              </h2>
              <ul className="list-disc text-lg md:text-xl text-gray-700 font-worksans pl-6">
                {items.map((item, i) => (
                  <li key={i} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </motion.div>

    </div>
  );
};

export default KeyStakeholders;
