import portfolioData from "../data/portfolioData";
import Reveal from "./Reveal";
import GitHubStats from "./GitHubStats";

export default function About() {
  const { personal, education, testimonials, social } = portfolioData;
  const githubUser = social.find((s) => s.icon === "github")?.url.split("/").filter(Boolean).pop() || "AbdullahZaid-ggg";

  return (
    <section id="about" className="section-padding py-20 md:py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal>
          <div className="section-label">01. About Me</div>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3 space-y-5">
            <Reveal delay={100}>
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
                {personal.bioEn}
              </p>
            </Reveal>
            <Reveal delay={150}>
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed" dir="rtl">
                {personal.bio}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex items-center gap-2 pt-2 text-sm text-on-surface-variant">
                <svg className="w-5 h-5 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                {personal.location}
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="flex flex-wrap gap-2 pt-2">
                {["React", "C", "C++", "Python", "Linux", "JavaScript"].map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </Reveal>

            <div className="mt-8 space-y-5">
              <Reveal>
                <h3 className="text-sm font-mono text-primary-strong uppercase tracking-widest">
                  Education
                </h3>
              </Reveal>
              <div className="relative pl-6 space-y-6 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-outline">
                {education.map((edu, i) => (
                  <Reveal key={i} delay={i * 100}>
                    <div className="relative">
                      <span className="absolute -left-6 top-1.5 w-[15px] h-[15px] rounded-full bg-primary border-[3px] border-background" />
                      <div className="card p-5 hover:border-primary/60 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                          <p className="font-semibold text-on-surface">{edu.degree}</p>
                          <span className="text-xs text-primary-strong font-mono whitespace-nowrap">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-sm text-on-surface-variant">{edu.school}</p>
                        {edu.highlights?.map((h, j) => (
                          <p key={j} className="text-sm text-on-surface-variant/80 mt-1.5">
                            {h}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center md:justify-end">
            <Reveal delay={200}>
              <div className="relative">
                <div className="absolute inset-0 rounded-md3-xl bg-gradient-to-br from-primary via-tertiary to-secondary blur-2xl opacity-30 animate-glow-pulse" />
                <img
                  src={personal.avatar}
                  alt={personal.shortName}
                  className="relative w-64 h-64 object-cover rounded-md3-xl shadow-md3-3 ring-2 ring-primary/30"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-md3-lg bg-gradient-to-br from-primary/30 to-secondary/30 border border-outline -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-md3-lg bg-gradient-to-br from-secondary/20 to-tertiary/20 border border-outline -z-10" />
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 space-y-5">
          <Reveal>
            <h3 className="text-sm font-mono text-primary-strong uppercase tracking-widest">
              GitHub
            </h3>
          </Reveal>
          <Reveal delay={100}>
            <div className="p-6 md:p-8 rounded-md3-lg bg-[#0d1117] border border-outline">
              <GitHubStats username={githubUser} />
            </div>
          </Reveal>
        </div>

        {testimonials && testimonials.length > 0 && (
          <div className="mt-16 space-y-5">
            <Reveal>
              <h3 className="text-sm font-mono text-primary-strong uppercase tracking-widest">
                Testimonials
              </h3>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <Reveal key={i} delay={i * 120}>
                  <div className="card-hover p-6 h-full">
                    <div className="text-primary-strong mb-3" aria-hidden>
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                      </svg>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed italic">
                      "{t.quote}"
                    </p>
                    <p className="mt-4 text-sm font-semibold text-on-surface">{t.name}</p>
                    <p className="text-xs text-primary-strong">{t.role}</p>
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
