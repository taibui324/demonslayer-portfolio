"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      // Convert FormData to JSON
      const data = {
        name: formData.get('name')?.toString() || '',
        email: formData.get('email')?.toString() || '',
        project: formData.get('project')?.toString() || '',
        message: formData.get('message')?.toString() || '',
      };
      
      // Submit to our API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error(result.error || 'Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('⚡ Thunder Breathing failed! Please try again or contact me directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" 
      aria-label="Contact information"
    >
      {/* Section header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Contact
        </h2>
      </div>

      <div className="space-y-8">
        {/* Contact intro */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">
            Ready to build your business?
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Whether you need a powerful web application, intelligent AI solution, or want to discuss 
            advanced breathing techniques for software development, I&apos;m here to help bring your vision to life.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact form */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">
              Send a Mission Request
            </h3>
            
            <form 
              onSubmit={handleSubmit} 
              className="space-y-4"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="project" className="text-sm font-medium text-foreground">
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                >
                  <option value="">Select a project type</option>
                  <option value="web-app">Web Application</option>
                  <option value="ai-solution">AI Solution</option>
                  <option value="ecommerce">E-commerce Platform</option>
                  <option value="api">API Development</option>
                  <option value="consultation">Technical Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Mission Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                aria-describedby={isSubmitting ? "submitting-status" : submitted ? "success-status" : undefined}
                className={`w-full px-6 py-3 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
                  submitted
                    ? "bg-green-500 text-white"
                    : isSubmitting
                    ? "bg-primary/50 text-white cursor-not-allowed"
                    : "bg-primary hover:bg-primary/80 text-white breathing-glow"
                }`}
              >
                {submitted ? (
                  <>
                    ✓ Mission Accepted!
                  </>
                ) : isSubmitting ? (
                  <>
                    <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                    Preparing Breathing Technique...
                  </>
                ) : (
                  "Deploy Flame Breathing 🔥"
                )}
              </button>
            </form>
          </div>

          {/* Contact information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">
              Alternative Communication Techniques
            </h3>

            <div className="space-y-4">
              {/* Email */}
              <div className="group p-4 rounded-lg border border-border bg-background/50 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href="mailto:taibui324@gmail.com" 
                      className="text-muted hover:text-primary transition-colors"
                    >
                      taibui324@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="group p-4 rounded-lg border border-border bg-background/50 hover:border-secondary/50 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/tai-bui-7098a2209/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-secondary transition-colors"
                    >
                      /in/tai-bui-7098a2209/
                    </a>
                  </div>
                </div>
              </div>

              {/* GitHub */}
              <div className="group p-4 rounded-lg border border-border bg-background/50 hover:border-accent/50 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">GitHub</p>
                    <a 
                      href="https://github.com/taibui324" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent transition-colors"
                    >
                      @taibui324
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-medium text-green-400">Available for New Missions</span>
              </div>
              <p className="text-sm text-muted">
                Currently accepting new projects and collaborations. 
                Response time: Usually within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-sm text-muted">
            Built with ⚔️ using Next.js, TypeScript, and Tailwind CSS<br/>
            Inspired by the art of demon slaying and breathing techniques
          </p>
        </div>
      </div>
    </section>
  );
}
