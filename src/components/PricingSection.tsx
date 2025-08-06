import { Button } from "@/components/ui/button";
import { Check, Upload, Star } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Honest Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No hidden fees, no surprises. Just beautiful memories at an affordable price.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-card border-2 border-primary/20 hover:border-primary/40 transition-colors duration-300 relative overflow-hidden">
            {/* Popular badge */}
            <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 rounded-bl-lg font-semibold text-sm">
              <Star className="w-4 h-4 inline mr-1" />
              Most Popular
            </div>

            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-primary mb-2">
                ₹299
              </div>
              <p className="text-muted-foreground text-lg">
                For 20 high-resolution images
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                GST included • No hidden fees
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "20 professional-quality AI photos",
                "Multiple artistic styles & themes",
                "High-resolution downloads",
                "Preview before you pay",
                "Delivered within hours",
                "Your baby's face perfectly preserved",
                "Secure & private processing"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center space-y-4">
              <Button variant="hero" size="xl" className="w-full">
                <Upload className="w-5 h-5 mr-2" />
                Upload Baby Photo
              </Button>
              
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Risk-free:</span> Only pay after you preview and select your favorite photos
              </p>
            </div>
          </div>
        </div>

        {/* Money back guarantee */}
        <div className="mt-12 text-center">
          <div className="bg-accent/20 rounded-xl p-6 max-w-2xl mx-auto border border-accent/30">
            <h3 className="font-semibold text-foreground mb-2">
              Preview First, Pay Later
            </h3>
            <p className="text-muted-foreground">
              We're so confident you'll love your photos that we let you see low-resolution previews of all 20 images before asking for payment. Choose your favorites and pay only for what you love!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}