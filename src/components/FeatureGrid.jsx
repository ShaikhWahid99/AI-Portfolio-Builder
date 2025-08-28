import React, { useState } from 'react';
import { Zap, Palette, Globe, RefreshCw } from 'lucide-react';

const FeatureGrid = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      id: 1,
      icon: <Zap className="w-7 h-7" />,
      title: "Smart Data Collection",
      description: "The AI reads your GitHub projects, LinkedIn profile, and resume to automatically populate your portfolio with relevant content.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: <Palette className="w-7 h-7" />,
      title: "Auto Design Selection",
      description: "Based on your job field, the AI intelligently picks layouts, color schemes, and styles that match industry standards.",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: <Globe className="w-7 h-7" />,
      title: "One-Click Publishing",
      description: "Portfolio gets hosted online instantly with a custom web address. No technical knowledge required.",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      icon: <RefreshCw className="w-7 h-7" />,
      title: "Real-Time Updates",
      description: "Portfolio syncs with GitHub and LinkedIn changes to stay current automatically without manual intervention.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to create stunning portfolios automatically
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`relative bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-transform duration-500 transform hover:scale-[95%] cursor-pointer group`}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-6 transition-all duration-300 ${hoveredFeature === feature.id ? 'scale-110 shadow-lg animate-pulse' : ''}`}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-500">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>

              {/* Optional Accent */}
              {/* <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-70 animate-pulse hidden md:block"></div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;