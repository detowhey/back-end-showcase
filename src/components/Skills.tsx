import { Card } from "@/components/ui/card";
import { Coffee, Hash, Leaf, Box, Zap, Cloud, Database } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Skill {
  name: string;
  icon: typeof Coffee;
}

const Skills = () => {
  const { t } = useLanguage();
  const languages: Skill[] = [
    { name: "Java", icon: Coffee },
    { name: "Kotlin", icon: Coffee },
    { name: "C#", icon: Hash },
  ];

  const frameworks: Skill[] = [
    { name: "Spring Boot", icon: Leaf },
    { name: ".NET Core", icon: Box },
  ];

  const tools: Skill[] = [
    { name: "Apache Kafka", icon: Zap },
    { name: "Azure", icon: Cloud },
  ];

  const databases: Skill[] = [
    { name: "MongoDB", icon: Database },
    { name: "SQL Server", icon: Database },
    { name: "Oracle", icon: Database },
    { name: "PostgreSQL", icon: Database },
  ];

  const skillCategories = [
    {
      title: t.skills.categories.languages,
      skills: languages,
      color: "text-primary",
    },
    {
      title: t.skills.categories.frameworks,
      skills: frameworks,
      color: "text-accent",
    },
    {
      title: t.skills.categories.tools,
      skills: tools,
      color: "text-primary",
    },
    {
      title: t.skills.categories.databases,
      skills: databases,
      color: "text-accent",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.skills.title}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.skills.description}
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <h3 className="text-2xl font-semibold mb-6 text-center">
                <span className={category.color}>{category.title}</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <Card
                      key={skill.name}
                      className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:shadow-glow group animate-fade-in"
                      style={{ animationDelay: `${(categoryIndex * 4 + skillIndex) * 50}ms` }}
                    >
                      <div className="flex flex-col items-center gap-3 text-center">
                        <div className={`p-3 bg-secondary rounded-lg ${category.color} group-hover:scale-110 transition-transform`}>
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
