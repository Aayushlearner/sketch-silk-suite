import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Heart, Zap, Target } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Build beautiful, responsive interfaces for our fashion design platform using React and TypeScript.",
      requirements: ["5+ years React experience", "TypeScript proficiency", "Design system experience"]
    },
    {
      title: "AI/ML Engineer",
      department: "AI Research",
      location: "Remote / New York",
      type: "Full-time",
      description: "Develop and improve our AI sketch generation and fashion trend prediction models.",
      requirements: ["ML/AI experience", "Python expertise", "Computer vision knowledge"]
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote / Los Angeles",
      type: "Full-time",
      description: "Design intuitive user experiences for fashion designers using our platform.",
      requirements: ["5+ years UX/UI design", "Figma expertise", "Fashion industry knowledge preferred"]
    },
    {
      title: "Fashion Industry Specialist",
      department: "Product",
      location: "Remote / Milan",
      type: "Full-time",
      description: "Guide product development with deep fashion industry expertise and user insights.",
      requirements: ["Fashion industry experience", "Product management skills", "User research experience"]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness stipend",
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: Zap,
      title: "Growth & Learning",
      description: "Learning budget, conference attendance, and mentorship programs",
      color: "from-accent/20 to-accent/5"
    },
    {
      icon: Users,
      title: "Work-Life Balance",
      description: "Flexible hours, unlimited PTO, and remote-first culture",
      color: "from-secondary/20 to-secondary/5"
    },
    {
      icon: Target,
      title: "Equity & Impact",
      description: "Stock options, competitive salary, and meaningful work in fashion tech",
      color: "from-primary/20 to-accent/5"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push boundaries and embrace new technologies to solve real problems in fashion design."
    },
    {
      title: "Designer-Centric",
      description: "Every decision we make is guided by what's best for the designers who use our platform."
    },
    {
      title: "Inclusive Culture",
      description: "We celebrate diversity and create an environment where everyone can do their best work."
    },
    {
      title: "Quality Craftsmanship",
      description: "We take pride in building beautiful, reliable software that designers love to use."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Join Our Team</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-balance">
              Build the future of{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                fashion design
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Join a passionate team of designers, engineers, and fashion experts working to revolutionize how fashion is created.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl px-8 h-12"
              >
                View Open Positions
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-2xl px-8 h-12 border-border hover:border-primary"
              >
                Learn About Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-4xl font-serif font-bold">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 space-y-3 border-border hover:border-primary/50 transition-all">
                <h3 className="text-xl font-serif font-semibold">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-4xl font-serif font-bold">Why Work With Us</h2>
            <p className="text-lg text-muted-foreground">
              We invest in our team's success and well-being
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6 text-center space-y-4 border-border hover:border-primary/50 transition-all">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto`}>
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-4xl font-serif font-bold">Open Positions</h2>
            <p className="text-lg text-muted-foreground">
              Find your next opportunity with us
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <Card key={index} className="p-6 border-border hover:border-primary/50 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-serif font-semibold">{position.title}</h3>
                      <Badge variant="secondary">{position.department}</Badge>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{position.type}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground">{position.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {position.requirements.map((req, reqIndex) => (
                        <Badge key={reqIndex} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-6 lg:ml-4">
                    Apply Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-serif font-bold">Don't See Your Role?</h2>
            <p className="text-lg text-muted-foreground">
              We're always looking for talented people to join our team. Send us your resume and tell us how you'd like to contribute.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl px-8 h-12"
              >
                Send Resume
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-2xl px-8 h-12 border-border hover:border-primary"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;