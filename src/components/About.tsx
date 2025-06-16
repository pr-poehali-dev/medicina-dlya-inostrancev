import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { MedicalCross } from "./MedicalIcons";
import Icon from "@/components/ui/icon";

const About: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl font-bold font-montserrat text-gray-900 mb-6">
              {translations.about.title}
            </h2>

            <p className="text-lg text-gray-700 font-open-sans mb-8 leading-relaxed">
              {translations.about.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-medical-blue hover:bg-blue-700">
                <Icon name="Users" size={20} className="mr-2" />
                Узнать больше
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white"
              >
                <Icon name="FileText" size={20} className="mr-2" />
                Наши лицензии
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-blue mb-2">
                    1000+
                  </div>
                  <div className="text-gray-600 font-open-sans">
                    Пациентов помогли
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-red mb-2">
                    24/7
                  </div>
                  <div className="text-gray-600 font-open-sans">Поддержка</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-green mb-2">
                    15+
                  </div>
                  <div className="text-gray-600 font-open-sans">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-blue mb-2">
                    2
                  </div>
                  <div className="text-gray-600 font-open-sans">Языка</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 opacity-20">
              <MedicalCross size={100} color="#1e40af" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
