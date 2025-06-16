import React, { createContext, useContext, useState, ReactNode } from "react";

interface Language {
  code: "ru" | "en" | "it" | "es";
  name: string;
  flag: string;
}

interface Translations {
  nav: {
    services: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    emergency: string;
  };
  services: {
    title: string;
    diagnosis: {
      title: string;
      description: string;
    };
    treatment: {
      title: string;
      description: string;
    };
    support: {
      title: string;
      description: string;
    };
  };
  features: {
    title: string;
    multilingual: {
      title: string;
      description: string;
    };
    available: {
      title: string;
      description: string;
    };
    professional: {
      title: string;
      description: string;
    };
  };
  about: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
    emergency: string;
    phone: string;
    email: string;
    address: string;
  };
}

const languages: Language[] = [
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "es", name: "Español", flag: "🇪🇸" },
];

const translations: Record<string, Translations> = {
  ru: {
    nav: {
      services: "Услуги",
      about: "О нас",
      contact: "Контакты",
    },
    hero: {
      title: "Медицинская помощь иностранцам в России",
      subtitle: "Профессиональная медицинская поддержка на вашем языке",
      cta: "Получить консультацию",
      emergency: "Экстренная помощь 24/7",
    },
    services: {
      title: "Наши услуги",
      diagnosis: {
        title: "Диагностика",
        description:
          "Комплексное обследование с использованием современного оборудования",
      },
      treatment: {
        title: "Лечение",
        description: "Квалифицированное лечение по международным стандартам",
      },
      support: {
        title: "Поддержка",
        description: "Помощь с документами и переводом медицинских терминов",
      },
    },
    features: {
      title: "Почему выбирают нас",
      multilingual: {
        title: "Многоязычность",
        description: "Общение на русском и английском языках",
      },
      available: {
        title: "Доступность 24/7",
        description: "Круглосуточная поддержка в экстренных случаях",
      },
      professional: {
        title: "Профессионализм",
        description: "Опытные врачи с международной практикой",
      },
    },
    about: {
      title: "О нашем центре",
      description:
        "Мы специализируемся на оказании медицинской помощи иностранным гражданам в России. Наша команда обеспечивает качественное медицинское обслуживание с учетом культурных особенностей и языковых потребностей пациентов.",
    },
    contact: {
      title: "Контактная информация",
      emergency: "Экстренная линия",
      phone: "Телефон",
      email: "Электронная почта",
      address: "Адрес",
    },
  },
  en: {
    nav: {
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: "Medical Assistance for Foreigners in Russia",
      subtitle: "Professional medical support in your language",
      cta: "Get Consultation",
      emergency: "Emergency Help 24/7",
    },
    services: {
      title: "Our Services",
      diagnosis: {
        title: "Diagnosis",
        description: "Comprehensive examination using modern equipment",
      },
      treatment: {
        title: "Treatment",
        description: "Qualified treatment according to international standards",
      },
      support: {
        title: "Support",
        description:
          "Assistance with documents and medical terminology translation",
      },
    },
    features: {
      title: "Why Choose Us",
      multilingual: {
        title: "Multilingual",
        description: "Communication in Russian and English",
      },
      available: {
        title: "24/7 Availability",
        description: "Round-the-clock support in emergency cases",
      },
      professional: {
        title: "Professionalism",
        description: "Experienced doctors with international practice",
      },
    },
    about: {
      title: "About Our Center",
      description:
        "We specialize in providing medical assistance to foreign citizens in Russia. Our team ensures quality medical care taking into account cultural features and language needs of patients.",
    },
    contact: {
      title: "Contact Information",
      emergency: "Emergency Line",
      phone: "Phone",
      email: "Email",
      address: "Address",
    },
  },
  it: {
    nav: {
      services: "Servizi",
      about: "Chi siamo",
      contact: "Contatti",
    },
    hero: {
      title: "Assistenza Medica per Stranieri in Russia",
      subtitle: "Supporto medico professionale nella tua lingua",
      cta: "Ottieni Consulenza",
      emergency: "Aiuto di Emergenza 24/7",
    },
    services: {
      title: "I Nostri Servizi",
      diagnosis: {
        title: "Diagnosi",
        description: "Esame completo utilizzando attrezzature moderne",
      },
      treatment: {
        title: "Trattamento",
        description: "Trattamento qualificato secondo standard internazionali",
      },
      support: {
        title: "Supporto",
        description:
          "Assistenza con documenti e traduzione terminologia medica",
      },
    },
    features: {
      title: "Perché Scegliere Noi",
      multilingual: {
        title: "Multilingue",
        description: "Comunicazione in russo e inglese",
      },
      available: {
        title: "Disponibilità 24/7",
        description: "Supporto continuo in casi di emergenza",
      },
      professional: {
        title: "Professionalità",
        description: "Medici esperti con pratica internazionale",
      },
    },
    about: {
      title: "Il Nostro Centro",
      description:
        "Ci specializziamo nel fornire assistenza medica ai cittadini stranieri in Russia. Il nostro team garantisce cure mediche di qualità tenendo conto delle caratteristiche culturali e delle esigenze linguistiche dei pazienti.",
    },
    contact: {
      title: "Informazioni di Contatto",
      emergency: "Linea di Emergenza",
      phone: "Telefono",
      email: "Email",
      address: "Indirizzo",
    },
  },
  es: {
    nav: {
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
    },
    hero: {
      title: "Asistencia Médica para Extranjeros en Rusia",
      subtitle: "Apoyo médico profesional en tu idioma",
      cta: "Obtener Consulta",
      emergency: "Ayuda de Emergencia 24/7",
    },
    services: {
      title: "Nuestros Servicios",
      diagnosis: {
        title: "Diagnóstico",
        description: "Examen integral utilizando equipos modernos",
      },
      treatment: {
        title: "Tratamiento",
        description: "Tratamiento calificado según estándares internacionales",
      },
      support: {
        title: "Apoyo",
        description:
          "Asistencia con documentos y traducción de terminología médica",
      },
    },
    features: {
      title: "Por Qué Elegirnos",
      multilingual: {
        title: "Multilingüe",
        description: "Comunicación en ruso e inglés",
      },
      available: {
        title: "Disponibilidad 24/7",
        description: "Soporte continuo en casos de emergencia",
      },
      professional: {
        title: "Profesionalismo",
        description: "Médicos experimentados con práctica internacional",
      },
    },
    about: {
      title: "Nuestro Centro",
      description:
        "Nos especializamos en brindar asistencia médica a ciudadanos extranjeros en Rusia. Nuestro equipo garantiza atención médica de calidad teniendo en cuenta las características culturales y las necesidades lingüísticas de los pacientes.",
    },
    contact: {
      title: "Información de Contacto",
      emergency: "Línea de Emergencia",
      phone: "Teléfono",
      email: "Correo Electrónico",
      address: "Dirección",
    },
  },
};

interface LanguageContextType {
  currentLanguage: Language;
  translations: Translations;
  changeLanguage: (code: "ru" | "en" | "it" | "es") => void;
  languages: Language[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    languages[0],
  );

  const changeLanguage = (code: "ru" | "en" | "it" | "es") => {
    const language = languages.find((lang) => lang.code === code);
    if (language) {
      setCurrentLanguage(language);
    }
  };

  const value = {
    currentLanguage,
    translations: translations[currentLanguage.code],
    changeLanguage,
    languages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
