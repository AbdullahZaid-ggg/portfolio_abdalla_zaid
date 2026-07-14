import portfolioData from "../data/portfolioData";

const categoryColors = {
  frontend: "bg-primary-container text-primary",
  backend: "bg-secondary-container text-secondary",
  language: "bg-tertiary-container text-tertiary",
  tools: "bg-surface-variant text-on-surface-variant",
};

export default function Skills() {
  const { skills, operatingSystems } = portfolioData;

  return (
    <section id="skills" className="section-padding py-20 md:py-28 bg-surface-variant/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Skills</h2>
        <p className="section-subheading">المهارات التقنية</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {skills.map((skill) => (
            <div key={skill.name} className="md3-card p-5 group">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-on-surface">{skill.name}</span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-md3-xs ${categoryColors[skill.category] || categoryColors.tools}`}>
                  {skill.category}
                </span>
              </div>
              <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-700 group-hover:bg-tertiary"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="text-xs text-on-surface-variant mt-1 block text-right">
                {skill.level}%
              </span>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-display font-semibold text-on-surface mb-4">
          Operating Systems
        </h3>
        <p className="text-sm text-on-surface-variant mb-6">أنظمة التشغيل</p>

        <div className="flex flex-wrap gap-3">
          {operatingSystems.map((os) => (
            <div
              key={os.name}
              className="md3-card px-5 py-3 flex items-center gap-3"
            >
              <span className="font-medium text-on-surface text-sm">{os.name}</span>
              {os.versions && (
                <span className="text-xs text-on-surface-variant bg-surface-variant px-2 py-0.5 rounded-md3-xs">
                  {os.versions}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
