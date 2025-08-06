import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Download, Heart, Star, ZoomIn, Shield, Camera, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScreenshotProtection } from '@/hooks/useScreenshotProtection';
import { useToast } from '@/hooks/use-toast';
import { mobileWatermark } from '@/utils/mobileWatermark';
import ImageCarousel from './ImageCarousel';

interface ProcessedImage {
  id: string;
  url: string;
  thumbnail: string;
  style: string;
  selected?: boolean;
}

interface ImageGalleryProps {
  images: ProcessedImage[];
  onImageSelect?: (imageId: string, selected: boolean) => void;
  onDownload?: (imageId: string) => void;
  showSelection?: boolean;
  maxSelections?: number;
  className?: string;
}

const ImageGallery = ({
  images,
  onImageSelect,
  onDownload,
  showSelection = true,
  maxSelections = 10,
  className
}: ImageGalleryProps) => {
  const [selectedImages, setSelectedImages] = useState<Set<string>>(new Set());
  const [watermarkedImages, setWatermarkedImages] = useState<Map<string, string>>(new Map());
  const [isMobile, setIsMobile] = useState(false);
  const { toast } = useToast();
  
  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                    window.innerWidth <= 768 ||
                    ('ontouchstart' in window);
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Enable screenshot protection for this component
  const { protectNewImages } = useScreenshotProtection({
    enabled: true,
    imageSelector: '.protected-image',
    onAttempt: (method) => {
      toast({
        title: "Screenshot Blocked",
        description: `Screenshots are disabled for preview images. Purchase to get full quality images.`,
        variant: "destructive"
      });
    }
  });

  const handleImageSelect = (imageId: string) => {
    if (!showSelection) return;
    
    // Use functional state update to prevent race conditions
    setSelectedImages(prevSelected => {
      const newSelected = new Set(prevSelected);
      const isSelected = newSelected.has(imageId);
      
      if (isSelected) {
        newSelected.delete(imageId);
        onImageSelect?.(imageId, false);
      } else if (newSelected.size < maxSelections) {
        newSelected.add(imageId);
        onImageSelect?.(imageId, true);
      }
      
      return newSelected;
    });
  };

  const handleDownload = (imageId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onDownload?.(imageId);
  };

  // Create watermarked versions for mobile users
  useEffect(() => {
    if (isMobile && images.length > 0) {
      const createWatermarkedVersions = async () => {
        const newWatermarkedImages = new Map();
        
        for (const image of images) {
          try {
            const watermarkedUrl = await mobileWatermark.createWatermarkedImage(image.thumbnail);
            newWatermarkedImages.set(image.id, watermarkedUrl);
          } catch (error) {
            console.error('Failed to create watermarked image:', error);
            // Fallback to original image
            newWatermarkedImages.set(image.id, image.thumbnail);
          }
        }
        
        setWatermarkedImages(newWatermarkedImages);
      };
      
      createWatermarkedVersions();
    }
  }, [images, isMobile]);

  // Re-protect images when component updates
  useEffect(() => {
    protectNewImages();
  }, [images, protectNewImages]);

  return (
    <div className={cn("space-y-6", className)}>
      {showSelection && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Your Magical Baby Photos</h2>
              <p className="text-muted-foreground">
                Select up to {maxSelections} photos for download
              </p>
            </div>
            <Badge variant="secondary" className="text-lg px-3 py-1">
              {selectedImages.size}/{maxSelections} selected
            </Badge>
          </div>
          
          {/* Protection Notice */}
          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-3">
            <div className="flex items-center gap-2 text-orange-800 dark:text-orange-200">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Preview Protection Active</span>
            </div>
            <p className="text-xs text-orange-700 dark:text-orange-300 mt-1">
              These are watermarked previews. Screenshots and downloads are disabled. Purchase to get full HD quality images.
            </p>
          </div>
        </div>
      )}

      <div className={cn(
        "grid gap-4",
        isMobile 
          ? "grid-cols-1 gap-6" 
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      )}>
        {images.map((image) => {
          const isSelected = selectedImages.has(image.id);
          
          return (
            <Card
              key={image.id}
              className={cn(
                "group cursor-pointer transition-all duration-300",
                isSelected && "ring-2 ring-primary shadow-primary/25",
                isMobile 
                  ? "shadow-lg active:scale-95 active:shadow-md" 
                  : "hover:shadow-lg hover:scale-105"
              )}
              onClick={() => handleImageSelect(image.id)}
            >
              <CardContent className={cn(
                "p-0",
                isMobile && "pb-4"
              )}>
                  <div className="relative overflow-hidden rounded-lg">
                  <div className="relative">
                    <img
                      src={isMobile && watermarkedImages.has(image.id) 
                        ? watermarkedImages.get(image.id) 
                        : image.thumbnail}
                      alt={`Baby photo in ${image.style} style`}
                      className={cn(
                        "protected-image w-full object-cover transition-transform duration-300",
                        isMobile ? "h-64" : "h-48 group-hover:scale-110"
                      )}
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                      style={{
                        WebkitTouchCallout: 'none',
                        WebkitUserSelect: 'none',
                        userSelect: 'none',
                        pointerEvents: 'none'
                      }}
                    />
                    
                    {/* Enhanced mobile watermark overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className={cn(
                        "text-white px-3 py-1 rounded text-xs font-medium backdrop-blur-sm",
                        isMobile 
                          ? "bg-red-600/80 border border-red-400" 
                          : "bg-black/20"
                      )}>
                        {isMobile ? '📱 MOBILE PREVIEW' : 'PREVIEW'}
                      </div>
                    </div>
                    
                    {/* Additional mobile-only overlay */}
                    {isMobile && (
                      <div className="absolute top-1 right-1 bg-orange-600 text-white px-2 py-1 rounded-bl text-xs font-bold pointer-events-none">
                        🔒
                      </div>
                    )}
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  {/* Selection checkbox */}
                  {showSelection && (
                    <div className="absolute top-2 left-2 z-10">
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          handleImageSelect(image.id);
                        }}
                        className={cn(
                          "w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer transition-colors pointer-events-auto",
                          isSelected
                            ? "bg-primary border-primary"
                            : "border-white bg-black/20 hover:bg-black/40"
                        )}
                      >
                        {isSelected && (
                          <div className="w-3 h-3 rounded-full bg-white" />
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* Zoom button only - positioned to avoid overlap */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="w-8 h-8 p-0 pointer-events-auto shadow-lg"
                          onClick={(e) => e.stopPropagation()}
                          title="View full size"
                        >
                          <ZoomIn className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className={cn(
                        "p-0",
                        isMobile 
                          ? "w-[95vw] h-[95vh] max-w-none" 
                          : "w-[90vw] h-[90vh] max-w-6xl"
                      )}>
                        <ImageCarousel 
                          images={images}
                          currentIndex={images.findIndex(img => img.id === image.id)}
                          selectedImages={selectedImages}
                          onImageSelect={handleImageSelect}
                          showSelection={showSelection}
                          maxSelections={maxSelections}
                          isMobile={isMobile}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                  
                  {/* Style badge */}
                  <div className="absolute bottom-2 left-2">
                    <Badge variant="secondary" className="text-xs">
                      {image.style}
                    </Badge>
                  </div>
                </div>
                
                {/* Mobile-specific bottom section */}
                {isMobile && (
                  <div className="px-4 pb-2">
                    <div className="flex items-center justify-between pt-3 border-t border-border/50">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {image.style}
                        </Badge>
                      </div>
                      
                      {showSelection && (
                        <div className={cn(
                          "flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium transition-colors",
                          isSelected 
                            ? "bg-primary/10 text-primary" 
                            : "bg-muted text-muted-foreground"
                        )}>
                          <div className={cn(
                            "w-3 h-3 rounded-full border flex items-center justify-center",
                            isSelected 
                              ? "bg-primary border-primary" 
                              : "border-muted-foreground/50"
                          )}>
                            {isSelected && (
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            )}
                          </div>
                          <span>{isSelected ? 'Selected' : 'Tap to select'}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      {/* Action guidance section */}
      {showSelection && (
        <div className="flex justify-center pt-6">
          {selectedImages.size === 0 ? (
            <Card className="p-4 border-orange-200 bg-orange-50">
              <div className="flex items-center gap-3 text-orange-800">
                <div className="p-2 bg-orange-200 rounded-full">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium">Select photos to proceed</p>
                  <p className="text-sm text-orange-600">Click on any image to select it for purchase</p>
                </div>
              </div>
            </Card>
          ) : selectedImages.size < 3 ? (
            <Card className="p-4 border-blue-200 bg-blue-50">
              <div className="flex items-center gap-3 text-blue-800">
                <div className="p-2 bg-blue-200 rounded-full">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium">{selectedImages.size} photo{selectedImages.size > 1 ? 's' : ''} selected</p>
                  <p className="text-sm text-blue-600">Great start! Select more photos for the best value</p>
                </div>
              </div>
            </Card>
          ) : (
            <Card className="p-4 border-green-200 bg-green-50">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 text-green-800">
                  <div className="p-2 bg-green-200 rounded-full">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">{selectedImages.size} photos selected</p>
                    <p className="text-sm text-green-600">Perfect! Ready for purchase</p>
                  </div>
                </div>
                <Button size="lg" className="ml-auto">
                  Continue to Payment (₹299)
                </Button>
              </div>
            </Card>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
