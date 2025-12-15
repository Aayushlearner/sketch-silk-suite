import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Clock, Users, Star } from "lucide-react";

const WatchDemo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border">
              <Play className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Product Demo</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-balance">
              See FashionPro in{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                action
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Watch how designers are transforming their creative process with AI-powered tools and streamlined workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Main Demo Video */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Card className="relative aspect-video overflow-hidden border-border hover:border-primary/50 transition-all group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 flex items-center justify-center">
                <Button 
                  size="lg" 
                  className="bg-background/90 hover:bg-background text-foreground rounded-full w-20 h-20 group-hover:scale-110 transition-all shadow-xl"
                >
                  <Play className="h-8 w-8 ml-1" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif font-semibold">Complete Platform Overview</h3>
                    <p className="text-sm text-muted-foreground">From concept to collection in 15 minutes</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>15:32</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Demos */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-4xl font-serif font-bold">Feature Highlights</h2>
            <p className="text-lg text-muted-foreground">
              Deep dive into each powerful feature
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI Sketch Generation",
                description: "Watch AI transform text descriptions into professional fashion sketches",
                duration: "3:45",
                thumbnail: "from-primary/20 to-primary/5"
              },
              {
                title: "Moodboard Studio",
                description: "See how to create stunning visual inspiration boards",
                duration: "4:12",
                thumbnail: "from-accent/20 to-accent/5"
              },
              {
                title: "Tech Pack Builder",
                description: "Learn to build production-ready technical specifications",
                duration: "6:28",
                thumbnail: "from-secondary/20 to-secondary/5"
              },
              {
                title: "Supplier Network",
                description: "Discover how to connect with manufacturers and source materials",
                duration: "5:15",
                thumbnail: "from-primary/20 to-accent/5"
              }
            ].map((demo, index) => (
              <Card key={index} className="group relative aspect-video overflow-hidden border-border hover:border-primary/50 transition-all cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-br ${demo.thumbnail} flex items-center justify-center`}>
                  <Button 
                    size="sm" 
                    className="bg-background/90 hover:bg-background text-foreground rounded-full w-12 h-12 group-hover:scale-110 transition-all"
                  >
                    <Play className="h-4 w-4 ml-0.5" />
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif font-semibold text-sm">{demo.title}</h3>
                      <p className="text-xs text-muted-foreground">{demo.description}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{demo.duration}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-4xl font-serif font-bold">What Designers Say</h2>
            <p className="text-lg text-muted-foreground">
              Real feedback from our community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The AI sketch feature has completely transformed my design process. What used to take hours now takes minutes.",
                author: "Sarah Chen",
                role: "Fashion Designer",
                rating: 5
              },
              {
                quote: "Finally, a platform that understands the fashion industry. The tech pack builder is incredibly detailed.",
                author: "Marcus Rodriguez",
                role: "Creative Director",
                rating: 5
              },
              {
                quote: "The supplier network has connected me with amazing manufacturers I never would have found otherwise.",
                author: "Aisha Patel",
                role: "Independent Designer",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 space-y-4 border-border hover:border-primary/50 transition-all">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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
            <h2 className="text-4xl font-serif font-bold">Ready to get started?</h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of designers who are already transforming their creative process.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl px-8 h-12"
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-2xl px-8 h-12 border-border hover:border-primary"
              >
                Schedule Demo Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WatchDemo;