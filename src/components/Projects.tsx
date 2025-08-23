const projects = [
  {
    title: "ANZ Multi-Agent Chatbot Platform",
    description: "Enterprise-grade AI chatbot system processing millions of documents daily. Built with GPT-4, Claude, LangChain, and Pinecone, featuring Z-GPT private instance for secure banking operations. Achieved 28% increased adoption rates and $100K+ annual savings through optimized OpenSearch cluster consolidation.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=225&fit=crop&crop=smart",
    technologies: ["GPT-4", "Claude", "LangChain", "Pinecone", "Python", "AWS", "OpenSearch", "Z-GPT"],
    liveUrl: "https://www.anz.com.au/bluenotes/2023/08/anz-news-tim-hogarth-zgpt-chatbot-australia/",
    githubUrl: "https://github.com/taibui324/anz-chatbot-platform",
    featured: true,
    category: "AI/ML"
  },
  {
    title: "ZOI IoT Microservices Platform",
    description: "Scalable IoT platform integrating device sensors, gateways, and SaaS APIs for Clean Energy Fleet Management. Led cross-team architecture across Germany and Vietnam, improving data ingestion efficiency by 50% and operational efficiency by 40%. Implemented zero-touch provisioning and real-time analytics.",
    image: "https://img.thingsboard.io/usecases/smart-energy/se4.webp",
    technologies: ["Node.js", "Microservices", "AWS", "Terraform", "Prometheus", "Grafana", "MQTT", "ThingsBoard"],
    liveUrl: "https://thingsboard.io/",
    githubUrl: "https://github.com/taibui324/zoi-iot-platform",
    featured: true,
    category: "IoT Platform"
  },
  {
    title: "On The Card - Contactless Smart Card Platform",
    description: "Co-founded fintech startup specializing in NFC contactless payment solutions. Engineered high-performance backend services handling 10,000+ orders/min during peak sales, supporting 8,000+ NFC card sales in 5 minutes with zero downtime and >99.9% availability. Implemented Tap-to-Pay technology for seamless checkout experiences.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop&crop=smart",
    technologies: ["Node.js", "Firebase", "MongoDB", "React", "NFC", "CI/CD", "Grafana", "Stripe"],
    liveUrl: "https://stripe.com/resources/more/how-to-accept-contactless-nfc-payments-from-customers",
    githubUrl: "https://github.com/taibui324/contactless-payment-platform",
    featured: true,
    category: "Fintech"
  },
  {
    title: "Hello Health Group - Healthcare Platform",
    description: "Revamped healthcare applications serving 120,000+ unique visitors monthly. Developed comprehensive health tools for type 1 diabetes monitoring, COVID-19 tracking, and telemedicine solutions. Boosted user engagement by 35% with improved response times and implemented modern healthcare dashboard designs for better patient experience.",
    image: "https://cdn.dribbble.com/userupload/19773525/file/original-c791c6008b8dc03a002e3e5e4db4b8d9.png?format=webp&resize=400x300&vertical=center",
    technologies: ["React", "Next.js", "NestJS", "Redis", "Webpack", "Styled Components", "Healthcare APIs"],
    liveUrl: "https://dribbble.com/search/healthcare-dashboard-design",
    githubUrl: "https://github.com/taibui324/healthcare-platform",
    featured: false,
    category: "Healthcare"
  }
];

import Image from 'next/image';

const categoryColors = {
  "AI/ML": "from-purple-400 to-indigo-500",
  "IoT Platform": "from-green-400 to-emerald-500",
  "Fintech": "from-orange-400 to-red-500", 
  "Healthcare": "from-blue-400 to-cyan-500"
};

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" 
      aria-label="Selected projects"
    >
      {/* Section header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Projects
        </h2>
      </div>

      <div>
        <ul className="group/list space-y-8">
          {projects.map((project, index) => (
            <li key={index} className="group relative transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              
              <div className="relative z-10 grid gap-4 pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4">
                {/* Project image */}
                <div className="sm:col-span-2 sm:order-1">
                  <div className="relative overflow-hidden rounded border-2 border-border transition-all group-hover:border-primary/50 aspect-video">
                    {/* Project image */}
                    <Image
                      src={project.image}
                      alt={`${project.title} - ${project.category} project screenshot`}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[project.category as keyof typeof categoryColors]} opacity-60 group-hover:opacity-40 transition-opacity`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-bold text-sm bg-black/30 px-2 py-1 rounded">{project.category}</span>
                    </div>
                    
                    {/* Sword slash animation overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out delay-200" />
                    </div>
                  </div>
                </div>

                {/* Project content */}
                <div className="sm:col-span-6 sm:order-2">
                  <h3 className="group-hover:text-primary transition-colors">
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.title} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {project.title}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </a>
                  </h3>

                  <p className="mt-2 text-sm leading-normal text-muted">
                    {project.description}
                  </p>

                  {/* Project links */}
                  <div className="mt-2 flex items-center gap-4">
                    <a
                      className="relative inline-flex items-center text-sm font-medium text-muted hover:text-primary focus-visible:text-primary transition-colors"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="GitHub repository (opens in a new tab)"
                    >
                      <svg className="mr-1 h-3 w-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      <span>Code</span>
                    </a>
                    
                    <a
                      className="relative inline-flex items-center text-sm font-medium text-muted hover:text-primary focus-visible:text-primary transition-colors"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Live demo (opens in a new tab)"
                    >
                      <svg className="mr-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  </div>

                  {/* Technologies */}
                  <ul className="mt-2 flex flex-wrap gap-1" aria-label="Technologies used">
                    {project.technologies.map((tech) => (
                      <li key={tech}>
                        <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* View more projects link */}
        <div className="mt-12">
          <a

className="inline-flex items-center font-semibold leading-tight text-foreground group hover:text-primary transition-colors"
            aria-label="View Full Resume"
            href="https://drive.google.com/file/d/1opTJVJQBhQ5Z4L2iP0Rl1jkNBKnqa2Si/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
                View Full Resume{" "}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
                  (PDF)
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
