import { ArrowLeft, Banknote, AlertCircle, CheckCircle2, Clock } from "lucide-react";
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
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">Refund & Cancellation Policy</h1>
            </div>
            
            <p className="text-muted-foreground">
              Effective Date: January 6, 2025 | Last Updated: January 6, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            
            {/* Introduction */}
            <div className="bg-gradient-warm rounded-xl p-6 border border-primary/20">
              <h2 className="text-xl font-display font-semibold mb-4 text-foreground">Our Refund Philosophy</h2>
              <p className="text-muted-foreground mb-4">
                Premsetu operates on a "Preview First, Pay Later" model designed to eliminate the need for refunds. 
                This policy complies with the Consumer Protection Act 2019, India, while ensuring fairness and transparency 
                for all customers. Our approach prioritizes customer satisfaction through informed purchasing decisions.
              </p>
              <p className="text-muted-foreground">
                This policy details our refund, cancellation, and resolution procedures, ensuring you understand your rights 
                and our commitments under Indian consumer protection laws.
              </p>
            </div>

            {/* Service Model Explanation */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Our "Preview First, Pay Later" Model</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">How It Works:</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Upload (Free):</strong> Upload your baby's photo at no cost</li>
                <li><strong>AI Processing (Free):</strong> Our AI generates 20 unique styled portraits</li>
                <li><strong>Preview Delivery (Free):</strong> Receive low-resolution previews of all 20 photos via email</li>
                <li><strong>Review & Select:</strong> Take your time to evaluate all photos and select your favorites</li>
                <li><strong>Payment Decision:</strong> Pay only if satisfied with the preview results</li>
                <li><strong>HD Download:</strong> Instant access to high-resolution versions of selected photos</li>
              </ol>

              <div className="bg-sage-green/20 rounded-lg p-4 border border-sage-green/30 mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-sage-green" />
                  <span className="font-semibold text-sage-green">Customer Protection Built-In</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  This model ensures you see exactly what you're purchasing before any payment, 
                  eliminating the primary reasons customers typically request refunds.
                </p>
              </div>
            </div>

            {/* Refund Policy */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Refund Policy</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">Standard Refund Policy:</h3>
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20 mb-4">
                <p className="text-muted-foreground mb-2">
                  <strong>General Rule:</strong> Due to our preview-first model, refunds are generally not provided once payment is made, 
                  as customers have already seen and approved their photos before purchasing.
                </p>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Refund Exceptions - When We DO Provide Refunds:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Technical Failures:</strong> If we fail to deliver high-resolution photos after payment</li>
                <li><strong>Significant Quality Difference:</strong> If HD photos materially differ from previews due to our error</li>
                <li><strong>Payment Processing Errors:</strong> Duplicate charges or incorrect amounts processed</li>
                <li><strong>Service Non-Delivery:</strong> If our service fails to generate any usable photos</li>
                <li><strong>Data Security Breach:</strong> If your photos are compromised due to our security failure</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Non-Refundable Situations:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Change of mind after viewing previews and completing payment</li>
                <li>Dissatisfaction with AI-generated artistic interpretations (previews show this)</li>
                <li>Preference for different styles not selected during preview phase</li>
                <li>Issues with original photo quality that affect AI results (visible in previews)</li>
                <li>Requests made more than 30 days after service completion</li>
              </ul>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Cancellation Policy</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">Before Payment:</h3>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-700">Free Cancellation</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-green-700 text-sm">
                  <li>Cancel at any time before payment with no charges</li>
                  <li>Simply don't proceed with payment after receiving previews</li>
                  <li>Your photos will be automatically deleted after 7 days</li>
                  <li>No fees, no questions asked</li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-foreground">After Payment:</h3>
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <span className="font-semibold text-orange-700">Limited Cancellation Window</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-orange-700 text-sm">
                  <li>Cancellation requests must be made within 24 hours of payment</li>
                  <li>Full refund available if high-resolution photos haven't been accessed</li>
                  <li>Partial refund may apply if some photos have been downloaded</li>
                  <li>Contact us immediately through our Contact page</li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Processing Cancellations:</h3>
              <p className="text-muted-foreground">
                Cancellation requests are processed within 24-48 hours. Approved refunds are processed within 5-7 business days 
                to your original payment method. Bank processing may add 2-3 additional days for credit cards and 1-2 days for UPI/digital wallets.
              </p>
            </div>

            {/* Quality Assurance */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Quality Assurance & Customer Protection</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">Our Quality Commitments:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Preview Accuracy:</strong> High-resolution photos will match preview quality and content</li>
                <li><strong>Processing Standards:</strong> All photos undergo AI quality checks before preview delivery</li>
                <li><strong>Technical Standards:</strong> HD photos delivered in 300 DPI resolution suitable for printing</li>
                <li><strong>Feature Preservation:</strong> AI maintains your baby's facial features and expressions</li>
                <li><strong>Delivery Guarantee:</strong> Photos delivered within 24 hours of payment</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-foreground">If Quality Issues Arise:</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
                <li>Contact us immediately through our Contact page with specific details</li>
                <li>Provide screenshots comparing previews to high-resolution versions</li>
                <li>We'll investigate within 24 hours of your complaint</li>
                <li>If our error is confirmed, full refund or re-processing offered</li>
                <li>Resolution typically provided within 3-5 business days</li>
              </ol>

              <p className="text-muted-foreground">
                <strong>Important:</strong> Quality concerns must be raised within 7 days of photo delivery for investigation.
              </p>
            </div>

            {/* Technical Issues & Service Failures */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Technical Issues & Service Failures</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">Service Failure Scenarios:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Processing Failures:</strong> If AI cannot generate photos from uploaded image</li>
                <li><strong>Delivery Failures:</strong> If emails with previews or downloads fail to deliver</li>
                <li><strong>Download Issues:</strong> If high-resolution files are corrupted or inaccessible</li>
                <li><strong>Payment Processing Errors:</strong> Double charges, incorrect amounts, or failed transactions</li>
                <li><strong>System Outages:</strong> Extended service unavailability affecting your order</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Our Response to Technical Issues:</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Immediate Investigation:</strong> Technical issues investigated within 2 hours of report</li>
                <li><strong>Service Recovery:</strong> Priority re-processing or alternative delivery methods</li>
                <li><strong>Compensation:</strong> Full refund if service cannot be recovered within 48 hours</li>
                <li><strong>Communication:</strong> Regular updates provided throughout resolution process</li>
                <li><strong>Prevention:</strong> Root cause analysis to prevent similar future issues</li>
              </ol>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <p className="text-blue-700 text-sm">
                  <strong>Service Level Agreement:</strong> We commit to 99.9% uptime and will provide service credits 
                  or refunds for extended outages that prevent service delivery.
                </p>
              </div>
            </div>

            {/* Consumer Rights Under Indian Law */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Your Rights Under Indian Consumer Protection Law</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">Consumer Protection Act 2019 Rights:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Right to Information:</strong> Complete details about our service, pricing, and policies</li>
                <li><strong>Right to Choice:</strong> Freedom to choose which photos to purchase after preview</li>
                <li><strong>Right to Quality:</strong> Service delivery as described and promised</li>
                <li><strong>Right to Redressal:</strong> Fair resolution of complaints and disputes</li>
                <li><strong>Right to Consumer Education:</strong> Clear information about our processes and policies</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Dispute Resolution Options:</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Direct Resolution:</strong> Contact us first - most issues resolved within 48 hours</li>
                <li><strong>Consumer Helpline:</strong> National Consumer Helpline (1800-11-4000)</li>
                <li><strong>District Consumer Forum:</strong> For disputes up to ₹20 lakhs</li>
                <li><strong>State Consumer Commission:</strong> For disputes between ₹20 lakhs to ₹1 crore</li>
                <li><strong>National Consumer Commission:</strong> For disputes above ₹1 crore</li>
              </ol>

              <p className="text-muted-foreground">
                <strong>Our Commitment:</strong> We respect all consumer rights under Indian law and will cooperate fully 
                with any consumer protection proceedings.
              </p>
            </div>

            {/* Refund Process & Timelines */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Refund Process & Timelines</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">How to Request a Refund:</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Contact Us:</strong> Use our Contact page or email with "Refund Request" in subject</li>
                <li><strong>Provide Details:</strong> Include order reference, payment details, and reason for refund</li>
                <li><strong>Supporting Evidence:</strong> Screenshots, error messages, or other relevant documentation</li>
                <li><strong>Response:</strong> We'll acknowledge your request within 24 hours</li>
                <li><strong>Investigation:</strong> Refund requests investigated within 3-5 business days</li>
                <li><strong>Decision:</strong> Written decision provided with explanation</li>
              </ol>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Refund Processing Timeline:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-2">Approved Refunds:</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Decision within 5 business days</li>
                    <li>• Processing within 7 business days</li>
                    <li>• Bank credit: 5-10 business days</li>
                    <li>• UPI/Wallets: 1-3 business days</li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-700 mb-2">Disputed Refunds:</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• Extended investigation: 10-15 days</li>
                    <li>• Additional documentation may be requested</li>
                    <li>• Escalation to management if needed</li>
                    <li>• Final decision provided in writing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Special Circumstances */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Special Circumstances</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">Compassionate Refunds:</h3>
              <p className="text-muted-foreground mb-4">
                In exceptional circumstances involving medical emergencies, family tragedies, or other compassionate grounds, 
                we may consider refunds on a case-by-case basis, even when our standard policy wouldn't typically apply.
              </p>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Fraudulent Transactions:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Report unauthorized charges immediately</li>
                <li>We'll investigate and reverse fraudulent transactions</li>
                <li>Cooperation with bank fraud investigations</li>
                <li>Account security measures implemented</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Service Discontinuation:</h3>
              <p className="text-muted-foreground">
                If we discontinue our service, customers with pending orders will receive full refunds or completed service delivery. 
                Advance notice will be provided wherever possible.
              </p>
            </div>

            {/* Contact Information for Refunds */}
            <div className="bg-gradient-premium rounded-xl p-6 border border-primary/20">
              <h2 className="text-xl font-display font-semibold mb-4 text-white">Contact Us for Refund Requests</h2>
              
              <p className="text-white/90 mb-4">
                For all refund and cancellation requests, please contact us through the following channels:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-white/90 mb-4">
                <li><strong>Primary Contact:</strong> Use our <Link to="/contact" className="text-white underline hover:text-white/80">Contact page</Link></li>
                <li><strong>Email Subject:</strong> Include "Refund Request" or "Cancellation Request"</li>
                <li><strong>Required Information:</strong> Order reference, payment details, reason for refund</li>
                <li><strong>Response Time:</strong> Initial response within 24 hours</li>
                <li><strong>Resolution Time:</strong> Most issues resolved within 5-7 business days</li>
              </ul>

              <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                <p className="text-white/90 text-sm">
                  <strong>Remember:</strong> Our preview-first model is designed to prevent the need for refunds by ensuring 
                  you're completely satisfied before any payment. We encourage customers to carefully review all preview 
                  images before making a purchase decision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}