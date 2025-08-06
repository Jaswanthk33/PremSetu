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

    // Only show on desktop/tablet, not mobile
    if (window.innerWidth > 768) {
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const hideExitIntent = () => {
    setShowExitIntent(false);
  };

  return { showExitIntent, hideExitIntent };
}