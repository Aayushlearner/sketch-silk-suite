import { Palette, Sparkles, FileText, Package, Rocket } from "lucide-react";

const steps = [
  {
    icon: Palette,
    title: "Moodboard",
    description: "Gather inspiration and define your aesthetic",
    step: "01",
  },
  {
    icon: Sparkles,
    title: "Sketch",
    description: "Generate AI-powered design concepts",
    step: "02",
  },
  {
    icon: FileText,
    title: "Tech Pack",
    description: "Build comprehensive production specs",
    step: "03",
  },
  {
    icon: Package,
    title: "Supplier",
    description: "Connect with manufacturers and source materials",
    step: "04",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Bring your collection to life",
    step: "05",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-24 relative bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance">
            From concept to collection
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            A streamlined workflow designed for modern fashion designers.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 -translate-y-1/2" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-4 group"
                >
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/20">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                      {step.step}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-serif font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
