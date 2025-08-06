import { Button } from "@/components/ui/button";
import { Heart, Star, Upload, Circle } from "lucide-react";
import { useState, useEffect } from "react";
import babyHero1 from "@/assets/baby-hero-1.jpg";
import babyHero2 from "@/assets/baby-hero-2.jpg";
import babyHero3 from "@/assets/baby-hero-3.jpg";
import babyHero4 from "@/assets/baby-hero-4.jpg";
import babyHero5 from "@/assets/baby-hero-5.jpg";

const heroImages = [babyHero1, babyHero2, babyHero3, babyHero4, babyHero5];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Magical Baby Photos from Just One Picture{' '}
            <span className="text-primary">— No Studio Needed</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Upload one photo and receive 20 stunning AI-generated baby photos in hours.
          </p>
          
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-card border border-accent/20 max-w-md mx-auto lg:mx-0">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                Just ₹299
              </div>
              <p className="text-sm text-muted-foreground">
                Pay only after you preview and select your favorite photos
              </p>
            </div>
          </div>
          
          <div className="pt-4">
            <Button 
              variant="hero" 
              size="xl" 
              className="w-full sm:w-auto"
            >
              <Upload className="w-5 h-5 mr-2" />
              Upload Baby Photo
            </Button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="flex-1 mt-12 lg:mt-0 lg:ml-12">
          <div className="relative">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 animate-scale-in">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl overflow-hidden shadow-card transition-all duration-500 ${
                    index === currentImageIndex 
                      ? 'ring-4 ring-primary/50 scale-105' 
                      : 'hover:scale-102'
                  } ${index === 4 ? 'col-span-2 lg:col-span-1' : ''}`}
                >
                  <img
                    src={image}
                    alt={`Baby photoshoot example ${index + 1}`}
                    className="w-full h-48 md:h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              ))}
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-primary' 
                      : 'bg-muted hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}