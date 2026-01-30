import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Server, Database, GitBranch, Shield, 
  Boxes, Code2, Container, Workflow
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  description: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend & APIs",
    icon: Server,
    description: "Building robust server-side applications",
    skills: ["Node.js", "NestJS", "Express.js", "REST APIs", "GraphQL", "WebSockets"],
  },
  {
    title: "Databases",
    icon: Database,
    description: "Data modeling and query optimization",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "SQL", "Data Modeling"],
  },
  {
    title: "Architecture & Design",
    icon: Boxes,
    description: "System design and clean architecture",
    skills: ["Clean Architecture", "Microservices", "Domain-Driven Design", "SOLID Principles", "Design Patterns"],
  },
  {
    title: "DevOps & Tooling",
    icon: Container,
    description: "Deployment and development workflows",
    skills: ["Docker", "CI/CD", "Git", "Linux", "Nginx", "PM2"],
  },
  {
    title: "Security",
    icon: Shield,
    description: "Building secure systems by default",
    skills: ["JWT Auth", "OAuth 2.0", "RBAC", "Input Validation", "Rate Limiting", "OWASP"],
  },
  {
    title: "Tools & Practices",
    icon: Workflow,
    description: "Professional development practices",
    skills: ["TypeScript", "Testing", "API Docs", "Logging", "Monitoring", "Agile"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Skills & Technologies</h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>
          
          <p className="text-muted-foreground max-w-2xl mb-12">
            A curated set of tools and technologies I use to build scalable, 
            secure backend systems.
          </p>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group"
              >
                <div className="h-full card-gradient rounded-lg border border-border p-6 hover:border-primary/30 transition-all duration-300 hover:glow-subtle">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <category.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{category.title}</h3>
                      <p className="text-xs text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills list */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-mono bg-background/50 text-muted-foreground rounded border border-border/50 hover:text-primary hover:border-primary/30 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
