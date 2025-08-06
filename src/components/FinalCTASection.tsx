import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, Heart, Star, Camera, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import babyHero1 from "@/assets/baby-hero-1.png";

export default function FinalCTASection() {
  return (
    <section className="py-16 bg-gradient-hero relative overflow-hidden">
      {/* Floating hearts */}
      <div className="absolute top-10 left-10 animate-float opacity-30">
        <Heart className="w-8 h-8 text-accent" />
      </div>
      <div className="absolute top-20 right-20 animate-float opacity-20" style={{animationDelay: '1s'}}>
        <Star className="w-6 h-6 text-primary" />
      </div>
      <div className="absolute bottom-16 left-1/4 animate-float opacity-25" style={{animationDelay: '2s'}}>
        <Heart className="w-5 h-5 text-accent" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                Join Our First 100 Customers
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Ready to Create Your Baby's{' '}
                <span className="text-gradient">First AI Photoshoot?</span>
              </h2>
              
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Be among the first parents to experience AI baby photography. 
                Upload one photo and preview 20 unique styles before deciding.
              </p>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-card border border-primary/20">
                <div className="text-center space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-3xl font-display font-bold text-primary">₹199</span>
                    <span className="text-lg text-muted-foreground line-through">₹299</span>
                  </div>
                  <div className="bg-sage-green/20 text-sage-green px-3 py-1 rounded-full text-sm font-medium">
                    33% OFF - Launch Special
                  </div>
                  <p className="text-sm text-muted-foreground font-body">
                    Up to 20 high-resolution professional photos
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Preview all styles first • Choose your favorites • Instant download
                  </p>
                </div>
              </div>
              
              <Link to="/upload">
                <Button 
                  className="w-full sm:w-auto min-h-[50px] px-8 text-lg font-bold bg-gradient-premium hover:opacity-90 text-white shadow-button transition-all duration-300 hover:scale-105"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Start Your Baby's Photoshoot
                </Button>
              </Link>
              
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-primary" />
                  <span>Launch Special</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-primary" />
                  <span>Preview First</span>
                </div>
                <div className="flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>2-Hour Delivery</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="animate-scale-in">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-soft">
                  <img
                    src={babyHero1}
                    alt="Beautiful baby ready for AI photoshoot"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full p-3 shadow-soft animate-float">
                  <Heart className="w-6 h-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-full p-3 shadow-soft animate-float" style={{animationDelay: '1s'}}>
                  <Star className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}