"use client";

import { useState, useEffect } from "react";

export default function GiyuAvatar() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div 
      className="fixed top-6 right-6 z-40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Giyu Profile Avatar */}
      <div className={`relative transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
        {/* Water breathing effects around avatar */}
        <div className="absolute inset-0 rounded-full animate-pulse">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-500/20 blur-lg" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-500/10 blur-xl animate-spin" style={{ animationDuration: '8s' }} />
        </div>

        {/* Avatar container */}
        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 p-1 shadow-lg shadow-blue-500/25">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-2 border-blue-400/20 overflow-hidden">
            {/* Giyu Silhouette/Avatar - Using CSS Art */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Hair */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gradient-to-b from-slate-700 to-slate-800 rounded-t-full" />
              
              {/* Face */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-10 bg-gradient-to-b from-amber-100 to-amber-200 rounded-full" />
              
              {/* Eyes */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex gap-1">
                <div className="w-1 h-1 bg-blue-600 rounded-full" />
                <div className="w-1 h-1 bg-blue-600 rounded-full" />
              </div>
              
              {/* Haori (jacket) - Water pattern */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-10 h-8 bg-gradient-to-br from-blue-800 to-blue-900 rounded-b-lg">
                {/* Water pattern decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-b-lg" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Tooltip on hover */}
        {isHovered && (
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-lg whitespace-nowrap">
            <div className="text-xs font-semibold text-secondary">Giyu Tomioka</div>
            <div className="text-xs text-muted">Water Hashira</div>
            {/* Arrow pointing up */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-background border-l border-t border-border rotate-45" />
          </div>
        )}

        {/* Floating water droplets */}
        <div className="absolute -top-2 -right-2 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0s', animationDuration: '2s' }} />
        <div className="absolute -bottom-2 -left-2 w-1 h-1 bg-cyan-400 rounded-full animate-bounce opacity-40" style={{ animationDelay: '1s', animationDuration: '3s' }} />
        <div className="absolute top-0 -left-3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce opacity-50" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
      </div>

      {/* Water breathing technique indicator */}
      {isHovered && (
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-xs text-secondary font-japanese opacity-80">
            水の呼吸
          </div>
          <div className="text-xs text-muted">
            Water Breathing
          </div>
        </div>
      )}
    </div>
  );
}
