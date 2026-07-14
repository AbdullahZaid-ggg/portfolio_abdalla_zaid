import portfolioData from "../data/portfolioData";

const categoryColors = {
  frontend: "border-l-neon-cyan text-neon-cyan",
  backend: "border-l-secondary text-secondary",
  language: "border-l-tertiary text-tertiary",
  tools: "border-l-on-surface-variant text-on-surface-variant",
};

export default function Skills() {
  const { skills, operatingSystems } = portfolioData;

  return (
    <section id="skills" className="section-padding py-20 md:py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="section-heading">
          <span className="text-terminal-green">$ </span>skills
        </h2>
        <p className="section-subheading">
          <span className="text-on-surface-variant">// </span>المهارات التقنية
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {skills.map((skill) => (
            <div key={skill.name} className="md3-card p-5 group border-l-2 border-l-primary/30 hover:border-l-primary transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono font-medium text-on-surface group-hover:text-primary transition-colors">
                  <span className="text-primary/50">&gt;</span> {skill.name}
                </span>
                <span className={`text-xs font-mono px-2 py-0.5 rounded-md3-xs border border-current/20 ${categoryColors[skill.category] || categoryColors.tools}`}>
                  {skill.category}
                </span>
              </div>
              <div className="w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-700 shadow-[0_0_6px_rgba(0,212,170,0.3)]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="text-xs text-on-surface-variant font-mono mt-1 block text-right">
                {skill.level}%
              </span>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-mono font-semibold text-on-surface mb-4 flex items-center gap-2">
          <span className="text-terminal-green">◆</span> Operating Systems
        </h3>
        <p className="text-xs text-on-surface-variant font-mono mb-6">
          <span className="text-on-surface-variant">// </span>أنظمة التشغيل
        </p>

        <div className="flex flex-wrap gap-3">
          {operatingSystems.map((os) => (
            <div
              key={os.name}
              className="px-4 py-2 rounded-md3-md bg-surface/50 border border-outline/20 font-mono text-sm text-on-surface-variant hover:border-primary/50 hover:text-primary transition-all"
            >
              <span className="text-primary/50">$</span> {os.name}
              {os.versions && (
                <span className="text-xs text-on-surface-variant/50 ml-1">{os.versions}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
