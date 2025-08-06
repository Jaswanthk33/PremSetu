import { Star, Sparkles, Camera, Zap, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import babyHero1 from "@/assets/baby-hero-1.png";
import babyHero2 from "@/assets/baby-hero-2.png";
import babyHero3 from "@/assets/baby-hero-3.png";
import babyHero4 from "@/assets/baby-hero-4.png";
import babyHero5 from "@/assets/baby-hero-5.png";

const demoTransformations = [
  {
    id: 1,
    style: "Classic Portrait",
    image: babyHero1,
    description: "Timeless studio-quality portraits with professional lighting"
  },
  {
    id: 2,
    style: "Dreamy Soft",
    image: babyHero2,
    description: "Ethereal, cloud-like backgrounds with gentle illumination"
  },
  {
    id: 3,
    style: "Vintage Charm",
    image: babyHero3,
    description: "Nostalgic sepia tones with artistic vintage textures"
  },
  {
    id: 4,
    style: "Modern Studio",
    image: babyHero4,
    description: "Contemporary clean aesthetics with perfect composition"
  },
  {
    id: 5,
    style: "Artistic Glow",
    image: babyHero5,
    description: "Magical luminous effects with creative artistic flair"
  }
];

const technicalFeatures = [
  {
    icon: Camera,
    title: "Advanced AI Recognition",
    description: "Our AI analyzes facial features, expressions, and proportions to create perfectly balanced portraits"
  },
  {
    icon: Sparkles,
    title: "20+ Artistic Styles",
    description: "From classic studio portraits to creative artistic interpretations, all professionally crafted"
  },
  {
    icon: Zap,
    title: "2-Hour Processing",
    description: "State-of-the-art processing delivers your photos in just 2 hours, not days"
  },
  {
    icon: Shield,
    title: "Preview-First Promise",
    description: "See exactly what you're buying with low-res previews before any payment"
  }
];

const launchStats = [
  { number: "20+", label: "AI Styles Available", icon: Sparkles },
  { number: "2 hours", label: "Average Processing", icon: Zap },
  { number: "HD Quality", label: "Download Resolution", icon: Star },
  { number: "33% OFF", label: "Launch Discount", icon: Heart }
];

export default function DemoGallerySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-soft-cream/50 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <Sparkles className="w-16 h-16 text-primary animate-float" />
      </div>
      <div className="absolute bottom-32 right-16 opacity-10">
        <Camera className="w-12 h-12 text-warm-coral animate-float" style={{animationDelay: '1s'}} />
      </div>
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <Badge className="bg-gradient-warm text-foreground border-warm-coral/30 px-6 py-2 text-sm font-medium" role="banner">
            <Sparkles className="w-4 h-4 mr-2" aria-hidden="true" />
            See What Our AI Can Create
          </Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient mb-6" id="demo-gallery">
            Sample Transformations
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the magic possible with just one photo. These examples showcase our AI's ability to create 
            stunning professional portraits in multiple artistic styles.
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Join our first 100 customers - 33% OFF launch pricing
            </span>
          </div>
        </div>

        {/* Launch Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {launchStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-card hover:shadow-lg transition-all duration-300">
                <IconComponent className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold font-display text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Demo Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {demoTransformations.map((demo, index) => (
            <div 
              key={demo.id} 
              className="group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-500 border border-primary/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={demo.image}
                  alt={`${demo.style} example transformation`}
                  className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-primary border-primary/20">
                    Sample
                  </Badge>
                </div>
                {/* Style indicator */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <div className="font-semibold text-foreground text-sm">
                      {demo.style}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-3">
                <h3 className="font-display font-semibold text-xl text-foreground">
                  {demo.style}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {demo.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-primary">
                  <Sparkles className="w-3 h-3" />
                  <span>AI-Generated Sample</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Features */}
        <div className="bg-gradient-soft rounded-3xl p-8 md:p-12 border border-primary/10 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Behind the Magic
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our advanced AI technology ensures every photo captures your baby's unique beauty
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground text-lg">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pre-Launch CTA */}
        <div className="text-center space-y-8">
          <div className="bg-gradient-premium rounded-3xl p-8 md:p-12 border border-primary/20 shadow-2xl">
            <div className="max-w-3xl mx-auto space-y-6">
              <Badge className="bg-white/90 text-primary border-primary/30 px-4 py-2 text-sm font-medium">
                <Heart className="w-4 h-4 mr-2" />
                Limited Time Launch Offer
              </Badge>
              
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Be Among Our First Parents
              </h3>
              
              <p className="text-xl text-white/90 mb-6">
                Join the first 100 families to experience AI baby photography. 
                Special launch pricing ends soon!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/upload">
                  <Button 
                    size="xl" 
                    className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-4 text-lg shadow-lg"
                  >
                    <Camera className="w-5 h-5 mr-2" />
                    Start Your Photoshoot - ₹199
                  </Button>
                </Link>
                
                <div className="text-white/80 text-sm">
                  <span className="font-semibold">33% OFF</span> • Normal price ₹299 • Limited time
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-6 text-sm text-white/70 pt-4">
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>Preview First</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="w-4 h-4" />
                  <span>2-Hour Delivery</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  <span>HD Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Honest disclaimer */}
        <div className="mt-12 text-center">
          <div className="bg-muted/50 rounded-xl p-6 max-w-2xl mx-auto border border-muted">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold">Transparency Note:</span> We're a new service launching to our first customers. 
              These sample images demonstrate our AI's capabilities. Your results will be uniquely created for your baby's photo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}