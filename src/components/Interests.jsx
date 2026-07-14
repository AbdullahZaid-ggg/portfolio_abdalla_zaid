import portfolioData from "../data/portfolioData";

export default function Interests() {
  const { interests } = portfolioData;

  if (!interests || interests.length === 0) return null;

  return (
    <section id="interests" className="section-padding py-20 md:py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="section-heading">
          <span className="text-terminal-green">$ </span>interests
        </h2>
        <p className="section-subheading">
          <span className="text-on-surface-variant">// </span>اهتماماتي
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {interests.map((item, i) => (
            <div key={i} className="md3-card p-6 flex items-start gap-5 border-l-2 border-l-primary/30 hover:border-l-primary transition-all">
              <div className="w-14 h-14 rounded-md3-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0 text-2xl">
                🧩
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-mono font-semibold text-on-surface">
                  <span className="text-primary">&gt;</span> {item.title}
                </h3>
                <p className="text-xs text-on-surface-variant font-mono">{item.titleAr}</p>
                <p className="text-sm text-on-surface-variant font-mono leading-relaxed">
                  {item.description}
                </p>
                <p className="text-xs text-on-surface-variant/70 font-mono leading-relaxed" dir="rtl">
                  {item.descriptionAr}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
