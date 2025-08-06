import { Button } from "@/components/ui/button";
import { Heart, Star, Upload, Circle } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import babyHero1 from "@/assets/baby-hero-1.png";
import babyHero2 from "@/assets/baby-hero-2.png";
import babyHero3 from "@/assets/baby-hero-3.png";
import babyHero4 from "@/assets/baby-hero-4.png";
import babyHero5 from "@/assets/baby-hero-5.png";

const heroImages = [babyHero1, babyHero2, babyHero3, babyHero4, babyHero5];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Launch Banner */}
      <div className="bg-gradient-premium text-white text-center py-3 px-4 relative z-10">
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <span className="hidden sm:inline">✨</span>
          <span>Now Launching: Join Our First 100 Customers</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">33% OFF Launch Pricing</span>
          <span className="hidden sm:inline">✨</span>
        </div>
      </div>
      {/* Enhanced floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Heart className="w-6 h-6 text-accent opacity-60" />
      </div>
      <div className="absolute top-32 right-16 animate-float" style={{animationDelay: '1s'}}>
        <Star className="w-5 h-5 text-primary opacity-40" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{animationDelay: '2s'}}>
        <Heart className="w-4 h-4 text-accent opacity-50" />
      </div>
      
      {/* New balloon elements */}
      <div className="absolute top-40 left-1/4 animate-balloon" style={{animationDelay: '0.5s'}}>
        <Circle className="w-8 h-8 text-primary opacity-20 fill-current" />
      </div>
      <div className="absolute top-60 right-1/3 animate-balloon" style={{animationDelay: '1.5s'}}>
        <Circle className="w-6 h-6 text-accent opacity-25 fill-current" />
      </div>
      <div className="absolute bottom-20 right-10 animate-balloon" style={{animationDelay: '2.5s'}}>
        <Circle className="w-7 h-7 text-primary-glow opacity-20 fill-current" />
      </div>

      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Content */}
        <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight text-shadow">
            Magical Baby Photos from Just One Picture{' '}
            <span className="text-gradient">— No Studio Needed</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-body leading-relaxed">
            Upload one photo and our AI creates 20 stunning professional portraits in multiple artistic styles. 
            Preview before you buy, delivered in 2 hours.
          </p>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-card border border-primary/20 max-w-md mx-auto lg:mx-0">
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-2">
                <span className="text-3xl md:text-4xl font-display font-bold text-primary">₹199</span>
                <span className="text-lg text-muted-foreground line-through">₹299</span>
              </div>
              <div className="bg-sage-green/20 text-sage-green px-3 py-1 rounded-full text-sm font-medium">
                Launch Special - 33% OFF
              </div>
              <p className="text-sm text-muted-foreground">
                Preview first, pay only for photos you love
              </p>
            </div>
          </div>
          
          <div className="pt-4">
            <Link to="/upload">
              <Button 
                className="w-full sm:w-auto min-h-[50px] px-8 text-lg font-bold bg-gradient-premium hover:opacity-90 text-white shadow-button transition-all duration-300 hover:scale-105"
              >
                <Upload className="w-5 h-5 mr-2" />
                Start Your Photoshoot
              </Button>
            </Link>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="flex-1 mt-12 lg:mt-0 lg:ml-12">
          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-scale-in">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl overflow-hidden shadow-card transition-all duration-500 cursor-pointer ${
                    index === currentImageIndex 
                      ? 'ring-4 ring-primary/50 scale-105' 
                      : 'hover:scale-102'
                  } ${index === 4 ? 'col-span-2 lg:col-span-1' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img
                    src={image}
                    alt={`Baby photoshoot example ${index + 1}`}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  {index === currentImageIndex && (
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                      Featured
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Enhanced dots indicator with counter */}
            <div className="flex flex-col items-center mt-6 space-y-3">
              <div className="flex justify-center space-x-3">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                      index === currentImageIndex 
                        ? 'bg-primary border-primary scale-110 shadow-lg' 
                        : 'bg-transparent border-muted hover:border-primary/50 hover:scale-105'
                    }`}
                    aria-label={`View example photo ${index + 1}`}
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                {currentImageIndex + 1} of {heroImages.length} example photos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}