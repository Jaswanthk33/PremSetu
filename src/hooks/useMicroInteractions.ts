import { useState, useEffect, useCallback } from 'react';

export interface MicroInteractionConfig {
  trigger: 'hover' | 'click' | 'focus' | 'success' | 'error' | 'loading';
  animation: 'bounce' | 'pulse' | 'scale' | 'shake' | 'glow' | 'slide';
  duration?: number;
  delay?: number;
}

export function useMicroInteractions() {
  const [activeAnimations, setActiveAnimations] = useState<Set<string>>(new Set());

  const triggerAnimation = useCallback((
    elementId: string, 
    config: MicroInteractionConfig
  ) => {
    setActiveAnimations(prev => new Set(prev).add(`${elementId}-${config.animation}`));
    
    setTimeout(() => {
      setActiveAnimations(prev => {
        const newSet = new Set(prev);
        newSet.delete(`${elementId}-${config.animation}`);
        return newSet;
      });
    }, config.duration || 300);
  }, []);

  const getAnimationClasses = useCallback((elementId: string, animation: string) => {
    const animationKey = `${elementId}-${animation}`;
    if (!activeAnimations.has(animationKey)) return '';

    const classMap = {
      bounce: 'animate-bounce',
      pulse: 'animate-pulse',
      scale: 'animate-ping',
      shake: 'animate-bounce', // Using bounce as shake alternative
      glow: 'animate-pulse',
      slide: 'animate-bounce'
    };

    return classMap[animation as keyof typeof classMap] || '';
  }, [activeAnimations]);

  return { triggerAnimation, getAnimationClasses };
}

// Celebration hook for success moments
export function useCelebration() {
  const [iscelebrating, setIsCelebrating] = useState(false);

  const celebrate = useCallback((duration: number = 3000) => {
    setIsCelebrating(true);
    setTimeout(() => setIsCelebrating(false), duration);
  }, []);

  return { iscelebrating, celebrate };
}

// Progress motivation hook
export function useProgressMotivation(currentStep: number, totalSteps: number) {
  const [motivationMessage, setMotivationMessage] = useState('');
  const [showMotivation, setShowMotivation] = useState(false);

  const progressPercentage = (currentStep / totalSteps) * 100;

  useEffect(() => {
    let message = '';
    let show = false;

    if (progressPercentage >= 75) {
      message = "🎉 Almost there! You're so close to seeing the magic!";
      show = true;
    } else if (progressPercentage >= 50) {
      message = "🌟 Great progress! Halfway to your magical photos!";
      show = true;
    } else if (progressPercentage >= 25) {
      message = "✨ You're doing amazing! Keep going!";
      show = true;
    }

    setMotivationMessage(message);
    setShowMotivation(show);
  }, [progressPercentage]);

  return { motivationMessage, showMotivation, progressPercentage };
}

// Emotional feedback hook
export function useEmotionalFeedback() {
  const [currentEmotion, setCurrentEmotion] = useState<'neutral' | 'excited' | 'confident' | 'satisfied'>('neutral');

  const emotions = {
    neutral: { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-200' },
    excited: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
    confident: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
    satisfied: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' }
  };

  const setEmotion = useCallback((emotion: keyof typeof emotions) => {
    setCurrentEmotion(emotion);
  }, []);

  return { 
    currentEmotion, 
    setEmotion, 
    emotionStyles: emotions[currentEmotion] 
  };
}