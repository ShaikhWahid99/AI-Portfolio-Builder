import React, { useState } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import TemplateSelector from "./components/TemplateSelector";
import InputSection from "./components/InputSection ";
import FeatureGrid from "./components/FeatureGrid";
import PortfolioPreview from "./components/PortfolioPreview ";
import QuickEditPanel from "./components/QuickEditPanel ";

function App() {
  const [inputText, setInputText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("creative");
  const [previewData, setPreviewData] = useState({
    name: "Imran Ansari",
    title: "Art Portfolio",
    email: "arshad@gmail.com",
    phone: "+1 234 567 8900",
    date: "February 2024",
  });

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  const updatePreview = (field, value) => {
    setPreviewData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navigation />

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <HeroSection />

            <TemplateSelector
              selectedTemplate={selectedTemplate}
              onTemplateSelect={setSelectedTemplate}
            />

            <InputSection
              inputText={inputText}
              setInputText={setInputText}
              isGenerating={isGenerating}
              onGenerate={handleGenerate}
            />

            <FeatureGrid />
          </div>

          {/* Right Content - Portfolio Preview */}
          <PortfolioPreview previewData={previewData} />
        </div>

        <QuickEditPanel
          previewData={previewData}
          updatePreview={updatePreview}
          isVisible={!!inputText}
        />
      </div>
    </div>
  );
}

export default App;
