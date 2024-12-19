import React from 'react';

const OnboardingSteps = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Onboard Your Business in 3 Simple Steps
        </h1>
        <p className="text-lg text-gray-600">
          Enjoy quick, assisted onboarding with a 30-day free trial. No credit card required.
        </p>
      </div>

      {/* Steps Container */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center w-full md:w-1/3">
          <div className="relative">
            <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
            <span className="absolute top-0 left-2 text-sm font-semibold text-gray-700">1</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Claim Your Preset Profile</h3>
          <p className="text-gray-600">
            Unlock tailored services and elevate your experience by claiming your preset profile.
          </p>
        </div>

        {/* Arrow 1 */}
        <div className="hidden md:block w-16 -mt-24">
          <svg className="w-full text-gray-300" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              d="M17 12H3 M17 12L13 8 M17 12L13 16"
            />
          </svg>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center w-full md:w-1/3">
          <div className="relative">
            <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </div>
            </div>
            <span className="absolute top-0 left-2 text-sm font-semibold text-gray-700">2</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Add Services</h3>
          <p className="text-gray-600">
            Utilize flexible scheduling and pricing options to add services seamlessly.
          </p>
        </div>

        {/* Arrow 2 */}
        <div className="hidden md:block w-16 -mt-24">
          <svg className="w-full text-gray-300" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              d="M17 12H3 M17 12L13 8 M17 12L13 16"
            />
          </svg>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center w-full md:w-1/3">
          <div className="relative">
            <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <span className="absolute top-0 left-2 text-sm font-semibold text-gray-700">3</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Build Your Website</h3>
          <p className="text-gray-600">
            Create a unified online storefront to deliver an efficient client experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSteps;
