import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Download, GraduationCap, Briefcase } from "lucide-react";
import profileImage from "@assets/generated_images/Professional_developer_headshot_45a65e51.png";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Learn more about my background, education, and professional journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Avatar className="h-48 w-48 border-4 border-primary/20">
                    <AvatarImage src={profileImage} alt="Shrikantha M.A" />
                    <AvatarFallback className="text-4xl">SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-2xl font-bold" data-testid="text-name">Shrikantha M A</h3>
                    <p className="text-muted-foreground">Full-Stack JavaScript Developer</p>
                  </div>
                  <Button className="w-full" data-testid="button-download-resume">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Professional Summary
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Software Engineer with 3+ years of experience developing 2D HTML5 games, interactive web apps, and scalable content management systems. Skilled in React, Next.js, and game engine integration, with a strong focus on performance optimization and reusable architecture.
                  </p>
                  <p>
                    Built promotional and engaging web games and CMS systems for clients and internal platforms. Experienced in creating reusable frameworks that reduce development time and improve maintainability.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4 space-y-1">
                      <h4 className="font-semibold" data-testid="text-degree">
                        Bachelor’s Degree in Computer Science
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Vivekananda College of Engineering, Puttur
                      </p>
                      <p className="text-sm text-muted-foreground">July 2018 - July 2022 | CGPA: 7.7</p>
                  </div>
                  <div className="border-l-2 border-accent pl-4 space-y-1">
                      <h4 className="font-semibold">
                        Pre-University College (PUC)
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Sacred Heart Pre-University College, Madanthyar
                      </p>
                      <p className="text-sm text-muted-foreground">Apr 2016 - Apr 2018 | Percentage: 83%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
