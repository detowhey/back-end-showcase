import { Card } from "@/components/ui/card";
import { Server, Zap, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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

        <div className="max-w-4xl mx-auto mb-12">
          <div className="space-y-6 animate-fade-in text-center">
            <p className="text-lg text-foreground leading-relaxed">
              {t.about.intro1}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.intro2}
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">

            {highlights.map((item, index) => (
              <Card
                key={item.title}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:shadow-glow group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 bg-secondary rounded-lg text-primary group-hover:scale-110 transition-transform">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground text-lg">{item.title}</h3>
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
