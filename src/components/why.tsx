import React from "react";

const WhyRmax = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Why Rmax?</h1>
        <p className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-base">
          Rmax is designed to simplify and transform the way service businesses operate. From onboarding, scheduling, and billing to client management, payments, and growth, Rmax integrates everything in one easy-to-use platform connecting all the stakeholders.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Feature Cards */}
        {[
          {
            title: "Scheduling",
            description: "Manage appointments, classes, and events, workshops with...",
            iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
          },
          {
            title: "Client Management & CRM",
            description: "Keep track of customer data, preferences, and interactions to...",
            iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
          },
          {
            title: "AI Powered Insights",
            description: "Know exactly what is happening in business and get actionable...",
            iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
          },
          {
            title: "Marketing & Engagement Tools",
            description: "Boost client retention and grow your business with integrated...",
            iconPath: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
          },
          {
            title: "Billing & Payments",
            description: "Streamline invoicing and payments with automated workflows, reducing...",
            iconPath: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
          },
          {
            title: "Custom Branded Website",
            description: "Qest's Custom Branded Website Builder allows you to create a fully personalized...",
            iconPath: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
          },
        ].map(({ title, description, iconPath }, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-red-500 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <button className="text-blue-600 hover:text-blue-800">View details →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyRmax;
