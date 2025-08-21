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
          isVisible ? "opacity-40 translate-x-0" : "opacity-0 -translate-x-full"
        }`}
      >
        {/* Giyu Tomioka Enhanced Character */}
        <div className="relative">
          {/* Floating Water Particles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-4 left-2 w-1.5 h-1.5 bg-secondary/60 rounded-full float-up animation-delay-100" />
            <div className="absolute top-8 right-6 w-1 h-1 bg-secondary/40 rounded-full float-up animation-delay-300" />
            <div className="absolute top-12 left-6 w-2 h-2 bg-secondary/50 rounded-full float-up animation-delay-500" />
            <div className="absolute top-16 right-2 w-1.5 h-1.5 bg-secondary/60 rounded-full float-up animation-delay-700" />
          </div>

          {/* Water breathing aura */}
          <div className="absolute inset-0 pulse-glow">
            <div className="absolute top-0 left-1/2 w-32 h-2 bg-gradient-to-r from-transparent via-secondary/60 to-transparent transform -translate-x-1/2 opacity-40 animate-pulse" />
            <div className="absolute bottom-0 left-1/2 w-28 h-2 bg-gradient-to-r from-transparent via-secondary/60 to-transparent transform -translate-x-1/2 opacity-40 animate-pulse animation-delay-300" />
            <div className="absolute left-0 top-1/2 w-2 h-24 bg-gradient-to-b from-transparent via-secondary/60 to-transparent transform -translate-y-1/2 opacity-40 animate-pulse animation-delay-500" />
            <div className="absolute right-0 top-1/2 w-2 h-20 bg-gradient-to-b from-transparent via-secondary/60 to-transparent transform -translate-y-1/2 opacity-40 animate-pulse animation-delay-700" />
          </div>

          {/* Enhanced Giyu Character Silhouette */}
          <div className="w-28 h-36 relative breathing-glow">
            {/* Character body with more detail */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-secondary/10 rounded-t-full filter drop-shadow-lg">
              {/* Head with hair detail */}
              <div className="relative mx-auto mb-1">
                <div className="w-7 h-7 bg-secondary/40 rounded-full" />
                <div className="absolute top-1 left-1 w-5 h-3 bg-secondary/50 rounded-full" /> {/* Hair */}
                <div className="absolute top-0 right-1 w-2 h-2 bg-secondary/60 rounded-full" /> {/* Hair accent */}
              </div>
              
              {/* Body with haori details */}
              <div className="w-14 h-22 bg-secondary/25 mx-auto rounded-sm relative overflow-hidden">
                {/* Haori pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent opacity-60" />
                <div className="absolute top-2 left-2 w-2 h-2 bg-secondary/40 rounded-full opacity-80" />
                <div className="absolute top-4 right-3 w-1.5 h-1.5 bg-secondary/40 rounded-full opacity-80" />
                
                {/* Arms with more definition */}
                <div className="absolute -left-3 top-3 w-2.5 h-10 bg-secondary/30 rounded-full transform -rotate-12 filter drop-shadow-sm" />
                <div className="absolute -right-3 top-3 w-2.5 h-10 bg-secondary/30 rounded-full transform rotate-12 filter drop-shadow-sm" />
                
                {/* Nichirin Blade with enhanced details */}
                <div className="absolute -right-5 top-1 w-1.5 h-18 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-500 rounded-full transform rotate-45 opacity-80 filter drop-shadow-md" />
                <div className="absolute -right-4 top-2 w-0.5 h-16 bg-gradient-to-b from-white to-blue-100 rounded-full transform rotate-45 opacity-90" /> {/* Sword gleam */}
              </div>
              
              {/* Legs with hakama details */}
              <div className="flex justify-center gap-1.5 mt-2">
                <div className="w-2.5 h-10 bg-secondary/30 rounded-full filter drop-shadow-sm" />
                <div className="w-2.5 h-10 bg-secondary/30 rounded-full filter drop-shadow-sm" />
              </div>
            </div>

            {/* Enhanced Water breathing visual effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 w-20 h-20 border-2 border-secondary/40 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping" />
              <div className="absolute top-1/2 left-1/2 w-28 h-28 border border-secondary/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping animation-delay-500" />
              <div className="absolute top-1/2 left-1/2 w-36 h-36 border border-secondary/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping animation-delay-700" />
            </div>

            {/* Anime-style speed lines */}
            <div className="absolute inset-0 overflow-hidden opacity-60">
              <div className="absolute top-2 left-0 w-12 h-0.5 bg-gradient-to-r from-secondary/60 to-transparent transform -skew-y-12 anime-gleam" />
              <div className="absolute top-8 left-0 w-10 h-0.5 bg-gradient-to-r from-secondary/40 to-transparent transform -skew-y-12 anime-gleam animation-delay-300" />
              <div className="absolute top-14 left-0 w-8 h-0.5 bg-gradient-to-r from-secondary/60 to-transparent transform -skew-y-12 anime-gleam animation-delay-500" />
            </div>
          </div>

          {/* Enhanced Water breathing technique label */}
          <div className="mt-3 text-center">
            <div className="text-sm text-secondary font-bold opacity-80 tracking-wider filter drop-shadow-sm">
              水の呼吸
            </div>
            <div className="text-xs text-muted opacity-60 font-medium">
              Water Breathing
            </div>
            <div className="text-xs text-secondary/60 opacity-40 italic mt-1">
              壱ノ型 - First Form
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
