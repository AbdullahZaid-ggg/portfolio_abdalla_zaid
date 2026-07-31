import { Link } from "react-router-dom";
import portfolioData from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();
  const { personal, nav, social } = portfolioData;

  return (
    <footer className="border-t border-outline bg-surface/50 section-padding">
      <div className="max-w-6xl mx-auto py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="text-lg font-bold">
              <span className="text-gradient">{personal.shortName}</span>
            </p>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs">
              {personal.headline}. {personal.tagline}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-on-surface mb-4">Quick Links</p>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-on-surface-variant hover:text-primary-strong transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-on-surface mb-4">Connect</p>
            <ul className="space-y-2">
              {social.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-on-surface-variant hover:text-primary-strong transition-colors"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-sm text-on-surface-variant hover:text-primary-strong transition-colors"
                >
                  {personal.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-outline flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-on-surface-variant">
            © {year} {personal.shortName}
            <span className="text-on-surface-variant/50"> · Built with React + Tailwind</span>
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary-strong transition-colors"
          >
            <span className="text-primary-strong">↑</span> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
