import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-mono font-bold text-sm">
              AS
            </div>
            <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors hidden sm:block">
              ahmed.sotohy
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
                  {String(index + 1).padStart(2, '0')}.
                </span>
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
            <Button size="sm" className="ml-4">
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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

      {/* Resume button */}
      <a
        href="https://docs.google.com/document/d/18CIbJBMKAz8EzEm18yIdT4TAW2QTPyiN/edit?usp=sharing&ouid=117682803620334639856&rtpof=true&sd=true"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <Button className="w-full mt-4">
          Resume
        </Button>
      </a>
    </div>
  </motion.div>
)}
