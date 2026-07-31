import { useState } from "react";
import portfolioData from "../data/portfolioData";
import Reveal from "./Reveal";

const FILTERS = [
  { key: "all", label: "All" },
  {
    key: "web",
    label: "Web Apps",
    match: (p) => p.tags.some((t) => ["React", "Vite", "HTML5", "JavaScript", "CSS3", "PWA", "Chart.js"].includes(t)),
  },
  {
    key: "embedded",
    label: "ESP32 / Embedded",
    match: (p) => p.tags.some((t) => ["ESP32", "PlatformIO", "MAX7219", "Arduino"].includes(t)),
  },
  {
    key: "cli",
    label: "CLI / C",
    match: (p) => p.tags.some((t) => ["C", "CLI"].includes(t)),
  },
];

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card-hover overflow-hidden group flex flex-col">
      <div className="relative overflow-hidden aspect-[16/10]">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/30 via-tertiary/20 to-secondary/30 flex items-center justify-center">
            <span className="font-pixel text-3xl text-primary-strong/70">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
        {project.builtWithAI && (
          <span className="absolute top-3 right-3 chip !bg-background/80 backdrop-blur-sm !border-primary/40 !text-primary-strong">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            Built with AI
          </span>
        )}
        {project.liveUrl && (
          <span className="absolute bottom-3 left-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 chip !bg-background/80 backdrop-blur-sm !text-secondary">
            ▶ Live Demo
          </span>
        )}
      </div>

      <div className="p-5 space-y-3 flex-1 flex flex-col">
        <div>
          <h3 className="text-lg font-bold text-on-surface group-hover:text-primary-strong transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-on-surface-variant mt-0.5">{project.titleAr}</p>
        </div>

        <p className={`text-xs text-on-surface-variant leading-relaxed ${expanded ? "" : "line-clamp-3"}`}>
          {project.descriptionEn}
        </p>

        {expanded && project.features && (
          <ul className="space-y-1">
            {project.features.map((f, j) => (
              <li key={j} className="flex items-start gap-2 text-xs text-on-surface-variant">
                <span className="text-secondary mt-0.5 shrink-0">▸</span>
                {f}
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="self-start text-xs font-semibold text-primary-strong hover:text-on-surface transition-colors"
          aria-expanded={expanded}
        >
          {expanded ? "▲ Read less" : "▼ Read more"}
        </button>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">{tag}</span>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-filled !py-2 !px-4 !text-xs"
            >
              Live Demo
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outlined !py-2 !px-4 !text-xs"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState("all");

  const visible =
    filter === "all" ? projects : projects.filter((p) => FILTERS.find((f) => f.key === filter).match(p));

  return (
    <section id="projects" className="section-padding py-20 md:py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal>
          <div className="section-label">Projects</div>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex flex-wrap gap-2 mb-8">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-md3-sm text-xs font-semibold border transition-all ${
                  filter === f.key
                    ? "bg-primary/15 border-primary/60 text-primary-strong"
                    : "bg-surface border-outline text-on-surface-variant hover:border-primary/40 hover:text-on-surface"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
