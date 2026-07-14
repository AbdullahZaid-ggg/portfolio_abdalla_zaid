import portfolioData from "../data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-padding py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">Experience</h2>
        <p className="section-subheading">الخبرات</p>

        <div className="space-y-8">
          {experience.map((exp, i) => (
            <div key={i} className="md3-card p-6 md:p-8 relative pl-8 md:pl-10">
              <div className="absolute left-3 md:left-4 top-8 w-3 h-3 rounded-full bg-primary ring-4 ring-surface" />
              {i < experience.length - 1 && (
                <div className="absolute left-[1.35rem] md:left-[1.6rem] top-11 bottom-0 w-px bg-outline/30" />
              )}

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-lg font-display font-semibold text-on-surface">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-medium text-sm">
                    {exp.company} &middot; {exp.location}
                  </p>
                </div>
                <span className="text-sm text-on-surface-variant whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-on-surface-variant">
                    <span className="text-primary mt-1 shrink-0">▹</span>
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
