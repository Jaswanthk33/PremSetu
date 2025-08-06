import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Privacy Policy</h1>
            </div>
            
            <p className="text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                When you use Baby Photoshoot AI, we collect:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Baby photos you upload for AI processing</li>
                <li>Payment information (processed securely through our payment partners)</li>
                <li>Email address for service delivery</li>
                <li>Device and usage information for service improvement</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                Your information is used exclusively for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Processing your baby photos using AI technology</li>
                <li>Delivering your generated photos via email</li>
                <li>Processing payments for our services</li>
                <li>Providing customer support</li>
                <li>Improving our AI models and service quality</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-semibold mb-4">Data Security & Privacy</h2>
              <p className="text-muted-foreground mb-4">
                We take your baby's privacy seriously:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>All photos are encrypted during transmission and storage</li>
                <li>Photos are automatically deleted from our servers after 30 days</li>
                <li>We never share, sell, or use your photos for marketing</li>
                <li>Our AI processing is done securely on protected servers</li>
                <li>Staff access to photos is strictly limited and monitored</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Request deletion of your photos before the 30-day automatic deletion</li>
                <li>Access information about how your data is processed</li>
                <li>Withdraw consent for data processing (service will be discontinued)</li>
                <li>Request correction of any personal information we hold</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy or how we handle your data, 
                please contact us through our <Link to="/contact" className="text-primary hover:underline">Contact page</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}