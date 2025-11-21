import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

interface Skill {
  name: string;
  iconClass: string;
}

const Skills = () => {
  const { t } = useLanguage();
  const languages: Skill[] = [
    { name: "Java", iconClass: "devicon-java-plain colored" },
    { name: "Kotlin", iconClass: "devicon-kotlin-plain colored" },
    { name: "C#", iconClass: "devicon-csharp-plain colored" },
    { name: "Javascript", iconClass: "devicon-javascript-plain colored" }
  ];

  const frameworks: Skill[] = [
    { name: "Spring Boot", iconClass: "devicon-spring-original colored" },
    { name: "Quarkus", iconClass: "devicon-quarkus-plain colored" },
    { name: ".NET Core", iconClass: "devicon-dotnetcore-plain colored" },
    { name: "NestJS", iconClass: "devicon-nestjs-original colored" }
  ];

  const tools: Skill[] = [
    { name: "Apache Kafka", iconClass: "devicon-apachekafka-original colored" },
    { name: "Azure", iconClass: "devicon-azure-plain colored" },
    { name: "AWS", iconClass: "devicon-amazonwebservices-plain-wordmark colored" },
    { name: "Docker", iconClass: "devicon-docker-plain colored" },
    { name: "GitHub", iconClass: "devicon-github-original" },
    { name: "GitLab", iconClass: "devicon-gitlab-plain colored" },
    { name: "gRPC", iconClass: "devicon-grpc-plain colored" },
    { name: "Powershell", iconClass: "devicon-powershell-plain colored" }
  ];

  const databases: Skill[] = [
    { name: "Oracle", iconClass: "devicon-oracle-original colored" },
    { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
    { name: "SQL Server", iconClass: "devicon-microsoftsqlserver-plain colored" },
    { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
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
    <section id="skills" className="py-16 px-4">
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

        <div className="space-y-20">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <h3 className="text-2xl font-semibold mb-6 text-center">
                <span className={category.color}>{category.title}</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
                {category.skills.map((skill, skillIndex) => {
                  return (
                    <Card
                      key={skill.name}
                      className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-glow group animate-fade-in"
                      style={{ animationDelay: `${(categoryIndex * 4 + skillIndex) * 50}ms` }}
                    >
                      <div className="flex flex-col items-center gap-3 text-center">
                        <div className="p-3 bg-secondary/50 rounded-lg group-hover:scale-110 transition-transform">
                          <i className={`${skill.iconClass} text-5xl`}></i>
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
