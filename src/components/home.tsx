import React from 'react';
import Navbar from './navbar';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Search Bar Section */}
      <div className="mt-10 sm:mt-20">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-0">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
            {/* RMax Box */}
            <div className="bg-[#ff4141] text-white p-2 rounded-lg text-sm font-semibold">
              RMax
            </div>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Curious? Let AI Uncover the Answers!"
              className="w-72 sm:w-80 max-w-lg px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4141] transition"
            />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center px-6 sm:px-0 mt-16 sm:mt-20">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
          Maximize Your Impact
          <div>
            <span className="text-[#ff4141]">Business with </span>
            <span className="text-gray-800">RMax</span>
          </div>
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-10">
          Enhance your business with RMax's all-in-one platform—streamlining client 
          engagement, automating workflows, and fueling growth.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <button className="bg-[#ff4141] text-white px-8 py-3 rounded-lg shadow hover:bg-[#e54730] flex items-center gap-2 transition">
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="text-gray-700 px-8 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
            Book A Demo
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 sm:px-0 mt-24">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="text-center text-gray-700 text-lg font-medium border border-gray-300 rounded-xl p-1">
            <div className="mb-2 text-2xl text-[#ff4141]">🚀</div>
            Seamless Onboarding
          </div>
          <div className="text-center text-gray-700 text-lg font-medium border border-gray-300 rounded-xl p-1">
            <div className="mb-2 text-2xl text-[#ff4141]">💼</div>
            Client Engagement
          </div>
          <div className="text-center text-gray-700 text-lg font-medium border border-gray-300 rounded-xl p-1">
            <div className="mb-2 text-2xl text-[#ff4141]">📊</div>
            Generate Reports
          </div>
          <div className="text-center text-gray-700 text-lg font-medium border border-gray-300 rounded-xl p-1">
            <div className="mb-2 text-2xl text-[#ff4141]">📈</div>
            Revenue Growth
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
