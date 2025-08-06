import { Button } from "@/components/ui/button";
import { Check, Upload, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function PricingSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">
            Launch Special Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
            Transparent pricing for our first customers. No hidden fees, preview before you pay.
          </p>
          
          {/* Price Comparison */}
          <div className="max-w-4xl mx-auto mt-8 bg-card/50 rounded-xl p-6 border border-accent/20">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-muted/30 rounded-xl border border-muted">
                <h3 className="font-display font-semibold text-muted-foreground mb-3">Traditional Studio</h3>
                <div className="text-3xl font-display font-bold text-muted-foreground line-through mb-3">₹5,000+</div>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>• Travel to studio required</p>
                  <p>• Baby stress & crying</p>
                  <p>• Limited poses & styles</p>
                  <p>• Week-long waiting times</p>
                </div>
              </div>
              <div className="text-center p-6 bg-gradient-warm rounded-xl border border-primary/30 shadow-card">
                <h3 className="font-display font-semibold text-primary mb-3">Our AI Solution</h3>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-3xl font-display font-bold text-primary">₹199</span>
                  <span className="text-lg text-muted-foreground line-through">₹299</span>
                </div>
                <div className="bg-sage-green/20 text-sage-green px-3 py-1 rounded-full text-xs font-medium mb-3">
                  Launch Special
                </div>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>• From home comfort</p>
                  <p>• No baby stress</p>
                  <p>• 20+ unique styles</p>
                  <p>• 2-hour delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-card border-2 border-primary/20 hover:border-primary/40 transition-colors duration-300 relative overflow-hidden">
            {/* Popular badge */}
            <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 rounded-bl-lg font-semibold text-sm">
              <Star className="w-4 h-4 inline mr-1" />
              Most Popular
            </div>

            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-5xl font-display font-bold text-primary">₹199</span>
                <div className="text-left">
                  <div className="text-lg text-muted-foreground line-through">₹299</div>
                  <div className="text-sm font-medium text-sage-green">33% OFF</div>
                </div>
              </div>
              <span className="text-lg font-normal text-muted-foreground">(incl. GST)</span>
              <p className="text-muted-foreground text-lg mt-2 font-body">
                For up to 20 high-resolution images
              </p>
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="bg-sage-green/20 text-sage-green px-4 py-2 rounded-full text-sm font-semibold">
                  Launch Special
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  Preview First • No Hidden Fees
                </p>
              </div>
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
              <Link to="/upload">
                <Button className="w-full min-h-[50px] text-lg font-bold bg-gradient-premium hover:opacity-90 text-white shadow-button transition-all duration-300 hover:scale-105">
                  <Upload className="w-5 h-5 mr-2" />
                  Start Your Photoshoot
                </Button>
              </Link>
              
              <p className="text-sm text-muted-foreground px-4 font-body">
                <span className="font-semibold text-foreground">Launch Promise:</span> See all photos first, pay only for those you love
              </p>
            </div>
          </div>
        </div>

        {/* Money back guarantee & Trust Signals */}
        <div className="mt-12 space-y-8">
          <div className="text-center">
            <div className="bg-accent/20 rounded-xl p-6 max-w-2xl mx-auto border border-accent/30">
              <h3 className="font-semibold text-foreground mb-2">
                Preview First, Pay Later
              </h3>
              <p className="text-muted-foreground">
                We're so confident you'll love your photos that we let you see low-resolution previews of all 20 images before asking for payment. Choose your favorites and pay only for what you love!
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-card rounded-lg border border-green-200">
                <div className="text-2xl mb-2">🔒</div>
                <div className="text-sm font-semibold text-green-700">SSL Secured</div>
                <div className="text-xs text-green-600">256-bit encryption</div>
              </div>
              <div className="p-4 bg-card rounded-lg border border-blue-200">
                <div className="text-2xl mb-2">💳</div>
                <div className="text-sm font-semibold text-blue-700">Secure Payments</div>
                <div className="text-xs text-blue-600">Razorpay protected</div>
              </div>
              <div className="p-4 bg-card rounded-lg border border-purple-200">
                <div className="text-2xl mb-2">🛡️</div>
                <div className="text-sm font-semibold text-purple-700">Privacy Protected</div>
                <div className="text-xs text-purple-600">GDPR compliant</div>
              </div>
              <div className="p-4 bg-card rounded-lg border border-orange-200">
                <div className="text-2xl mb-2">👀</div>
                <div className="text-sm font-semibold text-orange-700">Preview First</div>
                <div className="text-xs text-orange-600">Pay only for what you love</div>
              </div>
            </div>
          </div>

          {/* Quality Assurance */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-blue-800 mb-3 text-xl">
                👀 Preview-First Promise
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-left">
                  <h4 className="font-semibold text-blue-700 mb-2">✅ What you get:</h4>
                  <ul className="space-y-1 text-blue-600">
                    <li>• See all 20 photos before paying</li>
                    <li>• Choose exactly what you want</li>
                    <li>• High-resolution instant downloads</li>
                    <li>• Professional AI processing</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-blue-700 mb-2">🎯 Our guarantee:</h4>
                  <ul className="space-y-1 text-blue-600">
                    <li>• Photos delivered within 2 hours</li>
                    <li>• HD quality as shown in previews</li>
                    <li>• Secure & private processing</li>
                    <li>• Professional customer support</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                <p className="text-blue-800 font-medium">
                  <span className="text-lg">🎯</span> Zero Risk • You see exactly what you're buying
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}