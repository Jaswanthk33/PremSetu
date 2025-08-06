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
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">Privacy Policy</h1>
            </div>
            
            <p className="text-muted-foreground">
              Effective Date: January 6, 2025 | Last Updated: January 6, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            
            {/* Introduction */}
            <div className="bg-gradient-warm rounded-xl p-6 border border-primary/20">
              <h2 className="text-xl font-display font-semibold mb-4 text-foreground">Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Premsetu ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                This Privacy Policy explains how we collect, use, process, and protect your information when you use our 
                AI-powered baby photography service. This policy complies with India's Digital Personal Data Protection Act (DPDPA) 2023 
                and the EU General Data Protection Regulation (GDPR) where applicable.
              </p>
              <p className="text-muted-foreground">
                By using our service, you consent to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* Data Controller Information */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Data Controller Information</h2>
              <p className="text-muted-foreground mb-4">
                <strong>Service Provider:</strong> Premsetu<br/>
                <strong>Contact:</strong> Available through our Contact page<br/>
                <strong>Jurisdiction:</strong> India<br/>
                <strong>Data Protection Officer:</strong> Available upon request
              </p>
            </div>

            {/* Information We Collect */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Information We Collect</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">Personal Data You Provide:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Baby Photographs:</strong> Digital images you upload for AI processing</li>
                <li><strong>Contact Information:</strong> Email address for service delivery and communication</li>
                <li><strong>Payment Information:</strong> Billing details processed securely through our payment partners (Razorpay)</li>
                <li><strong>Communication Data:</strong> Messages, feedback, and support requests you send to us</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Technical Data We Automatically Collect:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent, clicks, and interaction patterns</li>
                <li><strong>Technical Logs:</strong> Error reports, performance metrics, and security logs</li>
                <li><strong>Cookies:</strong> Session cookies for service functionality (see Cookie Policy below)</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Special Category Data:</h3>
              <p className="text-muted-foreground">
                Baby photographs may contain biometric data. We process this data solely for AI photo generation and 
                with your explicit consent under Article 9 of GDPR and relevant provisions of DPDPA 2023.
              </p>
            </div>

            {/* Legal Basis for Processing */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Legal Basis for Processing</h2>
              <p className="text-muted-foreground mb-4">
                We process your personal data based on the following legal grounds:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Consent (GDPR Art. 6(1)(a), DPDPA S. 7):</strong> For processing baby photos and biometric data</li>
                <li><strong>Contract Performance (GDPR Art. 6(1)(b)):</strong> To provide AI photography services you've purchased</li>
                <li><strong>Legitimate Interest (GDPR Art. 6(1)(f)):</strong> For service improvement, security, and fraud prevention</li>
                <li><strong>Legal Obligation (GDPR Art. 6(1)(c)):</strong> For compliance with tax and consumer protection laws</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">How We Use Your Information</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">Primary Purposes:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Processing uploaded baby photos using AI algorithms to generate artistic portraits</li>
                <li>Delivering generated photos to your email address</li>
                <li>Processing payments and maintaining billing records</li>
                <li>Providing customer support and responding to inquiries</li>
                <li>Sending service-related notifications and updates</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Secondary Purposes:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Improving AI model accuracy and service quality (with anonymized data)</li>
                <li>Analyzing usage patterns to enhance user experience</li>
                <li>Detecting and preventing fraud, security breaches, and technical issues</li>
                <li>Complying with legal obligations and regulatory requirements</li>
              </ul>

              <p className="text-muted-foreground">
                <strong>Important:</strong> We never use your baby's photos for marketing, advertising, or training our AI on identifiable data without explicit consent.
              </p>
            </div>

            {/* Data Sharing and Disclosure */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Data Sharing and Disclosure</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">We may share your data with:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>AI Processing Partners:</strong> Secure cloud providers for AI computation (AWS/Google Cloud with data processing agreements)</li>
                <li><strong>Payment Processors:</strong> Razorpay for payment processing (they have independent privacy policies)</li>
                <li><strong>Email Service Providers:</strong> For delivering your generated photos</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights and safety</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-foreground">We will NOT:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Sell, rent, or lease your personal data to third parties</li>
                <li>Share baby photos with marketing companies or advertisers</li>
                <li>Use your data for purposes not disclosed in this policy</li>
                <li>Transfer data outside India/EU without adequate safeguards</li>
              </ul>
            </div>

            {/* Data Security and Protection */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Data Security and Protection</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">Technical Measures:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>End-to-end encryption during transmission using TLS 1.3</li>
                <li>AES-256 encryption for data storage</li>
                <li>Secure cloud infrastructure with ISO 27001 certification</li>
                <li>Regular security audits and penetration testing</li>
                <li>Multi-factor authentication for system access</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-foreground">Organizational Measures:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Access controls limiting data access to authorized personnel only</li>
                <li>Employee training on data protection and privacy</li>
                <li>Incident response procedures for data breaches</li>
                <li>Regular backup and disaster recovery protocols</li>
              </ul>

              <p className="text-muted-foreground">
                <strong>Data Breach Notification:</strong> In case of a data breach, we will notify relevant authorities within 72 hours 
                and affected users promptly, as required by GDPR and DPDPA 2023.
              </p>
            </div>

            {/* Data Retention and Deletion */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Data Retention and Deletion</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">Retention Periods:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Original Baby Photos:</strong> Automatically deleted after 7 days of processing completion</li>
                <li><strong>Generated Photos:</strong> Deleted after 30 days unless you request earlier deletion</li>
                <li><strong>Payment Records:</strong> Retained for 7 years as per Indian tax regulations</li>
                <li><strong>Communication Data:</strong> Retained for 2 years for support purposes</li>
                <li><strong>Technical Logs:</strong> Retained for 1 year for security and performance monitoring</li>
              </ul>

              <p className="text-muted-foreground mb-4">
                <strong>Automated Deletion:</strong> Our systems automatically delete photos as per the schedule above. 
                You can request immediate deletion at any time through our Contact page.
              </p>

              <p className="text-muted-foreground">
                <strong>Anonymous Data:</strong> We may retain anonymized, non-identifiable analytics data indefinitely for service improvement.
              </p>
            </div>

            {/* Your Rights Under GDPR and DPDPA */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Your Rights Under GDPR and DPDPA 2023</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">You have the right to:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Access:</strong> Request copies of your personal data and information about how it's processed</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete personal data</li>
                <li><strong>Erasure (Right to be Forgotten):</strong> Request deletion of your personal data</li>
                <li><strong>Restriction:</strong> Limit how we process your data in certain circumstances</li>
                <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
                <li><strong>Object:</strong> Opt-out of processing based on legitimate interests</li>
                <li><strong>Withdraw Consent:</strong> Revoke consent for data processing (may affect service availability)</li>
                <li><strong>Complain:</strong> File complaints with data protection authorities</li>
              </ul>

              <p className="text-muted-foreground mb-4">
                <strong>How to Exercise Your Rights:</strong> Contact us through our Contact page or email us directly. 
                We will respond to your request within 30 days (or 1 month for GDPR requests).
              </p>

              <p className="text-muted-foreground">
                <strong>Verification:</strong> For security purposes, we may need to verify your identity before processing rights requests.
              </p>
            </div>

            {/* Cookies Policy */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Cookies and Tracking</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">Types of Cookies We Use:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Essential Cookies:</strong> Required for basic site functionality (login, cart, security)</li>
                <li><strong>Performance Cookies:</strong> Help us understand how you use our site to improve performance</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              </ul>

              <p className="text-muted-foreground mb-4">
                <strong>Cookie Consent:</strong> By using our website, you consent to our use of essential cookies. 
                You can manage cookie preferences in your browser settings.
              </p>

              <p className="text-muted-foreground">
                <strong>Third-Party Cookies:</strong> We do not use third-party advertising or tracking cookies.
              </p>
            </div>

            {/* International Transfers */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">International Data Transfers</h2>
              
              <p className="text-muted-foreground mb-4">
                Your data is primarily processed within India. When we use cloud services that may process data internationally, 
                we ensure adequate safeguards are in place:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Standard Contractual Clauses approved by the European Commission</li>
                <li>Adequacy decisions for data transfer destinations</li>
                <li>Additional security measures for data protection</li>
              </ul>
            </div>

            {/* Children's Privacy */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Children's Privacy</h2>
              
              <p className="text-muted-foreground mb-4">
                Our service involves processing images of children (babies). We recognize the sensitive nature of this data and:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Only process baby photos with explicit parental consent</li>
                <li>Implement additional security measures for children's data</li>
                <li>Do not use baby photos for marketing or advertising purposes</li>
                <li>Delete baby photos according to our strict retention schedule</li>
                <li>Require users to be 18+ years old to use our service</li>
              </ul>
            </div>

            {/* Updates to Privacy Policy */}
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <h2 className="text-xl font-display font-semibold mb-4">Updates to This Privacy Policy</h2>
              
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                When we make significant changes, we will:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Update the "Last Updated" date at the top of this policy</li>
                <li>Notify you via email if you're an active user</li>
                <li>Post a notice on our website highlighting the changes</li>
                <li>Obtain new consent where required by law</li>
              </ul>

              <p className="text-muted-foreground">
                Continued use of our service after policy updates constitutes acceptance of the revised policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-premium rounded-xl p-6 border border-primary/20">
              <h2 className="text-xl font-display font-semibold mb-4 text-white">Contact Us About Privacy</h2>
              
              <p className="text-white/90 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-white/90 mb-4">
                <li><strong>Privacy Inquiries:</strong> Use our <Link to="/contact" className="text-white underline hover:text-white/80">Contact page</Link></li>
                <li><strong>Data Subject Requests:</strong> Specify "Privacy Request" in your message</li>
                <li><strong>Data Protection Officer:</strong> Available upon request for GDPR-related matters</li>
                <li><strong>Complaints:</strong> You may also contact your local data protection authority</li>
              </ul>

              <p className="text-white/90">
                <strong>Response Time:</strong> We aim to respond to all privacy inquiries within 48 hours and complete 
                data subject requests within 30 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}