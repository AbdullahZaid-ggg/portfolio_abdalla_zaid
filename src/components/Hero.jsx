import portfolioData from "../data/portfolioData";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center section-padding pt-20"
    >
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8 inline-block">
          <img
            src={personal.avatar}
            alt={personal.name}
            className="w-28 h-28 rounded-md3-xl object-cover shadow-md3-3 mx-auto ring-4 ring-primary-container"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-on-background mb-4 leading-tight">
          {personal.headline}
        </h1>

        <p className="text-xl sm:text-2xl text-primary font-display font-medium mb-4">
          {personal.name}
        </p>

        <p className="text-sm text-on-surface-variant mb-2 font-arabic">
          {personal.nameAr} &middot; {personal.headlineAr}
        </p>

        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          {personal.tagline}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href={personal.resumeUrl} className="md3-button-filled">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
          <a href="#projects" className="md3-button-outlined">
            View Projects
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          {portfolioData.social.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-md3-full text-on-surface-variant hover:text-primary hover:bg-primary-container transition-all"
              aria-label={s.name}
            >
              {s.icon === "github" && (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
                </svg>
              )}
              {s.icon === "linkedin" && (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              )}
              {s.icon === "email" && (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
