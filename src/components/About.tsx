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
          I&apos;m a senior software engineer who architects{" "}
          <span className="font-medium text-secondary">enterprise-scale AI solutions</span>{" "}
          that flow through complex systems with the precision of Water Breathing. Like Giyu Tomioka mastering his techniques, 
          I specialize in leading engineering teams to deliver{" "}
          <span className="font-medium text-primary">scalable, intelligent software platforms</span>.
        </p>

        <p className="text-base leading-relaxed">
          Currently serving as a{" "}
          <span className="font-medium text-accent">Senior Software Engineer at ANZ</span>, 
          I lead 15 engineers across 3 cross-functional teams building advanced multi-agent chatbot systems with GPT-4, Claude, and LangChain. 
          My expertise flows through AI/ML, cloud architecture, and full-stack development, processing millions of documents daily 
          with the calm efficiency of a Water Hashira.
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
          (AWS, GCP, Azure). With multiple professional certifications and a B.Sc. in Computer Science from George Mason University, 
          I&apos;m always ready to take on new challenges that require the calm determination of a Water Hashira.
        </p>

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
      </div>
    </section>
  );
}
