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

      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
        {/* Giyu Avatar */}
        <div className="flex justify-center lg:justify-start mb-6 lg:mb-0">
          <div className="relative group">
            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-secondary/30 shadow-2xl shadow-secondary/20 transition-all duration-500 group-hover:border-secondary/60 group-hover:shadow-secondary/40 group-hover:scale-105 animate-breathingGlow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/a/a2/Giyu_profile.png"
                alt="Giyu Tomioka - Water Hashira" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              {/* Water Breathing Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-waterFlow" />
            </div>
            {/* Floating Water Particles */}
            <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-2 left-2 w-2 h-2 bg-secondary/60 rounded-full animate-ping animation-delay-100" />
              <div className="absolute top-8 right-4 w-1.5 h-1.5 bg-secondary/40 rounded-full animate-ping animation-delay-300" />
              <div className="absolute bottom-6 left-6 w-2.5 h-2.5 bg-secondary/50 rounded-full animate-ping animation-delay-500" />
              <div className="absolute bottom-2 right-2 w-1 h-1 bg-secondary/60 rounded-full animate-ping animation-delay-700" />
            </div>
            {/* Character Name Badge */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm border border-secondary/30 rounded-full px-3 py-1 shadow-lg">
              <span className="text-xs font-semibold text-secondary">水柱 Giyu</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4">
          <p className="text-base leading-relaxed">
            I&apos;m a senior software engineer who architects{" "}
            <span className="font-medium text-secondary">enterprise-scale AI solutions</span>{" "}
            that flow through complex systems,
            I specialize in leading engineering teams to deliver{" "}
            <span className="font-medium text-primary">scalable, intelligent software platforms</span>.
          </p>

        <p className="text-base leading-relaxed">
          Currently serving as a{" "}
          <span className="font-medium text-accent">Solutions Architect at ANZ</span>, 
          I lead 15 engineers across 3 cross-functional teams building advanced multi-agent chatbot systems with GPT-4, Claude, and LangChain. 
          My expertise flows through AI/ML, cloud architecture, and full-stack development, processing millions of documents daily 
        </p>

        <p className="text-base leading-relaxed">
          Throughout my journey, I&apos;ve mastered diverse domains — from{" "}
          <span className="font-medium text-primary hover:text-orange-400 transition-colors cursor-pointer">
            banking & fintech platforms
          </span>{" "}
          and{" "}
          <span className="font-medium text-secondary hover:text-blue-400 transition-colors cursor-pointer">
            IoT microservices architecture
          </span>{" "}
          to{" "}
          <span className="font-medium text-accent hover:text-purple-400 transition-colors cursor-pointer">
            healthcare applications
          </span>{" "}
          and enterprise security solutions. I believe in architecting systems that not only 
          scale gracefully but flow with the natural precision of water.
        </p>

          <p className="text-base leading-relaxed">
            When I&apos;m not architecting AI systems or mentoring engineering teams, you&apos;ll find me exploring 
            cutting-edge cloud technologies, contributing to open-source projects, or earning new certifications 
            (AWS, GCP, Azure). 
          </p>
        </div>
      </div>

      {/* Core values */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-background/50 p-4 transition-all hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10">
            <h3 className="font-semibold text-secondary mb-2">🌊 Water Breathing</h3>
            <p className="text-sm text-muted">
              Leading teams with calm precision, architecting AI solutions that flow seamlessly 
              through enterprise systems, processing millions of documents with grace.
            </p>
          </div>
          
          <div className="rounded-lg border border-border bg-background/50 p-4 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
            <h3 className="font-semibold text-primary mb-2">⚡ Thunder Breathing</h3>
            <p className="text-sm text-muted">
              Swift deployment of cloud infrastructure and DevOps solutions, cutting deployment 
              times by 70% and reducing operational overhead with lightning efficiency.
            </p>
          </div>
        </div>
    </section>
  );
}
