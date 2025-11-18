import { Card } from "@/components/ui/card";
import { Server, Zap, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import backendIcon from "@/assets/backend-icon.jpg";

const About = () => {
  const { t } = useLanguage();
  
  const highlights = [
    {
      icon: Server,
      title: t.about.highlights.architecture.title,
      description: t.about.highlights.architecture.description,
    },
    {
      icon: Zap,
      title: t.about.highlights.performance.title,
      description: t.about.highlights.performance.description,
    },
    {
      icon: Shield,
      title: t.about.highlights.security.title,
      description: t.about.highlights.security.description,
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-primary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.about.title}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.about.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="space-y-4 animate-fade-in">
            <div className="relative">
              <img 
                src={backendIcon} 
                alt="Backend Development"
                className="w-full rounded-lg border border-primary/20 shadow-glow"
              />
            </div>
            <p className="text-lg text-foreground leading-relaxed">
              {t.about.intro1}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.intro2}
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <Card
                key={item.title}
                className="p-5 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:shadow-glow group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-secondary rounded-lg text-primary group-hover:scale-110 transition-transform">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
