import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Eye, Database } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Account information (name, email, profile details)",
        "Design files and projects you create on our platform",
        "Usage data and analytics to improve our services",
        "Communication preferences and support interactions"
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "Provide and maintain our design platform services",
        "Process AI sketch generation and other features",
        "Send important updates about your account and our services",
        "Improve our platform based on usage patterns and feedback"
      ]
    },
    {
      title: "Information Sharing",
      content: [
        "We never sell your personal information to third parties",
        "Design files remain private unless you choose to share them",
        "We may share anonymized usage data for research purposes",
        "Legal compliance may require disclosure in specific circumstances"
      ]
    },
    {
      title: "Data Security",
      content: [
        "All data is encrypted in transit and at rest",
        "Regular security audits and penetration testing",
        "Access controls and authentication for all team members",
        "Secure cloud infrastructure with industry-standard protections"
      ]
    },
    {
      title: "Your Rights",
      content: [
        "Access and download your personal data at any time",
        "Request correction of inaccurate information",
        "Delete your account and associated data",
        "Opt out of non-essential communications"
      ]
    },
    {
      title: "Data Retention",
      content: [
        "Account data is retained while your account is active",
        "Design files are kept according to your subscription plan",
        "Usage analytics are anonymized after 12 months",
        "Deleted accounts are purged within 30 days"
      ]
    }
  ];

  const principles = [
    {
      icon: Shield,
      title: "Privacy by Design",
      description: "We build privacy protection into every feature from the ground up",
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: Lock,
      title: "Secure by Default",
      description: "Your data is encrypted and protected with industry-leading security",
      color: "from-accent/20 to-accent/5"
    },
    {
      icon: Eye,
      title: "Transparent Practices",
      description: "We're clear about what data we collect and how we use it",
      color: "from-secondary/20 to-secondary/5"
    },
    {
      icon: Database,
      title: "Data Minimization",
      description: "We only collect the data necessary to provide our services",
      color: "from-primary/20 to-accent/5"
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
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Privacy Policy</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-balance">
              Your{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                privacy matters
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              We're committed to protecting your personal information and being transparent about how we collect, use, and share your data.
            </p>

            <div className="text-sm text-muted-foreground">
              Last updated: December 15, 2024
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-4xl font-serif font-bold">Our Privacy Principles</h2>
            <p className="text-lg text-muted-foreground">
              The foundation of how we handle your data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Card key={index} className="p-6 text-center space-y-4 border-border hover:border-primary/50 transition-all">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${principle.color} flex items-center justify-center mx-auto`}>
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold mb-2">{principle.title}</h3>
                    <p className="text-sm text-muted-foreground">{principle.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="p-8 border-border">
                <h2 className="text-2xl font-serif font-bold mb-6">{section.title}</h2>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 text-center space-y-6">
              <h2 className="text-3xl font-serif font-bold">Questions About Privacy?</h2>
              <p className="text-lg text-muted-foreground">
                If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate to contact us.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-muted-foreground">privacy@fashionpro.com</div>
                </div>
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-muted-foreground">
                    123 Design Street<br />
                    San Francisco, CA 94102<br />
                    United States
                  </div>
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

export default Privacy;