import React from "react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  disabledFeatures?: number[];
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, disabledFeatures = [] }) => (
  <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow flex-1">
    <div className="mb-6">
      <h3 className="text-red-500 font-medium mb-4">{title}</h3>
      <div className="flex items-baseline">
        <span className="text-4xl text-gray-900">$</span>
        <span className="text-6xl text-gray-900">{price}</span>
        <span className="text-gray-600 ml-2">/ month</span>
      </div>
      <p className="text-gray-600 mt-2">billed monthly</p>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature: string, index: number) => (
        <li
          key={index}
          className={`flex items-center ${disabledFeatures.includes(index) ? "text-gray-400" : "text-gray-700"}`}
        >
          <svg
            className={`w-5 h-5 mr-2 ${disabledFeatures.includes(index) ? "text-gray-400" : "text-green-500"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={disabledFeatures.includes(index) ? "M6 18L18 6M6 6l12 12" : "M5 13l4 4L19 7"}
            />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className="w-full bg-red-50 text-red-500 py-3 rounded-md mb-4 flex items-center justify-center">
      Get Started
      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
    <p className="text-center text-gray-600 text-sm">No credit card required</p>
  </div>
);

const PricingSection: React.FC = () => {
  const plans: PricingCardProps[] = [
    {
      title: "STARTER",
      price: "17",
      features: [
        "Commercial License",
        "100+ HTML UI Elements",
        "Unlimited Domain Support",
        "6 Month Premium Support",
        "Life Time Updates"
      ],
      disabledFeatures: [3, 4]
    },
    {
      title: "PREMIUM",
      price: "88",
      features: [
        "Commercial License",
        "100+ HTML UI Elements",
        "Unlimited Domain Support",
        "6 Month Premium Support",
        "Life Time Updates"
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">
          Choose Plan<br />That’s Right For You
        </h1>
        <p className="text-gray-600 mb-4">
          Simple and transparent pricing. Start for free, upgrade when you love it.
        </p>
        <button className="text-red-600 mb-6">30 day free trial in a button</button>
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="text-gray-700">Running a</span>
          <span className="text-gray-900">Growth Business</span>
          <span className="text-gray-700">or</span>
          <span className="text-gray-900">Enterprise</span>
          <span className="text-gray-700">? Let’s connect ·</span>
          <button className="bg-red-500 text-white px-4 py-1 rounded-md">Talk to Sales</button>
        </div>
        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="text-gray-700">Monthly</span>
          <div className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer">
            <div className="absolute w-4 h-4 bg-white rounded-full left-1 top-1"></div>
          </div>
          <span className="text-gray-700">Yearly</span>
          <span className="text-red-500 text-sm">SAVE 25%</span>
        </div>
      </div>
      {/* Pricing Cards */}
<div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
  {plans.map((plan, index) => (
    <div className="w-full sm:w-[calc(50%-1rem)] flex-grow" key={index}>
      <PricingCard {...plan} />
    </div>
  ))}
</div>

      {/* Footer Link */}
      <div className="text-center mt-8">
        <a href="#" className="text-blue-600 hover:underline">Explore In-Depth Differences</a>
      </div>
    </div>
  );
};

export default PricingSection;
