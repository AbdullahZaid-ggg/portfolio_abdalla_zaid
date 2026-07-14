import portfolioData from "../data/portfolioData";

export default function About() {
  const { personal, education } = portfolioData;

  return (
    <section id="about" className="section-padding py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">About Me</h2>
        <p className="section-subheading">نبذة عني</p>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3 space-y-5">
            <p className="text-lg text-on-surface-variant leading-relaxed text-right" dir="rtl">
              {personal.bio}
            </p>
            <div className="border-t border-outline/20 pt-4">
              <p className="text-on-surface-variant leading-relaxed">
                {personal.bioEn}
              </p>
            </div>
            <p className="text-on-surface-variant">
              📍 {personal.location}
            </p>

            <div className="mt-6 space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-primary mb-3">
                Education
              </h3>
              {education.map((edu, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <p className="font-medium text-on-surface">{edu.degree}</p>
                    <p className="text-sm text-on-surface-variant">
                      {edu.school} &middot; {edu.period}
                    </p>
                    {edu.highlights?.map((h, j) => (
                      <p key={j} className="text-xs text-on-surface-variant mt-0.5">{h}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative">
              <img
                src={personal.avatar}
                alt={personal.name}
                className="w-64 h-64 object-cover rounded-md3-xl shadow-md3-3"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-container rounded-md3-lg -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary-container rounded-md3-lg -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
