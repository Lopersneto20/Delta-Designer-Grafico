import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on devices with fine pointer (mouse)
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer');
        setIsHovered(!!isClickable);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[999] transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference flex items-center justify-center font-brand font-semibold text-[9px] tracking-widest text-black ${
        isHovered
          ? 'w-14 h-14 bg-white/95 scale-100'
          : 'w-3 h-3 bg-white scale-100'
      }`}
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
    >
      {isHovered && <span className="opacity-80">VER</span>}
    </div>
  );
};
