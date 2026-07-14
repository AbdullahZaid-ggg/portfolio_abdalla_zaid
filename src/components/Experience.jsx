import portfolioData from "../data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-padding py-20 md:py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="section-heading">
          <span className="text-terminal-green">$ </span>experience
        </h2>
        <p className="section-subheading">
          <span className="text-on-surface-variant">// </span>الخبرات
        </p>

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <div key={i} className="md3-card p-6 md:p-8 relative pl-10 md:pl-12 border-l-2 border-l-primary/30 hover:border-l-primary transition-all">
              <div className="absolute left-[-5px] md:left-[-5px] top-8 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,212,170,0.5)]" />
              {i < experience.length - 1 && (
                <div className="absolute left-[2px] md:left-[2px] top-11 bottom-0 w-px bg-outline/20" />
              )}

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-base font-mono font-semibold text-on-surface">
                    <span className="text-primary">&gt;</span> {exp.role}
                  </h3>
                  <p className="text-primary/80 font-mono text-sm">
                    {exp.company} &middot; {exp.location}
                  </p>
                </div>
                <span className="text-xs text-on-surface-variant font-mono whitespace-nowrap border border-outline/20 px-2 py-0.5 rounded-md3-xs">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-on-surface-variant font-mono">
                    <span className="text-terminal-green mt-1 shrink-0">▹</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
