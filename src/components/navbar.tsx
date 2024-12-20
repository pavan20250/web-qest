"use client";

import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white border border-gray-300 mt-4 sm:mt-6 md:mt-8 lg:mt-10 rounded-lg mx-4 sm:mx-8 md:mx-16 lg:mx-32">
      <nav className="max-w-6xl flex flex-wrap items-center justify-between p-2 mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">R<span className="text-red-800">Max</span></h1>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 5h12a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zm0 4h12a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1V10a1 1 0 011-1zm0 4h12a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <div className={`w-full md:flex md:w-auto md:items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mt-4 md:mt-0">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Features</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Solutions</a>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4 md:mt-0">
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 font-medium hover:text-gray-900 transition-colors">
              Login
            </button>
            <button className="px-6 py-2 bg-[#F54F35] text-white font-medium rounded-lg shadow hover:bg-[#e54730] transition">
              Try for free
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
