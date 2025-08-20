"use client";

import { useState, useRef, useEffect } from "react";

const demonSlayerPlaylist = [
  {
    title: "Demon Slayer Main Theme - Kamado Tanjiro no Uta",
    url: "https://www.soundjay.com/misc/sounds/magic-chime-02.wav", // Placeholder
    artist: "Go Shiina, Yuki Kajiura"
  },
  {
    title: "Giyu Tomioka Theme - Water Breathing",
    url: "https://www.soundjay.com/misc/sounds/magic-chime-03.wav", // Placeholder
    artist: "Yuki Kajiura"
  },
  {
    title: "Zen Zen Zense - Opening Theme",
    url: "https://www.soundjay.com/misc/sounds/magic-chime-04.wav", // Placeholder
    artist: "LiSA"
  }
];

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [showControls, setShowControls] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Auto-play blocked, user needs to interact first
          console.log("Auto-play blocked. User interaction required.");
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % demonSlayerPlaylist.length);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + demonSlayerPlaylist.length) % demonSlayerPlaylist.length);
  };

  const handleTrackEnd = () => {
    nextTrack();
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
              {demonSlayerPlaylist[currentTrack].title}
            </p>
            <p className="text-xs text-muted/70">
              by {demonSlayerPlaylist[currentTrack].artist}
            </p>
          </div>

          {/* Control buttons */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <button
              onClick={prevTrack}
              className="w-8 h-8 rounded-full bg-muted/20 hover:bg-muted/30 flex items-center justify-center transition-colors"
              aria-label="Previous Track"
            >
              <span className="text-sm">⏮️</span>
            </button>
            
            <button
              onClick={togglePlayPause}
              className="w-10 h-10 rounded-full bg-secondary/20 hover:bg-secondary/30 flex items-center justify-center transition-all hover:scale-105"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              <span className="text-lg">{isPlaying ? "⏸️" : "▶️"}</span>
            </button>
            
            <button
              onClick={nextTrack}
              className="w-8 h-8 rounded-full bg-muted/20 hover:bg-muted/30 flex items-center justify-center transition-colors"
              aria-label="Next Track"
            >
              <span className="text-sm">⏭️</span>
            </button>
          </div>

          {/* Volume control */}
          <div className="mb-2">
            <label className="text-xs text-muted mb-1 block">Volume</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-full h-1 bg-muted/20 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          {/* Note about placeholder audio */}
          <p className="text-xs text-muted/50 mt-2">
            🎼 Demo mode - placeholder audio files. 
            In production, would feature actual Demon Slayer OST.
          </p>
        </div>
      )}

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={demonSlayerPlaylist[currentTrack].url}
        onEnded={handleTrackEnd}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        preload="metadata"
      />

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
