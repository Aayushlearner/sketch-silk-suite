import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight, TrendingUp } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Future of AI in Fashion Design: Trends for 2025",
    excerpt: "Explore how artificial intelligence is revolutionizing the fashion industry and what designers can expect in the coming year.",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Industry Insights",
    image: "from-primary/20 to-accent/20"
  };

  const blogPosts = [
    {
      title: "Building Your First Moodboard: A Complete Guide",
      excerpt: "Learn the fundamentals of creating compelling moodboards that capture your design vision.",
      author: "Marcus Rodriguez",
      date: "Dec 12, 2024",
      readTime: "5 min read",
      category: "Tutorial",
      image: "from-accent/20 to-secondary/20"
    },
    {
      title: "Sustainable Fashion: Using Tech Packs for Eco-Friendly Production",
      excerpt: "How detailed technical specifications can help you work with sustainable manufacturers.",
      author: "Aisha Patel",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Sustainability",
      image: "from-secondary/20 to-primary/20"
    },
    {
      title: "AI Sketch Generation: Tips for Better Results",
      excerpt: "Master the art of prompting AI to create exactly the sketches you envision.",
      author: "David Kim",
      date: "Dec 8, 2024",
      readTime: "4 min read",
      category: "AI Tips",
      image: "from-primary/20 to-accent/20"
    },
    {
      title: "Collaborating with Your Design Team in FashionPro",
      excerpt: "Best practices for seamless teamwork and project management in fashion design.",
      author: "Emma Thompson",
      date: "Dec 5, 2024",
      readTime: "7 min read",
      category: "Collaboration",
      image: "from-accent/20 to-secondary/20"
    },
    {
      title: "From Sketch to Supplier: A Complete Workflow",
      excerpt: "Follow a real project from initial concept through to manufacturer selection.",
      author: "James Wilson",
      date: "Dec 3, 2024",
      readTime: "9 min read",
      category: "Case Study",
      image: "from-secondary/20 to-primary/20"
    },
    {
      title: "Color Theory in Digital Fashion Design",
      excerpt: "Understanding color psychology and application in modern fashion design tools.",
      author: "Lisa Chang",
      date: "Dec 1, 2024",
      readTime: "6 min read",
      category: "Design Theory",
      image: "from-primary/20 to-accent/20"
    }
  ];

  const categories = ["All", "Tutorial", "Industry Insights", "AI Tips", "Sustainability", "Case Study", "Design Theory"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Fashion Design Blog</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-balance">
              Design{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                insights
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Stay updated with the latest trends, tutorials, and insights from the world of fashion design and AI technology.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto pt-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-12 pr-4 h-12 rounded-2xl border-border focus:border-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all cursor-pointer">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className={`aspect-video lg:aspect-auto bg-gradient-to-br ${featuredPost.image} flex items-center justify-center`}>
                  <div className="text-center space-y-2">
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    <div className="text-4xl font-serif font-bold text-primary">AI</div>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <Badge variant="secondary">{featuredPost.category}</Badge>
                  <h2 className="text-3xl font-serif font-bold group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl gap-2">
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={`rounded-full ${index === 0 ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "border-border hover:border-primary"}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group overflow-hidden border-border hover:border-primary/50 transition-all cursor-pointer hover:-translate-y-1">
                <div className={`aspect-video bg-gradient-to-br ${post.image} flex items-center justify-center`}>
                  <div className="text-2xl font-serif font-bold text-primary opacity-50">
                    {post.category.charAt(0)}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                  <h3 className="text-xl font-serif font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-serif font-bold">Stay Updated</h2>
            <p className="text-lg text-muted-foreground">
              Get the latest articles and insights delivered to your inbox.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="rounded-xl flex-1"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;