import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatar from "@/assets/avatar.jpg";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={avatar}
              alt="Ahmed Sotohy"
              className="w-9 h-9 rounded-full object-cover border border-border transition-transform group-hover:scale-105"
            />
            <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors hidden sm:block">
              Ahmed Sotohy
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                <span className="text-primary font-mono text-xs mr-1">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                {link.label}
              </a>
            ))}

            <a
              href="https://docs.google.com/document/d/18CIbJBMKAz8EzEm18yIdT4TAW2QTPyiN/edit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="ml-4">
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
        >
          <div className="section-container py-6 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-primary font-mono text-xs mr-2">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                {link.label}
              </a>
            ))}

            <a
              href="https://docs.google.com/document/d/18CIbJBMKAz8EzEm18yIdT4TAW2QTPyiN/edit"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button className="w-full mt-4">Resume</Button>
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
