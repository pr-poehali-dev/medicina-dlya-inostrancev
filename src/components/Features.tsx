import React from "react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import Icon from "@/components/ui/icon";

const Features: React.FC = () => {
  const { translations } = useLanguage();

  const features = [
    {
      icon: <Icon name="Languages" size={32} className="text-medical-blue" />,
      title: translations.features.multilingual.title,
      description: translations.features.multilingual.description,
      badge: "2 языка",
    },
    {
      icon: <Icon name="Clock" size={32} className="text-medical-red" />,
      title: translations.features.available.title,
      description: translations.features.available.description,
      badge: "24/7",
    },
    {
      icon: <Icon name="Award" size={32} className="text-medical-green" />,
      title: translations.features.professional.title,
      description: translations.features.professional.description,
      badge: "15+ лет",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-gray-900 mb-4">
            {translations.features.title}
          </h2>
          <div className="w-24 h-1 bg-medical-red mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="flex justify-center mb-4 p-6 bg-gray-50 rounded-full w-20 h-20 mx-auto group-hover:bg-medical-blue/10 transition-colors duration-300">
                  {feature.icon}
                </div>
                <Badge className="absolute -top-2 -right-2 bg-medical-red text-white">
                  {feature.badge}
                </Badge>
              </div>

              <h3 className="text-xl font-semibold font-montserrat text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 font-open-sans leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
