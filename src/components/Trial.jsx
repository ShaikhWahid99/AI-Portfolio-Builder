import React from 'react';

const Trial = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white mb-6 leading-snug drop-shadow-md">
          Ready to Create Your Perfect Portfolio?
        </h2>
        <p className="text-2xl text-blue-100 mb-8">
          Join thousands of professionals who've already transformed their careers with AI-generated portfolios.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary CTA */}
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all">
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors shadow-lg">
            View Examples
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trial;