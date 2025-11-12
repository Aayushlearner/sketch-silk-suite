import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "FashionPro transformed how we work. The AI sketch feature alone saved us weeks of development time.",
    author: "Sofia Chen",
    role: "Creative Director",
    company: "Atelier Moderne",
    rating: 5,
  },
  {
    quote: "Finally, a platform that understands fashion workflows. The tech pack builder is exactly what we needed.",
    author: "Marcus Rodriguez",
    role: "Founder",
    company: "Studio MR",
    rating: 5,
  },
  {
    quote: "The supplier network feature connected us with manufacturers we never would have found otherwise.",
    author: "Aria Patel",
    role: "Head of Production",
    company: "Ethereal Designs",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance">
            Loved by designers worldwide
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Join thousands of fashion professionals who've elevated their creative process.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm"
            >
              <div className="space-y-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <blockquote className="text-sm leading-relaxed text-muted-foreground italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="pt-4 border-t border-border">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
