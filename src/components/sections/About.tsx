import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal, Cpu, Shield, Layers } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Terminal, label: "Production-Grade", desc: "Battle-tested systems" },
    { icon: Cpu, label: "System Architect", desc: "End-to-end design" },
    { icon: Shield, label: "Security-First", desc: "OWASP compliant" },
    { icon: Layers, label: "Performance-Driven", desc: "Optimized at scale" },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-2xl sm:text-3xl font-bold">About Me</h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Main content */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm <span className="text-foreground font-medium">Ahmed Salah Fathy Sotohy</span>—a 
                Backend Engineer specializing in <span className="text-primary">Node.js and NestJS</span>, 
                with hands-on experience building scalable, secure, and high-performance APIs 
                that serve thousands of users in production.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                I don't just write endpoints—I <span className="text-foreground">architect systems</span>. 
                From database schema design to real-time WebSocket implementations, I consider 
                how every component will <span className="text-primary">communicate, scale, and recover from failure</span>. 
                My work on medical management systems reduced message latency to under 200ms 
                and optimized database loads by 35%.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I apply <span className="text-primary">Clean, Hexagonal, and Modular architectures</span> to 
                build systems that are testable, maintainable, and production-ready. 
                Every API I ship is documented, cached strategically, and built with 
                security as a first-class concern.
              </p>

              {/* Tech focus */}
              <div className="pt-4">
                <p className="font-mono text-sm text-muted-foreground mb-3">
                  Core stack:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["NestJS", "PostgreSQL", "Prisma", "WebSocket", "Docker", "CI/CD"].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-secondary/50 text-sm font-mono text-muted-foreground rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlights card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="card-gradient rounded-lg border border-border p-6 space-y-6">
                <h3 className="font-mono text-sm text-primary">Core Strengths</h3>
                
                <div className="space-y-4">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-2 rounded bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
