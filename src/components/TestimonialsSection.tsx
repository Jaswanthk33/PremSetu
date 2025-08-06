import { Star, Heart, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Absolutely magical! The AI created stunning photos of my 6-month-old. Worth every rupee and so much easier than a traditional photoshoot.",
    avatar: "PS",
    highlight: "Worth every rupee"
  },
  {
    id: 2,
    name: "Rahul Patel",
    location: "Delhi",
    rating: 5,
    text: "As new parents, we were worried about taking our newborn to a studio. This was perfect - beautiful results from home!",
    avatar: "RP",
    highlight: "Perfect for newborns"
  },
  {
    id: 3,
    name: "Sneha Reddy",
    location: "Bangalore",
    rating: 5,
    text: "Got 20 amazing photos in just 2 hours! The preview-first model made me confident. My baby looks like a little angel in every shot.",
    avatar: "SR",
    highlight: "20 amazing photos in 2 hours"
  },
  {
    id: 4,
    name: "Arjun Mehta",
    location: "Pune",
    rating: 5,
    text: "Traditional photoshoots cost ₹8000+. This gave us professional quality at ₹299. The AI understood my baby's features perfectly.",
    avatar: "AM",
    highlight: "Professional quality at ₹299"
  }
];

const stats = [
  { number: "2,500+", label: "Happy Parents", icon: Heart },
  { number: "15,000+", label: "Photos Created", icon: Star },
  { number: "4.9/5", label: "Average Rating", icon: Star },
  { number: "2 hours", label: "Average Delivery", icon: Star }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4">
        {/* Stats Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loved by Parents Across India
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of families creating magical memories with AI
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center p-4 bg-card/50 rounded-xl border border-accent/20">
                  <IconComponent className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-card rounded-2xl p-6 shadow-card border border-accent/20 hover:shadow-lg transition-shadow duration-300 relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Highlight */}
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                {testimonial.highlight}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="bg-card/80 rounded-xl p-6 max-w-4xl mx-auto border border-accent/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Star className="w-5 h-5 text-primary" />
                <span className="text-sm">4.9/5 rating on Google</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-sm">99% parent satisfaction</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Quote className="w-5 h-5 text-primary" />
                <span className="text-sm">"Recommended by pediatricians"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}