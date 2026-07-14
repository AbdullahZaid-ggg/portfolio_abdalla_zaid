import { useState } from "react";
import portfolioData from "../data/portfolioData";

export default function Contact() {
  const { contact, social } = portfolioData;
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="section-padding py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">Get in Touch</h2>
        <p className="section-subheading">Let's work together</p>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md3-md bg-primary-container flex items-center justify-center text-primary shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-on-surface-variant">Email</p>
                  <a href={`mailto:${contact.email}`} className="text-on-surface font-medium hover:text-primary">
                    {contact.email}
                  </a>
                </div>
              </div>

              {contact.phone && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md3-md bg-secondary-container flex items-center justify-center text-secondary shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-on-surface-variant">Phone</p>
                    <a href={`tel:${contact.phone}`} className="text-on-surface font-medium hover:text-primary">
                      {contact.phone}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md3-md bg-tertiary-container flex items-center justify-center text-tertiary shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-on-surface-variant">Location</p>
                  <p className="text-on-surface font-medium">{contact.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              {social.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-md3-full text-on-surface-variant hover:text-primary hover:bg-primary-container transition-all"
                  aria-label={s.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-md3-md bg-surface-variant text-on-surface border-2 border-transparent focus:border-primary outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-md3-md bg-surface-variant text-on-surface border-2 border-transparent focus:border-primary outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-1.5">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-md3-md bg-surface-variant text-on-surface border-2 border-transparent focus:border-primary outline-none transition-colors"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-1.5">Message</label>
              <textarea
                rows={5}
                required
                className="w-full px-4 py-3 rounded-md3-md bg-surface-variant text-on-surface border-2 border-transparent focus:border-primary outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button type="submit" className="md3-button-filled w-full sm:w-auto">
              {sent ? "✓ Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
