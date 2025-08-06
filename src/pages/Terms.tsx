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
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">Terms & Conditions</h1>
            </div>
            
            <p className="text-muted-foreground">
              Effective Date: January 6, 2025 | Last Updated: January 6, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            
            {/* Introduction */}
            <div className="bg-gradient-warm rounded-xl p-6 border border-primary/20">
              <h2 className="text-xl font-display font-semibold mb-4 text-foreground">Agreement to Terms</h2>
              <p className="text-muted-foreground mb-4">
                These Terms and Conditions ("Terms") govern your use of the Premsetu service operated by us. 
                By accessing and using our AI-powered baby photography service, you accept and agree to be bound by these Terms. 
                If you disagree with any part of these terms, please do not use our service.
              </p>
              <p className="text-muted-foreground">
                These Terms comply with the Consumer Protection Act 2019, India's Digital Personal Data Protection Act (DPDPA) 2023, 
                and applicable Indian laws. We may update these Terms from time to time, and your continued use constitutes acceptance of any changes.
              </p>
            </div>

            {/* Service Description */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Service Description</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">What We Provide:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>AI Photo Generation:</strong> Transform one baby photo into up to 20 professionally-styled AI-generated portraits</li>
                <li><strong>Multiple Artistic Styles:</strong> Various themes including classic portrait, dreamy soft, vintage charm, modern studio, and artistic glow</li>
                <li><strong>Preview-First Service:</strong> View low-resolution previews of all generated photos before payment</li>
                <li><strong>High-Resolution Downloads:</strong> Full-quality downloads of selected photos upon payment</li>
                <li><strong>Fast Processing:</strong> Typical delivery within 2 hours, maximum 24 hours during peak periods</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Service Pricing:</h3>
              <p className="text-muted-foreground">
                <strong>Launch Special:</strong> ₹199 (inclusive of all taxes) - normally ₹299<br/>
                <strong>Payment Model:</strong> "Preview First, Pay Later" - see all photos before deciding to purchase<br/>
                <strong>What's Included:</strong> Up to 20 high-resolution AI-generated photos, instant email delivery, 30-day download access
              </p>
            </div>

            {/* User Eligibility and Responsibilities */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">User Eligibility and Responsibilities</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">Eligibility:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>You must be at least 18 years old to use our service</li>
                <li>You must be the parent or legal guardian of the baby in uploaded photos</li>
                <li>You must have legal rights to the uploaded photographs</li>
                <li>You must provide accurate contact information for service delivery</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-foreground">User Responsibilities:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Photo Ownership:</strong> Upload only photos you own or have explicit permission to use</li>
                <li><strong>Subject Age:</strong> Photos must be of babies/children under 5 years old for optimal AI processing</li>
                <li><strong>Photo Quality:</strong> Provide clear, well-lit photos with the baby's face clearly visible for best results</li>
                <li><strong>Appropriate Content:</strong> Photos must be appropriate, non-offensive, and suitable for family-friendly processing</li>
                <li><strong>Personal Use:</strong> Generated photos are for personal, non-commercial use only</li>
                <li><strong>Account Security:</strong> Maintain the confidentiality of your account information and payment details</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Prohibited Uses:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Commercial use or resale of generated photos without express written permission</li>
                <li>Reverse engineering, copying, or attempting to replicate our AI technology</li>
                <li>Uploading inappropriate, offensive, or copyrighted content</li>
                <li>Using the service for any illegal or unauthorized purpose</li>
                <li>Attempting to overwhelm our systems or disrupt service availability</li>
              </ul>
            </div>

            {/* Service Process and Limitations */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Service Process and Limitations</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">How Our Service Works:</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Upload:</strong> You upload one clear photo of your baby through our secure platform</li>
                <li><strong>AI Processing:</strong> Our AI analyzes facial features and generates 20 unique styled portraits</li>
                <li><strong>Preview Delivery:</strong> You receive low-resolution previews via email within 2-24 hours</li>
                <li><strong>Selection:</strong> Choose which photos you want to purchase in high-resolution</li>
                <li><strong>Payment:</strong> Complete payment for selected photos</li>
                <li><strong>Download:</strong> Receive instant download links for full-resolution images</li>
              </ol>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Service Limitations:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>AI Variability:</strong> Results depend on input photo quality; we cannot guarantee specific outcomes</li>
                <li><strong>Processing Time:</strong> Typical delivery is 2 hours, but may extend to 24 hours during peak demand</li>
                <li><strong>Technical Requirements:</strong> Service requires stable internet connection and compatible device</li>
                <li><strong>Age Limitations:</strong> AI is optimized for babies and young children; results may vary for older subjects</li>
                <li><strong>Availability:</strong> Service may be temporarily unavailable for maintenance or technical reasons</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Quality Expectations:</h3>
              <p className="text-muted-foreground">
                While we strive for high-quality results, AI-generated photos are artistic interpretations and may not perfectly 
                replicate photographic reality. Variations in lighting, pose, and styling are inherent to the AI generation process 
                and add to the artistic value of the output.
              </p>
            </div>

            {/* Payment Terms and Conditions */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Payment Terms and Conditions</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">Pricing Structure:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Launch Price:</strong> ₹199 (including all applicable taxes)</li>
                <li><strong>Regular Price:</strong> ₹299 (subject to change with 30-day notice)</li>
                <li><strong>Currency:</strong> All prices in Indian Rupees (INR)</li>
                <li><strong>Tax Inclusion:</strong> All prices include GST and other applicable taxes</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Payment Process:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Preview First:</strong> No payment required until you've seen preview images</li>
                <li><strong>Selection:</strong> Choose any number of photos from the 20 generated options</li>
                <li><strong>Secure Processing:</strong> Payments processed through Razorpay with bank-level security</li>
                <li><strong>Payment Methods:</strong> Credit/debit cards, UPI, net banking, and digital wallets accepted</li>
                <li><strong>Payment Deadline:</strong> Complete payment within 7 days of preview delivery</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Billing and Receipts:</h3>
              <p className="text-muted-foreground mb-4">
                You will receive an electronic receipt upon successful payment. All transactions are recorded and 
                available for your reference. For GST invoices or billing inquiries, contact us through our Contact page.
              </p>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Failed Payments:</h3>
              <p className="text-muted-foreground">
                If payment fails, you'll receive notification with options to retry. High-resolution downloads will be 
                available only after successful payment completion. Preview images remain accessible during the payment period.
              </p>
            </div>

            {/* Intellectual Property Rights */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Intellectual Property Rights</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">Your Rights:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Original Photos:</strong> You retain full ownership and rights to your uploaded baby photos</li>
                <li><strong>Generated Photos:</strong> You receive personal use license for AI-generated photos you purchase</li>
                <li><strong>Personal Use:</strong> Print, share, and display purchased photos for personal, non-commercial purposes</li>
                <li><strong>Social Media:</strong> Share on personal social media accounts with attribution appreciated</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Our Rights:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>AI Technology:</strong> Our algorithms, software, and AI models are proprietary and protected</li>
                <li><strong>Service Marks:</strong> "Premsetu" and related branding are our intellectual property</li>
                <li><strong>Process Improvements:</strong> We may use anonymized data to improve our AI models</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Restrictions:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>No commercial use or resale of generated photos without written permission</li>
                <li>No reverse engineering or replication of our AI technology</li>
                <li>No removal of metadata or attribution from downloaded files</li>
                <li>No unauthorized distribution or mass sharing of generated content</li>
              </ul>
            </div>

            {/* Privacy and Data Protection */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Privacy and Data Protection</h2>
              
              <p className="text-muted-foreground mb-4">
                Your privacy is important to us. Our data collection, processing, and protection practices are detailed in our 
                <Link to="/privacy" className="text-primary hover:underline"> Privacy Policy</Link>, which forms part of these Terms.
              </p>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Key Privacy Points:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Data Security:</strong> All photos encrypted during transmission and storage</li>
                <li><strong>Automatic Deletion:</strong> Original photos deleted after 7 days, generated photos after 30 days</li>
                <li><strong>No Marketing Use:</strong> Your baby's photos are never used for our marketing or advertising</li>
                <li><strong>Limited Access:</strong> Only authorized personnel can access your photos for processing</li>
                <li><strong>Compliance:</strong> Full compliance with GDPR and India's DPDPA 2023</li>
              </ul>

              <p className="text-muted-foreground">
                By using our service, you consent to data processing as described in our Privacy Policy. 
                You can withdraw consent at any time, subject to our data retention requirements.
              </p>
            </div>

            {/* Service Availability and Technical Requirements */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Service Availability and Technical Requirements</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">Service Availability:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Operating Hours:</strong> Service available 24/7, with processing during business hours</li>
                <li><strong>Maintenance:</strong> Scheduled maintenance will be announced in advance when possible</li>
                <li><strong>Peak Demand:</strong> Processing times may increase during high-demand periods</li>
                <li><strong>Force Majeure:</strong> Service may be affected by circumstances beyond our control</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Technical Requirements:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Internet Connection:</strong> Stable broadband connection recommended for upload/download</li>
                <li><strong>File Formats:</strong> JPEG, PNG, HEIC accepted (10MB maximum file size)</li>
                <li><strong>Browser Support:</strong> Modern browsers (Chrome, Firefox, Safari, Edge) with JavaScript enabled</li>
                <li><strong>Email Access:</strong> Valid email address required for preview and download delivery</li>
              </ul>

              <p className="text-muted-foreground">
                <strong>Technical Support:</strong> We provide reasonable technical support for service-related issues. 
                We cannot provide support for general computer or internet connectivity problems.
              </p>
            </div>

            {/* Disclaimer and Limitation of Liability */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Disclaimer and Limitation of Liability</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">Service Disclaimer:</h3>
              <p className="text-muted-foreground mb-4">
                Our AI photography service is provided "as is" and "as available" without warranties of any kind, 
                either express or implied. While we strive for high-quality results, AI-generated content is inherently 
                variable and artistic in nature. We do not guarantee specific outcomes, poses, or themes in generated photos.
              </p>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Limitation of Liability:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Maximum Liability:</strong> Our liability is limited to the amount paid for the specific service (₹199-299)</li>
                <li><strong>Consequential Damages:</strong> We are not liable for indirect, incidental, special, or consequential damages</li>
                <li><strong>Data Loss:</strong> We are not liable for any loss of data, though we maintain robust backup systems</li>
                <li><strong>Service Interruptions:</strong> We are not liable for temporary service unavailability or delays</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Consumer Protection Compliance:</h3>
              <p className="text-muted-foreground mb-4">
                These limitations are subject to the Consumer Protection Act 2019, India. Your statutory consumer rights 
                remain unaffected where they cannot be lawfully excluded or limited.
              </p>

              <p className="text-muted-foreground">
                <strong>Force Majeure:</strong> We are not liable for delays or failures caused by circumstances beyond our 
                reasonable control, including but not limited to natural disasters, cyber attacks, or government regulations.
              </p>
            </div>

            {/* Termination and Account Suspension */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Termination and Account Suspension</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">Termination by You:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>You may stop using our service at any time</li>
                <li>Request data deletion through our Contact page</li>
                <li>Outstanding payments remain due even after service discontinuation</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Termination by Us:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Terms Violation:</strong> Immediate termination for breach of these Terms</li>
                <li><strong>Inappropriate Content:</strong> Suspension for uploading prohibited or offensive content</li>
                <li><strong>Payment Issues:</strong> Service suspension for failed or disputed payments</li>
                <li><strong>Technical Abuse:</strong> Termination for attempts to exploit or damage our systems</li>
              </ul>

              <p className="text-muted-foreground">
                <strong>Effect of Termination:</strong> Upon termination, your access to our service ceases immediately. 
                Previously purchased photos remain available for download during their retention period. 
                Our Privacy Policy governs data handling post-termination.
              </p>
            </div>

            {/* Dispute Resolution and Governing Law */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Dispute Resolution and Governing Law</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">Governing Law:</h3>
              <p className="text-muted-foreground mb-4">
                These Terms are governed by and construed in accordance with the laws of India. 
                Any disputes arising from these Terms or our service shall be subject to the exclusive 
                jurisdiction of the courts in [Your City], India.
              </p>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Dispute Resolution Process:</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Direct Resolution:</strong> Contact us first through our Contact page for issue resolution</li>
                <li><strong>Consumer Forums:</strong> Approach consumer protection forums as per Consumer Protection Act 2019</li>
                <li><strong>Mediation:</strong> Attempt mediation before pursuing formal legal proceedings</li>
                <li><strong>Legal Action:</strong> Court proceedings as a last resort in appropriate jurisdiction</li>
              </ol>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Consumer Protection Rights:</h3>
              <p className="text-muted-foreground">
                Your rights under the Consumer Protection Act 2019 remain fully preserved. These Terms do not 
                limit any statutory consumer protections available under Indian law.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Changes to Terms</h2>
              
              <p className="text-muted-foreground mb-4">
                We may update these Terms from time to time to reflect changes in our service, legal requirements, 
                or business practices. When we make significant changes, we will:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Update the "Last Updated" date at the top of these Terms</li>
                <li>Notify active users via email about material changes</li>
                <li>Provide 30 days' notice for changes that materially affect your rights</li>
                <li>Post prominent notices on our website about significant updates</li>
              </ul>

              <p className="text-muted-foreground">
                <strong>Continued Use:</strong> Your continued use of our service after changes become effective 
                constitutes acceptance of the updated Terms. If you disagree with changes, discontinue service use.
              </p>
            </div>

            {/* Miscellaneous Provisions */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Miscellaneous Provisions</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">Severability:</h3>
              <p className="text-muted-foreground mb-4">
                If any provision of these Terms is deemed invalid or unenforceable, the remaining provisions 
                shall continue in full force and effect.
              </p>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Entire Agreement:</h3>
              <p className="text-muted-foreground mb-4">
                These Terms, together with our Privacy Policy and Refund Policy, constitute the entire agreement 
                between you and Premsetu regarding our service.
              </p>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Assignment:</h3>
              <p className="text-muted-foreground mb-4">
                We may assign or transfer these Terms without restriction. You may not assign your rights or 
                obligations under these Terms without our prior written consent.
              </p>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Waiver:</h3>
              <p className="text-muted-foreground">
                Our failure to enforce any right or provision of these Terms does not constitute a waiver of such right or provision.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-premium rounded-xl p-6 border border-primary/20">
              <h2 className="text-xl font-display font-semibold mb-4 text-white">Contact Us</h2>
              
              <p className="text-white/90 mb-4">
                If you have any questions, concerns, or disputes regarding these Terms and Conditions, please contact us:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-white/90 mb-4">
                <li><strong>General Inquiries:</strong> Use our <Link to="/contact" className="text-white underline hover:text-white/80">Contact page</Link></li>
                <li><strong>Terms Questions:</strong> Specify "Terms & Conditions" in your message subject</li>
                <li><strong>Legal Notices:</strong> Send to the address provided on our Contact page</li>
                <li><strong>Consumer Complaints:</strong> Follow the dispute resolution process outlined above</li>
              </ul>

              <p className="text-white/90">
                <strong>Response Time:</strong> We aim to respond to all Terms-related inquiries within 48 hours 
                and resolve issues within 7 business days wherever possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}