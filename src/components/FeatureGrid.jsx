import React from "react";
import { Play, Users, Monitor, Sparkles } from "lucide-react";

const FeatureGrid = () => {
  const features = [
    { icon: Play, text: "Interactive Elements", color: "text-purple-400" },
    { icon: Users, text: "Multi-purpose", color: "text-pink-400" },
    { icon: Monitor, text: "Responsive Design", color: "text-blue-400" },
    { icon: Sparkles, text: "AI-Powered", color: "text-green-400" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 pt-4">
      {features.map((feature, index) => {
        const IconComponent = feature.icon;
        return (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 bg-slate-800/30 rounded-lg"
          >
            <IconComponent className={`w-5 h-5 ${feature.color}`} />
            <span className="text-sm text-gray-300">{feature.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureGrid;
