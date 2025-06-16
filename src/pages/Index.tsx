import React from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Hero />
        <Services />
        <Features />
        <About />
        <Contact />
      </div>
    </LanguageProvider>
  );
};

export default Index;
