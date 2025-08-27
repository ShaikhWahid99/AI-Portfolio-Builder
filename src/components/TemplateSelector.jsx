import React from "react";
import { Palette, Code, Camera, PenTool, Briefcase } from "lucide-react";

const TemplateSelector = ({ selectedTemplate, onTemplateSelect }) => {
  const templates = [
    { id: "creative", icon: Palette, name: "Creative", color: "bg-purple-500" },
    { id: "tech", icon: Code, name: "Developer", color: "bg-blue-500" },
    {
      id: "photography",
      icon: Camera,
      name: "Photography",
      color: "bg-green-500",
    },
    { id: "design", icon: PenTool, name: "Design", color: "bg-pink-500" },
    {
      id: "business",
      icon: Briefcase,
      name: "Business",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-200">
        Choose Your Style:
      </h3>
      <div className="flex flex-wrap gap-3">
        {templates.map((template) => {
          const IconComponent = template.icon;
          return (
            <button
              key={template.id}
              onClick={() => onTemplateSelect(template.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                selectedTemplate === template.id
                  ? "border-purple-500 bg-purple-500/20 text-purple-300"
                  : "border-gray-600 hover:border-gray-500 text-gray-300"
              }`}
            >
              <IconComponent className="w-4 h-4" />
              <span className="text-sm">{template.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TemplateSelector;
