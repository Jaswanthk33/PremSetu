import { useEffect, useRef } from 'react';
import { screenshotProtection } from '@/utils/screenshotProtection';

interface UseScreenshotProtectionOptions {
  enabled?: boolean;
  imageSelector?: string;
  onAttempt?: (method: string) => void;
}

export const useScreenshotProtection = (options: UseScreenshotProtectionOptions = {}) => {
  const { enabled = true, imageSelector = '.protected-image', onAttempt } = options;
  const isEnabledRef = useRef(enabled);

  useEffect(() => {
    isEnabledRef.current = enabled;

    if (enabled) {
      // Start protection when component mounts or enabled becomes true
      screenshotProtection.startProtection();
      
      // Protect images if they exist
      setTimeout(() => {
        screenshotProtection.protectImages(imageSelector);
      }, 100);

      // Custom event listener for screenshot attempts
      if (onAttempt) {
        const handleAttempt = (event: CustomEvent) => {
          onAttempt(event.detail.method);
        };

        document.addEventListener('screenshot-attempt', handleAttempt as EventListener);
        
        return () => {
          document.removeEventListener('screenshot-attempt', handleAttempt as EventListener);
        };
      }
    }

    return () => {
      if (isEnabledRef.current) {
        screenshotProtection.stopProtection();
      }
    };
  }, [enabled, imageSelector, onAttempt]);

  // Re-protect images when new ones are added
  const protectNewImages = () => {
    if (enabled) {
      setTimeout(() => {
        screenshotProtection.protectImages(imageSelector);
      }, 50);
    }
  };

  return {
    protectNewImages,
    isActive: screenshotProtection.isActive(),
    startProtection: () => screenshotProtection.startProtection(),
    stopProtection: () => screenshotProtection.stopProtection(),
  };
};
