import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import Icon from "@/components/ui/icon";

const Contact: React.FC = () => {
  const { translations } = useLanguage();

  const contactInfo = [
    {
      icon: <Icon name="Phone" size={24} className="text-medical-red" />,
      title: translations.contact.emergency,
      value: "+7 (495) 123-45-67",
      badge: "24/7",
      urgent: true,
    },
    {
      icon: <Icon name="Phone" size={24} className="text-medical-blue" />,
      title: translations.contact.phone,
      value: "+7 (495) 987-65-43",
      badge: "9:00-21:00",
      urgent: false,
    },
    {
      icon: <Icon name="Mail" size={24} className="text-medical-blue" />,
      title: translations.contact.email,
      value: "help@medassist.ru",
      badge: "Ответ за 1 час",
      urgent: false,
    },
    {
      icon: <Icon name="MapPin" size={24} className="text-medical-blue" />,
      title: translations.contact.address,
      value: "Москва, ул. Медицинская, 15",
      badge: "Центр города",
      urgent: false,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat mb-4">
            {translations.contact.title}
          </h2>
          <div className="w-24 h-1 bg-medical-red mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className={`text-center transition-all duration-300 hover:scale-105 ${
                info.urgent
                  ? "bg-medical-red text-white border-medical-red shadow-lg shadow-red-500/25"
                  : "bg-white text-gray-900 hover:shadow-xl"
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-3">
                  <div
                    className={`p-3 rounded-full ${
                      info.urgent ? "bg-white/20" : "bg-gray-50"
                    }`}
                  >
                    {info.icon}
                  </div>
                </div>
                <Badge
                  className={`mx-auto mb-2 ${
                    info.urgent
                      ? "bg-white/20 text-white border-white/30"
                      : "bg-medical-blue/10 text-medical-blue border-medical-blue/20"
                  }`}
                >
                  {info.badge}
                </Badge>
                <CardTitle
                  className={`text-lg font-montserrat ${
                    info.urgent ? "text-white" : "text-gray-900"
                  }`}
                >
                  {info.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className={`font-open-sans ${
                    info.urgent ? "text-white" : "text-gray-700"
                  } font-semibold`}
                >
                  {info.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-medical-red hover:bg-red-600 px-8 py-4 text-lg"
          >
            <Icon name="MessageSquare" size={20} className="mr-2" />
            Связаться с нами
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
