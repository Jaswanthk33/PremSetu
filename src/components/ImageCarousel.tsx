import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowLeft, ArrowRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageCarouselProps {
  images: any[];
  currentIndex: number;
  selectedImages: Set<string>;
  onImageSelect: (id: string) => void;
  showSelection: boolean;
  maxSelections: number;
  isMobile: boolean;
}

const ImageCarousel = ({ 
  images, 
  currentIndex,
  selectedImages,
  onImageSelect,
  showSelection,
  maxSelections,
  isMobile
}: ImageCarouselProps) => {
  const [current, setCurrent] = useState(currentIndex);
  const containerRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    const threshold = 50; // Minimum swipe distance
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextImage(); // Swipe left - next image
      } else {
        prevImage(); // Swipe right - previous image
      }
    }
    
    setIsDragging(false);
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const endX = e.clientX;
    const diff = startX - endX;
    const threshold = 50;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
    
    setIsDragging(false);
  };

  const image = images[current];
  const isSelected = selectedImages.has(image.id);

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="flex-shrink-0 bg-background/95 backdrop-blur-sm border-b p-3 flex items-center justify-between">
        <Badge variant="secondary" className="text-sm">
          {current + 1} / {images.length} - {image.style} Style
        </Badge>
        
        {showSelection && (
          <div
            onClick={() => {
              onImageSelect(image.id);
            }}
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-full border-2 cursor-pointer transition-all",
              isSelected
                ? "bg-primary border-primary text-primary-foreground"
                : "border-border hover:border-primary"
            )}
          >
            <div className={cn(
              "w-4 h-4 rounded-full border-2 flex items-center justify-center",
              isSelected
                ? "bg-primary-foreground border-primary-foreground"
                : "border-current"
            )}>
              {isSelected && (
                <div className="w-2 h-2 rounded-full bg-primary" />
              )}
            </div>
            <span className="text-sm font-medium">
              {isSelected ? 'Selected' : 'Select Photo'}
            </span>
          </div>
        )}
      </div>

      {/* Image display area with swipe */}
      <div 
        className="flex-1 relative overflow-hidden cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        ref={containerRef}
      >
        <div 
          className="h-full flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img) => (
            <div key={img.id} className="w-full h-full flex-shrink-0 flex items-center justify-center">
              <div className={cn(
                "relative flex items-center justify-center",
                isMobile ? "w-full h-full p-4" : "w-full h-full max-w-5xl max-h-[80vh]"
              )}>
                <img
                  src={img.url}
                  alt={`Baby photo in ${img.style} style`}
                  className={cn(
                    "protected-image rounded-lg shadow-xl",
                    isMobile 
                      ? "max-w-full max-h-full object-contain" 
                      : "w-full h-full object-contain"
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
                
                {/* Watermark overlay for full size */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-black/40 text-white px-4 py-2 sm:px-6 sm:py-3 rounded text-sm sm:text-lg font-bold backdrop-blur-sm">
                    PREVIEW ONLY
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation buttons */}
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg z-10"
          onClick={prevImage}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg z-10"
          onClick={nextImage}
        >
          <ArrowRight className="w-5 h-5" />
        </Button>
        
        {/* Swipe indicators */}
        {isMobile && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  index === current ? "bg-white" : "bg-white/50"
                )}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer - Always show selection counter when selection is enabled */}
      {showSelection && (
        <div className="flex-shrink-0 bg-background/95 backdrop-blur-sm border-t p-3">
          <div className="flex items-center justify-center">
            <Badge 
              variant={selectedImages.size > 0 ? "default" : "secondary"} 
              className="text-base px-4 py-2"
            >
              {selectedImages.size} of {maxSelections} photos selected
            </Badge>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
