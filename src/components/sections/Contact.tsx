import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, ArrowUpRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    {
      label: "Email",
      value: "ahmedsalahsotohy123@gmail.com",
      href: "mailto:ahmedsalahsotohy123@gmail.com",
      icon: Mail,
    },
    {
      label: "GitHub",
      value: "github.com/a7medsa22",
      href: "https://github.com/a7medsa22",
      icon: Github,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/ahmed-salah-54822625a",
      href: "https://www.linkedin.com/in/ahmed-salah-54822625a",
      icon: Linkedin,
    },
  ];

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Section header */}
          <span className="text-primary font-mono text-sm mb-4 block">05. What's Next?</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get In Touch</h2>
          
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Looking for a backend engineer who thinks in systems? I'm open to 
            full-time roles, contract work, or consulting on architecture and 
            API design. If you're building something that needs to scale, let's talk.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <Button 
              size="lg" 
              className="group px-8"
              asChild
            >
              <a href="mailto:ahmedsalahsotohy123@gmail.com">
                <Send className="mr-2 h-4 w-4" />
                Send a Message
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </motion.div>

          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center justify-center gap-4 p-4 rounded-lg border border-border bg-card/50 hover:border-primary/30 hover:bg-card transition-all group"
              >
                <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-foreground font-medium">{link.label}</span>
                <span className="text-muted-foreground text-sm font-mono">{link.value}</span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
