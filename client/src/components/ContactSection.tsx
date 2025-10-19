import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "shrikanthbhat30@gmail.com",
      href: "mailto:shrikanthbhat30@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 9353889153",
      href: "tel:+919353889153",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Bangalore, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/Shrikanth9",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shrikanth-m-a-69827020a/",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <p className="text-muted-foreground text-lg">
              I'm currently open to new opportunities and interesting projects.
              Feel free to reach out!
            </p>
          </div>

          <Badge variant="secondary" className="text-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse" />
            Available for work
          </Badge>

          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg hover-elevate"
                    data-testid={`contact-item-${index}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {item.icon}
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </div>
                    {item.href && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(item.href, '_blank', 'noopener,noreferrer')}
                        data-testid={`button-contact-${item.label.toLowerCase()}`}
                      >
                        Connect
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with me on social media
                </p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      onClick={() => window.open(link.href, '_blank', 'noopener,noreferrer')}
                      data-testid={`button-social-${link.label.toLowerCase()}`}
                    >
                      {link.icon}
                      <span className="ml-2">{link.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
