import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { featureTabs, getFeaturesByTab } from "@/data/gameFeatures";
import { 
  Palette, 
  GitBranch, 
  Wand2, 
  Brain, 
  Database, 
  Layers, 
  Globe, 
  Code, 
  Shield, 
  Rocket 
} from "lucide-react";

interface FeatureSectionProps {
  isDarkMode: boolean;
  activeFeatureTab: string;
  setActiveFeatureTab: (tab: string) => void;
}

const iconMap = {
  design: Palette,
  navigation: GitBranch,
  customization: Wand2,
  ai: Brain,
  memory: Database,
  components: Layers,
  platform: Globe,
  development: Code,
  security: Shield,
  deployment: Rocket
};

const FeatureSection: React.FC<FeatureSectionProps> = ({
  isDarkMode,
  activeFeatureTab,
  setActiveFeatureTab
}) => {
  return (
    <section id="features" className="mb-8">
      <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        🚀 Advanced Game Development Platform
      </h2>
      
      {/* Feature Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {featureTabs.map(tab => {
          const IconComponent = iconMap[tab.id as keyof typeof iconMap];
          return (
            <Button
              key={tab.id}
              variant={activeFeatureTab === tab.id ? "default" : "outline"}
              onClick={() => setActiveFeatureTab(tab.id)}
              className="flex items-center space-x-2"
            >
              <IconComponent className="w-4 h-4" />
              <span>{tab.name}</span>
              <Badge variant="secondary" className="ml-1">
                {tab.count}
              </Badge>
            </Button>
          );
        })}
      </div>

      {/* Feature List */}
      <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <CardHeader>
          <CardTitle className={`${isDarkMode ? 'text-white' : 'text-gray-900'} flex items-center`}>
            {React.createElement(iconMap[activeFeatureTab as keyof typeof iconMap], { className: "w-5 h-5 mr-2" })}
            {featureTabs.find(tab => tab.id === activeFeatureTab)?.name} Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {getFeaturesByTab(activeFeatureTab).map((feature, index) => (
              <div key={index} className={`flex items-start space-x-2 p-3 rounded-lg ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'} transition-colors`}>
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default FeatureSection;
