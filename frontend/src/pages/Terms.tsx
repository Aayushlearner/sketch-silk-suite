import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { FileText, Scale, Shield, AlertTriangle } from "lucide-react";

const Terms = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using FashionPro, you accept and agree to be bound by these Terms of Service.",
        "If you do not agree to these terms, please do not use our service.",
        "We may update these terms from time to time, and continued use constitutes acceptance of changes.",
        "You must be at least 18 years old to use our service."
      ]
    },
    {
      title: "2. Description of Service",
      content: [
        "FashionPro is an AI-powered fashion design platform that provides tools for creating moodboards, generating sketches, building tech packs, and connecting with suppliers.",
        "We provide the platform 'as is' and make no warranties about availability or functionality.",
        "Features and functionality may change or be discontinued at our discretion.",
        "Some features may require a paid subscription to access."
      ]
    },
    {
      title: "3. User Accounts",
      content: [
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "You agree to provide accurate and complete information when creating your account.",
        "You are responsible for all activities that occur under your account.",
        "You must notify us immediately of any unauthorized use of your account."
      ]
    },
    {
      title: "4. Acceptable Use",
      content: [
        "You may not use our service for any illegal or unauthorized purpose.",
        "You may not upload content that infringes on intellectual property rights.",
        "You may not attempt to gain unauthorized access to our systems or other users' accounts.",
        "You may not use our service to harass, abuse, or harm others."
      ]
    },
    {
      title: "5. Intellectual Property",
      content: [
        "You retain ownership of the designs and content you create using our platform.",
        "You grant us a license to use your content as necessary to provide our services.",
        "Our platform, including AI models and software, remains our intellectual property.",
        "You may not reverse engineer, copy, or create derivative works of our platform."
      ]
    },
    {
      title: "6. AI-Generated Content",
      content: [
        "AI-generated sketches and designs are provided as creative tools and inspiration.",
        "You are responsible for ensuring your use of AI-generated content complies with applicable laws.",
        "We do not guarantee the originality or uniqueness of AI-generated content.",
        "You should verify that AI-generated content does not infringe on existing intellectual property."
      ]
    },
    {
      title: "7. Payment and Subscriptions",
      content: [
        "Subscription fees are billed in advance and are non-refundable except as required by law.",
        "You may cancel your subscription at any time, with cancellation taking effect at the end of the current billing period.",
        "We reserve the right to change our pricing with 30 days' notice.",
        "Failure to pay subscription fees may result in suspension or termination of your account."
      ]
    },
    {
      title: "8. Limitation of Liability",
      content: [
        "Our liability is limited to the maximum extent permitted by law.",
        "We are not liable for any indirect, incidental, or consequential damages.",
        "Our total liability shall not exceed the amount you paid for our services in the 12 months preceding the claim.",
        "Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you."
      ]
    },
    {
      title: "9. Termination",
      content: [
        "We may terminate or suspend your account at any time for violation of these terms.",
        "You may terminate your account at any time by contacting our support team.",
        "Upon termination, your right to use the service ceases immediately.",
        "We will provide reasonable notice before termination except in cases of serious violations."
      ]
    },
    {
      title: "10. Governing Law",
      content: [
        "These terms are governed by the laws of the State of California, United States.",
        "Any disputes will be resolved in the courts of San Francisco County, California.",
        "If any provision of these terms is found to be unenforceable, the remaining provisions will remain in effect.",
        "These terms constitute the entire agreement between you and FashionPro."
      ]
    }
  ];

  const highlights = [
    {
      icon: FileText,
      title: "Service Agreement",
      description: "Terms governing your use of our fashion design platform",
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: Scale,
      title: "Rights & Responsibilities",
      description: "Your rights as a user and your responsibilities when using our service",
      color: "from-accent/20 to-accent/5"
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      description: "How we handle ownership of your designs and our platform technology",
      color: "from-secondary/20 to-secondary/5"
    },
    {
      icon: AlertTriangle,
      title: "Important Notices",
      description: "Key limitations, liabilities, and legal considerations",
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
              <Scale className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Terms of Service</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-balance">
              Terms of{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              These terms govern your use of FashionPro and outline the rights and responsibilities of both users and our platform.
            </p>

            <div className="text-sm text-muted-foreground">
              Last updated: December 15, 2024
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-4xl font-serif font-bold">Key Points</h2>
            <p className="text-lg text-muted-foreground">
              Important aspects of our terms of service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="p-6 text-center space-y-4 border-border hover:border-primary/50 transition-all">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${highlight.color} flex items-center justify-center mx-auto`}>
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="p-8 border-border">
                <h2 className="text-2xl font-serif font-bold mb-6">{section.title}</h2>
                <ul className="space-y-4">
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
              <h2 className="text-3xl font-serif font-bold">Questions About These Terms?</h2>
              <p className="text-lg text-muted-foreground">
                If you have any questions about these Terms of Service, please contact our legal team.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-muted-foreground">legal@fashionpro.com</div>
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

export default Terms;