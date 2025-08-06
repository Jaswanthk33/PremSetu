import { Shield, Lock, Eye, Trash2 } from "lucide-react";

const trustFeatures = [
  {
    icon: Shield,
    title: "Secure Processing",
    description: "Your photos are processed on secure, encrypted servers"
  },
  {
    icon: Lock,
    title: "Never Shared",
    description: "We never share, sell, or use your baby's photos for any other purpose"
  },
  {
    icon: Eye,
    title: "Private Access",
    description: "Only you have access to view and download your generated images"
  },
  {
    icon: Trash2,
    title: "Auto-Deleted",
    description: "All photos are automatically deleted from our servers after delivery"
  }
];

export default function PrivacyTrustSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-soft">
              <Shield className="w-8 h-8 text-accent-foreground" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Baby's Privacy is Our Priority
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand how precious your baby's photos are. That's why we've built the most secure and private AI photo processing service possible.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {trustFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-card border border-accent/20 hover:shadow-soft transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust statement */}
          <div className="bg-accent/10 rounded-2xl p-8 border border-accent/30 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Our Promise to You
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We're parents too, and we know how important it is to keep your baby's photos safe. 
              Our AI processing happens entirely on secure servers, your photos are never stored permanently, 
              and we follow strict data protection protocols. Your trust is everything to us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}