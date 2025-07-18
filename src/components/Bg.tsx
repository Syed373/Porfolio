import React, { useState, useEffect, useRef } from 'react';
import MouseTrail from './ui/MouseTrail';

interface Dot {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface BackgroundProps {
  children?: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  const [dots, setDots] = useState<Dot[]>([]);
  const [shiningDots, setShiningDots] = useState<Set<number>>(new Set());
  const [fadingDots, setFadingDots] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate random dots based on screen size
  const generateDots = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Calculate number of dots based on screen area (roughly 1 dot per 15000 pixels)
    const dotCount = Math.floor((width * height) / 4000);

    const newDots: Dot[] = [];

    for (let i = 0; i < dotCount; i++) {
      newDots.push({
        id: i,
        x: Math.random() * (width - 20), // Subtract dot size to prevent overflow
        y: Math.random() * (height - 20),
        size: Math.random() * 4 + 3 
      });
    }

    setDots(newDots);
  };

  // Handle window resize
  const handleResize = () => {
    generateDots();
  };

  // Shine cycle management
  useEffect(() => {
    if (dots.length === 0) return;

    const shineInterval = setInterval(() => {
      // Select 5-6 random dots to shine
      const numDotsToShine = Math.floor(Math.random() * 2) + 15; 
      const availableDots = Array.from({ length: dots.length }, (_, i) => i);
      const selectedDots = new Set<number>();

      // Randomly select dots
      for (let i = 0; i < numDotsToShine && availableDots.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * availableDots.length);
        const dotIndex = availableDots.splice(randomIndex, 1)[0];
        selectedDots.add(dotIndex);
      }

      setShiningDots(selectedDots);

      // Start fading after shine duration
      setTimeout(() => {
        setFadingDots(new Set(selectedDots));
        setShiningDots(new Set());

        // Clear fading dots after transition
        setTimeout(() => {
          setFadingDots(new Set());
        }, 500); // Wait for fade out transition
      }, 1000); // Shine duration - 1 second

    }, 1500); // New shine every 1.5 seconds

    return () => clearInterval(shineInterval);
  }, [dots.length]);

  // Initialize dots on mount and handle resize
  useEffect(() => {
    generateDots();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black overflow-hidden pointer-events-none"
      style={{ zIndex: -1 }}
    >
      <MouseTrail />
      {dots.map((dot) => (
        <div
          key={dot.id}
          className={`absolute rounded-full bg-slate-400 transition-all duration-500 ease-in-out ${shiningDots.has(dot.id)
              ? 'opacity-100 shadow-lg shadow-slate-400/50 scale-150'
              : fadingDots.has(dot.id)
                ? 'opacity-30 scale-100'
                : 'opacity-20'
            }`}
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            filter: shiningDots.has(dot.id)
              ? 'brightness(2) blur(0.5px)'
              : 'brightness(1)'
          }}
        />
      ))}
      {children}
    </div>
  );
};

export default Background;