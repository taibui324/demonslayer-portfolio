"use client";

import { useState } from "react";

const breathingTechniques = [
  {
    name: "Flame Breathing",
    description: "Frontend Development & UI/UX",
    color: "from-orange-400 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    textColor: "text-orange-400",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 85 },
      { name: "HTML/CSS", level: 95 }
    ]
  },
  {
    name: "Water Breathing", 
    description: "Backend Development & APIs",
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20", 
    textColor: "text-blue-400",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "GraphQL", level: 80 },
      { name: "REST APIs", level: 92 }
    ]
  },
  {
    name: "Thunder Breathing",
    description: "AI & Machine Learning",
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
    textColor: "text-yellow-400", 
    skills: [
      { name: "Python", level: 88 },
      { name: "TensorFlow", level: 82 },
      { name: "PyTorch", level: 78 },
      { name: "Scikit-learn", level: 85 },
      { name: "NLP", level: 80 },
      { name: "Computer Vision", level: 75 }
    ]
  },
  {
    name: "Wind Breathing",
    description: "DevOps & Cloud Technologies", 
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    textColor: "text-green-400",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 80 },
      { name: "CI/CD", level: 90 },
      { name: "Terraform", level: 75 },
      { name: "Linux", level: 85 }
    ]
  }
];

export default function Skills() {
  const [activeTechnique, setActiveTechnique] = useState(0);

  return (
    <section 
      id="skills" 
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" 
      aria-label="Skills and technologies"
    >
      {/* Section header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Skills
        </h2>
      </div>

      <div className="space-y-8">
        {/* Breathing technique selector */}
        <div className="flex flex-wrap gap-2">
          {breathingTechniques.map((technique, index) => (
            <button
              key={technique.name}
              onClick={() => setActiveTechnique(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTechnique === index
                  ? `${technique.bgColor} ${technique.borderColor} ${technique.textColor} border-2 breathing-glow`
                  : "bg-muted/10 text-muted hover:text-foreground border border-border"
              }`}
            >
              {technique.name}
            </button>
          ))}
        </div>

        {/* Active technique display */}
        <div className="space-y-6">
          {breathingTechniques.map((technique, index) => (
            <div
              key={technique.name}
              className={`transition-all duration-500 ${
                activeTechnique === index 
                  ? "opacity-100 transform translate-y-0" 
                  : "opacity-0 transform translate-y-4 absolute"
              }`}
            >
              {activeTechnique === index && (
                <>
                  {/* Technique header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${technique.color} animate-pulse`} />
                    <div>
                      <h3 className={`text-xl font-bold ${technique.textColor}`}>
                        {technique.name}
                      </h3>
                      <p className="text-muted">{technique.description}</p>
                    </div>
                  </div>

                  {/* Skills grid */}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {technique.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className={`p-4 rounded-lg border ${technique.borderColor} ${technique.bgColor} hover:scale-105 transition-all duration-300`}
                        style={{ animationDelay: `${skillIndex * 100}ms` }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className={`text-sm ${technique.textColor}`}>
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Skill level bar */}
                        <div className="w-full bg-border rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${technique.color} transition-all duration-1000 ease-out`}
                            style={{ 
                              width: activeTechnique === index ? `${skill.level}%` : "0%"
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Additional skills */}
        <div className="mt-12 space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Additional Techniques & Tools
          </h3>
          
          <div className="flex flex-wrap gap-2">
            {[
              "Git", "GitHub", "Jira", "Figma", "Adobe XD", "Slack", 
              "Notion", "Postman", "Jest", "Cypress", "Webpack", "Vite",
              "Redis", "Elasticsearch", "RabbitMQ", "Nginx", "Apache"
            ].map((tool) => (
              <div
                key={tool}
                className="px-3 py-1 text-xs rounded-full bg-muted/10 text-muted border border-border hover:border-primary/50 hover:text-primary transition-all cursor-default"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 p-6 rounded-lg border border-border bg-background/50">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            🏆 Certifications & Achievements
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm">AWS Certified Solutions Architect</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-sm">Google Cloud Professional Developer</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm">Microsoft Azure AI Fundamentals</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm">Meta React Advanced Certification</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
