import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="bg-white border border-gray-300 mt-10 rounded-lg ml-4 mr-4 sm:ml-8 sm:mr-8 md:ml-16 md:mr-16 lg:ml-32 lg:mr-32">
      <nav className="max-w-6xl flex items-center justify-between p-2 mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900">R<span className="text-red-800">Max</span></h1>
        </div>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Features</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Solutions</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 font-medium hover:text-gray-900 transition-colors">
              Login
            </button>
            <button className="px-6 py-2 bg-[#F54F35] text-white font-medium rounded-lg shadow hover:bg-[#e54730] transition">
              Try for free
            </button>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-700 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 5h12a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zm0 4h12a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1V10a1 1 0 011-1zm0 4h12a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
