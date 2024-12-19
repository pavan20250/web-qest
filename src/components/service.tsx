import React from "react";

const IndustriesSection = () => {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Empowering Service Providers Across Industries</h1>
          <p className="text-gray-600 max-w-4xl mx-auto">
            Whether you're in sports, education, wellness, household services, or niche markets, our technology simplifies your business operations, making it easier for you to focus on what you do best.
          </p>
        </div>
  
        {/* Industries Slider */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
  
          {/* Industry Cards */}
          <div className="flex gap-6 overflow-x-auto px-4">
            {/* Sports Card */}
            <div className="flex-none w-1/3">
              <div className="rounded-lg overflow-hidden mb-4">
                <img
                  src="/sports-image.jpg"
                  alt="Sports"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-700">Sports</h3>
              <p className="text-gray-600 mb-2">
                From fitness studios to sports academies, Rmax empowers sports businesses.
              </p>
              <button className="text-blue-600 hover:text-blue-800">Know more...</button>
            </div>
  
            {/* Healthcare & Wellness Card */}
            <div className="flex-none w-1/3">
              <div className="rounded-lg overflow-hidden mb-4">
                <img
                  src="/healthcare-image.jpg"
                  alt="Healthcare & Wellness"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-700">Healthcare & Wellness</h3>
              <p className="text-gray-600 mb-2">
                Health and wellness service providers—from yoga instructors and gyms.
              </p>
              <button className="text-blue-600 hover:text-blue-800">Know more...</button>
            </div>
  
            {/* Learning Activities Card */}
            <div className="flex-none w-1/3">
              <div className="rounded-lg overflow-hidden mb-4">
                <img
                  src="/learning-image.jpg"
                  alt="Learning Activities"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-700">Learning Activities</h3>
              <p className="text-gray-600 mb-2">
                Tutors, educators, and learning centers—from music schools to art studios.
              </p>
              <button className="text-blue-600 hover:text-blue-800">Know more...</button>
            </div>
          </div>
  
          {/* Right Arrow Button */}
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    );
  };
  
  export default IndustriesSection;
  