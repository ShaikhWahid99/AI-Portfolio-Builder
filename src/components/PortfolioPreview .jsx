import React from "react";
import { Sparkles } from "lucide-react";

const PortfolioPreview = ({ previewData }) => {
  const portfolioImages = [
    "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=150&h=100&fit=crop",
    "https://ix-marketing.imgix.net/autocompress.png?auto=format,compress&w=1074",
    "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=150&h=100&fit=crop",
    "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=150&h=100&fit=crop",
    "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=150&h=100&fit=crop",
    "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=150&h=100&fit=crop",
  ];

  return (
    <div className="relative max-w-xl mx-auto">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900p-4 rounded-xl shadow-2xl border border-slate-700 scale-90 hover:scale-95 transition-transform duration-300">
        {/* Browser Mock */}
        <div className="bg-gray-100 rounded-t-lg p-3 flex items-center space-x-2 mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-600">
            portfolio.webfolio.com
          </div>
        </div>

        {/* Portfolio Content */}
        <div className="bg-white rounded-lg p-6 space-y-6">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 flex items-center space-x-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b332b2a7?w=100&h=100&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {previewData.name}
              </h2>
              <p className="text-lg text-purple-600 font-semibold">
                {previewData.title}
              </p>
              <div className="text-sm text-gray-600 mt-2 space-y-1">
                <p>{previewData.email}</p>
                <p>{previewData.date}</p>
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-3 gap-3">
            {portfolioImages.map((img, index) => (
              <div
                key={index}
                className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer group"
              >
                <img
                  src={img}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex justify-around bg-gray-50 rounded-lg p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">24</div>
              <div className="text-xs text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">5.0</div>
              <div className="text-xs text-gray-600">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">3+</div>
              <div className="text-xs text-gray-600">Years</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-bounce"></div>
    </div>
  );
};

export default PortfolioPreview;
