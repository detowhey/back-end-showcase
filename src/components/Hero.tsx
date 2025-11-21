import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-primary opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full border border-primary/20">
            <span className="text-primary font-mono text-sm">{t.hero.badge}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {t.hero.title}
          </h1>
          
         <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.hero.description} <span className="text-primary">Java</span>, <span className="text-accent">Kotlin</span> e <span className="text-primary">C#</span>
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              {t.hero.contactButton}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
              onClick={() => scrollToSection("skills")}
            >
              {t.hero.viewTech}
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <a 
              href="https://github.com/detowhey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-secondary/50 backdrop-blur-sm rounded-full border border-border hover:border-primary/50 hover:shadow-glow transition-all"
            >
              <Github className="h-6 w-6 text-foreground" />
            </a>
            <a 
              href="https://www.linkedin.com/in/henrique-almeida-2bb60a196/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-secondary/50 backdrop-blur-sm rounded-full border border-border hover:border-primary/50 hover:shadow-glow transition-all"
            >
              <Linkedin className="h-6 w-6 text-foreground" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
