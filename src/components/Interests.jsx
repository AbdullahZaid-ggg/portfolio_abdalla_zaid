import portfolioData from "../data/portfolioData";

export default function Interests() {
  const { interests } = portfolioData;

  if (!interests || interests.length === 0) return null;

  return (
    <section id="interests" className="section-padding py-20 md:py-28 bg-surface-variant/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Interests</h2>
        <p className="section-subheading">اهتماماتي</p>

        <div className="grid md:grid-cols-2 gap-6">
          {interests.map((item, i) => (
            <div key={i} className="md3-card p-6 flex items-start gap-5">
              <div className="w-14 h-14 rounded-md3-lg bg-primary-container flex items-center justify-center text-primary shrink-0 text-2xl">
                🧩
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-display font-semibold text-on-surface">
                  {item.title}
                </h3>
                <p className="text-xs text-on-surface-variant">{item.titleAr}</p>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
                <p className="text-xs text-on-surface-variant leading-relaxed" dir="rtl">
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
