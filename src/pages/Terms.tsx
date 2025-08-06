import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Terms() {
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
                <FileText className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Terms & Conditions</h1>
            </div>
            
            <p className="text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-semibold mb-4">Service Description</h2>
              <p className="text-muted-foreground">
                Baby Photoshoot AI provides artificial intelligence-powered photo generation services. 
                By uploading one photo of your baby, you receive 20 AI-generated professional-style photos 
                for ₹299. The service includes preview of low-resolution samples before payment.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-semibold mb-4">User Responsibilities</h2>
              <p className="text-muted-foreground mb-4">
                By using our service, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Upload only photos you own or have permission to use</li>
                <li>Ensure uploaded photos are of babies/children under 5 years old</li>
                <li>Provide clear, high-quality photos for best results</li>
                <li>Use generated photos for personal, non-commercial purposes only</li>
                <li>Not attempt to reverse-engineer our AI technology</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-semibold mb-4">Service Limitations</h2>
              <p className="text-muted-foreground mb-4">
                Please note:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>AI-generated results may vary based on input photo quality</li>
                <li>Processing time is typically 2-6 hours but may take up to 24 hours</li>
                <li>We cannot guarantee specific poses or themes in generated photos</li>
                <li>Service availability may be temporarily limited during high demand</li>
                <li>Generated photos are for personal use only</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-semibold mb-4">Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                Our payment structure:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Payment of ₹299 (including GST) is required only after preview</li>
                <li>You can select your favorite photos from low-resolution previews</li>
                <li>Payment must be completed within 48 hours of preview delivery</li>
                <li>All prices are in Indian Rupees (INR)</li>
                <li>Payment processing is handled by secure third-party providers</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-semibold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground">
                You retain ownership of your original photos. Generated photos are provided for your 
                personal use. Our AI technology, algorithms, and service design are proprietary and 
                protected by intellectual property laws.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Baby Photoshoot AI provides the service "as is" and cannot guarantee specific results. 
                Our liability is limited to the amount paid for the service (₹299). We are not liable 
                for any indirect, incidental, or consequential damages.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                Questions about these terms? Contact us through our{" "}
                <Link to="/contact" className="text-primary hover:underline">Contact page</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}