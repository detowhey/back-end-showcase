import { Card } from "@/components/ui/card";
import { Server, Zap, Shield } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Server,
      title: "Arquitetura Escalável",
      description: "Desenvolvimento de sistemas robustos e escaláveis para alto volume de requisições",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimização e implementação de soluções de alta performance e baixa latência",
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Implementação de melhores práticas de segurança e proteção de dados",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-primary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sobre Mim
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Desenvolvedor backend apaixonado por criar soluções escaláveis e eficientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="space-y-4 animate-fade-in">
            <p className="text-lg text-foreground leading-relaxed">
              Com experiência sólida em desenvolvimento backend, especializo-me em criar
              arquiteturas robustas e escaláveis utilizando as principais tecnologias do mercado.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Minha expertise abrange desde a construção de APIs RESTful performáticas até
              a implementação de sistemas de mensageria e processamento distribuído,
              sempre focando em qualidade de código e boas práticas.
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
