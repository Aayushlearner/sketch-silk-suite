import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Sparkles, Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">About FashionPro</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-balance">
              Where AI meets{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                atelier
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              We're revolutionizing fashion design by combining cutting-edge AI technology with the timeless artistry of couture craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To democratize fashion design by providing designers with intelligent tools that amplify creativity, streamline workflows, and bridge the gap between inspiration and production.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that every designer deserves access to professional-grade tools, regardless of their budget or team size. Our platform combines the precision of traditional atelier methods with the power of modern AI technology.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-sm text-muted-foreground">Designers</div>
                </div>
              </Card>
              
              <Card className="p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
              </Card>
              
              <Card className="p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto">
                  <Sparkles className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">1M+</div>
                  <div className="text-sm text-muted-foreground">AI Sketches</div>
                </div>
              </Card>
              
              <Card className="p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-4xl font-serif font-bold">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center space-y-4 border-border hover:border-primary/50 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Innovation</h3>
              <p className="text-muted-foreground">
                We push the boundaries of what's possible in fashion design technology, always staying ahead of the curve.
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4 border-border hover:border-primary/50 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-secondary/10 flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Community</h3>
              <p className="text-muted-foreground">
                We believe in the power of collaboration and building a supportive community of designers.
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4 border-border hover:border-primary/50 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Excellence</h3>
              <p className="text-muted-foreground">
                We're committed to delivering the highest quality tools and experiences for our users.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-4xl font-serif font-bold">Meet the Team</h2>
            <p className="text-lg text-muted-foreground">
              Passionate designers and technologists working together
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Sarah Chen", role: "Founder & CEO", bg: "from-primary/20 to-primary/5" },
              { name: "Marcus Rodriguez", role: "Head of Design", bg: "from-accent/20 to-accent/5" },
              { name: "Aisha Patel", role: "Lead Engineer", bg: "from-secondary/20 to-secondary/5" }
            ].map((member, index) => (
              <Card key={index} className="p-8 text-center space-y-4 border-border hover:border-primary/50 transition-all">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.bg} mx-auto flex items-center justify-center`}>
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;