const experiences = [
  {
    period: "2024 — Present",
    title: "Hashira Level",
    position: "Senior Fullstack Architect",
    company: "Tech Innovations Corp",
    description: "Leading the development of next-generation AI-powered applications and scalable web solutions. Mentoring junior developers in advanced breathing techniques (development methodologies) and spearheading the adoption of cutting-edge technologies across the organization.",
    technologies: [
      "React", "Next.js", "TypeScript", "Python", "AI/ML", "AWS", "Docker", "GraphQL"
    ],
    achievements: [
      "Architected AI-powered recommendation system serving 1M+ users",
      "Led team of 8 developers in building enterprise-grade applications",
      "Reduced deployment time by 75% through automation and CI/CD optimization"
    ]
  },
  {
    period: "2022 — 2024",
    title: "Kinoe Rank",
    position: "Lead Software Engineer",
    company: "Digital Solutions Ltd",
    description: "Mastered advanced development techniques while leading cross-functional teams in building robust software solutions. Specialized in full-stack development with a focus on performance optimization and user experience enhancement.",
    technologies: [
      "Vue.js", "Node.js", "PostgreSQL", "Redis", "Kubernetes", "Jenkins", "Terraform"
    ],
    achievements: [
      "Built microservices architecture handling 100K+ daily transactions",
      "Improved application performance by 60% through code optimization",
      "Established development best practices and code review standards"
    ]
  },
  {
    period: "2020 — 2022",
    title: "Hinoto Rank",
    position: "Full Stack Developer",
    company: "StartupForge Inc",
    description: "Developed comprehensive web applications from concept to deployment. Gained expertise in multiple technology stacks while working in a fast-paced startup environment. Learned the fundamentals of breathing techniques for scalable software development.",
    technologies: [
      "JavaScript", "Express.js", "MongoDB", "MySQL", "HTML/CSS", "Bootstrap"
    ],
    achievements: [
      "Developed MVP that secured $2M Series A funding",
      "Built responsive web applications with 99.9% uptime",
      "Collaborated with design team to implement pixel-perfect UIs"
    ]
  },
  {
    period: "2019 — 2020",
    title: "Mizunoto Rank",
    position: "Junior Software Developer",
    company: "CodeCraft Studios",
    description: "Began my journey as a demon slayer developer, learning the foundational breathing techniques of software development. Focused on front-end development while gradually expanding into full-stack capabilities.",
    technologies: [
      "HTML", "CSS", "JavaScript", "jQuery", "PHP", "WordPress"
    ],
    achievements: [
      "Contributed to 15+ client projects with 100% on-time delivery",
      "Learned rapid prototyping and agile development methodologies",
      "Built first AI chatbot integration for customer support"
    ]
  }
];

const rankColors = {
  "Hashira Level": "from-orange-400 to-red-500",
  "Kinoe Rank": "from-blue-400 to-cyan-500", 
  "Hinoto Rank": "from-green-400 to-emerald-500",
  "Mizunoto Rank": "from-purple-400 to-indigo-500"
};

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" 
      aria-label="Work experience"
    >
      {/* Section header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Experience
        </h2>
      </div>

      <div>
        <ol className="group/list space-y-12">
          {experiences.map((experience, index) => (
            <li key={index} className="group relative transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              
              <div className="relative z-10 grid gap-4 pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4">
                {/* Period */}
                <div className="sm:col-span-2">
                  <header className="mb-2">
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted">
                      {experience.period}
                    </div>
                    {/* Rank badge */}
                    <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${rankColors[experience.title as keyof typeof rankColors]} px-3 py-1 text-xs font-bold text-white shadow-lg mt-2`}>
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      {experience.title}
                    </div>
                  </header>
                </div>

                {/* Content */}
                <div className="sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground group-hover:text-primary transition-colors">
                    <div className="text-base">
                      {experience.position} · {experience.company}
                    </div>
                  </h3>

                  <p className="mt-2 text-sm leading-normal text-muted">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  {experience.achievements && (
                    <ul className="mt-3 space-y-1">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-muted">
                          <span className="text-primary mt-1">▶</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technologies */}
                  <ul className="mt-2 flex flex-wrap gap-1" aria-label="Technologies used">
                    {experience.technologies.map((tech) => (
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
        </ol>

        {/* Resume link */}
        <div className="mt-12">
          <a
            className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary font-semibold group/link text-base transition-colors"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            <span>
              View Full{" "}
              <span className="inline-block group-hover/link:text-primary transition-colors">
                Résumé
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
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
