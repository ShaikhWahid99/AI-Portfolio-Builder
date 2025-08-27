import React, { useState } from 'react';
import { Zap, Palette, Globe, RefreshCw } from 'lucide-react';

const FeatureGrid = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      id: 1,
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Data Collection",
      description: "The AI reads your GitHub projects, LinkedIn profile, and resume to automatically populate your portfolio with relevant content.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: <Palette className="w-6 h-6" />,
      title: "Auto Design Selection",
      description: "Based on your job field, the AI intelligently picks layouts, color schemes, and styles that match industry standards.",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: <Globe className="w-6 h-6" />,
      title: "One-Click Publishing",
      description: "Portfolio gets hosted online instantly with a custom web address. No technical knowledge required.",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Real-Time Updates",
      description: "Portfolio syncs with GitHub and LinkedIn changes to stay current automatically without manual intervention.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600">Everything you need to create stunning portfolios automatically</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-6 ${hoveredFeature === feature.id ? 'animate-pulse' : ''}`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;