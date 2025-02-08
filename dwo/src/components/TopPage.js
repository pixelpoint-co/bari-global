import React from "react";
import Banner from "./Banner";

const TopPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        fetchpriority="high"
        poster="/dwo-poster.jpg"
      >
        <source
          src="/DWO-m.mp4"
          type="video/mp4"
          media="(max-width: 768px)"
        />
        <source
          src="/DWO.mp4"
          type="video/mp4"
          media="(min-width: 769px)"
        />
        Your browser does not support the video tag.
      </video>
      {/* PNG Image in Center (Bigger on Mobile) */}
      <img
        src="/DWO_middle.png"
        alt="Central Graphic"
        className="absolute w-[80vw] max-w-[600px] md:max-w-[500px] opacity-90"
        fetchpriority="low"
      />

      {/* Banner Component */}
      <Banner />
    </div>
  );
};

export default TopPage;
