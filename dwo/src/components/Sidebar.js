import React, { useState, useEffect, useRef } from "react";

const sections = [
  { id: "vision", label: "Vision" },
  { id: "part-a", label: "Marketing Campaign" },
  { id: "part-b", label: "Housing Solution" },
  { id: "integration", label: "Wellness & Housing" },
  { id: "business-impact", label: "Business Impact" },
  { id: "budget-timeline", label: "Budget & Timeline" },
  { id: "stakeholders", label: "Stakeholders" },
  { id: "implementation", label: "Timeline" },
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const topPageHeight = document.getElementById("top-page")?.offsetHeight || 500;

      setShowSidebar(window.scrollY > topPageHeight - 50);
      setShowScrollUp(window.scrollY > topPageHeight);

      let currentSection = "";
      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top < window.innerHeight * 0.3) {
          currentSection = id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Navigation Button (Appears After TopPage) */}
      {showSidebar && (
        <div className="fixed right-4 top-4 md:right-6 md:top-6 z-50">
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            ref={buttonRef}
          >
            {/* Bigger Menu Button on Mobile */}
            <button className="bg-[#AA8453] text-white w-14 h-14 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-lg text-lg hover:bg-[#8a6a40] transition">
              ☰
            </button>

            {/* Full Navigation (Appears When Hovering ☰ or Menu) */}
            {isHovered && (
              <div
                ref={menuRef}
                className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-4 w-52 md:w-48"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <ul className="space-y-3 text-right">
                  {sections.map(({ id, label }) => (
                    <li key={id}>
                      <button
                        className={`text-gray-500 hover:text-[#AA8453] text-base md:text-sm font-medium transition ${
                          activeSection === id ? "text-[#AA8453] font-semibold" : ""
                        }`}
                        onClick={() => scrollToSection(id)}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Back to Top Button (Appears After TopPage) */}
      {showScrollUp && (
        <button
          className="fixed bottom-6 right-6 bg-[#AA8453] text-white w-14 h-14 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-lg text-lg hover:bg-[#8a6a40] transition z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}
    </>
  );
};

export default Sidebar;
