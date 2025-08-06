import { Upload, Eye, Heart, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload your baby's photo",
    description: "Simply upload one clear photo of your beautiful baby"
  },
  {
    icon: Eye,
    title: "Get 20 low-res samples",
    description: "Our AI creates 20 different photoshoot styles for preview"
  },
  {
    icon: Heart,
    title: "Select your favorites",
    description: "Choose the photos that capture your heart the most"
  },
  {
    icon: Download,
    title: "Pay ₹299 and receive HD images",
    description: "Get instant access to high-resolution versions of your selected photos"
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your baby's photo into professional memories in just 4 simple steps
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step number */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-button rounded-full flex items-center justify-center mx-auto shadow-button group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>

                {/* Connector line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/20 -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <div className="bg-card rounded-xl p-6 shadow-card border border-accent/20 max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Fast & Secure:</span> Your photos are processed with care and delivered within hours. We never share your images with anyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}