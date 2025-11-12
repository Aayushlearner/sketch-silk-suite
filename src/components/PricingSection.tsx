import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Freelancer",
    price: { monthly: 29, annual: 24 },
    description: "Perfect for independent designers starting their journey",
    features: [
      "5 active projects",
      "Unlimited moodboards",
      "AI sketch generation (50/month)",
      "Basic tech pack templates",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Studio",
    price: { monthly: 79, annual: 65 },
    description: "For growing design studios and small teams",
    features: [
      "Unlimited projects",
      "Unlimited moodboards",
      "AI sketch generation (500/month)",
      "Advanced tech pack builder",
      "Supplier network access",
      "Team collaboration (5 members)",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 199, annual: 165 },
    description: "For established brands and large design houses",
    features: [
      "Everything in Studio",
      "Unlimited AI generation",
      "Custom tech pack templates",
      "Dedicated account manager",
      "Advanced workflow automation",
      "Unlimited team members",
      "API access",
      "White-label options",
    ],
    popular: false,
  },
];

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance">
            Choose your creative path
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Flexible pricing for designers at every stage. Start free, upgrade as you grow.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 rounded-full bg-primary transition-colors"
          >
            <div
              className={`absolute top-1 w-5 h-5 rounded-full bg-background shadow-sm transition-transform ${
                isAnnual ? 'translate-x-8' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
            Annual
            <span className="ml-2 text-xs text-primary">(Save 20%)</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 flex flex-col ${
                plan.popular
                  ? 'border-primary shadow-xl shadow-primary/10 scale-105'
                  : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-serif font-semibold">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-2xl h-11 ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80 text-foreground'
                }`}
              >
                Start Free Trial
              </Button>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          All plans include 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
};
