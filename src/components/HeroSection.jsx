import React from "react";

const HeroSection = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          AI-Powered Portfolio Builder
        </span>
        <br />
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Design Stunning Portfolios{" "}
        </span>
        <br />
        <span className="text-gray-300">that Win Clients & Jobs</span>
      </h1>

      <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
        Turn your projects into polished portfolios in minutes. Whether you are
        a freelancer, student, or agency, our tool helps you present your work
        with impact and stand out from the crowd.
      </p>
    </div>
  );
};

export default HeroSection;
