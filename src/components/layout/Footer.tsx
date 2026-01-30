import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Social links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/a7medsa22" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ahmed-salah-54822625a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:ahmedsalahsotohy123@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Credit */}
          <p className="text-sm text-muted-foreground font-mono">
            <span className="text-primary">{'<'}</span>
            Built by Ahmed Salah Fathy Sotohy
            <span className="text-primary">{' />'}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
