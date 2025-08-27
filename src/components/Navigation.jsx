import React from "react";
import { Sparkles } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-slate-900/50 backdrop-blur-lg border-b border-slate-700/50">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
          <Sparkles className="w-5 h-5" />
        </div>
        <span className="text-xl font-bold">Webfolio</span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <button className="hover:text-purple-400 transition-colors">
          Use Cases
        </button>
        <button className="hover:text-purple-400 transition-colors">
          Solutions
        </button>
        <button className="hover:text-purple-400 transition-colors">
          Pricing
        </button>
        <button className="hover:text-purple-400 transition-colors">
          Resources
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <button className="hover:text-purple-400 transition-colors">
          Login
        </button>
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
