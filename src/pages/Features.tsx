import { Navbar } from "@/components/Navbar";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-balance">
              Everything you need to create
              <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                exceptional fashion
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              A comprehensive toolkit designed for modern fashion professionals. From inspiration to production, we've got you covered.
            </p>
            <div className="pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl px-8 h-12 text-base font-medium group">
                Start Creating Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FeaturesGrid />

      {/* Additional Feature Details */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold">Designed for your workflow</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We've spent years understanding how fashion designers work. FashionPro adapts to your creative process, not the other way around.
              </p>
              <ul className="space-y-4">
                {[
                  "Intuitive drag-and-drop interfaces",
                  "Keyboard shortcuts for power users",
                  "Customizable workspace layouts",
                  "Seamless import/export options",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-border" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
