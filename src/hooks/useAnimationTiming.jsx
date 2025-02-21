import { useState, useEffect } from 'react';

export const useAnimationTiming = () => {
  const [animationDuration, setAnimationDuration] = useState('0.8s');

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setAnimationDuration('0.3s');
    } else {
      setAnimationDuration('0.8s');
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  return animationDuration;
};