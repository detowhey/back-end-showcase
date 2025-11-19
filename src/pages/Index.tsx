import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import LanguageSelector from "@/components/LanguageSelector";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LanguageSelector />
      <Hero />
      <Skills />
      <About />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Index;
