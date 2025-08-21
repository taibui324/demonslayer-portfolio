const experiences = [
  {
    period: "2024 — Present",
    title: "Water Hashira Level",
    position: "Solutions Architect",
    company: "ANZ - Knowledgebase & Data Team",
    description: "Leading 15 engineers across 3 cross-functional teams building advanced multi-agent chatbot systems leveraging GPT-4, Claude, LangChain, and Pinecone. Architecting enterprise-grade AI solutions that process millions of documents daily",
    technologies: [
      "GPT-4", "Claude", "LangChain", "Pinecone", "Python", "AWS", "OpenSearch", "RAG"
    ],
    achievements: [
      "Led 15 engineers across 3 cross-functional teams building AI chatbot systems",
      "Improved data accuracy by 35% and reduced ingestion latency by 40%",
      "Saved $100K+ annually through optimized OpenSearch cluster consolidation",
      "Increased chatbot adoption rates by 28% with RAG Stream Mode implementation",
      "Drove 15% uplift in enterprise product upsell revenue"
    ]
  },
  {
    period: "July 2022 — January 2024",
    title: "Kinoe Rank",
    position: "Solutions Architect",
    company: "ZOI - IoT Professional Platform",
    description: "Designed and scaled IoT microservices platform integrating device sensors, gateways, and SaaS APIs. Led cross-team architectural alignment across distributed engineering teams in Germany and Vietnam.",
    technologies: [
      "Node.js", "Microservices", "IoT", "AWS", "Terraform", "Prometheus", "Grafana"
    ],
    achievements: [
      "Improved data ingestion and device provisioning efficiency by 50%",
      "Reduced integration blockers by 30% across distributed teams",
      "Improved operational efficiency by 40% for Clean Energy Solution Fleet Management",
      "Cut incident response time by 25% with observability tooling",
      "Reduced provisioning time by 50% and lowered infra spend by 15%"
    ]
  },
  {
    period: "May 2020 — September 2023",
    title: "Hinoto Rank",
    position: "Lead Engineer/Co-founder",
    company: "On The Card",
    description: "Co-founded and led a team of 7 engineers, defining tech roadmap and engineering processes to scale a contactless smart card platform.",
    technologies: [
      "Node.js", "Firebase", "MongoDB", "React", "CI/CD", "Grafana", "PagerDuty"
    ],
    achievements: [
      "Handled 10,000+ orders/min during peak sales with zero downtime",
      "Engineered backend services supporting 8,000+ NFC card sales in 5 minutes",
      "Maintained >99.9% availability during peak campaigns",
      "Reduced deployment errors by 20% and MTTR by 40%",
      "Improved team productivity by 30% through culture and process improvements"
    ]
  },
  {
    period: "January 2022 — July 2022",
    title: "Hinoto Rank",
    position: "Senior Software Engineer",
    company: "Construct-X - Borneo Team",
    description: "Designed and developed ETL pipelines with Airflow, Kafka, and Python. Built data-driven insights dashboards that improved executive decision-making speed by 25%.",
    technologies: [
      "Python", "Django", "Airflow", "Kafka", "React", "GraphQL", "Jenkins", "GCP"
    ],
    achievements: [
      "Improved data availability by 30% with real-time ETL pipelines",
      "Reduced load times by 60% for single-page applications",
      "Cut deployment times by 70% through infrastructure automation",
      "Enhanced executive decision-making speed by 25%"
    ]
  },
  {
    period: "January 2021 — March 2022",
    title: "Mizunoto Rank",
    position: "Full Stack Software Engineer",
    company: "Hello Health Group",
    description: "Revamped healthcare applications serving 120,000+ unique visitors monthly. Developed health tools for diabetes and COVID-19 monitoring",
    technologies: [
      "React", "Next.js", "NestJS", "Redis", "Webpack", "Styled Components"
    ],
    achievements: [
      "Boosted user engagement by 35% for 120,000+ monthly visitors",
      "Launched health tools apps for type 1 diabetes and COVID-19",
      "Enhanced system performance and reliability with Redis caching",
      "Improved response times for critical tasks by 45%"
    ]
  },
  {
    period: "February 2017 — October 2020",
    title: "Kanoto Rank",
    position: "Software Engineer",
    company: "ForcePoint",
    description: "Contributed to ForceSight main product across frontend UI and backend APIs. Began mastering the foundational breathing techniques of enterprise software development.",
    technologies: [
      "React", "React Native", "Node.js", "Python", "Microservices"
    ],
    achievements: [
      "Improved customer onboarding satisfaction by 22%",
      "Enhanced system scalability and reduced incident frequency by 15%",
      "Increased automated test coverage from 20% to 90%",
      "Enabled secure data visualization for enterprise clients"
    ]
  }
];

const rankColors = {
  "Water Hashira Level": "from-blue-400 to-cyan-500",
  "Kinoe Rank": "from-green-400 to-emerald-500", 
  "Hinoto Rank": "from-orange-400 to-red-500",
  "Mizunoto Rank": "from-purple-400 to-indigo-500",
  "Kanoto Rank": "from-yellow-400 to-orange-500"
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
