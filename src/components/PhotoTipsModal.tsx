import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  X, 
  Camera, 
  Sun, 
  Smile, 
  Eye, 
  Zap,
  CheckCircle 
} from 'lucide-react';

const photoTips = [
  {
    icon: Sun,
    title: "Natural Light is Best",
    description: "Position your baby near a window during daytime for soft, even lighting",
    good: "✅ Soft window light",
    bad: "❌ Harsh flash or overhead lights"
  },
  {
    icon: Eye,
    title: "Clear Face Visibility", 
    description: "Ensure baby's face is clearly visible and unobstructed",
    good: "✅ Front-facing, eyes visible",
    bad: "❌ Side profile or covered features"
  },
  {
    icon: Smile,
    title: "Calm & Happy Expression",
    description: "Capture baby when they're content and relaxed for best results",
    good: "✅ Peaceful, alert expression",
    bad: "❌ Crying or distressed"
  },
  {
    icon: Camera,
    title: "High Resolution Images",
    description: "Use your phone's highest quality setting for crisp, detailed photos",
    good: "✅ Sharp, well-focused image",
    bad: "❌ Blurry or low resolution"
  }
];

interface PhotoTipsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PhotoTipsModal({ isOpen, onClose }: PhotoTipsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </Button>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Camera className="w-6 h-6 text-primary" />
            Photo Tips for Best Results
          </CardTitle>
          <p className="text-muted-foreground">
            Follow these simple tips to get the most magical photos of your baby
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Tips Grid */}
          <div className="grid gap-4">
            {photoTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">{tip.title}</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {tip.description}
                  </p>
                  
                  <div className="flex gap-4 text-xs">
                    <div className="flex items-center gap-1 text-green-700 bg-green-50 px-2 py-1 rounded">
                      <span>{tip.good}</span>
                    </div>
                    <div className="flex items-center gap-1 text-red-700 bg-red-50 px-2 py-1 rounded">
                      <span>{tip.bad}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Checklist */}
          <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              Quick Checklist Before Upload
            </h3>
            <div className="space-y-2 text-sm">
              {[
                "Baby is well-lit with natural light",
                "Face is clearly visible and in focus", 
                "Baby appears calm and comfortable",
                "Image is sharp and high resolution",
                "No shadows covering baby's features"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-4 h-4 border border-primary rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded"></div>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Tips */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4 border border-amber/20">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-amber-800">
              <Zap className="w-5 h-5" />
              Pro Tips for Amazing Results
            </h3>
            <ul className="text-sm space-y-1 text-amber-700">
              <li>• Take multiple shots and pick the best one</li>
              <li>• Avoid busy backgrounds - keep it simple</li>
              <li>• Capture baby's unique personality</li>
              <li>• Upload the highest resolution version</li>
            </ul>
          </div>

          <div className="text-center pt-4">
            <Button onClick={onClose} className="w-full sm:w-auto">
              Got it, let's upload!
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}