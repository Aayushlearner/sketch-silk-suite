import { Palette, Sparkles, FileText, Package, Settings, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Palette,
    title: "Moodboard Studio",
    description: "Curate visual inspiration with drag-and-drop ease. Import images, colors, and textures to define your collection's aesthetic.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Sparkles,
    title: "AI Sketch Generator",
    description: "Turn concepts into sketches instantly. Describe your vision and watch AI bring it to life with editorial precision.",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: FileText,
    title: "Tech Pack Builder",
    description: "Create comprehensive tech packs with measurements, materials, and construction details. Export ready for production.",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Package,
    title: "Supplier Network",
    description: "Connect with verified fabric suppliers and manufacturers. Source materials and manage production workflows seamlessly.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Settings,
    title: "Workflow Automation",
    description: "Streamline your design-to-production pipeline. Automate repetitive tasks and focus on what you do best—creating.",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: Zap,
    title: "Real-time Collaboration",
    description: "Work with your team in real-time. Share feedback, iterate on designs, and keep everyone aligned on the vision.",
    color: "from-secondary/20 to-secondary/5",
  },
];

export const FeaturesGrid = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance">
            Your complete design workspace
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            From inspiration to production, everything you need in one beautifully crafted platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative p-8 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 bg-card/50 backdrop-blur-sm overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
