import { Button } from "@/components/ui/button";
import { Upload, Heart, Star } from "lucide-react";
import babyHero1 from "@/assets/baby-hero-1.jpg";

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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to See Your Baby in a{' '}
                <span className="text-primary">Magical Photoshoot?</span>
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Start with just one photo — let the magic unfold and create memories 
                you'll treasure forever.
              </p>
              
              <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-card border border-accent/20">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary">
                    Just ₹299
                  </div>
                  <p className="text-sm text-muted-foreground">
                    20 high-resolution professional photos
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Preview first • Pay only for what you love
                  </p>
                </div>
              </div>
              
              <Button 
                variant="hero" 
                size="xl" 
                className="w-full sm:w-auto"
              >
                <Upload className="w-5 h-5 mr-2" />
                Upload Baby Photo Now
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Delivered in hours • 100% secure & private
              </p>
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