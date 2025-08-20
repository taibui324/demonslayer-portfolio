"use client";

import { useState, useEffect } from "react";

export default function GiyuCharacter() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Show Giyu with a delay for dramatic effect
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-1/2 left-4 transform -translate-y-1/2 z-10 pointer-events-none">
      <div 
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-30 translate-x-0" : "opacity-0 -translate-x-full"
        }`}
      >
        {/* Giyu Tomioka SVG Character Silhouette */}
        <div className="relative">
          {/* Water breathing effects around Giyu */}
          <div className="absolute inset-0 animate-pulse">
            <div className="absolute top-0 left-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent transform -translate-x-1/2 opacity-50" />
            <div className="absolute bottom-0 left-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent transform -translate-x-1/2 opacity-50" />
            <div className="absolute left-0 top-1/2 w-1 h-20 bg-gradient-to-b from-transparent via-secondary to-transparent transform -translate-y-1/2 opacity-50" />
            <div className="absolute right-0 top-1/2 w-1 h-16 bg-gradient-to-b from-transparent via-secondary to-transparent transform -translate-y-1/2 opacity-50" />
          </div>

          {/* Giyu Character Silhouette */}
          <div className="w-24 h-32 relative">
            {/* Character body */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-secondary/5 rounded-t-full">
              {/* Head */}
              <div className="w-6 h-6 bg-secondary/30 rounded-full mx-auto mb-1" />
              {/* Body */}
              <div className="w-12 h-20 bg-secondary/20 mx-auto rounded-sm relative">
                {/* Arms */}
                <div className="absolute -left-2 top-2 w-2 h-8 bg-secondary/25 rounded-full transform -rotate-12" />
                <div className="absolute -right-2 top-2 w-2 h-8 bg-secondary/25 rounded-full transform rotate-12" />
                {/* Sword */}
                <div className="absolute -right-4 top-0 w-1 h-16 bg-gradient-to-b from-blue-200 to-blue-400 rounded-full transform rotate-45 opacity-60" />
              </div>
              {/* Legs */}
              <div className="flex justify-center gap-1 mt-1">
                <div className="w-2 h-8 bg-secondary/25 rounded-full" />
                <div className="w-2 h-8 bg-secondary/25 rounded-full" />
              </div>
            </div>

            {/* Water breathing visual effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-secondary/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping" />
              <div className="absolute top-1/2 left-1/2 w-20 h-20 border border-secondary/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping" style={{ animationDelay: "1s" }} />
            </div>
          </div>

          {/* Water breathing technique label */}
          <div className="mt-2 text-center">
            <div className="text-xs text-secondary font-medium opacity-70">
              水の呼吸
            </div>
            <div className="text-xs text-muted opacity-50">
              Water Breathing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
