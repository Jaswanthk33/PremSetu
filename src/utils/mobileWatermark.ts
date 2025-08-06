// Mobile-optimized watermarking utility
export class MobileWatermark {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;

  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
  }

  // Create heavily watermarked image for mobile preview
  public createWatermarkedImage(imageUrl: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      img.onload = () => {
        if (!this.canvas || !this.ctx) return reject('Canvas not available');
        
        // Set canvas size to match image
        this.canvas.width = img.width;
        this.canvas.height = img.height;
        
        // Draw original image
        this.ctx.drawImage(img, 0, 0);
        
        // Add multiple watermarks
        this.addRepeatingWatermarks(img.width, img.height);
        this.addBorderWatermark(img.width, img.height);
        this.addCenterWatermark(img.width, img.height);
        
        // Reduce image quality for preview
        const watermarkedDataUrl = this.canvas.toDataURL('image/jpeg', 0.6);
        resolve(watermarkedDataUrl);
      };
      
      img.onerror = () => reject('Failed to load image');
      img.src = imageUrl;
    });
  }

  // Add repeating watermarks across the image
  private addRepeatingWatermarks(width: number, height: number) {
    if (!this.ctx) return;
    
    this.ctx.save();
    this.ctx.globalAlpha = 0.15;
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = `${Math.max(20, width / 25)}px Arial`;
    this.ctx.textAlign = 'center';
    
    const watermarkText = 'PREVIEW';
    const spacing = Math.max(150, width / 8);
    
    // Rotate text
    this.ctx.rotate(-Math.PI / 6);
    
    // Add watermarks in grid pattern
    for (let x = -width; x < width * 2; x += spacing) {
      for (let y = -height; y < height * 2; y += spacing) {
        this.ctx.fillText(watermarkText, x, y);
      }
    }
    
    this.ctx.restore();
  }

  // Add border watermark
  private addBorderWatermark(width: number, height: number) {
    if (!this.ctx) return;
    
    this.ctx.save();
    this.ctx.globalAlpha = 0.8;
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    
    const borderSize = Math.max(10, Math.min(width, height) / 50);
    
    // Top border
    this.ctx.fillRect(0, 0, width, borderSize);
    // Bottom border
    this.ctx.fillRect(0, height - borderSize, width, borderSize);
    // Left border
    this.ctx.fillRect(0, 0, borderSize, height);
    // Right border
    this.ctx.fillRect(width - borderSize, 0, borderSize, height);
    
    // Add text on borders
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = `${borderSize * 0.6}px Arial`;
    this.ctx.textAlign = 'center';
    this.ctx.fillText('PREVIEW - NOT FOR DISTRIBUTION', width / 2, borderSize * 0.7);
    
    this.ctx.restore();
  }

  // Add prominent center watermark
  private addCenterWatermark(width: number, height: number) {
    if (!this.ctx) return;
    
    this.ctx.save();
    this.ctx.globalAlpha = 0.3;
    
    // Semi-transparent overlay
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    this.ctx.fillRect(width * 0.25, height * 0.4, width * 0.5, height * 0.2);
    
    // Main watermark text
    this.ctx.globalAlpha = 0.9;
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = `bold ${Math.max(24, width / 15)}px Arial`;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    
    this.ctx.fillText('PREVIEW', width / 2, height / 2 - 10);
    
    // Subtitle
    this.ctx.font = `${Math.max(12, width / 30)}px Arial`;
    this.ctx.fillText('Purchase for HD Quality', width / 2, height / 2 + 15);
    
    this.ctx.restore();
  }

  // Create low-quality blurred version
  public createLowQualityPreview(imageUrl: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      img.onload = () => {
        if (!this.canvas || !this.ctx) return reject('Canvas not available');
        
        // Reduce canvas size for lower quality
        const scaleFactor = 0.5;
        this.canvas.width = img.width * scaleFactor;
        this.canvas.height = img.height * scaleFactor;
        
        // Apply blur filter
        this.ctx.filter = 'blur(1px)';
        this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
        
        // Add noise/grain
        this.addNoise();
        
        // Export with low quality
        const previewDataUrl = this.canvas.toDataURL('image/jpeg', 0.4);
        resolve(previewDataUrl);
      };
      
      img.onerror = () => reject('Failed to load image');
      img.src = imageUrl;
    });
  }

  // Add grain/noise to make screenshots less appealing
  private addNoise() {
    if (!this.ctx || !this.canvas) return;
    
    const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const data = imageData.data;
    
    // Add subtle noise
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 20;
      data[i] = Math.max(0, Math.min(255, data[i] + noise));     // Red
      data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise)); // Green
      data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise)); // Blue
    }
    
    this.ctx.putImageData(imageData, 0, 0);
  }

  // Clean up resources
  public destroy() {
    this.canvas = null;
    this.ctx = null;
  }
}

// Export singleton instance
export const mobileWatermark = new MobileWatermark();
