import { Card } from "@/components/ui/card";
import { Code2, Database, Cloud, Workflow } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens",
      icon: Code2,
      skills: ["Java", "Kotlin", "C#"],
      color: "text-primary",
    },
    {
      title: "Frameworks",
      icon: Workflow,
      skills: ["Spring Boot", ".NET Core"],
      color: "text-accent",
    },
    {
      title: "Ferramentas",
      icon: Cloud,
      skills: ["Apache Kafka", "Azure"],
      color: "text-primary",
    },
    {
      title: "Banco de Dados",
      icon: Database,
      skills: ["MongoDB", "SQL Server", "Oracle", "PostgreSQL"],
      color: "text-accent",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tecnologias
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stack completo para desenvolvimento de aplicações enterprise escaláveis e performáticas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:shadow-glow group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 bg-secondary rounded-lg ${category.color} group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary/50 rounded-full text-sm border border-border hover:border-primary/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
