import { Heart, Shield, FileText, Banknote, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Baby Photoshoot AI</span>
            </div>
            <p className="text-background/80 max-w-xs">
              Transform your baby's single photo into 20 magical professional memories with AI.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Legal</h3>
            <div className="space-y-2">
              <Link 
                to="/privacy"
                className="flex items-center space-x-2 text-background/80 hover:text-primary transition-colors"
              >
                <Shield className="w-4 h-4" />
                <span>Privacy Policy</span>
              </Link>
              <Link 
                to="/terms"
                className="flex items-center space-x-2 text-background/80 hover:text-primary transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Terms & Conditions</span>
              </Link>
              <Link 
                to="/refund"
                className="flex items-center space-x-2 text-background/80 hover:text-primary transition-colors"
              >
                <Banknote className="w-4 h-4" />
                <span>Refund Policy</span>
              </Link>
              <Link 
                to="/contact"
                className="flex items-center space-x-2 text-background/80 hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact</span>
              </Link>
            </div>
            
            {/* Refund notice */}
            <div className="bg-background/10 rounded-lg p-4 mt-6">
              <p className="text-sm text-background/90">
                <span className="font-semibold">Important:</span> No refunds available as low-resolution previews are provided before payment.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 Baby Photoshoot AI. Made with {' '}
            <Heart className="w-4 h-4 inline text-accent" /> {' '}
            for parents who want magical memories.
          </p>
        </div>
      </div>
    </footer>
  );
}