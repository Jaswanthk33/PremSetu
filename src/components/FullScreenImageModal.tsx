import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut,
  RotateCcw,
  Download,
  Heart,
  Check
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageData {
  id: string;
  url: string;
  thumbnail: string;
  style: string;
}

interface FullScreenImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: ImageData[];
  currentImageIndex: number;
  selectedImages: string[];
  onImageSelect: (imageId: string) => void;
  onImageChange?: (index: number) => void;
}

export default function FullScreenImageModal({
  isOpen,
  onClose,
  images,
  currentImageIndex,
  selectedImages,
  onImageSelect,
  onImageChange
}: FullScreenImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(currentImageIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const currentImage = images[currentIndex];
  const isSelected = currentImage ? selectedImages.includes(currentImage.id) : false;

  // Reset zoom and pan when image changes
  useEffect(() => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  }, [currentIndex]);

  // Sync with external currentImageIndex changes
  useEffect(() => {
    setCurrentIndex(currentImageIndex);
  }, [currentImageIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case ' ':
          e.preventDefault();
          if (currentImage) {
            onImageSelect(currentImage.id);
          }
          break;
        case '+':
        case '=':
          zoomIn();
          break;
        case '-':
          zoomOut();
          break;
        case '0':
          resetZoom();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, currentIndex, currentImage, onImageSelect]);

  const goToNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    onImageChange?.(nextIndex);
  }, [currentIndex, images.length, onImageChange]);

  const goToPrevious = useCallback(() => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    onImageChange?.(prevIndex);
  }, [currentIndex, images.length, onImageChange]);

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev * 1.2, 3));
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev / 1.2, 0.5));
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - panPosition.x, y: e.clientY - panPosition.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPanPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (!isOpen || !currentImage) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0" onClick={onClose} />
      
      {/* Top bar - Mobile optimized layout */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4">
        {/* Left side - Image info */}
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="secondary" className="bg-black/70 text-white border-white/20 text-xs">
            {currentIndex + 1}/{images.length}
          </Badge>
          <Badge variant="secondary" className="bg-black/70 text-white border-white/20 text-xs hidden sm:inline-flex">
            {currentImage.style}
          </Badge>
          {isSelected && (
            <Badge className="bg-green-600 text-white text-xs">
              <Check className="w-3 h-3 mr-1" />
              Selected
            </Badge>
          )}
        </div>
        
        {/* Right side - Selection count and close */}
        <div className="flex items-center gap-3">
          {selectedImages.length > 0 && (
            <Badge className="bg-primary/90 text-white border-primary/50 text-xs">
              <Heart className="w-3 h-3 mr-1" />
              {selectedImages.length} selected
            </Badge>
          )}
          <Button
            variant="ghost"
            size="lg"
            className="bg-black/70 hover:bg-black/90 text-white border border-white/30 shadow-lg backdrop-blur-sm md:size-sm md:bg-black/50 w-10 h-10"
            onClick={onClose}
            aria-label="Close preview"
          >
            <X className="w-5 h-5 md:w-4 md:h-4" />
          </Button>
        </div>
      </div>


      {/* Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-black/70 backdrop-blur-sm rounded-xl p-3 flex items-center gap-2">
          {/* Navigation */}
          <Button
            variant="ghost"
            size="sm"
            onClick={goToPrevious}
            className="text-white hover:bg-white/20"
            disabled={images.length <= 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={goToNext}
            className="text-white hover:bg-white/20"
            disabled={images.length <= 1}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          <div className="w-px h-6 bg-white/20 mx-2" />

          {/* Zoom controls */}
          <Button
            variant="ghost"
            size="sm"
            onClick={zoomOut}
            className="text-white hover:bg-white/20"
            disabled={zoomLevel <= 0.5}
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
          
          <span className="text-white text-sm font-mono min-w-[4rem] text-center">
            {Math.round(zoomLevel * 100)}%
          </span>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={zoomIn}
            className="text-white hover:bg-white/20"
            disabled={zoomLevel >= 3}
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={resetZoom}
            className="text-white hover:bg-white/20"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>

          <div className="w-px h-6 bg-white/20 mx-2" />

          {/* Actions */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onImageSelect(currentImage.id)}
            className={cn(
              "text-white hover:bg-white/20 border border-white/20",
              isSelected && "bg-green-600/80 hover:bg-green-600 border-green-400"
            )}
            title={isSelected ? 'Remove from selection' : 'Add to selection'}
          >
            {isSelected ? (
              <Check className="w-4 h-4" />
            ) : (
              <span className="w-4 h-4 border border-white rounded-sm" />
            )}
          </Button>
          
          {/* Selection Counter in Controls - Desktop only */}
          <div className="w-px h-6 bg-white/20 mx-2 hidden sm:block" />
          
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-lg border border-primary/30">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-white text-sm font-medium">
              {selectedImages.length} selected
            </span>
          </div>
        </div>
      </div>

      {/* Navigation arrows - Enhanced for mobile */}
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="lg"
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white border border-white/30 shadow-lg backdrop-blur-sm w-12 h-12 md:w-auto md:h-auto"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </Button>
          
          <Button
            variant="ghost"
            size="lg"
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white border border-white/30 shadow-lg backdrop-blur-sm w-12 h-12 md:w-auto md:h-auto"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </Button>
          
          {/* Mobile: Additional swipe areas for easier navigation */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-20 z-5 md:hidden" 
            onClick={goToPrevious}
            aria-label="Previous image area"
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-20 z-5 md:hidden" 
            onClick={goToNext}
            aria-label="Next image area"
          />
        </>
      )}

      {/* Image container */}
      <div 
        className="relative max-w-full max-h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ 
          cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' 
        }}
      >
        <img
          src={currentImage.url}
          alt={currentImage.style}
          className="max-w-none transition-transform duration-200 select-none"
          style={{
            transform: `scale(${zoomLevel}) translate(${panPosition.x / zoomLevel}px, ${panPosition.y / zoomLevel}px)`,
            maxHeight: '90vh',
            maxWidth: zoomLevel === 1 ? '90vw' : 'none'
          }}
          draggable={false}
        />
        
        {/* Preview watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white/10 text-white px-6 py-3 rounded-lg text-2xl font-bold backdrop-blur-sm border border-white/20">
            PREVIEW
          </div>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-black/70 backdrop-blur-sm rounded-xl p-2">
          <div className="flex gap-2 max-w-xs overflow-x-auto scrollbar-hide">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => {
                  setCurrentIndex(index);
                  onImageChange?.(index);
                }}
                className={cn(
                  "relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200",
                  index === currentIndex 
                    ? "border-purple-500 scale-110" 
                    : "border-white/20 hover:border-white/50"
                )}
              >
                <img
                  src={image.thumbnail}
                  alt={image.style}
                  className="w-full h-full object-cover"
                />
                {selectedImages.includes(image.id) && (
                  <div className="absolute top-1 right-1">
                    <div className="w-4 h-4 bg-green-600 rounded border border-green-400 flex items-center justify-center">
                      <Check className="w-2 h-2 text-white" />
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Instructions - Desktop only */}
      <div className="absolute top-24 left-4 z-10 hidden md:block">
        <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white text-sm space-y-1 max-w-xs">
          <div className="font-semibold mb-2">Keyboard Shortcuts:</div>
          <div>← → Navigate images</div>
          <div>Space: Select/deselect</div>
          <div>+/- : Zoom in/out</div>
          <div>0: Reset zoom</div>
          <div>Esc: Close preview</div>
        </div>
      </div>

      
      {/* Mobile Help - Show briefly on first load */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 md:hidden">
        <div className="bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-xs text-center animate-pulse">
          <div>Tap sides to navigate • Select photos • Close with ✕</div>
        </div>
      </div>
    </div>
  );
}