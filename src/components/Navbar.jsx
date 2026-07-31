import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import portfolioData from "../data/portfolioData";
import ThemeToggle from "./ThemeToggle";

const icons = {
  Home: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5L12 3l9 7.5M5 9.5V21h5v-6h4v6h5V9.5" />
    </svg>
  ),
  About: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM4 21v-1a5 5 0 015-5h6a5 5 0 015 5v1" />
    </svg>
  ),
  Skills: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3m8-6l3 3-3 3M13 5l-2 14" />
    </svg>
  ),
  Projects: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6a2 2 0 012-2h4l2 2h8a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" />
    </svg>
  ),
  Experience: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16v13H4V7zm3 0V5a2 2 0 012-2h6a2 2 0 012 2v2M4 12h16M9 12v3m6-3v3" />
    </svg>
  ),
  Interests: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17.9 6.6 19.8l1-6.1L3.2 9.4l6.1-.9L12 3z" />
    </svg>
  ),
  Contact: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1zm-1 2l9 6 9-6" />
    </svg>
  ),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `relative flex flex-col items-center gap-1 px-3 py-2 rounded-md3-md text-xs font-medium transition-all ${
      isActive
        ? "text-primary-strong bg-primary/10"
        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-variant"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-outline shadow-md3-1"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <NavLink to="/" className="text-lg font-bold tracking-tight">
          <span className="text-gradient">{portfolioData.personal.shortName}</span>
        </NavLink>

        <div className="hidden md:flex items-center gap-1">
          {portfolioData.nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/"}
              className={navLinkClass}
              aria-label={item.label}
            >
              <span className="group/nav relative">
                {icons[item.label]}
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded-md3-xs bg-surface-elevated border border-outline text-[10px] text-on-surface opacity-0 group-hover/nav:opacity-100 transition-opacity pointer-events-none">
                  {item.label}
                </span>
              </span>
            </NavLink>
          ))}
          <ThemeToggle className="ml-2" />
          <a
            href={portfolioData.personal.resumeUrl}
            className="ml-1 btn-outlined !py-2 !px-4 !text-xs"
            aria-label="Tech CV"
          >
            Tech CV
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-md3-sm text-on-surface-variant hover:bg-surface-variant"
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
        <div className="md:hidden bg-surface border-t border-outline animate-fade-in">
          <div className="flex items-center justify-between px-4 py-2">
            <span className="text-xs font-mono text-on-surface-variant">Menu</span>
            <ThemeToggle />
          </div>
          <div className="px-4 py-3 grid grid-cols-3 gap-1">
            {portfolioData.nav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-2 px-3 py-4 rounded-md3-md text-xs font-medium transition-colors ${
                    isActive
                      ? "text-primary-strong bg-primary/10"
                      : "text-on-surface-variant hover:bg-surface-variant"
                  }`
                }
              >
                {icons[item.label]}
                {item.label}
              </NavLink>
            ))}
            <a
              href={portfolioData.personal.resumeUrl}
              className="flex items-center justify-center gap-2 px-3 py-4 rounded-md3-md text-xs font-semibold text-primary-strong hover:bg-surface-variant"
            >
              Tech CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
