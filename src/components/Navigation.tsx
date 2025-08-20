"use client";

import { useState, useEffect } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Skip to content link */}
      <a 
        href="#content" 
        className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-primary via-secondary to-accent px-4 py-3 text-sm font-bold uppercase tracking-widest text-white transition-transform focus-visible:translate-x-0"
      >
        Skip to Content
      </a>

      {/* Desktop Navigation */}
      <nav className="nav hidden lg:block" aria-label="In-page jump links">
        <ul className="mt-16 w-max">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                className={`group flex items-center py-3 transition-all ${
                  activeSection === item.href.substring(1)
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
                href={item.href}
              >
                <span
                  className={`mr-4 h-px transition-all ${
                    activeSection === item.href.substring(1)
                      ? "w-16 bg-primary breathing-glow"
                      : "w-8 bg-muted group-hover:w-16 group-hover:bg-primary"
                  }`}
                ></span>
                <span className="text-xs font-bold uppercase tracking-widest group-hover:text-primary">
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-t border-border">
          <nav className="flex justify-around py-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center p-2 text-xs transition-all ${
                  activeSection === item.href.substring(1)
                    ? "text-primary"
                    : "text-muted hover:text-primary"
                }`}
              >
                <div
                  className={`w-1 h-1 rounded-full mb-1 transition-all ${
                    activeSection === item.href.substring(1)
                      ? "bg-primary breathing-glow"
                      : "bg-muted"
                  }`}
                />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
