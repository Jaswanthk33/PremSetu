import { useState, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Upload, X, Image as ImageIcon, AlertTriangle, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageUploadProps {
  onImageSelect?: (file: File) => void;
  onImageRemove?: () => void;
  maxSizeMB?: number;
  acceptedFormats?: string[];
  className?: string;
}

const ImageUpload = ({ 
  onImageSelect, 
  onImageRemove, 
  maxSizeMB = 10,
  acceptedFormats = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
  className 
}: ImageUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [qualityScore, setQualityScore] = useState<{score: number, feedback: string[]} | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    // Check file type
    if (!acceptedFormats.includes(file.type)) {
      return `Please upload a valid image file (${acceptedFormats.map(f => f.split('/')[1].toUpperCase()).join(', ')})`;
    }

    // Check file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSizeMB) {
      return `File size must be less than ${maxSizeMB}MB`;
    }

    return null;
  };

  const analyzeImageQuality = (file: File): Promise<{score: number, feedback: string[]}> => {
    return new Promise((resolve) => {
      const img = new Image();
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        
        const feedback: string[] = [];
        let score = 100;
        
        // Check resolution
        const totalPixels = img.width * img.height;
        if (totalPixels < 1000000) { // < 1MP
          score -= 30;
          feedback.push("📱 Consider using a higher resolution image for better results");
        } else if (totalPixels > 5000000) { // > 5MP
          feedback.push("✨ Excellent resolution - perfect for AI processing!");
        }
        
        // Check aspect ratio (prefer portrait for babies)
        const aspectRatio = img.width / img.height;
        if (aspectRatio < 0.7 || aspectRatio > 1.3) {
          score -= 10;
          feedback.push("📏 Square or portrait orientation works best for baby photos");
        }
        
        // Simulate other quality checks
        const fileSize = file.size / (1024 * 1024);
        if (fileSize > 8) {
          feedback.push("🎯 Large file size - AI will have lots of detail to work with!");
        } else if (fileSize < 1) {
          score -= 20;
          feedback.push("📷 Image might be compressed - try uploading the original photo");
        }
        
        // Add positive feedback for good scores
        if (score >= 90) {
          feedback.unshift("🌟 Perfect! This image will create amazing AI photos");
        } else if (score >= 70) {
          feedback.unshift("✅ Good quality - should work well for AI processing");
        } else if (score >= 50) {
          feedback.unshift("⚠️ Decent quality - results may vary");
        } else {
          feedback.unshift("❌ Poor quality - consider uploading a different image");
        }
        
        resolve({ score: Math.max(score, 0), feedback });
      };
      
      img.src = URL.createObjectURL(file);
    });
  };

  const handleFile = useCallback(async (file: File) => {
    setError(null);
    setQualityScore(null);
    
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    setSelectedImage(file);
    
    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    // Simulate upload progress and quality analysis
    setUploading(true);
    setUploadProgress(0);
    
    // Analyze image quality
    try {
      const quality = await analyzeImageQuality(file);
      setQualityScore(quality);
    } catch (error) {
      console.error('Quality analysis failed:', error);
    }
    
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          onImageSelect?.(file);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

  }, [maxSizeMB, acceptedFormats, onImageSelect]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  }, [handleFile]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  }, [handleFile]);

  const removeImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    setError(null);
    setUploadProgress(0);
    setUploading(false);
    setQualityScore(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onImageRemove?.();
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  if (selectedImage && imagePreview) {
    return (
      <Card className={cn(
        "w-full max-w-md mx-auto transition-all duration-500",
        uploading ? "border-blue-200 bg-blue-50/30" : "border-green-200 bg-green-50/30",
        className
      )}>
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Image preview with overlay states */}
            <div className="relative">
              <img
                src={imagePreview}
                alt="Your uploaded baby photo"
                className={cn(
                  "w-full h-48 object-cover rounded-lg shadow-md border-2 transition-all duration-300",
                  uploading ? "border-blue-200 opacity-75" : "border-green-200 opacity-100"
                )}
              />
              
              {/* Upload progress overlay */}
              {uploading && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
                      <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-sm font-medium">Processing your photo...</span>
                    </div>
                    <div className="w-32 mx-auto">
                      <Progress value={uploadProgress} className="h-2" />
                      <p className="text-xs text-blue-600 mt-1">{uploadProgress}% complete</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Success overlay - only shown when upload completes */}
              {!uploading && (
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-lg">
                  <div className="absolute top-3 left-3">
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-green-600 text-white rounded-full text-xs font-medium shadow-lg">
                      <CheckCircle className="w-3 h-3" />
                      <span>Ready</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Remove button - always visible */}
              <Button
                variant="destructive"
                size="sm"
                className="absolute top-3 right-3 shadow-lg z-10"
                onClick={removeImage}
                disabled={uploading}
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
            
            {/* Status section */}
            <div className="space-y-3">
              {uploading ? (
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-blue-900">Processing Your Photo</h3>
                  <p className="text-sm text-blue-600">
                    We're analyzing your photo and preparing it for magical transformation
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-green-900 flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Photo Ready!
                  </h3>
                  <p className="text-sm text-green-700">
                    Your photo is ready to be transformed into magical memories
                  </p>
                </div>
              )}

              {/* Quality Score Display */}
              {qualityScore && !uploading && (
                <div className="bg-white/80 rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-sm">Photo Quality Analysis</h4>
                    <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      qualityScore.score >= 90 ? 'bg-green-100 text-green-800' :
                      qualityScore.score >= 70 ? 'bg-blue-100 text-blue-800' :
                      qualityScore.score >= 50 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {qualityScore.score}/100
                    </div>
                  </div>
                  <div className="space-y-1">
                    {qualityScore.feedback.map((feedback, index) => (
                      <p key={index} className="text-xs text-gray-600">
                        {feedback}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              
              {/* File details */}
              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground border-t pt-3">
                <span className="font-medium">{selectedImage.name}</span>
                <span>•</span>
                <span>{(selectedImage.size / 1024 / 1024).toFixed(2)} MB</span>
                <span>•</span>
                <span className={cn(
                  "font-medium",
                  uploading ? "text-blue-600" : "text-green-600"
                )}>
                  {uploading ? "Processing..." : "Complete"}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn("w-full max-w-md mx-auto shadow-lg", className)}>
      <CardContent className="p-6">
        <div
          className={cn(
            "relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 cursor-pointer group",
            "hover:shadow-md hover:border-primary/60 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10",
            dragActive
              ? "border-primary bg-gradient-to-br from-primary/10 to-primary/20 shadow-md scale-105"
              : "border-muted-foreground/30"
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={openFileDialog}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={acceptedFormats.join(',')}
            onChange={handleFileSelect}
            className="hidden"
          />
          
          {/* Background decoration */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative space-y-5">
            <div className="flex justify-center">
              <div className={cn(
                "p-4 rounded-full transition-all duration-300 group-hover:scale-110",
                dragActive 
                  ? "bg-primary/20 ring-4 ring-primary/30" 
                  : "bg-primary/10 group-hover:bg-primary/15"
              )}>
                <Upload className={cn(
                  "w-10 h-10 transition-colors duration-300",
                  dragActive ? "text-primary animate-bounce" : "text-primary/80 group-hover:text-primary"
                )} />
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className={cn(
                "text-xl font-bold transition-colors duration-300",
                dragActive ? "text-primary" : "text-foreground group-hover:text-primary"
              )}>
                {dragActive ? "Drop your photo here!" : "Upload Baby Photo"}
              </h3>
              <p className={cn(
                "text-sm leading-relaxed transition-colors duration-300",
                dragActive 
                  ? "text-primary/80" 
                  : "text-muted-foreground group-hover:text-muted-foreground/80"
              )}>
                {dragActive 
                  ? "Release to upload your precious memory" 
                  : "Drag and drop your baby's photo here, or click to browse"}
              </p>
            </div>
            
            {!dragActive && (
              <Button 
                variant="outline" 
                className="w-full border-2 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:shadow-md"
              >
                <ImageIcon className="w-4 h-4 mr-2" />
                Choose File
              </Button>
            )}
            
            <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground/80 pt-2 border-t border-muted-foreground/10">
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-green-500"></div>
                <span>{acceptedFormats.map(f => f.split('/')[1].toUpperCase()).join(', ')}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                <span>Max {maxSizeMB}MB</span>
              </div>
            </div>
          </div>
        </div>
        
        {error && (
          <Alert variant="destructive" className="mt-4 animate-in slide-in-from-top-2">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};

export default ImageUpload;
