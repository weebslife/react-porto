import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AnimatedGreeting = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [shouldSlideUp, setShouldSlideUp] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(() => {
    return location.pathname === '/' && !localStorage.getItem('animationShown');
  });
  const greetings = ['Halo', 'Hello', '你好', 'こんにちは', '안녕하세요', 'Bonjour'];

  useEffect(() => {
    if (!isVisible) return;

    // Mark animation as shown
    localStorage.setItem('animationShown', 'true');

    const greetingInterval = setInterval(() => {
      setCurrentGreeting((prev) => {
        if (prev === greetings.length - 1) {
          setTimeout(() => {
            setIsTextVisible(false);
            setTimeout(() => {
              setShouldSlideUp(true);
              setTimeout(() => {
                setIsVisible(false);
                // Remove the flag when animation completes
                localStorage.removeItem('animationShown');
              }, 500);
            }, 300);
          }, 300);
          clearInterval(greetingInterval);
        }
        return (prev + 1) % greetings.length;
      });
    }, 200);

    return () => clearInterval(greetingInterval);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className={`absolute inset-0 bg-black ${
          shouldSlideUp ? 'animate-slideUp' : ''
        }`}
      />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className={`text-6xl md:text-8xl font-bold text-white ${
            !isTextVisible ? 'animate-fadeOut' : ''
          }`}
        >
          {greetings[currentGreeting]}
        </div>
      </div>
    </div>
  );
};

export default AnimatedGreeting;