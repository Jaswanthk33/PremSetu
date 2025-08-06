import { ArrowLeft, Mail, MessageCircle, Phone, MapPin, Clock, AlertCircle, CheckCircle2, Headphones, FileText, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    
    // Simulate form submission
    try {
      // In a real implementation, you would send this to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", category: "", message: "" });
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      category: value
    }));
  };

  const inquiryCategories = [
    { value: "general", label: "General Inquiry" },
    { value: "technical", label: "Technical Support" },
    { value: "billing", label: "Billing & Payments" },
    { value: "privacy", label: "Privacy & Data Request" },
    { value: "refund", label: "Refund Request" },
    { value: "quality", label: "Photo Quality Issue" },
    { value: "business", label: "Business Partnership" },
    { value: "feedback", label: "Feedback & Suggestions" }
  ];

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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl font-display font-semibold mb-4">Send us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below with your inquiry. The more details you provide, the better we can assist you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium mb-2">
                      Inquiry Type <span className="text-destructive">*</span>
                    </label>
                    <Select value={formData.category} onValueChange={handleSelectChange} required>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryCategories.map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Brief description of your inquiry"
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Please provide detailed information about your inquiry. Include order numbers, error messages, or specific questions to help us assist you better."
                    rows={6}
                    className="resize-none"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Minimum 20 characters. Include relevant details for faster resolution.
                  </p>
                </div>

                {/* Data Privacy Notice */}
                <div className="bg-muted/30 rounded-lg p-4 border border-muted">
                  <div className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-primary mt-0.5" />
                    <div className="text-xs text-muted-foreground">
                      <p className="font-medium">Privacy Notice:</p>
                      <p>
                        Your information is secure and will only be used to respond to your inquiry. 
                        See our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> for details.
                      </p>
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-semibold bg-gradient-premium hover:opacity-90"
                  disabled={submitStatus === 'submitting'}
                >
                  {submitStatus === 'submitting' ? (
                    "Sending Message..."
                  ) : (
                    <>
                      <Mail className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <p className="text-green-700 font-medium">Message sent successfully!</p>
                    </div>
                    <p className="text-green-600 text-sm mt-1">
                      We'll get back to you within 2-4 hours during business hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      <p className="text-red-700 font-medium">Failed to send message</p>
                    </div>
                    <p className="text-red-600 text-sm mt-1">
                      Please try again or contact us directly via email.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information Sidebar */}
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
                        support@premsetu.com
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
                        href="tel:+918123456789" 
                        className="text-primary hover:underline font-medium"
                      >
                        +91 81234 56789
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
                        Koramangala, Bangalore<br />
                        Karnataka 560095<br />
                        India
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specialized Support */}
              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold">Specialized Support</h3>
                
                <div className="bg-card rounded-lg p-4 border border-accent/20">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-4 h-4 text-primary" />
                    <span className="font-medium text-sm">Legal & Privacy</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    Data requests, privacy concerns, legal notices
                  </p>
                  <a href="mailto:legal@premsetu.com" className="text-primary text-xs hover:underline">
                    legal@premsetu.com
                  </a>
                </div>

                <div className="bg-card rounded-lg p-4 border border-accent/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Headphones className="w-4 h-4 text-primary" />
                    <span className="font-medium text-sm">Technical Issues</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    Upload problems, download issues, processing errors
                  </p>
                  <a href="mailto:tech@premsetu.com" className="text-primary text-xs hover:underline">
                    tech@premsetu.com
                  </a>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-destructive" />
                  <span className="font-semibold text-destructive text-sm">Emergency Contact</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  For urgent security issues or data breaches only
                </p>
                <a 
                  href="mailto:emergency@premsetu.com" 
                  className="text-destructive text-xs hover:underline font-medium"
                >
                  emergency@premsetu.com
                </a>
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