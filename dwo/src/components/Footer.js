import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#FDFBF7] text-gray-700 py-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">

        {/* Contact Section */}
        <div className="text-center">
        <h2 className="text-3xl font-semibold">Join the Future of Wellness Living</h2>
        <p className="mt-2 text-lg">Be part of Dubai’s next iconic transformation.</p>
        </div>

        {/* Soft Divider */}
        <div className="w-10 h-[2px] bg-[#AA8453] rounded-full"></div>

        {/* Presented By */}
        <p className="text-md md:text-lg text-gray-600">
        <p className="text-md text-gray-600">
            <a href="mailto:bari@lhpasia.com" className="hover:text-[#AA8453] transition-all">
              bari@bari.co.jp
            </a>
          </p>

        </p>
      </div>
    </footer>
  );
};

export default Footer;
