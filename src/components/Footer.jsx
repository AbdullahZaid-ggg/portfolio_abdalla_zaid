import portfolioData from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-variant/50 border-t border-outline/20 section-padding py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-on-surface-variant">
          &copy; {year} {portfolioData.personal.name}. Built with React + Tailwind + MD3.
        </p>

        <a
          href="#hero"
          className="flex items-center gap-2 text-sm text-primary hover:text-primary font-medium transition-colors"
        >
          Back to top
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
