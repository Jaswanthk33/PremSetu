// Screenshot protection utilities
export class ScreenshotProtection {
  private isProtectionActive = false;
  private overlayElement: HTMLDivElement | null = null;
  private keyboardListeners: Array<() => void> = [];
  private contextMenuListener: ((e: Event) => void) | null = null;
  private devToolsDetector: NodeJS.Timeout | null = null;
  private blurTimeout: NodeJS.Timeout | null = null;
  private mobileProtectionElements: HTMLElement[] = [];
  private visibilityCheckInterval: NodeJS.Timeout | null = null;
  private screenRecordingWarning: HTMLElement | null = null;

  // Disable common screenshot keyboard shortcuts
  private disableScreenshotKeys = (e: KeyboardEvent) => {
    const forbiddenKeys = [
      // Windows/Linux screenshot keys
      { key: 'PrintScreen' },
      { key: 'F12' }, // Dev tools
      { ctrlKey: true, shiftKey: true, key: 'I' }, // Dev tools
      { ctrlKey: true, shiftKey: true, key: 'J' }, // Dev tools console
      { ctrlKey: true, key: 'U' }, // View source
      { key: 'F12' },
      // Mac screenshot keys
      { metaKey: true, shiftKey: true, key: '3' }, // Full screen
      { metaKey: true, shiftKey: true, key: '4' }, // Selection
      { metaKey: true, shiftKey: true, key: '5' }, // Screenshot utility
      // Developer tools
      { metaKey: true, altKey: true, key: 'I' }, // Mac dev tools
      { metaKey: true, altKey: true, key: 'J' }, // Mac dev tools console
    ];

    const matchesShortcut = forbiddenKeys.some(shortcut => 
      Object.entries(shortcut).every(([prop, value]) => 
        (e as any)[prop] === value
      )
    );

    if (matchesShortcut) {
      e.preventDefault();
      e.stopPropagation();
      this.showWarning('Screenshots are disabled for preview images');
      return false;
    }
  };

  // Disable right-click context menu
  private disableContextMenu = (e: Event) => {
    e.preventDefault();
    this.showWarning('Right-click is disabled for preview images');
    return false;
  };

