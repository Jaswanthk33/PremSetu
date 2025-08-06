import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Gift, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ExitIntentPopupProps {
  onClose: () => void;
}

export default function ExitIntentPopup({ onClose }: ExitIntentPopupProps) {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg relative animate-in zoom-in-95 duration-200">
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 z-10"
          onClick={onClose}
        >
          <X className="w-4 h-4" />
        </Button>

        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full">
              <Gift className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            Wait! Special Offer Just for You
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Discount Offer */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 text-center border border-red-200">
            <div className="mb-4">
              <div className="text-4xl font-bold text-red-600 mb-2">
                ₹199
                <span className="text-lg line-through text-gray-500 ml-2">₹299</span>
              </div>
              <div className="text-lg font-semibold text-red-700">
                Save ₹100 Today!
              </div>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 border border-red-200">
              <div className="flex items-center justify-center gap-2 text-red-600 font-semibold mb-2">
                <Clock className="w-4 h-4" />
                Limited Time: {formatTime(timeLeft)}
              </div>
              <p className="text-sm text-red-700">
                This exclusive 33% discount expires soon!
              </p>
            </div>
          </div>

          {/* Why This Deal */}
          <div className="space-y-3">
            <h3 className="font-semibold text-center">Why we're offering this discount:</h3>
            <div className="grid gap-2 text-sm">
              <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                <Star className="w-4 h-4 text-blue-500" />
                <span>You're one of our first 1000 customers</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                <Star className="w-4 h-4 text-green-500" />
                <span>Help us build our testimonial collection</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-purple-50 rounded-lg">
                <Star className="w-4 h-4 text-purple-500" />
                <span>We want to wow you with our service</span>
              </div>
            </div>
          </div>

          {/* What You Get */}
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <h3 className="font-semibold text-green-800 mb-2">You still get everything:</h3>
            <div className="text-sm text-green-700 space-y-1">
              <p>✅ 20 professional AI-generated photos</p>
              <p>✅ Preview before you pay</p>
              <p>✅ High-resolution downloads</p>
              <p>✅ 2-hour delivery guarantee</p>
              <p>✅ 100% money-back guarantee</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Link to="/upload" onClick={onClose}>
              <Button className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold py-3 text-lg">
                Claim ₹199 Discount Now
              </Button>
            </Link>
            
            <button
              onClick={onClose}
              className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              No thanks, I'll pay full price
            </button>
          </div>

          {/* Trust Signal */}
          <div className="text-center text-xs text-muted-foreground">
            <p>🔒 Secure checkout • 💳 All payment methods accepted</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}