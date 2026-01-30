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
    description: "Production-grade server systems",
    skills: ["Node.js", "NestJS", "Express.js", "REST APIs", "WebSocket", "Jest"],
  },
  {
    title: "Databases",
    icon: Database,
    description: "Schema design & query optimization",
    skills: ["PostgreSQL", "MongoDB", "SQL Server", "Prisma ORM", "Query Optimization", "Indexing"],
  },
  {
    title: "Architecture & Design",
    icon: Boxes,
    description: "Scalable system patterns",
    skills: ["Clean Architecture", "Hexagonal", "Onion", "Modular", "MVC", "Microservices"],
  },
  {
    title: "System Design",
    icon: Code2,
    description: "Performance at scale",
    skills: ["API Security", "Caching Strategies", "Performance Optimization", "Quality Attributes", "Real-time Systems"],
  },
  {
    title: "DevOps & Tooling",
    icon: Container,
    description: "CI/CD & containerization",
    skills: ["Docker", "GitHub Actions", "Swagger", "Postman", "Linux CLI", "Cloudinary"],
  },
  {
    title: "Security",
    icon: Shield,
    description: "Secure by design",
    skills: ["JWT Auth", "RBAC", "Input Validation", "Rate Limiting", "OWASP", "API Security"],
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