  // Create invisible overlay to prevent drag/save operations
  private createProtectiveOverlay() {
    if (this.overlayElement) return;

    this.overlayElement = document.createElement('div');
    this.overlayElement.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 9999;
      pointer-events: none;
      background: transparent;
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
    `;
    document.body.appendChild(this.overlayElement);
  }

  // Remove protective overlay
  private removeProtectiveOverlay() {
    if (this.overlayElement) {
      document.body.removeChild(this.overlayElement);
      this.overlayElement = null;
    }
  }

  // Enhanced mobile-focused visibility detection
  private handleVisibilityChange = () => {
    const images = document.querySelectorAll('.protected-image');
    const isMobile = this.isMobileDevice();
    
    if (document.hidden || !document.hasFocus()) {
      // Window lost focus - potential screenshot attempt
      images.forEach(img => {
        (img as HTMLElement).style.filter = 'blur(30px)';
        (img as HTMLElement).style.opacity = '0.1';
      });
      
      if (isMobile) {
        this.showWarning('Content hidden - Screenshots detected on mobile');
        this.triggerHapticFeedback();
      } else {
        this.showWarning('Content hidden for security');
      }
    } else {
      // Window gained focus - restore content after delay
      if (this.blurTimeout) clearTimeout(this.blurTimeout);
      this.blurTimeout = setTimeout(() => {
        images.forEach(img => {
          (img as HTMLElement).style.filter = 'none';
          (img as HTMLElement).style.opacity = '1';
        });
      }, isMobile ? 1000 : 500); // Longer delay on mobile
    }
  };

  // Mobile device detection
  private isMobileDevice(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           window.innerWidth <= 768 ||
           ('ontouchstart' in window);
  }

  // Trigger haptic feedback on mobile (if available)
  private triggerHapticFeedback() {
    if ('vibrate' in navigator) {
      navigator.vibrate([100, 50, 100]); // Short vibration pattern
    }
  }

  // Enhanced mobile screenshot detection
  private detectMobileScreenshot = () => {
    const isMobile = this.isMobileDevice();
    if (!isMobile) return;

    // Monitor for common mobile screenshot indicators
    let lastVisibilityChange = Date.now();
    
    const checkForScreenshotSigns = () => {
      const now = Date.now();
      const timeSinceLastChange = now - lastVisibilityChange;
      
      // Very quick visibility changes often indicate screenshot
      if (document.hidden && timeSinceLastChange < 100) {
        this.showMobileScreenshotWarning();
        this.blurAllImages();
      }
      
      lastVisibilityChange = now;
    };
    
    document.addEventListener('visibilitychange', checkForScreenshotSigns);
    
    return () => document.removeEventListener('visibilitychange', checkForScreenshotSigns);
  };

  // Show mobile-specific screenshot warning
  private showMobileScreenshotWarning() {
    this.showWarning('📱 Mobile screenshot detected! Content temporarily hidden.');
    this.triggerHapticFeedback();
    
    // Additional mobile warning overlay
    this.createMobileWarningOverlay();
  }

  // Create mobile warning overlay
  private createMobileWarningOverlay() {
    if (this.screenRecordingWarning) return;
    
    this.screenRecordingWarning = document.createElement('div');
    this.screenRecordingWarning.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.9);
        z-index: 999999;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        font-family: system-ui, -apple-system, sans-serif;
        text-align: center;
        padding: 20px;
      ">
        <div style="font-size: 48px; margin-bottom: 20px;">📱</div>
        <h2 style="font-size: 24px; margin: 0 0 16px 0; color: #ff6b6b;">Screenshot Detected</h2>
        <p style="font-size: 16px; margin: 0 0 20px 0; opacity: 0.9;">Preview images are protected.</p>
        <p style="font-size: 14px; margin: 0; opacity: 0.7;">Purchase to get full HD quality images without watermarks.</p>
        <button onclick="this.parentElement.parentElement.remove()" style="
          margin-top: 30px;
          padding: 12px 24px;
          background: #007AFF;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        ">Continue Viewing</button>
      </div>
    `;
    
    document.body.appendChild(this.screenRecordingWarning);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (this.screenRecordingWarning && this.screenRecordingWarning.parentNode) {
        this.screenRecordingWarning.parentNode.removeChild(this.screenRecordingWarning);
        this.screenRecordingWarning = null;
      }
    }, 5000);
  }

  // Detect developer tools opening
  private detectDevTools = () => {
    const threshold = 160;
    
    if (window.outerHeight - window.innerHeight > threshold || 
        window.outerWidth - window.innerWidth > threshold) {
      this.showWarning('Developer tools detected. Preview disabled for security.');
      this.blurAllImages();
    }
  };

  // Blur all protected images
  private blurAllImages() {
    const images = document.querySelectorAll('.protected-image');
    images.forEach(img => {
      (img as HTMLElement).style.filter = 'blur(30px)';
      (img as HTMLElement).style.opacity = '0.1';
    });
  }

  // Show warning message
  private showWarning(message: string) {
    // Create or update warning element
    let warningElement = document.getElementById('screenshot-warning');
    
    if (!warningElement) {
      warningElement = document.createElement('div');
      warningElement.id = 'screenshot-warning';
      warningElement.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #ef4444;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        z-index: 10000;
        font-family: system-ui, -apple-system, sans-serif;
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transition: all 0.3s ease;
        opacity: 0;
      `;
      document.body.appendChild(warningElement);
    }

    warningElement.textContent = message;
    warningElement.style.opacity = '1';

    // Auto-hide after 3 seconds
    setTimeout(() => {
      if (warningElement) {
        warningElement.style.opacity = '0';
        setTimeout(() => {
          if (warningElement && warningElement.parentNode) {
            warningElement.parentNode.removeChild(warningElement);
          }
        }, 300);
      }
    }, 3000);
  }

  // Enhanced mobile-focused image protection
  public protectImages(selector: string = '.protected-image') {
    const images = document.querySelectorAll(selector);
    const isMobile = this.isMobileDevice();
    
    images.forEach(img => {
      const imgElement = img as HTMLImageElement;
      
      // Disable drag and drop
      imgElement.draggable = false;
      
      // Disable selection
      imgElement.style.userSelect = 'none';
      imgElement.style.webkitUserSelect = 'none';
      (imgElement.style as any).mozUserSelect = 'none';
      (imgElement.style as any).msUserSelect = 'none';
      
      // Enhanced mobile protection
      if (isMobile) {
        // Disable long press on mobile
        imgElement.style.webkitTouchCallout = 'none';
        imgElement.style.webkitUserSelect = 'none';
        imgElement.style.touchAction = 'manipulation'; // Disable zoom
        
        // Add mobile-specific event listeners
        const preventMobileActions = (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
          this.showWarning('Image protection active on mobile');
          return false;
        };
        
        imgElement.addEventListener('touchstart', preventMobileActions, { passive: false });
        imgElement.addEventListener('touchend', preventMobileActions, { passive: false });
        imgElement.addEventListener('touchmove', preventMobileActions, { passive: false });
        imgElement.addEventListener('contextmenu', preventMobileActions);
        
        this.mobileProtectionElements.push(imgElement);
      }
      
      // Images themselves should not be interactive, but overlays can be
      imgElement.style.pointerEvents = 'none';
      
      // Add a transparent overlay div for each image
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        z-index: 1;
        user-select: none;
        -webkit-user-select: none;
        pointer-events: auto;
        ${isMobile ? 'touch-action: none;' : ''}
      `;
      
      // Make parent container relative if not already positioned
      const parent = imgElement.parentElement;
      if (parent && getComputedStyle(parent).position === 'static') {
        parent.style.position = 'relative';
      }
      
      // Insert overlay after image
      if (parent) {
        parent.appendChild(overlay);
        this.mobileProtectionElements.push(overlay);
      }
    });
  }

  // Start protection with mobile enhancements
  public startProtection() {
    if (this.isProtectionActive) return;
    
    this.isProtectionActive = true;
    const isMobile = this.isMobileDevice();

    // Disable keyboard shortcuts (mainly for desktop)
    if (!isMobile) {
      const keyListener = (e: KeyboardEvent) => this.disableScreenshotKeys(e);
      document.addEventListener('keydown', keyListener, { capture: true });
      this.keyboardListeners.push(() => document.removeEventListener('keydown', keyListener, { capture: true }));
    }

    // Disable context menu
    this.contextMenuListener = (e: Event) => this.disableContextMenu(e);
    document.addEventListener('contextmenu', this.contextMenuListener, { capture: true });

    // Enhanced mobile detection
    if (isMobile) {
      // More aggressive visibility monitoring for mobile
      this.visibilityCheckInterval = setInterval(() => {
        if (document.hidden) {
          this.blurAllImages();
        }
      }, 100);
      
      // Mobile screenshot detection
      this.detectMobileScreenshot();
      
      // Show mobile warning
      this.showMobileProtectionNotice();
    }

    // Monitor window focus/visibility
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
    window.addEventListener('blur', this.handleVisibilityChange);
    window.addEventListener('focus', this.handleVisibilityChange);

    // Create protective overlay
    this.createProtectiveOverlay();

    // Start dev tools detection (less relevant on mobile)
    if (!isMobile) {
      this.devToolsDetector = setInterval(() => {
        this.detectDevTools();
      }, 1000);
    }

    // Add CSS to prevent text selection globally
    const style = document.createElement('style');
    style.id = 'screenshot-protection-styles';
    style.textContent = `
      .screenshot-protected {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
        -webkit-touch-callout: none !important;
        -webkit-tap-highlight-color: transparent !important;
        ${isMobile ? 'touch-action: manipulation !important;' : ''}
      }
      
      .protected-image {
        -webkit-user-drag: none !important;
        -khtml-user-drag: none !important;
        -moz-user-drag: none !important;
        -o-user-drag: none !important;
        user-drag: none !important;
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
        pointer-events: none !important;
        ${isMobile ? 'touch-action: none !important;' : ''}
      }
      
      .pointer-events-auto {
        pointer-events: auto !important;
      }
      
      ${isMobile ? `
        body {
          -webkit-touch-callout: none !important;
          -webkit-user-select: none !important;
          touch-action: manipulation !important;
        }
      ` : ''}
    `;
    document.head.appendChild(style);

    console.log(`Screenshot protection activated (${isMobile ? 'Mobile' : 'Desktop'} mode)`);
  }
  
  // Show mobile-specific protection notice
  private showMobileProtectionNotice() {
    const notice = document.createElement('div');
    notice.id = 'mobile-protection-notice';
    notice.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #1f2937;
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      z-index: 9998;
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 12px;
      text-align: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      max-width: 90vw;
    `;
    notice.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px;">
        <span>🛡️</span>
        <span>Preview images are protected against screenshots</span>
      </div>
    `;
    
    document.body.appendChild(notice);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      if (notice && notice.parentNode) {
        notice.style.opacity = '0';
        notice.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
          notice.parentNode?.removeChild(notice);
        }, 300);
      }
    }, 5000);
  }

  // Stop protection
  public stopProtection() {
    if (!this.isProtectionActive) return;
    
    this.isProtectionActive = false;

    // Remove all event listeners
    this.keyboardListeners.forEach(removeListener => removeListener());
    this.keyboardListeners = [];

    if (this.contextMenuListener) {
      document.removeEventListener('contextmenu', this.contextMenuListener, { capture: true });
      this.contextMenuListener = null;
    }

    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    window.removeEventListener('blur', this.handleVisibilityChange);
    window.removeEventListener('focus', this.handleVisibilityChange);

    // Stop dev tools detection
    if (this.devToolsDetector) {
      clearInterval(this.devToolsDetector);
      this.devToolsDetector = null;
    }

    // Clear blur timeout
    if (this.blurTimeout) {
      clearTimeout(this.blurTimeout);
      this.blurTimeout = null;
    }
    
    // Clear mobile-specific intervals
    if (this.visibilityCheckInterval) {
      clearInterval(this.visibilityCheckInterval);
      this.visibilityCheckInterval = null;
    }
    
    // Clean up mobile protection elements
    this.mobileProtectionElements = [];
    
    // Remove screen recording warning
    if (this.screenRecordingWarning && this.screenRecordingWarning.parentNode) {
      this.screenRecordingWarning.parentNode.removeChild(this.screenRecordingWarning);
      this.screenRecordingWarning = null;
    }
    
    // Remove mobile notice
    const mobileNotice = document.getElementById('mobile-protection-notice');
    if (mobileNotice) {
      mobileNotice.remove();
    }

    // Remove protective overlay
    this.removeProtectiveOverlay();

    // Remove protection styles
    const protectionStyles = document.getElementById('screenshot-protection-styles');
    if (protectionStyles) {
      protectionStyles.remove();
    }

    // Remove warning if exists
    const warning = document.getElementById('screenshot-warning');
    if (warning) {
      warning.remove();
    }

    // Restore all images
    const images = document.querySelectorAll('.protected-image');
    images.forEach(img => {
      const imgElement = img as HTMLElement;
      imgElement.style.filter = 'none';
      imgElement.style.opacity = '1';
      imgElement.style.pointerEvents = 'auto';
    });

    console.log('Screenshot protection deactivated');
  }

  // Check if protection is active
  public isActive(): boolean {
    return this.isProtectionActive;
  }
}

// Export singleton instance
export const screenshotProtection = new ScreenshotProtection();
