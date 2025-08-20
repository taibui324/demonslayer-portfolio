"use client";

import { useState, useEffect } from "react";

const mainYouTubeVideoId = "q1iv8Ec9-TY"; // Gurenge - LiSA

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [volume, setVolume] = useState(30);

  // Auto-play music when user first interacts with the page
  useEffect(() => {
    const handleUserInteraction = () => {
      if (!userInteracted) {
        setUserInteracted(true);
        // Start playing automatically after first user interaction
        setTimeout(() => {
          setIsPlaying(true);
        }, 1000);
      }
    };

    // Listen for various user interactions
    const events = ['click', 'keydown', 'scroll', 'touchstart', 'mousemove'];
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, [userInteracted]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Music control button */}
      <button
        onClick={() => setShowControls(!showControls)}
        className={`w-12 h-12 rounded-full border-2 border-secondary/20 bg-secondary/10 backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 ${
          isPlaying ? "breathing-glow animate-pulse" : ""
        }`}
        aria-label="Music Controls"
      >
        <span className="text-xl">🎵</span>
      </button>

      {/* Expanded controls */}
      {showControls && (
        <div className="absolute bottom-16 right-0 w-72 bg-background/90 backdrop-blur-md border border-border rounded-lg p-4 shadow-lg">
          <div className="mb-3">
            <h3 className="text-sm font-semibold text-foreground mb-1">
              🗾 Demon Slayer OST
            </h3>
            <p className="text-xs text-muted">
              Gurenge - LiSA (Opening 1)
            </p>
            <p className="text-xs text-muted/70">
              The main theme that plays when you visit this site
            </p>
          </div>

          {/* Control buttons */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <button
              onClick={togglePlayPause}
              className="w-10 h-10 rounded-full bg-secondary/20 hover:bg-secondary/30 flex items-center justify-center transition-all hover:scale-105"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              <span className="text-lg">{isPlaying ? "⏸️" : "▶️"}</span>
            </button>
          </div>

          {/* Volume control */}
          <div className="mb-2">
            <label className="text-xs text-muted mb-1 block">Volume</label>
            <input
              type="range"
              min="0"
              max="100"
              step="10"
              value={volume}
              onChange={(e) => setVolume(parseInt(e.target.value))}
              className="w-full h-1 bg-muted/20 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          {/* Auto-play notice */}
          <p className="text-xs text-muted/70 mt-2">
            🎼 Background music automatically starts after your first interaction with the page
          </p>
        </div>
      )}

      {/* Hidden YouTube player for background music */}
      {userInteracted && (
        <div className="hidden">
          <iframe
            width="0"
            height="0"
            src={`https://www.youtube.com/embed/${mainYouTubeVideoId}?autoplay=${isPlaying ? 1 : 0}&loop=1&playlist=${mainYouTubeVideoId}&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&fs=0&cc_load_policy=0&start=0&volume=${volume}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            style={{ display: 'none' }}
          />
        </div>
      )}

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 12px;
          width: 12px;
          background: rgb(75 181 217);
          border-radius: 50%;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 12px;
          width: 12px;
          background: rgb(75 181 217);
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}