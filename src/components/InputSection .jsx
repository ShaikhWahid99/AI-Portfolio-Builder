import React from "react";
import { Sparkles } from "lucide-react";

const InputSection = ({
  inputText,
  setInputText,
  isGenerating,
  onGenerate,
}) => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Describe your portfolio or paste your content..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full px-6 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
        />
        {inputText && (
          <button
            onClick={() => setInputText("")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          >
            ×
          </button>
        )}
      </div>

      <button
        onClick={onGenerate}
        disabled={!inputText || isGenerating}
        className="group relative w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
      >
        <div className="flex items-center justify-center space-x-3">
          {isGenerating ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Generating...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Generate Portfolio</span>
            </>
          )}
        </div>
      </button>
    </div>
  );
};

export default InputSection;
