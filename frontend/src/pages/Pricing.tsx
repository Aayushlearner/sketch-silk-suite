import { Navbar } from "@/components/Navbar";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-balance">
              Invest in your
              <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                creative future
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Choose the plan that fits your ambitions. All plans include a 14-day free trial with full access to our platform.
            </p>
          </div>
        </div>
      </section>

      <PricingSection />

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">Frequently asked questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Can I switch plans anytime?",
                  answer: "Absolutely. Upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any difference.",
                },
                {
                  question: "What happens after the free trial?",
                  answer: "After 14 days, you'll be automatically enrolled in your chosen plan. Cancel anytime during the trial with no charges.",
                },
                {
                  question: "Do you offer refunds?",
                  answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.",
                },
                {
                  question: "Can I add more team members?",
                  answer: "Studio and Enterprise plans support team collaboration. Add members anytime from your account settings.",
                },
              ].map((faq, index) => (
                <div key={index} className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
