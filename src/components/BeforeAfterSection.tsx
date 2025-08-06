import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import babyBefore from "@/assets/baby-before.jpg";
import babyAfter from "@/assets/baby-after.jpg";

export default function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="py-16 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See the Magic Happen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No studio needed — just upload one photo and watch your baby transform into a professional model
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-card bg-card">
            {/* Before/After Images */}
            <div className="relative aspect-video">
              {/* After image (base) */}
              <img
                src={babyAfter}
                alt="Professional AI-generated baby photo"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Before image (overlay) */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={babyBefore}
                  alt="Original baby photo uploaded by parent"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Slider */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize z-10"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={(e) => {
                  const rect = e.currentTarget.parentElement?.getBoundingClientRect();
                  const handleMouseMove = (e: MouseEvent) => {
                    if (rect) {
                      const x = e.clientX - rect.left;
                      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
                      setSliderPosition(percentage);
                    }
                  };
                  const handleMouseUp = () => {
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseup', handleMouseUp);
                  };
                  document.addEventListener('mousemove', handleMouseMove);
                  document.addEventListener('mouseup', handleMouseUp);
                }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <ChevronLeft className="w-3 h-3 text-gray-600" />
                  <ChevronRight className="w-3 h-3 text-gray-600" />
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-lg text-sm font-medium">
              Original Photo
            </div>
            <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-lg text-sm font-medium">
              AI Generated
            </div>
          </div>

          {/* Mobile-friendly buttons */}
          <div className="flex justify-center mt-6 space-x-4 md:hidden">
            <Button 
              variant="baby" 
              size="sm"
              onClick={() => setSliderPosition(10)}
            >
              Show Original
            </Button>
            <Button 
              variant="baby" 
              size="sm"
              onClick={() => setSliderPosition(90)}
            >
              Show AI Result
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}