import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Stethoscope, HeartMonitor, Hospital } from "./MedicalIcons";

const Services: React.FC = () => {
  const { translations } = useLanguage();

  const services = [
    {
      icon: <Stethoscope size={48} color="#1e40af" />,
      title: translations.services.diagnosis.title,
      description: translations.services.diagnosis.description,
    },
    {
      icon: <HeartMonitor size={48} color="#dc2626" />,
      title: translations.services.treatment.title,
      description: translations.services.treatment.description,
    },
    {
      icon: <Hospital size={48} color="#059669" />,
      title: translations.services.support.title,
      description: translations.services.support.description,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-gray-900 mb-4">
            {translations.services.title}
          </h2>
          <div className="w-24 h-1 bg-medical-red mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4 p-4 bg-gray-50 rounded-full w-20 h-20 mx-auto">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-montserrat text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 font-open-sans text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
