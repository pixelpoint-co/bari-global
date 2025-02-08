import React from "react";

const Banner = () => {
  return (
    <div className="absolute top-0 left-0 w-full bg-white bg-opacity-30 text-white p-4 flex items-center">
      {/* Logo */}
      <img src="/logo.png" className="h-8 w-auto ml-4" />
      
      {/* Quote */}
      <p className="text-center text-black flex-grow text-xs md:text-sm">
        "And give the relative his right, and [also] the poor and the traveler, and do not spend wastefully." – Quran 17:26 (Surah Al-Isra)
      </p>
    </div>
  );
};

export default Banner;
