import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Plus, Zap, Bug, ArrowUp } from "lucide-react";

const Changelog = () => {
  const releases = [
    {
      version: "2.4.0",
      date: "December 15, 2024",
      type: "major",
      title: "AI Sketch Generation 2.0",
      description: "Major improvements to our AI sketch generation with better accuracy and new style options.",
      changes: [
        { type: "new", text: "Enhanced AI model with 40% better sketch quality" },
        { type: "new", text: "Added 5 new sketch styles: Watercolor, Pencil, Digital, Technical, Artistic" },
        { type: "improvement", text: "Faster generation times (average 3 seconds)" },
        { type: "improvement", text: "Better handling of complex garment descriptions" },
        { type: "fix", text: "Fixed issue with sketch generation failing for long prompts" }
      ]
    },
    {
      version: "2.3.2",
      date: "December 10, 2024",
      type: "minor",
      title: "Moodboard Enhancements",
      description: "New features and improvements for the moodboard studio.",
      changes: [
        { type: "new", text: "Drag and drop image reordering" },
        { type: "new", text: "Color palette extraction from images" },
        { type: "improvement", text: "Improved image upload performance" },
        { type: "fix", text: "Fixed moodboard sharing permissions" },
        { type: "fix", text: "Resolved image cropping issues on mobile" }
      ]
    },
    {
      version: "2.3.1",
      date: "December 5, 2024",
      type: "patch",
      title: "Bug Fixes & Performance",
      description: "Important bug fixes and performance improvements.",
      changes: [
        { type: "fix", text: "Fixed tech pack export formatting issues" },
        { type: "fix", text: "Resolved supplier search filter problems" },
        { type: "improvement", text: "Improved dashboard loading times by 25%" },
        { type: "improvement", text: "Better error handling for file uploads" }
      ]
    },
    {
      version: "2.3.0",
      date: "November 28, 2024",
      type: "major",
      title: "Collaboration Features",
      description: "New team collaboration tools and real-time editing capabilities.",
      changes: [
        { type: "new", text: "Real-time collaborative editing for moodboards" },
        { type: "new", text: "Team member invitation system" },
        { type: "new", text: "Comment and feedback system" },
        { type: "new", text: "Project sharing with custom permissions" },
        { type: "improvement", text: "Enhanced notification system" }
      ]
    },
    {
      version: "2.2.1",
      date: "November 20, 2024",
      type: "minor",
      title: "Supplier Network Expansion",
      description: "Added new suppliers and improved search functionality.",
      changes: [
        { type: "new", text: "Added 150+ new verified suppliers" },
        { type: "new", text: "Advanced filtering by material type and location" },
        { type: "improvement", text: "Better supplier profile information" },
        { type: "fix", text: "Fixed supplier contact form issues" }
      ]
    },
    {
      version: "2.2.0",
      date: "November 15, 2024",
      type: "major",
      title: "Tech Pack Builder 2.0",
      description: "Complete redesign of the tech pack builder with new templates and export options.",
      changes: [
        { type: "new", text: "10 new professional tech pack templates" },
        { type: "new", text: "PDF export with custom branding" },
        { type: "new", text: "Measurement specification tables" },
        { type: "improvement", text: "Improved user interface and workflow" },
        { type: "improvement", text: "Better mobile responsiveness" }
      ]
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "new":
        return <Plus className="h-3 w-3" />;
      case "improvement":
        return <ArrowUp className="h-3 w-3" />;
      case "fix":
        return <Bug className="h-3 w-3" />;
      default:
        return <Zap className="h-3 w-3" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "new":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "improvement":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "fix":
        return "bg-orange-500/10 text-orange-600 border-orange-500/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  const getVersionBadge = (type: string) => {
    switch (type) {
      case "major":
        return <Badge className="bg-primary text-primary-foreground">Major Release</Badge>;
      case "minor":
        return <Badge variant="secondary">Minor Update</Badge>;
      case "patch":
        return <Badge variant="outline">Patch</Badge>;
      default:
        return <Badge variant="secondary">Update</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Product Updates</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-balance">
              What's{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                new
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Stay up to date with the latest features, improvements, and bug fixes in FashionPro.
            </p>
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {releases.map((release, index) => (
              <Card key={index} className="p-8 border-border hover:border-primary/50 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-serif font-bold">v{release.version}</h2>
                      {getVersionBadge(release.type)}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{release.date}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-2">{release.title}</h3>
                    <p className="text-muted-foreground">{release.description}</p>
                  </div>

                  <div className="space-y-3">
                    {release.changes.map((change, changeIndex) => (
                      <div key={changeIndex} className="flex items-start gap-3">
                        <div className={`flex items-center justify-center w-6 h-6 rounded-full border ${getTypeColor(change.type)}`}>
                          {getTypeIcon(change.type)}
                        </div>
                        <span className="text-sm leading-relaxed">{change.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-serif font-bold">Stay Updated</h2>
            <p className="text-lg text-muted-foreground">
              Get notified about new features and updates as soon as they're released.
            </p>
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="email-updates" className="rounded" />
                  <label htmlFor="email-updates" className="text-sm">Email notifications for major releases</label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="in-app-updates" className="rounded" />
                  <label htmlFor="in-app-updates" className="text-sm">In-app notifications for all updates</label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="beta-features" className="rounded" />
                  <label htmlFor="beta-features" className="text-sm">Early access to beta features</label>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Changelog;