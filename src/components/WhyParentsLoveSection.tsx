import { Check, Camera, Clock, Shield, Heart, Gift } from "lucide-react";

const benefits = [
  {
    icon: Check,
    title: "Only ₹299",
    description: "Affordable professional photoshoot memories"
  },
  {
    icon: Camera,
    title: "No studio needed",
    description: "Create stunning photos from the comfort of your home"
  },
  {
    icon: Shield,
    title: "Face-preserving AI",
    description: "Your baby's unique features are perfectly maintained"
  },
  {
    icon: Clock,
    title: "Delivered within hours",
    description: "Get your beautiful photos delivered digitally, fast"
  },
  {
    icon: Heart,
    title: "Emotionally crafted",
    description: "Each photo is designed to capture precious moments"
  },
  {
    icon: Gift,
    title: "Perfect for sharing",
    description: "Create memories to treasure and share with family"
  }
];

export default function WhyParentsLoveSection() {
  return (
    <section className="py-16 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Parents Love Premsetu
          </h2>
          <p className="text-lg text-accent-foreground max-w-2xl mx-auto">
            Affordable, Fast & Adorable Memories
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-card border border-accent/20 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-accent/20 text-center">
            <div className="flex justify-center mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
            </div>
            <blockquote className="text-lg text-foreground mb-4 italic">
              "I couldn't believe how beautiful the photos turned out! My baby looked like a little angel in every single shot. Best ₹299 I've ever spent!"
            </blockquote>
            <cite className="text-muted-foreground font-medium">
              — Priya M., Happy Mom from Mumbai
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}