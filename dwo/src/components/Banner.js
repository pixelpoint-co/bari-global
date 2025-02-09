import React from "react";

const Banner = () => {
  return (
    <div className="absolute top-0 left-0 w-full bg-white bg-opacity-30 text-white p-4 flex items-center">
      {/* Logo */}
      <img src="/logo.png" className="h-6 w-auto ml-4" />
      
      {/* Quote */}
      <p className="text-center text-black flex-grow text-xs md:text-sm">
      “But those who strive for guidance—He increases them in guidance. And the enduring good deeds are best in reward and best in outcome.” (Surah Maryam 19:76)
      </p>
    </div>
  );
};

export default Banner;
