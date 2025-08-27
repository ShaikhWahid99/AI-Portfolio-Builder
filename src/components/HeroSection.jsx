import React from "react";

const HeroSection = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          AI-Powered Portfolio Builder
        </span>
        <br />
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Design Stunning Portfolios{" "}
        </span>
        <br />
        {/* <span className="text-gray-300">that Win Clients & Jobs</span> */}
      </h1>

      <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
        Turn your projects into professional portfolios in minutes. Perfect for freelancers, students, and agencies to showcase work with impact.
      </p>
    </div>
  );
};

export default HeroSection;
