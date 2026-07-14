import { useState, useEffect } from "react";
import portfolioData from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-outline/20 shadow-md3-1"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <a
          href="#hero"
          className="text-lg font-mono font-bold text-primary"
        >
          <span className="text-terminal-green">&gt;</span> {portfolioData.personal.name.split(" ")[0]}
          <span className="text-on-surface-variant">_</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {portfolioData.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-md3-sm text-sm font-mono text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <span className="text-primary/50"># </span>{item.label.toLowerCase()}
            </a>
          ))}
        </div>

        <button
          className="md:hidden p-2 rounded-md3-sm text-on-surface-variant hover:bg-primary/10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-outline/20 animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            {portfolioData.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 rounded-md3-sm text-sm font-mono text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <span className="text-primary/50"># </span>{item.label.toLowerCase()}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
