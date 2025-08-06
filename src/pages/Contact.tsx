import { ArrowLeft, Mail, MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
                <MessageCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Contact Us</h1>
            </div>
            
            <p className="text-muted-foreground">
              We're here to help! Reach out with any questions about Baby Photoshoot AI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us how we can help..."
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Choose the best way to reach us. We're always happy to help parents 
                  create beautiful memories of their little ones.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-card rounded-xl p-6 border border-accent/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Support</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Best for detailed questions and technical support
                      </p>
                      <a href="mailto:support@babyphotoshootai.com" className="text-primary hover:underline">
                        support@babyphotoshootai.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-accent/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone Support</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        For urgent issues and quick questions
                      </p>
                      <a href="tel:+918123456789" className="text-primary hover:underline">
                        +91 81234 56789
                      </a>
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
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday: 9:00 AM - 8:00 PM IST<br />
                        Saturday - Sunday: 10:00 AM - 6:00 PM IST
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-accent/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Our Location</h3>
                      <p className="text-muted-foreground text-sm">
                        Bangalore, Karnataka<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/20 rounded-xl p-6 border border-accent/40">
                <h3 className="font-semibold mb-2">Frequently Asked Questions</h3>
                <p className="text-muted-foreground text-sm">
                  Before contacting us, you might find your answer in our{" "}
                  <Link to="/#faq" className="text-primary hover:underline">FAQ section</Link>{" "}
                  on the homepage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}