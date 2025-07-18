import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const MouseTrail: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [cursorTrail, setCursorTrail] = useState<{ x: number; y: number; id: string }[]>([]);

  useEffect(() => {
  
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: uuidv4()
      };
      
      setCursorTrail(prev => [...prev.slice(-10), newTrail]);
      
      setTimeout(() => {
        setCursorTrail(prev => prev.filter(trail => trail.id !== newTrail.id));
      }, 500);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);



  return (
    <div className="min-h-screen overflow-x-hidden">
      
      {cursorTrail.map((trail) => (
        <div
          key={trail.id}
          className="fixed w-1 h-1 bg-[#c2c2c2] rounded-full pointer-events-none z-50 opacity-60"
          style={{
            left: trail.x,
            top: trail.y,
            animation: 'cursorFade 2s ease-out forwards'
          }}
        />
      ))}
      </div>
      )}

export default MouseTrail;