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
                    <h3 className="text-2xl font-bold" data-testid="text-name">Shrikantha M.A</h3>
                    <p className="text-muted-foreground">Software Developer</p>
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
                    Passionate Software Developer with 3+ years of experience in building scalable web applications
                    and innovative solutions. Specialized in full-stack development with expertise in modern
                    JavaScript frameworks, cloud technologies, and agile methodologies.
                  </p>
                  <p>
                    Strong problem-solving skills with a proven track record of delivering high-quality software
                    solutions that exceed client expectations. Committed to writing clean, maintainable code and
                    staying current with emerging technologies.
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
                      Bachelor of Engineering in Computer Science
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      VTU University
                    </p>
                    <p className="text-sm text-muted-foreground">2017 - 2021 | GPA: 8.5/10</p>
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
