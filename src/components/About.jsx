import portfolioData from "../data/portfolioData";

export default function About() {
  const { personal, education } = portfolioData;

  return (
    <section id="about" className="section-padding py-20 md:py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="section-heading">
          <span className="text-terminal-green">$ </span>about_me
        </h2>
        <p className="section-subheading">
          <span className="text-on-surface-variant">// </span>نبذة عني
        </p>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3 space-y-5">
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-dot bg-red-500" />
                <span className="terminal-dot bg-yellow-500" />
                <span className="terminal-dot bg-terminal-green" />
                <span className="text-xs text-on-surface-variant/50 ml-2">about.md</span>
              </div>
              <div className="p-4 font-mono text-sm leading-relaxed text-on-surface-variant text-right" dir="rtl">
                <span className="text-terminal-green">$ </span>
                <span>{personal.bio}</span>
              </div>
            </div>

            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-dot bg-red-500" />
                <span className="terminal-dot bg-yellow-500" />
                <span className="terminal-dot bg-terminal-green" />
                <span className="text-xs text-on-surface-variant/50 ml-2">about_en.md</span>
              </div>
              <div className="p-4 font-mono text-sm leading-relaxed text-on-surface-variant">
                <span className="text-terminal-green">$ </span>
                <span>{personal.bioEn}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-on-surface-variant font-mono">
              <span className="text-neon-cyan">📍</span>
              <span className="text-primary">$</span> echo $LOCATION
              <span className="text-terminal-green">&rarr; {personal.location}</span>
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-primary flex items-center gap-2">
                <span className="text-terminal-green">◆</span> education
              </h3>
              {education.map((edu, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-md3-md bg-surface/50 border border-outline/10">
                  <span className="text-primary mt-1 shrink-0 font-mono">&gt;</span>
                  <div>
                    <p className="font-mono font-medium text-on-surface">{edu.degree}</p>
                    <p className="text-sm font-mono text-on-surface-variant">
                      {edu.school} &middot; {edu.period}
                    </p>
                    {edu.highlights?.map((h, j) => (
                      <p key={j} className="text-xs font-mono text-on-surface-variant/70 mt-1">
                        <span className="text-terminal-green"># </span>{h}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-md3-xl bg-primary/10 blur-2xl animate-pulse" />
              <img
                src={personal.avatar}
                alt={personal.name}
                className="relative w-64 h-64 object-cover rounded-md3-xl shadow-md3-3 ring-2 ring-primary/30"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 border border-primary/30 rounded-md3-lg -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/10 border border-secondary/30 rounded-md3-lg -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
