import React from 'react';

const Trial = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Create Your Perfect Portfolio?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join thousands of professionals who've already transformed their careers with AI-generated portfolios.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg transform hover:scale-105">
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            View Examples
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trial;