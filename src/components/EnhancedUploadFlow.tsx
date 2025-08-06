import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Camera, 
  Sparkles, 
  Heart, 
  Star, 
  CheckCircle2,
  ArrowRight,
  Zap,
  Clock,
  Target,
  Gift
} from 'lucide-react';
import { cn } from '@/lib/utils';
import ImageUpload from '@/components/ImageUpload';
import ImageGallery from '@/components/ImageGallery';
import FullScreenImageModal from '@/components/FullScreenImageModal';
import { useToast } from '@/hooks/use-toast';

// Demo images
import babyHero1 from '@/assets/baby-hero-1.png';
import babyHero2 from '@/assets/baby-hero-2.png';
import babyHero3 from '@/assets/baby-hero-3.png';
import babyHero4 from '@/assets/baby-hero-4.png';
import babyHero5 from '@/assets/baby-hero-5.png';

const demoImages = [
  { id: '1', url: babyHero1, thumbnail: babyHero1, style: 'Classic Portrait' },
  { id: '2', url: babyHero2, thumbnail: babyHero2, style: 'Dreamy Soft' },
  { id: '3', url: babyHero3, thumbnail: babyHero3, style: 'Vintage Charm' },
  { id: '4', url: babyHero4, thumbnail: babyHero4, style: 'Modern Studio' },
  { id: '5', url: babyHero5, thumbnail: babyHero5, style: 'Artistic Glow' },
];

interface EnhancedUploadFlowProps {
  onComplete?: () => void;
}

