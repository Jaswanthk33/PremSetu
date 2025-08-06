import { ArrowLeft, MessageCircle, Phone, MapPin, Clock, AlertCircle, CheckCircle2, Mail, Shield, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Contact() {

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">Contact Us</h1>
                <p className="text-lg text-muted-foreground mt-1">
                  We're here to help create magical memories for your baby
                </p>
              </div>
            </div>
          </div>

          {/* Quick Response Banner */}
          <div className="bg-gradient-warm rounded-xl p-6 border border-primary/20 mb-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-display font-semibold text-foreground">Quick Response Guarantee</h3>
                <p className="text-muted-foreground">
                  We respond to all inquiries within 2-4 hours during business hours, and within 24 hours on weekends.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-display font-semibold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Multiple ways to reach our support team. We're committed to providing excellent customer service.
                </p>
              </div>

              {/* Primary Contact Methods */}
              <div className="space-y-4">
                <div className="bg-card rounded-xl p-6 border border-accent/20 hover:border-primary/30 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Support</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        Best for detailed questions, technical issues, and file attachments
                      </p>
                      <a 
                        href="mailto:support@premsetu.com" 
                        className="text-primary hover:underline font-medium"
                      >
                        support@premsetu.in
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">
                        Response time: 2-4 hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-accent/20 hover:border-primary/30 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone Support</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        For urgent issues and immediate assistance
                      </p>
                      <a 
                        href="tel:+918465862214" 
                        className="text-primary hover:underline font-medium"
                      >
                        +91 8465862214
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">
                        Available during business hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-accent/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Support Hours</h3>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div className="flex justify-between">
                          <span>Mon - Fri:</span>
                          <span className="font-medium">9:00 AM - 8:00 PM IST</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sat - Sun:</span>
                          <span className="font-medium">10:00 AM - 6:00 PM IST</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Holidays:</span>
                          <span className="font-medium">Limited support</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-accent/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Address</h3>
                      <div className="text-sm text-muted-foreground">
                        Premsetu<br />
                        18-38-s4-343-g1, Railway Colony<br />
                        Tirupati, Andhra Pradesh - 517501<br />
                        India
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-muted/30 rounded-xl p-6 border border-muted">
                <h3 className="font-semibold mb-3">Quick Links</h3>
                <div className="space-y-2 text-sm">
                  <Link to="/privacy" className="block text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="block text-primary hover:underline">
                    Terms & Conditions
                  </Link>
                  <Link to="/refund" className="block text-primary hover:underline">
                    Refund Policy
                  </Link>
                  <Link to="/#faq" className="block text-primary hover:underline">
                    Frequently Asked Questions
                  </Link>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <h4 className="font-semibold text-primary mb-2">Our Promise</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>✓ Email responses within 2-4 hours (business hours)</li>
                  <li>✓ Phone support during listed hours</li>
                  <li>✓ Technical issues resolved within 24-48 hours</li>
                  <li>✓ Refund requests processed within 5-7 days</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section - Business Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-card rounded-xl border border-accent/20">
              <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">2-Hour Response</h4>
              <p className="text-xs text-muted-foreground">
                During business hours
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-xl border border-accent/20">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Secure Communication</h4>
              <p className="text-xs text-muted-foreground">
                All data encrypted
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-xl border border-accent/20">
              <Headphones className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Expert Support</h4>
              <p className="text-xs text-muted-foreground">
                Trained professionals
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-xl border border-accent/20">
              <Clock className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Extended Hours</h4>
              <p className="text-xs text-muted-foreground">
                7 days a week
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}