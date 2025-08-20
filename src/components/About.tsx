export default function About() {
  return (
    <section 
      id="about" 
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" 
      aria-label="About me"
    >
      {/* Section header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          About
        </h2>
      </div>

      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          I&apos;m a passionate developer who crafts{" "}
          <span className="font-medium text-primary">accessible, pixel-perfect digital solutions</span>{" "}
          that blend thoughtful design with robust engineering. Like a demon slayer mastering various breathing techniques, 
          I specialize in multiple technology stacks to deliver{" "}
          <span className="font-medium text-secondary">powerful software and AI solutions</span>.
        </p>

        <p className="text-base leading-relaxed">
          Currently wielding my skills as a{" "}
          <span className="font-medium text-accent">Fullstack Software Architect</span>, 
          I focus on building scalable web applications, intelligent AI systems, and seamless user experiences. 
          My expertise spans across modern frameworks like React, Next.js, and TypeScript, while my AI breathing 
          techniques include machine learning, natural language processing, and automation solutions.
        </p>

        <p className="text-base leading-relaxed">
          In my journey as a developer, I&apos;ve had the opportunity to work across various domains — from{" "}
          <span className="font-medium text-primary hover:text-orange-400 transition-colors cursor-pointer">
            e-commerce platforms
          </span>{" "}
          and{" "}
          <span className="font-medium text-secondary hover:text-blue-400 transition-colors cursor-pointer">
            enterprise applications
          </span>{" "}
          to{" "}
          <span className="font-medium text-accent hover:text-purple-400 transition-colors cursor-pointer">
            AI-powered startups
          </span>{" "}
          and cutting-edge research projects. I believe in writing clean, maintainable code that not only 
          functions flawlessly but also tells a story.
        </p>

        <p className="text-base leading-relaxed">
          When I&apos;m not slaying bugs or training new AI models, you&apos;ll find me exploring the latest 
          in web technologies, contributing to open-source projects, or sharing knowledge through 
          technical writing and mentorship. I&apos;m always eager to take on new challenges and 
          collaborate with fellow developers to create something extraordinary.
        </p>

        {/* Core values */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-background/50 p-4 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
            <h3 className="font-semibold text-primary mb-2">🔥 Flame Breathing</h3>
            <p className="text-sm text-muted">
              Passionate about creating blazingly fast, responsive web applications that provide 
              exceptional user experiences.
            </p>
          </div>
          
          <div className="rounded-lg border border-border bg-background/50 p-4 transition-all hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10">
            <h3 className="font-semibold text-secondary mb-2">🌊 Water Breathing</h3>
            <p className="text-sm text-muted">
              Fluid adaptation to new technologies and methodologies, ensuring solutions 
              that flow seamlessly with business requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
