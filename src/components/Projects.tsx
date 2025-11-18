import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GitBranch } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: t.projects.items.microservices.title,
      description: t.projects.items.microservices.description,
      technologies: ["Java", "Spring Boot", "Kafka", "MongoDB"],
      link: "#",
    },
    {
      title: t.projects.items.api.title,
      description: t.projects.items.api.description,
      technologies: ["C#", ".NET Core", "SQL Server", "Oracle"],
      link: "#",
    },
    {
      title: t.projects.items.events.title,
      description: t.projects.items.events.description,
      technologies: ["Kotlin", "Kafka", "PostgreSQL", "Azure"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.projects.title}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.projects.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:shadow-glow group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <GitBranch className="h-8 w-8 text-primary" />
                <a
                  href={project.link}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                  aria-label="Ver projeto"
                >
                  <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
