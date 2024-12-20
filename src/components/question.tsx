"use client";

import React, { useState } from "react";

const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeQuestion, setActiveQuestion] = useState('what-is-rmax');

  const faqs = [
    {
      id: 'what-is-rmax',
      question: 'What is RMax?',
      answer: 'Qest, is a SaaS platform/ecosystem that lets any small to medium service business setup & manage their business quickly & easily.'
    },
    {
      id: 'how-does-it-work',
      question: 'How does it work?',
      answer: 'RMax provides an integrated platform for managing all aspects of your service business, from scheduling to payments.'
    },
    {
      id: 'how-much-cost',
      question: 'How much does it cost?',
      answer: 'We offer flexible pricing plans starting from $17/month. Contact our sales team for detailed pricing information.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-lg sm:text-xl text-gray-500 max-w-xl mx-auto mb-4">
          Find answers to common questions about our services and features.
        </p>
        <p className="text-gray-500">
          For more details, feel free to contact our support team.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-12">
        <input
          type="text"
          placeholder="Search for answers, e.g., key features"
          className="w-full px-6 py-4 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq.id} className="border rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-5 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition duration-200"
              onClick={() => setActiveQuestion(activeQuestion === faq.id ? '' : faq.id)}
            >
              <span className="font-semibold text-lg sm:text-xl text-gray-800">{faq.question}</span>
              <svg 
                className={`w-5 h-5 transform transition-transform ${activeQuestion === faq.id ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeQuestion === faq.id && (
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Support Link */}
      <div className="text-center mt-10">
        <p className="text-gray-600">
          Didn t find your answer?{' '}
          <a href="#" className="text-blue-600 hover:underline font-semibold">
            Contact our support team
          </a>
        </p>
      </div>
    </div>
  );
};

export default FAQSection;
