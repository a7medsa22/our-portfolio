import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Server, Database, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  problem: string;
  solution: string;
  techStack: string[];
  highlights: { icon: React.ElementType; text: string }[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce API Platform",
    problem: "Build a scalable backend for a multi-vendor marketplace handling thousands of concurrent users.",
    solution: "Designed a modular NestJS architecture with PostgreSQL, implementing efficient caching, rate limiting, and role-based access control.",
    techStack: ["NestJS", "PostgreSQL", "Redis", "Docker", "JWT"],
    highlights: [
      { icon: Zap, text: "500ms avg response time" },
      { icon: Shield, text: "RBAC implementation" },
      { icon: Database, text: "Optimized queries" },
    ],
    github: "https://github.com",
  },
  {
    title: "Real-Time Chat System",
    problem: "Create a scalable messaging platform supporting real-time communication between users.",
    solution: "Built WebSocket-based architecture with message persistence, typing indicators, and horizontal scaling capabilities.",
    techStack: ["Node.js", "Socket.io", "MongoDB", "Redis Pub/Sub", "Express"],
    highlights: [
      { icon: Zap, text: "< 50ms latency" },
      { icon: Server, text: "Horizontally scalable" },
      { icon: Database, text: "Message persistence" },
    ],
    github: "https://github.com",
  },
  {
    title: "Authentication Microservice",
    problem: "Implement a secure, reusable authentication service for multiple applications.",
    solution: "Created a standalone auth service with JWT, refresh tokens, OAuth integration, and comprehensive security measures.",
    techStack: ["NestJS", "PostgreSQL", "Prisma", "OAuth 2.0", "JWT"],
    highlights: [
      { icon: Shield, text: "OAuth 2.0 & JWT" },
      { icon: Zap, text: "Token refresh flow" },
      { icon: Server, text: "Microservice ready" },
    ],
    github: "https://github.com",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Featured Projects</h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>
          
          <p className="text-muted-foreground max-w-2xl mb-12">
            Backend-focused projects showcasing architecture decisions, 
            scalability patterns, and security implementations.
          </p>

          {/* Projects list */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * index }}
              >
                <div className="card-gradient rounded-lg border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 group">
                  <div className="p-6 sm:p-8">
                    {/* Project header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <span className="text-primary font-mono text-xs mb-2 block">
                          Project {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      
                      <div className="flex gap-3">
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-colors"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                        {project.demo && (
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-colors"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Problem & Solution */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <p className="text-xs font-mono text-primary mb-2">THE CHALLENGE</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-mono text-primary mb-2">THE SOLUTION</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <highlight.icon className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{highlight.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View all projects */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button variant="outline" className="border-border hover:border-primary/50">
              <Github className="mr-2 h-4 w-4" />
              View All on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
