import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Book, Video, Code, MessageCircle, ArrowRight } from "lucide-react";

const Documentation = () => {
  const categories = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics and set up your first project",
      articles: 12,
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides for all features",
      articles: 8,
      color: "from-accent/20 to-accent/5"
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Complete API documentation for developers",
      articles: 24,
      color: "from-secondary/20 to-secondary/5"
    },
    {
      icon: MessageCircle,
      title: "FAQ",
      description: "Frequently asked questions and answers",
      articles: 16,
      color: "from-primary/20 to-accent/5"
    }
  ];

  const popularArticles = [
    "How to create your first moodboard",
    "AI sketch generation best practices",
    "Building comprehensive tech packs",
    "Connecting with suppliers",
    "Team collaboration features",
    "Exporting and sharing your work"
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
              <Book className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Documentation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-balance">
              Learn{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                FashionPro
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Everything you need to master the platform and create stunning fashion designs with AI-powered tools.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto pt-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search documentation..."
                  className="pl-12 pr-4 h-12 rounded-2xl border-border focus:border-primary"
                />
                <Button 
                  size="sm" 
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-primary hover:bg-primary/90"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-4xl font-serif font-bold">Browse by Category</h2>
            <p className="text-lg text-muted-foreground">
              Find exactly what you're looking for
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="group p-6 space-y-4 border-border hover:border-primary/50 transition-all cursor-pointer hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{category.articles} articles</span>
                      <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Popular Articles</h2>
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <Card key={index} className="group p-4 border-border hover:border-primary/50 transition-all cursor-pointer">
                    <div className="flex items-center justify-between">
                      <span className="font-medium group-hover:text-primary transition-colors">{article}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Quick Start Guide</h2>
              <Card className="p-6 space-y-4">
                <div className="space-y-4">
                  {[
                    "Create your account and set up your profile",
                    "Build your first moodboard with inspiration images",
                    "Generate AI sketches from text descriptions",
                    "Create a tech pack with detailed specifications",
                    "Connect with suppliers and manufacturers"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-sm">{step}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                  Start Tutorial
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-serif font-bold">Need More Help?</h2>
            <p className="text-lg text-muted-foreground">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl px-8 h-12"
              >
                Contact Support
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-2xl px-8 h-12 border-border hover:border-primary"
              >
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Documentation;