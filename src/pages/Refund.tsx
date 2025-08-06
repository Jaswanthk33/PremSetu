import { ArrowLeft, Banknote, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Refund() {
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
                <Banknote className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Refund Policy</h1>
            </div>
            
            <p className="text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-lg font-semibold text-destructive mb-2">Important Notice</h2>
                <p className="text-foreground">
                  <strong>No refunds are available</strong> for Baby Photoshoot AI services. 
                  This policy exists because we provide low-resolution previews of all generated 
                  photos before payment is required.
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-semibold mb-4">Why No Refunds?</h2>
              <p className="text-muted-foreground mb-4">
                Our no-refund policy is fair and transparent because:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>You can preview all 20 generated photos before paying</li>
                <li>Low-resolution previews show exactly what you'll receive</li>
                <li>You can select your favorite photos from the previews</li>
                <li>Payment is only required after you're satisfied with the results</li>
                <li>The service is delivered immediately upon payment</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-semibold mb-4">Our Process</h2>
              <p className="text-muted-foreground mb-4">
                Here's how our transparent process works:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>You upload your baby's photo (completely free)</li>
                <li>Our AI generates 20 professional-style photos</li>
                <li>You receive low-resolution previews of all 20 photos</li>
                <li>You can review and select your favorites</li>
                <li>Only after you're happy with the previews, you pay ₹299</li>
                <li>High-resolution versions are delivered immediately</li>
              </ol>
            </div>

            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-semibold mb-4">Quality Assurance</h2>
              <p className="text-muted-foreground mb-4">
                We ensure quality through:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Advanced AI that preserves your baby's facial features</li>
                <li>Manual quality checks before preview delivery</li>
                <li>Clear preview images that accurately represent final results</li>
                <li>Professional-style photo generation with various themes</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-semibold mb-4">Technical Issues</h2>
              <p className="text-muted-foreground mb-4">
                In rare cases of technical problems:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>If our service fails to generate photos, no payment is required</li>
                <li>If payment is processed but delivery fails, we'll resolve the issue promptly</li>
                <li>Technical support is available through our contact page</li>
                <li>We'll work to resolve any genuine technical problems</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-semibold mb-4">Contact for Issues</h2>
              <p className="text-muted-foreground">
                If you experience technical problems or have concerns about our service, 
                please contact us through our <Link to="/contact" className="text-primary hover:underline">Contact page</Link>. 
                While refunds are not available, we're committed to ensuring you receive 
                the service you've paid for.
              </p>
            </div>

            <div className="bg-accent/20 rounded-xl p-6 border border-accent/40">
              <h2 className="text-xl font-semibold mb-4">Fair & Transparent</h2>
              <p className="text-muted-foreground">
                Our no-refund policy is designed to be fair. Since you can see exactly what 
                you're getting before paying, there are no surprises. This allows us to offer 
                our service at the affordable price of just ₹299 for 20 professional-quality photos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}