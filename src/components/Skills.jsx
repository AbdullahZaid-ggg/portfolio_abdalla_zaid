import portfolioData from "../data/portfolioData";
import Reveal from "./Reveal";

const categoryColors = {
  frontend: "text-secondary border-secondary/40",
  backend: "text-tertiary border-tertiary/40",
  language: "text-primary-strong border-primary/40",
  tools: "text-on-surface-variant border-outline",
};

export default function Skills() {
  const { skills, operatingSystems, certifications, coursework } = portfolioData;

  return (
    <section id="skills" className="section-padding py-20 md:py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal>
          <div className="section-label">02. Skills</div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={(i % 4) * 80}>
              <div className="card-hover p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-on-surface">{skill.name}</span>
                  <span className={`text-xs font-mono px-2 py-0.5 rounded-md3-xs border ${categoryColors[skill.category] || categoryColors.tools}`}>
                    {skill.category}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-xs text-on-surface-variant mt-1 block text-right font-mono">
                  {skill.level}%
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="text-lg font-bold text-on-surface mb-4">Operating Systems</h3>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-wrap gap-3">
            {operatingSystems.map((os) => (
              <div
                key={os.name}
                className="chip hover:border-primary/50 hover:text-on-surface transition-colors"
              >
                {os.name}
                {os.versions && (
                  <span className="text-xs text-on-surface-variant/60">{os.versions}</span>
                )}
                {os.level && (
                  <span className="text-xs text-primary-strong/70">{os.level}</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {certifications && certifications.length > 0 && (
          <div className="mt-14 space-y-5">
            <Reveal>
              <h3 className="text-lg font-bold text-on-surface mb-4">Certifications</h3>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="card-hover p-5 h-full flex flex-col">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="w-9 h-9 rounded-md3-md bg-secondary/10 border border-secondary/30 flex items-center justify-center text-secondary shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <span className="text-xs font-mono text-primary-strong whitespace-nowrap">{cert.year}</span>
                    </div>
                    <p className="font-semibold text-on-surface text-sm leading-snug">{cert.title}</p>
                    <p className="text-xs text-on-surface-variant mt-1">{cert.issuer}</p>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-primary-strong hover:text-on-surface transition-colors mt-auto pt-3"
                      >
                        View course →
                      </a>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {coursework && coursework.length > 0 && (
          <div className="mt-14 space-y-5">
            <Reveal>
              <h3 className="text-lg font-bold text-on-surface mb-4">Coursework</h3>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-wrap gap-3">
                {coursework.map((course) => (
                  <span key={course} className="chip">
                    {course}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
