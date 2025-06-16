import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { MedicalCross } from "./MedicalIcons";
import Icon from "@/components/ui/icon";

const Hero: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-medical-blue to-blue-600 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <div className="flex items-center gap-3">
          <MedicalCross size={32} color="#dc2626" />
          <span className="text-xl font-bold">MedAssist</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#services"
            className="hover:text-medical-red transition-colors"
          >
            {translations.nav.services}
          </a>
          <a href="#about" className="hover:text-medical-red transition-colors">
            {translations.nav.about}
          </a>
          <a
            href="#contact"
            className="hover:text-medical-red transition-colors"
          >
            {translations.nav.contact}
          </a>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-medical-red/20 text-medical-red border-medical-red/30">
            <Icon name="Clock" size={16} className="mr-2" />
            {translations.hero.emergency}
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6 leading-tight">
            {translations.hero.title}
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-blue-100 font-open-sans max-w-3xl mx-auto">
            {translations.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-medical-red hover:bg-red-600 text-white px-8 py-4 text-lg"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              {translations.hero.cta}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-medical-blue px-8 py-4 text-lg"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              {translations.hero.emergency}
            </Button>
          </div>
        </div>

        {/* Decorative Medical Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <MedicalCross size={60} color="white" />
        </div>
        <div className="absolute bottom-40 right-20 opacity-15">
          <MedicalCross size={80} color="white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
