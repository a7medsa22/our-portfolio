import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FileSearch, Layers, Scale, Shield, 
  ArrowRight, CheckCircle2 
} from "lucide-react";

const approaches = [
  {
    step: "01",
    title: "Requirements Analysis",
    icon: FileSearch,
    description: "Start by deeply understanding the problem. What are the functional requirements? What are the constraints? Who are the users?",
    points: [
      "Define clear functional requirements",
      "Identify non-functional requirements (performance, scale)",
      "Map out user flows and edge cases",
      "Document assumptions and constraints",
    ],
  },
  {
    step: "02", 
    title: "Clean Architecture",
    icon: Layers,
    description: "Design systems with clear separation of concerns. Business logic should be independent of frameworks, databases, and external services.",
    points: [
      "Separate business logic from infrastructure",
      "Define clear boundaries between layers",
      "Use dependency injection for flexibility",
      "Write code that's easy to test and maintain",
    ],
  },
  {
    step: "03",
    title: "Scalability Planning",
    icon: Scale,
    description: "Build with growth in mind. Design data models, APIs, and infrastructure that can handle 10x or 100x the current load.",
    points: [
      "Design stateless services where possible",
      "Plan for horizontal scaling",
      "Implement caching strategies",
      "Optimize database queries and indexes",
    ],
  },
  {
    step: "04",
    title: "Security First",
    icon: Shield,
    description: "Security isn't an afterthought—it's built into every layer. From input validation to authentication to data encryption.",
    points: [
      "Validate and sanitize all inputs",
      "Implement proper authentication & authorization",
      "Follow OWASP security guidelines",
      "Regular security audits and updates",
    ],
  },
];

const SystemThinking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="approach" className="py-24 bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary font-mono text-sm">04.</span>
            <h2 className="text-2xl sm:text-3xl font-bold">System Thinking</h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>
          
          <p className="text-muted-foreground max-w-2xl mb-12">
            How I approach building backend systems—from initial analysis to 
            production-ready architecture.
          </p>

          {/* Process visualization */}
          <div className="relative">
            {/* Connection line - desktop */}
            <div className="hidden lg:block absolute left-1/2 top-24 bottom-24 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-primary/50" />

            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
              {approaches.map((approach, index) => (
                <motion.div
                  key={approach.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 * index }}
                  className={`relative ${index % 2 === 1 ? 'lg:mt-24' : ''}`}
                >
                  <div className="card-gradient rounded-lg border border-border p-6 hover:border-primary/30 transition-all duration-300 group">
                    {/* Step number badge */}
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-mono font-bold rounded">
                      {approach.step}
                    </div>

                    {/* Header */}
                    <div className="flex items-center gap-3 mt-2 mb-4">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <approach.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{approach.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {approach.description}
                    </p>

                    {/* Points */}
                    <ul className="space-y-2">
                      {approach.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 bg-primary/5">
              <span className="text-muted-foreground text-sm">
                The result?
              </span>
              <span className="text-primary font-medium">
                Systems that scale, perform, and last.
              </span>
              <ArrowRight className="h-4 w-4 text-primary" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SystemThinking;
