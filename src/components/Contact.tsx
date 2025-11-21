import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  const contactLinks = [
    {
      icon: Mail,
      label: t.contact.email,
      value: "henriquefr.almeida@gmail.com",
      href: "mailto:henriquefr.almeida@gmail.com",
      color: "text-primary",
    },
    {
      icon: Github,
      label: t.contact.github,
      value: "github.com/detowhey",
      href: "https://github.com/detowhey",
      color: "text-foreground",
    },
    {
      icon: Linkedin,
      label: t.contact.linkedin,
      value: "linkedin.com/in/henrque-almeida",
      href: "https://www.linkedin.com/in/henrique-almeida-2bb60a196/",
      color: "text-primary",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-primary">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.contact.title}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.contact.description}
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border animate-fade-in">
          <div className="space-y-6">
            {contactLinks.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg border border-border hover:border-primary/50 hover:shadow-glow transition-all group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`p-3 bg-secondary rounded-lg ${contact.color} group-hover:scale-110 transition-transform`}>
                  <contact.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{contact.label}</p>
                  <p className="text-foreground font-medium">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
              onClick={() => window.location.href = 'mailto:seu.email@example.com'}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              {t.contact.sendMessage}
            </Button>
          </div>
        </Card>

        <div className="mt-12 text-center text-muted-foreground">
          <p>© 2023 - {t.contact.footer}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
