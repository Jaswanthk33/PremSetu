import { useState, useEffect } from 'react';

export function useExitIntent() {
  const [showExitIntent, setShowExitIntent] = useState(false);

  useEffect(() => {
    let isExitIntentShown = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 && 
        !isExitIntentShown && 
        !localStorage.getItem('exitIntentShown')
      ) {
        setShowExitIntent(true);
        isExitIntentShown = true;
        localStorage.setItem('exitIntentShown', 'true');
      }
    };

    // Handle back button on mobile
    const handlePopState = () => {
      if (!isExitIntentShown && !localStorage.getItem('exitIntentShown')) {
        setShowExitIntent(true);
        isExitIntentShown = true;
        localStorage.setItem('exitIntentShown', 'true');
        // Push state back to prevent actual navigation
        window.history.pushState(null, '', window.location.pathname);
      }
    };

    // Only show mouse leave on desktop/tablet
    if (window.innerWidth > 768) {
      document.addEventListener('mouseleave', handleMouseLeave);
    } else {
      // On mobile, detect back button intent
      window.history.pushState(null, '', window.location.pathname);
      window.addEventListener('popstate', handlePopState);
    }

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const hideExitIntent = () => {
    setShowExitIntent(false);
  };

  return { showExitIntent, hideExitIntent };
}