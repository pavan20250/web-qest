import React from "react";

const MobileAppSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Manage Your Business On the Go
        </h1>
        <p className="text-base sm:text-lg text-gray-500 max-w-3xl mx-auto">
          With our free Business Mobile App, you can manage your entire service
          business from anywhere. Stay connected and in control, no matter where
          your day takes you.
        </p>
      </div>

      {/* App Store Buttons */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {/* App Store Button */}
        <button className="flex items-center px-4 sm:px-6 py-2 sm:py-3 border rounded-lg bg-black text-white hover:bg-gray-800 transition duration-200 ease-in-out shadow-md transform hover:scale-105 text-sm sm:text-base w-1/2 sm:w-auto">
          <svg className="w-6 sm:w-8 h-6 sm:h-8 mr-2 sm:mr-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          <span className="font-semibold">App Store</span>
        </button>

        {/* Google Play Button */}
        <button className="flex items-center px-4 sm:px-6 py-2 sm:py-3 border rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-200 ease-in-out shadow-md transform hover:scale-105 text-sm sm:text-base w-1/2 sm:w-auto">
          <svg className="w-6 sm:w-8 h-6 sm:h-8 mr-2 sm:mr-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5S3 21.33 3 20.5zM16.5 12L9 6.75v10.5L16.5 12zM20 12l-3 1.73v-3.46L20 12z" />
          </svg>
          <span className="font-semibold">Google Play</span>
        </button>
      </div>
    </div>
  );
};

export default MobileAppSection;
