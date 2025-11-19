import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Certifications = () => {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.certifications.title}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.certifications.description}
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:shadow-glow group animate-fade-in max-w-2xl w-full">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 flex items-start">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <Award className="h-12 w-12 text-primary" />
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                      {t.certifications.azure.title}
                    </h3>
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                      {t.certifications.azure.code}
                    </Badge>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {t.certifications.azure.description}
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <span className="text-sm text-muted-foreground">
                    {t.certifications.azure.issuer}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:bg-primary/10 group/button"
                    asChild
                  >
                    <a
                      href="https://learn.microsoft.com/pt-br/users/henriquealmeida/credentials/61e8c94a569665ad"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.certifications.azure.viewCredential}
                      <ExternalLink className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
