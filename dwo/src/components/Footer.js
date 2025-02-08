import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#FDFBF7] text-gray-700 py-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">

        {/* Contact Section */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Us</h3>
          <p className="text-md text-gray-600">
            <a href="mailto:bari@lhpasia.com" className="hover:text-[#AA8453] transition-all">
              bari@lhpasia.com
            </a>
          </p>
        </div>

        {/* Soft Divider */}
        <div className="w-10 h-[2px] bg-[#AA8453] rounded-full"></div>

        {/* Presented By */}
        <p className="text-md md:text-lg text-gray-600">
          Presented by <span className="text-gray-800 font-semibold">Bari</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
