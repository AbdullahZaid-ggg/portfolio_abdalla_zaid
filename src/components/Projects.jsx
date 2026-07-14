import portfolioData from "../data/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section-padding py-20 md:py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="section-heading">
          <span className="text-terminal-green">$ </span>projects
        </h2>
        <p className="section-subheading">
          <span className="text-on-surface-variant">// </span>مشاريعي
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="md3-card overflow-hidden group flex flex-col">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <div>
                  <h3 className="text-lg font-mono font-semibold text-on-surface group-hover:text-primary transition-colors">
                    <span className="text-primary/50">&gt;</span> {project.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant font-mono mt-0.5">
                    <span className="text-on-surface-variant">// </span>{project.titleAr}
                  </p>
                </div>

                <p className="text-sm text-on-surface-variant font-mono leading-relaxed">
                  {project.description}
                </p>

                {project.features && (
                  <div className="space-y-1.5">
                    <p className="text-xs font-mono text-primary uppercase tracking-wider flex items-center gap-1">
                      <span className="text-terminal-green">◆</span> Features
                    </p>
                    <ul className="space-y-1">
                      {project.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-on-surface-variant font-mono">
                          <span className="text-primary mt-0.5 shrink-0">&gt;</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="md3-chip">{tag}</span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md3-button-filled !py-2 !px-4 !text-xs"
                  >
                    <span className="text-on-primary">./demo</span>
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md3-button-outlined !py-2 !px-4 !text-xs"
                  >
                    <span>$</span> view_source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
