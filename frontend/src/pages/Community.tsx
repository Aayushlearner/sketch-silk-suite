import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, Heart, Share2, Calendar, Trophy, Star } from "lucide-react";

const Community = () => {
  const communityStats = [
    { label: "Active Designers", value: "12,500+", icon: Users },
    { label: "Projects Shared", value: "45,000+", icon: Share2 },
    { label: "Community Posts", value: "8,200+", icon: MessageCircle },
    { label: "Design Awards", value: "150+", icon: Trophy }
  ];

  const featuredPosts = [
    {
      author: "Sarah Chen",
      role: "Fashion Designer",
      title: "My journey from sketch to runway using FashionPro",
      excerpt: "How I created my entire SS24 collection using AI-powered tools...",
      likes: 234,
      comments: 45,
      timeAgo: "2 hours ago",
      tags: ["Success Story", "AI Design"]
    },
    {
      author: "Marcus Rodriguez",
      role: "Creative Director",
      title: "5 tips for better AI sketch prompts",
      excerpt: "After generating 1000+ sketches, here's what I learned...",
      likes: 189,
      comments: 32,
      timeAgo: "1 day ago",
      tags: ["Tips", "AI Sketches"]
    },
    {
      author: "Aisha Patel",
      role: "Independent Designer",
      title: "Building sustainable fashion with tech packs",
      excerpt: "How detailed tech packs helped me work with eco-friendly suppliers...",
      likes: 156,
      comments: 28,
      timeAgo: "3 days ago",
      tags: ["Sustainability", "Tech Packs"]
    }
  ];

  const upcomingEvents = [
    {
      title: "AI in Fashion Design Webinar",
      date: "Dec 20, 2024",
      time: "2:00 PM EST",
      attendees: 245
    },
    {
      title: "Community Design Challenge",
      date: "Jan 5, 2025",
      time: "All Day",
      attendees: 89
    },
    {
      title: "Supplier Network Meetup",
      date: "Jan 15, 2025",
      time: "6:00 PM EST",
      attendees: 67
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
              <span className="text-sm font-medium">Community</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-balance">
              Join the{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                community
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Connect with thousands of designers, share your work, get feedback, and learn from the best in the industry.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl px-8 h-12"
              >
                Join Community
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-2xl px-8 h-12 border-border hover:border-primary"
              >
                Browse Posts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="p-6 text-center space-y-3 border-border hover:border-primary/50 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-4xl font-serif font-bold">Featured Posts</h2>
            <p className="text-lg text-muted-foreground">
              Popular discussions from our community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="p-6 space-y-4 border-border hover:border-primary/50 transition-all cursor-pointer group">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{post.author}</div>
                      <div className="text-xs text-muted-foreground">{post.role}</div>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{post.timeAgo}</span>
                </div>

                <div>
                  <h3 className="font-serif font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="rounded-lg">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="p-4 border-border hover:border-primary/50 transition-all">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">{event.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{event.date}</span>
                          </div>
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{event.attendees} attending</div>
                        <Button size="sm" className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg">
                          Join
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Community Guidelines</h2>
              <Card className="p-6 space-y-4">
                <div className="space-y-4">
                  {[
                    "Be respectful and constructive in all interactions",
                    "Share your work and provide helpful feedback to others",
                    "Keep discussions relevant to fashion design and FashionPro",
                    "No spam, self-promotion, or off-topic content",
                    "Help maintain a welcoming environment for all skill levels"
                  ].map((guideline, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Star className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm">{guideline}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                  Read Full Guidelines
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-serif font-bold">Ready to Connect?</h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of designers sharing their passion for fashion and innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl px-8 h-12"
              >
                Create Account
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-2xl px-8 h-12 border-border hover:border-primary"
              >
                Explore Posts
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;