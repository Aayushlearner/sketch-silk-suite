import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Search, HelpCircle, MessageCircle, Mail, Phone, Clock } from "lucide-react";

const HelpCenter = () => {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7 Available",
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message about your issue",
      availability: "Response within 2 hours",
      color: "from-accent/20 to-accent/5"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      availability: "Mon-Fri, 9AM-6PM EST",
      color: "from-secondary/20 to-secondary/5"
    }
  ];

  const faqCategories = [
    {
      title: "Account & Billing",
      questions: [
        "How do I upgrade my subscription?",
        "Can I cancel my subscription anytime?",
        "How do I update my payment method?",
        "What happens when my trial ends?"
      ]
    },
    {
      title: "AI Features",
      questions: [
        "How does AI sketch generation work?",
        "Why are my AI sketches not generating?",
        "How can I improve AI sketch quality?",
        "What are the AI usage limits?"
      ]
    },
    {
      title: "Collaboration",
      questions: [
        "How do I invite team members?",
        "Can I control team member permissions?",
        "How do I share my moodboards?",
        "Is there a limit on team size?"
      ]
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
              <HelpCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Help Center</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-balance">
              How can we{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                help you?
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Find answers to your questions or get in touch with our support team.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto pt-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search for help articles..."
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

      {/* Support Options */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-4xl font-serif font-bold">Get Support</h2>
            <p className="text-lg text-muted-foreground">
              Choose the best way to reach us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="group p-6 space-y-4 border-border hover:border-primary/50 transition-all cursor-pointer hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold mb-2">{option.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{option.availability}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                    {option.title === "Live Chat" ? "Start Chat" : 
                     option.title === "Email Support" ? "Send Email" : "Call Now"}
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-4xl font-serif font-bold">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {faqCategories.map((category, index) => (
              <Card key={index} className="p-6 space-y-4">
                <h3 className="text-xl font-serif font-semibold">{category.title}</h3>
                <div className="space-y-3">
                  {category.questions.map((question, qIndex) => (
                    <div key={qIndex} className="group cursor-pointer">
                      <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        {question}
                      </p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full rounded-xl border-border hover:border-primary">
                  View All
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 space-y-4">
              <h2 className="text-4xl font-serif font-bold">Send us a Message</h2>
              <p className="text-lg text-muted-foreground">
                Can't find what you're looking for? We're here to help.
              </p>
            </div>

            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input className="rounded-xl" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input className="rounded-xl" placeholder="Enter your last name" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" className="rounded-xl" placeholder="Enter your email" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input className="rounded-xl" placeholder="What's this about?" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    className="rounded-xl min-h-[120px] resize-none" 
                    placeholder="Describe your issue or question in detail..."
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HelpCenter;