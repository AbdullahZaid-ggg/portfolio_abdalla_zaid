import portfolioData from "../data/portfolioData";
import Reveal from "./Reveal";

export default function Experience() {
  const { experience, achievements } = portfolioData;

  return (
    <section id="experience" className="section-padding py-20 md:py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <Reveal>
          <div className="section-label">04. Experience</div>
        </Reveal>

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="card-hover p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-on-surface">{exp.role}</h3>
                  <p className="text-primary-strong font-medium">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span className="text-xs font-mono text-on-surface-variant whitespace-nowrap chip">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-on-surface-variant leading-relaxed">
                    <span className="text-secondary mt-1.5 shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {achievements && achievements.length > 0 && (
          <div className="mt-16 space-y-5">
            <Reveal>
              <h3 className="text-sm font-mono text-primary-strong uppercase tracking-widest">
                Achievements
              </h3>
            </Reveal>
            <div className="relative pl-6 space-y-6 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-outline">
              {achievements.map((a, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="relative">
                    <span className="absolute -left-6 top-1.5 w-[15px] h-[15px] rounded-full bg-secondary border-[3px] border-background" />
                    <div className="card p-5 hover:border-primary/60 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                        <p className="font-semibold text-on-surface">{a.title}</p>
                        <span className="text-xs text-primary-strong font-mono whitespace-nowrap">
                          {a.period}
                        </span>
                      </div>
                      <p className="text-sm text-on-surface-variant">{a.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
