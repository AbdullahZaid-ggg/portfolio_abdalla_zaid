import portfolioData from "../data/portfolioData";
import Reveal from "./Reveal";

export default function Interests() {
  const { interests } = portfolioData;

  if (!interests || interests.length === 0) return null;

  return (
    <section id="interests" className="section-padding py-20 md:py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal>
          <div className="section-label">Interests</div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {interests.map((item, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="card-hover p-6 flex items-start gap-5">
                <div className="w-14 h-14 rounded-md3-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center text-2xl shrink-0">
                  🧩
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-on-surface">{item.title}</h3>
                  <p className="text-xs text-on-surface-variant">{item.titleAr}</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-sm text-on-surface-variant/70 leading-relaxed" dir="rtl">
                    {item.descriptionAr}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
