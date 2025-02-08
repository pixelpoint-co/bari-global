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
        poster="https://images.squarespace-cdn.com/content/v1/5e10bdc20efb8f0d169f85f9/09943d85-b8c7-4d64-af31-1a27d1b76698/arrow.png?format=2500w"
      >
        <source src="/DWO.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* PNG Image in Center (Bigger on Mobile) */}
      <img
        src="/DWO_middle.png"
        alt="Central Graphic"
        className="absolute w-[80vw] max-w-[600px] md:max-w-[500px] opacity-90"
      />

      {/* Banner Component */}
      <Banner />
    </div>
  );
};

export default TopPage;
