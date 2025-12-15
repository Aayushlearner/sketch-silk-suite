import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import heroSketch from "@/assets/hero-sketch-1.png";
import heroFabric from "@/assets/hero-fabric-1.png";
import heroPattern from "@/assets/hero-pattern-1.png";
import heroMoodboard from "@/assets/hero-moodboard.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Fashion Moodboard Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
        
        {/* Layered fashion elements with parallax */}
        <div className="absolute top-[15%] right-[10%] w-[300px] h-[400px] opacity-20 dark:opacity-15 animate-parallax-slow">
          <img 
            src={heroSketch} 
            alt="" 
            className="w-full h-full object-contain drop-shadow-2xl hero-image"
            style={{ transform: 'rotate(-8deg)' }}
          />
        </div>

        <div className="absolute top-[40%] left-[5%] w-[280px] h-[280px] opacity-25 dark:opacity-20 animate-parallax-medium">
          <img 
            src={heroFabric} 
            alt="" 
            className="w-full h-full object-cover rounded-2xl shadow-2xl hero-image"
            style={{ transform: 'rotate(5deg)' }}
          />
        </div>

        <div className="absolute bottom-[25%] right-[15%] w-[350px] h-[350px] opacity-15 dark:opacity-10 animate-parallax-fast">
          <img 
            src={heroPattern} 
            alt="" 
            className="w-full h-full object-contain hero-image"
            style={{ transform: 'rotate(-12deg)' }}
          />
        </div>

        <div className="absolute top-[10%] left-[8%] w-[400px] h-[250px] opacity-20 dark:opacity-15 animate-parallax-slow" style={{ animationDelay: '1s' }}>
          <img 
            src={heroMoodboard} 
            alt="" 
            className="w-full h-full object-cover rounded-xl shadow-xl hero-image"
            style={{ transform: 'rotate(3deg)' }}
          />
        </div>

        {/* Subtle color overlays */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        
        {/* Texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,hsl(var(--background))_100%)]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium">AI-Powered Design Studio</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-balance">
            Where AI meets{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              atelier
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Create stunning moodboards, generate AI sketches, build tech packs, and manage your entire production workflow in one elegant platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl px-8 h-12 text-base font-medium group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-2xl px-8 h-12 text-base font-medium group border-border hover:border-primary"
              onClick={() => window.location.href = '/watch-demo'}
            >
              <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Watch Demo
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-primary" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-primary" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-primary" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
