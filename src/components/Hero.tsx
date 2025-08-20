"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-full lg:flex-col lg:justify-between">
      <div>
        {/* Main title with breathing animation */}
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          <span className="block">
            <span className="flame-gradient bg-clip-text text-transparent">
              Demon Slayer
            </span>
          </span>
          <span className="block text-xl sm:text-2xl font-medium text-muted mt-2">
            Developer
          </span>
        </h1>

        {/* Subtitle with Japanese styling */}
        <h2 className="mt-3 text-lg font-medium tracking-tight text-secondary sm:text-xl">
          Software & AI Solutions Expert
        </h2>

        {/* Demon Slayer rank badge */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary border border-primary/20 breathing-glow">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Hashira Level Developer
        </div>

        {/* Description */}
        <p className="mt-4 max-w-xs leading-normal text-muted">
          I forge <span className="text-primary font-medium">pixel-perfect digital experiences</span> that 
          blend <span className="text-secondary font-medium">cutting-edge technology</span> with the 
          <span className="text-accent font-medium">power of breathing techniques</span>.
        </p>

        {/* Breathing technique specialties */}
        <div className="mt-6 space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded bg-gradient-to-r from-orange-400 to-red-500 animate-pulse" />
            <span className="text-muted">Flame Breathing: React & Next.js</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded bg-gradient-to-r from-blue-400 to-cyan-500 animate-pulse" />
            <span className="text-muted">Water Breathing: TypeScript & Node.js</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded bg-gradient-to-r from-purple-400 to-indigo-500 animate-pulse" />
            <span className="text-muted">Thunder Breathing: AI & Machine Learning</span>
          </div>
        </div>

        {/* Quick navigation hint */}
        <div className="mt-8 lg:mt-16">
          <p className="text-xs text-muted uppercase tracking-wider">
            Scroll to explore my demon slaying techniques ↓
          </p>
        </div>
      </div>

      {/* Social links */}
      <ul className="mt-8 flex items-center gap-5" aria-label="Social media">
        <li>
          <a
            className="block hover:text-primary transition-colors"
            href="https://github.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
          >
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
        </li>
        <li>
          <a
            className="block hover:text-primary transition-colors"
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </li>
        <li>
          <a
            className="block hover:text-primary transition-colors"
            href="mailto:demon.slayer.dev@example.com"
            aria-label="Email (opens in a new tab)"
          >
            <span className="sr-only">Email</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </li>
      </ul>
    </header>
  );
}
