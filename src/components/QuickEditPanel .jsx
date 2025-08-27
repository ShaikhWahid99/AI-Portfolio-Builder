import React from "react";

const QuickEditPanel = ({ previewData, updatePreview, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="mt-12 bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
      <h3 className="text-lg font-semibold mb-4 text-purple-300">
        Quick Customization
      </h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            value={previewData.name}
            onChange={(e) => updatePreview("name", e.target.value)}
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Title
          </label>
          <input
            type="text"
            value={previewData.title}
            onChange={(e) => updatePreview("title", e.target.value)}
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            value={previewData.email}
            onChange={(e) => updatePreview("email", e.target.value)}
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>
    </div>
  );
};

export default QuickEditPanel;