export default function EnhancedUploadFlow({ onComplete }: EnhancedUploadFlowProps) {
  const [currentPhase, setCurrentPhase] = useState<'upload' | 'processing' | 'previews' | 'complete'>('upload');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [showPreviewCelebration, setShowPreviewCelebration] = useState(false);
  const [showFullScreen, setShowFullScreen] = useState(false);
  const [fullScreenImageIndex, setFullScreenImageIndex] = useState(0);
  const { toast } = useToast();

  // Handle file upload
  const handleFileUpload = (file: File) => {
    setSelectedFile(file);
    setCurrentPhase('processing');
    
    toast({
      title: "Perfect! 📸",
      description: "AI is creating your magical photos...",
    });

    // Start processing immediately
    startProcessing();
  };

  // Handle processing
  const startProcessing = () => {
    setProcessingProgress(0);
    
    // Simulate processing with emotional storytelling
    const messages = [
      { progress: 20, title: "Analyzing baby's features", desc: "AI is studying your little one's unique beauty" },
      { progress: 40, title: "Choosing perfect lighting", desc: "Creating the most flattering illumination" },
      { progress: 60, title: "Generating artistic styles", desc: "Creating multiple beautiful styles" },
      { progress: 80, title: "Adding finishing touches", desc: "Perfecting every precious detail" },
      { progress: 100, title: "Photos ready!", desc: "Your magical memories are complete!" }
    ];

    let currentMessage = 0;
    const interval = setInterval(() => {
      if (currentMessage < messages.length) {
        const msg = messages[currentMessage];
        setProcessingProgress(msg.progress);
        
        toast({
          title: msg.title,
          description: msg.desc,
        });
        
        currentMessage++;
      } else {
        clearInterval(interval);
        setCurrentPhase('previews');
        setShowPreviewCelebration(true);
        
        // Hide celebration and show previews
        setTimeout(() => setShowPreviewCelebration(false), 2000);
        
        toast({
          title: "🎉 Your Photos Are Ready!",
          description: "20 magical portraits are waiting for you to discover!",
        });
      }
    }, 1500);
  };

  // Handle image selection for previews
  const toggleImageSelection = (imageId: string) => {
    console.log('Toggle selection for image:', imageId);
    setSelectedImages(prev => {
      const newSelection = prev.includes(imageId)
        ? prev.filter(id => id !== imageId)
        : [...prev, imageId];
      console.log('New selection:', newSelection);
      return newSelection;
    });
  };

  // Proceed to payment
  const proceedToPayment = () => {
    if (selectedImages.length === 0) {
      toast({
        title: "Select Your Favorites! ✨",
        description: "Choose at least 1 photo to download in HD quality",
        variant: "destructive"
      });
      return;
    }

    setCurrentPhase('complete');
    setShowConfetti(true);
    
    // Hide confetti after celebration
    setTimeout(() => setShowConfetti(false), 3000);
  };

  // Handle full screen preview
  const openFullScreen = (imageIndex: number) => {
    console.log('Opening full screen for image index:', imageIndex);
    setFullScreenImageIndex(imageIndex);
    setShowFullScreen(true);
  };

  const closeFullScreen = () => {
    setShowFullScreen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`absolute animate-bounce ${
                ['text-pink-500', 'text-purple-500', 'text-blue-500', 'text-yellow-500'][i % 4]
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            >
              {['🎉', '✨', '🌟', '💖'][i % 4]}
            </div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        {/* PHASE 1: UPLOAD - Single Focus */}
        {currentPhase === 'upload' && (
          <div className="max-w-2xl mx-auto text-center space-y-8 animate-in fade-in duration-700">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full border border-pink-200">
                <Heart className="w-4 h-4 text-pink-500 animate-pulse" />
                <span className="text-sm font-medium text-pink-700">Your baby's magical photoshoot starts here</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient">
                Let's Create Magic Together
              </h1>
              
              <p className="text-xl text-muted-foreground font-body leading-relaxed">
                Upload your baby's photo and watch AI create 20 stunning portraits in various styles
              </p>
            </div>

            <Card className="border-2 border-dashed border-purple-200 hover:border-purple-400 transition-all duration-300">
              <CardContent className="p-8">
                <ImageUpload onImageSelect={handleFileUpload} />
              </CardContent>
            </Card>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>100% Safe & Private</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-blue-500" />
                <span>2-Hour Delivery</span>
              </div>
              <div className="flex items-center gap-1">
                <Target className="w-4 h-4 text-purple-500" />
                <span>Choose Before You Buy</span>
              </div>
            </div>
          </div>
        )}

        {/* PHASE 2: PROCESSING - Anticipation Peak */}
        {currentPhase === 'processing' && (
          <div className="max-w-2xl mx-auto text-center space-y-8 animate-in fade-in duration-500">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200">
                <Sparkles className="w-4 h-4 text-blue-600 animate-spin" />
                <span className="text-sm font-medium text-blue-700">AI is creating your masterpieces</span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800">
                Creating Your Baby's Magical Photos
              </h2>
              
              <p className="text-lg text-gray-600">
                Our AI is carefully crafting each unique portrait...
              </p>
            </div>

            {/* Breathing Progress Circle */}
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-white flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">{processingProgress}%</div>
                  <div className="text-sm text-gray-500">Complete</div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <Progress value={processingProgress} className="h-3 bg-gray-200" />
              <p className="text-sm text-gray-500">
                Almost there! Your magical memories are being perfected...
              </p>
            </div>

            {/* Anticipation Building */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <span className="font-semibold text-purple-700">What's happening behind the scenes:</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Facial feature analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Lighting optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span>Style generation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                    <span>Final touches</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PHASE 3: PREVIEWS - The Big Reveal */}
        {currentPhase === 'previews' && (
          <div className="max-w-7xl mx-auto space-y-8 animate-in slide-in-from-bottom duration-700">
            {/* Celebration Header */}
            <div className="text-center space-y-4">
              {showPreviewCelebration && (
                <div className="fixed inset-0 pointer-events-none z-50">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute animate-bounce ${
                        ['text-pink-500', 'text-purple-500', 'text-blue-500', 'text-yellow-500'][i % 4]
                      }`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 1}s`,
                        animationDuration: `${0.8 + Math.random() * 1}s`
                      }}
                    >
                      {['✨', '🌟', '💖', '🎉'][i % 4]}
                    </div>
                  ))}
                </div>
              )}

              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 rounded-full border border-green-200 shadow-lg">
                <CheckCircle2 className="w-5 h-5 text-green-600 animate-pulse" />
                <span className="font-semibold text-green-700">Your Magical Photos Are Ready! 🎉</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient">
                Choose Your Favorites
              </h2>
              
              <p className="text-xl text-gray-600">
                Select the photos you love and get instant HD downloads
              </p>

              <div className="flex items-center justify-center gap-4 text-sm">
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  <Star className="w-3 h-3 mr-1" />
                  20 Unique Styles Generated
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  <Gift className="w-3 h-3 mr-1" />
                  Select Any Amount
                </Badge>
              </div>
            </div>

            {/* Preview Gallery */}
            <Card className="border-2 border-purple-200 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {demoImages.map((image, index) => (
                    <div
                      key={image.id}
                      className={`relative group transition-all duration-300 ${
                        selectedImages.includes(image.id) ? 'ring-4 ring-purple-500 scale-105' : ''
                      }`}
                    >
                      {/* Image Container */}
                      <div className="relative overflow-hidden rounded-xl cursor-pointer">
                        <img
                          src={image.url}
                          alt={image.style}
                          className="w-full h-48 object-cover transition-all duration-300 group-hover:brightness-110"
                          onClick={() => openFullScreen(index)}
                        />
                        
                        {/* Hover Overlay */}
                        <div 
                          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          onClick={() => openFullScreen(index)}
                        />
                        
                        {/* Style Label */}
                        <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                          <div className="bg-black/70 text-white px-2 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {image.style}
                          </div>
                        </div>

                        {/* Full Screen Hint */}
                        <div 
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        >
                          <div className="bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
                            Click to view full size
                          </div>
                        </div>

                        {/* Selection Button - Clear positioning */}
                        <button
                          className={`absolute top-3 right-3 w-7 h-7 rounded-lg border-2 border-white flex items-center justify-center transition-all duration-300 hover:scale-110 z-10 ${
                            selectedImages.includes(image.id)
                              ? 'bg-green-600 shadow-lg border-green-400'
                              : 'bg-black/60 hover:bg-black/80'
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleImageSelection(image.id);
                          }}
                          title={selectedImages.includes(image.id) ? 'Remove from selection' : 'Add to selection'}
                        >
                          {selectedImages.includes(image.id) ? (
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          ) : (
                            <span className="w-4 h-4 border-2 border-white rounded-sm bg-transparent" />
                          )}
                        </button>

                        {/* Preview Watermark - Repositioned */}
                        <div className="absolute bottom-3 left-3 right-12 pointer-events-none">
                          <div className="bg-black/60 text-white px-2 py-1 rounded text-xs font-semibold backdrop-blur-sm">
                            PREVIEW
                          </div>
                        </div>
                      </div>

                      {/* Selection Shadow Effect */}
                      <div className={`absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none ${
                        selectedImages.includes(image.id)
                          ? 'shadow-2xl shadow-purple-500/50'
                          : ''
                      }`} />
                    </div>
                  ))}
                </div>

                {/* Enhanced Selection Counter */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 rounded-full border-2 border-green-200 shadow-lg">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      selectedImages.length > 0 ? 'bg-green-600' : 'bg-gray-400'
                    }`}>
                      <span className="text-white font-bold text-sm">{selectedImages.length}</span>
                    </div>
                    <div className="text-center">
                      <div className={`font-bold ${selectedImages.length > 0 ? 'text-green-700' : 'text-gray-600'}`}>
                        {selectedImages.length} of {demoImages.length} selected
                      </div>
                      <div className="text-xs text-gray-500">
                        {selectedImages.length === 0 ? 'Select photos to purchase' : `₹${Math.ceil(selectedImages.length * 39.8)} for ${selectedImages.length} photos`}
                      </div>
                    </div>
                  </div>
                  
                  {selectedImages.length > 0 && (
                    <div className="mt-3 text-xs text-green-600 animate-in fade-in">
                      ✓ Great choice! Click "Get HD Photos" below when ready
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Pricing & CTA */}
            <div className="text-center space-y-6">
              <Card className="max-w-lg mx-auto border-2 border-green-200 bg-gradient-to-br from-green-50 to-blue-50">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-4xl font-display font-bold text-primary">₹199</span>
                        <span className="text-lg text-muted-foreground line-through">₹299</span>
                      </div>
                      <div className="text-sm text-primary font-semibold">
                        Launch Special • 33% OFF
                      </div>
                    </div>

                    <div className="bg-white/80 rounded-lg p-4 border border-green-200">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-center">
                          <div className="font-semibold text-green-700">What you get:</div>
                          <div className="text-green-600">
                            • HD downloads<br/>
                            • Instant delivery<br/>
                            • All selected photos
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-blue-700">Guarantee:</div>
                          <div className="text-blue-600">
                            • Exactly as previewed<br/>
                            • 2-hour delivery<br/>
                            • HD quality assured
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button 
                onClick={proceedToPayment}
                disabled={selectedImages.length === 0}
                size="lg"
                className={`px-12 py-4 text-xl font-bold shadow-2xl hover:shadow-3xl transform transition-all duration-300 ${
                  selectedImages.length === 0 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 hover:scale-105'
                }`}
              >
                <Gift className="w-6 h-6 mr-2" />
                {selectedImages.length === 0 
                  ? 'Select Photos First' 
                  : `Get ${selectedImages.length} HD Photos - ₹199`
                }
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
              
              {selectedImages.length === 0 && (
                <p className="text-sm text-red-500 mt-2 animate-pulse">
                  👆 Choose your favorite photos above to continue
                </p>
              )}
              
              <p className="text-sm text-gray-500">
                👀 Preview-first • 🔒 Secure payment • ⚡ Instant download
              </p>
            </div>
          </div>
        )}

        {/* PHASE 4: COMPLETE - Final Satisfaction */}
        {currentPhase === 'complete' && (
          <div className="max-w-6xl mx-auto space-y-8 animate-in slide-in-from-bottom duration-700">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 rounded-full border border-green-200 shadow-lg">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-700">Payment Successful! 🎉</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient">
                Your HD Photos Are Ready!
              </h2>
              
              <p className="text-xl text-gray-600">
                {selectedImages.length} magical photos are being prepared for download
              </p>

              <div className="flex items-center justify-center gap-4 text-sm">
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Payment Complete
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  <Clock className="w-3 h-3 mr-1" />
                  Download Link Sent
                </Badge>
              </div>
            </div>

            {/* Selected Photos Summary */}
            <Card className="border-2 border-green-200 shadow-2xl bg-gradient-to-br from-green-50 to-blue-50">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    Your Selected Photos
                  </h3>
                  <p className="text-green-600">
                    HD versions are being sent to your email now
                  </p>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {demoImages
                    .filter(image => selectedImages.includes(image.id))
                    .map((image) => (
                      <div key={image.id} className="relative group">
                        <div className="relative overflow-hidden rounded-lg">
                          <img
                            src={image.url}
                            alt={image.style}
                            className="w-full h-32 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-green-600/30 to-transparent" />
                          <div className="absolute top-1 right-1">
                            <CheckCircle2 className="w-4 h-4 text-green-600 bg-white rounded-full" />
                          </div>
                          <div className="absolute bottom-1 left-1 right-1">
                            <div className="text-white text-xs font-medium truncate">
                              {image.style}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>

                {selectedImages.length === 0 && (
                  <div className="text-center text-gray-500">
                    All 20 photos included in your download package
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Success Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-blue-200">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">📧</div>
                  <h3 className="font-bold text-blue-800 mb-2">Check Your Email</h3>
                  <p className="text-sm text-blue-600">
                    HD download links sent to your email address
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">⭐</div>
                  <h3 className="font-bold text-purple-800 mb-2">Share Your Joy</h3>
                  <p className="text-sm text-purple-600">
                    Tag us on social media with your beautiful photos!
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Final Message */}
            <div className="text-center">
              <Card className="border-2 border-pink-200 bg-gradient-to-r from-pink-50 to-purple-50">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
                    Thank You for Choosing Premsetu! 💖
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We hope these magical photos bring endless joy to your family. 
                    Share the love and tell other parents about our service!
                  </p>
                  
                  <div className="space-y-2">
                    <Button 
                      variant="outline"
                      className="mr-4"
                    >
                      <Star className="w-4 h-4 mr-2" />
                      Rate Your Experience
                    </Button>
                    
                    <Button 
                      variant="outline"
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      Create More Photos
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      {/* Full Screen Image Modal */}
      <FullScreenImageModal
        isOpen={showFullScreen}
        onClose={closeFullScreen}
        images={demoImages}
        currentImageIndex={fullScreenImageIndex}
        selectedImages={selectedImages}
        onImageSelect={toggleImageSelection}
        onImageChange={setFullScreenImageIndex}
      />
    </div>
  );
}