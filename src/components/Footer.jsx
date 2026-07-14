import portfolioData from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-outline/20 section-padding py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-on-surface-variant font-mono">
          <span className="text-primary">&copy;</span> {year} {portfolioData.personal.name}
          <span className="text-on-surface-variant/50"> // built with react + tailwind</span>
        </p>

        <a
          href="#hero"
          className="flex items-center gap-2 text-xs text-on-surface-variant font-mono hover:text-primary transition-colors"
        >
          <span className="text-primary">&uarr;</span> back_to_top
        </a>
      </div>
    </footer>
  );
}
