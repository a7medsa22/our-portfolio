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
    title: "Madisyn - Medical Management System",
    problem: "Healthcare platforms require secure handling of sensitive patient data, real-time doctor-patient communication, and complex appointment scheduling across multiple stakeholders.",
    solution: "Led backend development for a production-grade system connecting patients, doctors, and administrators. Implemented WebSocket-based real-time messaging with <200ms latency and optimized database queries reducing load by 35%.",
    techStack: ["NestJS", "PostgreSQL", "Prisma", "WebSocket", "Docker", "GitHub Actions"],
    highlights: [
      { icon: Zap, text: "<200ms message latency" },
      { icon: Database, text: "35% DB load reduction" },
      { icon: Shield, text: "HIPAA-aware security" },
    ],
    github: "https://github.com/a7medsa22/clinic-Management-API-Demo-Version",
  },
  {
    title: "AI Knowledge Hub",
    problem: "Users struggle to organize and retrieve relevant information from large document collections. Traditional search fails to understand semantic context.",
    solution: "Architected an AI-powered backend platform managing 2000+ documents with semantic search, text summarization, and intelligent retrieval. Implemented caching layer improving search performance by 35%.",
    techStack: ["NestJS", "PostgreSQL", "MCP Tool Server", "Swagger", "AI Integration"],
    highlights: [
      { icon: Zap, text: "35% faster search" },
      { icon: Server, text: "2000+ documents" },
      { icon: Database, text: "Semantic indexing" },
    ],
    github: "https://github.com/a7medsa22/Ai-Knowledge-Hub",
  },
  {
    title: "E-Commerce Backend API",
    problem: "Building a robust e-commerce platform that handles concurrent users, complex cart operations, and secure payment flows with minimal latency.",
    solution: "Built and deployed a scalable REST API handling 300+ simulated concurrent users with full authentication, product management, cart/wishlist, checkout, reviews, and admin systems. Achieved 25% latency reduction through query optimization.",
    techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "MVC Architecture"],
    highlights: [
      { icon: Zap, text: "25% latency reduction" },
      { icon: Shield, text: "JWT authentication" },
      { icon: Server, text: "300+ concurrent users" },
    ],
    github: "https://github.com/a7medsa22/ecommerce-store",
  },
  {
    title: "Enterprise Auth Template",
    problem: "Every new project requires implementing authentication from scratch—secure token handling, refresh flows, and role management.",
    solution: "Created a production-ready authentication microservice template with JWT, refresh token rotation, role-based access control, and comprehensive security measures following OWASP guidelines.",
    techStack: ["NestJS", "PostgreSQL", "Prisma", "JWT", "RBAC"],
    highlights: [
      { icon: Shield, text: "OWASP compliant" },
      { icon: Zap, text: "Token refresh flow" },
      { icon: Server, text: "Microservice-ready" },
    ],
    github: "https://github.com/a7medsa22/enterprise-auth-template",
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
            Production systems I've architected—each solving real engineering 
            challenges around scalability, performance, and security.
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
            <Button variant="outline" className="border-border hover:border-primary/50" asChild>
              <a href="https://github.com/a7medsa22" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View All on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
