import { useEffect, useRef, useState, type CSSProperties, type FormEvent, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BookOpen,
  Brackets,
  Calculator,
  Check,
  Clock,
  Code2,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  School,
  Terminal,
  Trophy,
  Wrench,
  X,
  Zap,
} from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { featuredProjects, otherProjects, projectCategories, projects, type Project, type ProjectCategory } from '@/data/projects';
import {
  achievements,
  blogPosts,
  certifications,
  coursework,
  education,
  experience,
  interests,
  learnings,
  operatingSystems,
  personal,
  skills,
  testimonials,
} from '@/data/portfolio';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

const learningIcons = [Wrench, BookOpen, School, Clock];
const skillGroups: { value: 'language' | 'frontend' | 'tools'; label: string }[] = [
  { value: 'language', label: 'Languages' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'tools', label: 'Tools & workflow' },
];

function Reveal({ children, className = '', delay = '' }: { children: ReactNode; className?: string; delay?: string }) {
  const [visible, setVisible] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={nodeRef} className={`reveal ${visible ? 'is-visible' : ''} ${delay} ${className}`}>{children}</div>;
}

function ProjectTile({ project, mini = false }: { project: Project; mini?: boolean }) {
  return (
    <article
      className={`project-tile ${mini ? 'is-mini' : ''} ${project.featured ? 'is-featured' : ''}`}
      data-category={project.category}
      data-testid={`project-${project.repo}`}
    >
      <div className="tile-top">
        <div className="project-index">{project.index}</div>
        <div className="tile-lang" title={project.language}>
          <span className="lang-dot" data-lang={project.language} />
          <span>{project.language}</span>
        </div>
      </div>
      {project.visual && (
        <div className="tile-visual">
          <img src={project.visual} alt="" loading="lazy" />
        </div>
      )}
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="project-meta">
        {project.tech.map((tag) => <span className="meta-tag" key={tag}>{tag}</span>)}
      </div>
      <div className="feature-actions">
        <a className="link-arrow" href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>
        {project.live && <a className="link-arrow live" href={project.live} target="_blank" rel="noreferrer">Live <ExternalLink size={13} /></a>}
      </div>
    </article>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [filter, setFilter] = useState<'all' | ProjectCategory>('all');

  const closeMenu = () => setMenuOpen(false);
  const copyEmail = async () => {
    await navigator.clipboard?.writeText(personal.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(String(data.get('subject') || 'Hello Abdallah'));
    const message = encodeURIComponent(String(data.get('message') || ''));
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${message}`;
    setSent(true);
  };

  const filteredFeatured = (filter === 'all' ? featuredProjects : featuredProjects.filter((p) => p.category === filter)).slice(1);
  const filteredOthers = filter === 'all' ? otherProjects : otherProjects.filter((p) => p.category === filter);
  const visibleCount = filter === 'all' ? projects.length : projects.filter((p) => p.category === filter).length;
  const activeFilterLabel = filter === 'all' ? 'all categories' : projectCategories.find((c) => c.value === filter)?.label ?? filter;

  return (
    <div className="site-shell noise">
      <header className="topbar">
        <div className="container-wide topbar-inner">
          <a href="#top" className="brand" onClick={closeMenu} data-testid="link-brand">
            <span className="brand-mark">AZ</span>
            <span className="brand-name">Abdallah Zaid <span>/ engineer</span></span>
          </a>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            <a href="#about" onClick={closeMenu} data-testid="link-nav-about">About</a>
            <a href="#stack" onClick={closeMenu} data-testid="link-nav-stack">Stack</a>
            <a href="#projects" onClick={closeMenu} data-testid="link-nav-projects">Projects</a>
            <a href="#learnings" onClick={closeMenu} data-testid="link-nav-learnings">Learnings</a>
            <a href="#blog" onClick={closeMenu} data-testid="link-nav-blog">Blog</a>
            <a href="#contact" onClick={closeMenu} data-testid="link-nav-contact">Contact</a>
          </nav>
          <div className="nav-availability"><span className="status-dot" /> Open to conversations</div>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)} data-testid="button-menu">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid" />
          <div className="container-wide hero-layout">
            <div>
              <div className="hero-kicker hero-enter">Full-stack developer / low-level builder</div>
              <h1 className="hero-enter">Build <span className="lime">with</span><br /><span className="outline">precision.</span></h1>
              <p className="hero-sub hero-enter"><strong>{personal.shortName}</strong> is a Technion software engineering student making elegant web experiences and terminal systems that respect the machine underneath.</p>
              <div className="hero-actions hero-enter">
                <a className="button-primary" href="#projects" data-testid="link-hero-projects">Explore the projects <ArrowDown size={15} /></a>
                <a className="button-ghost" href={personal.resumeUrl} target="_blank" rel="noreferrer" data-testid="link-download-resume">Read the resume <Download size={15} /></a>
              </div>
            </div>
            <div className="hero-aside hero-enter">
              <div className="portrait-frame">
                <img src={personal.avatar} alt={`Portrait of ${personal.name}`} data-testid="img-avatar" />
                <div className="portrait-label">{personal.location}<span>available for the right problem</span></div>
              </div>
              <div className="hero-code">
                <div className="comment">// current state</div>
                <div><span className="key">focus</span>: <span className="value">"computer science"</span></div>
                <div><span className="key">mode</span>: <span className="value">"deep work"</span></div>
                <div><span className="key">deps</span>: <span className="value">0</span></div>
              </div>
            </div>
          </div>
          <div className="container-wide hero-foot"><span>AZ / 2025</span><span className="scroll-mark"><span /> Scroll to inspect</span></div>
        </section>

        <div className="signal-strip" aria-label="Quick facts">
          <div className="container-wide signal-inner">
            <div className="signal-item"><MapPin size={15} /><strong>{personal.location}</strong></div>
            <div className="signal-item"><Terminal size={15} /><strong>Systems + product</strong> one engineer, both ends</div>
            <div className="signal-item"><Zap size={15} /><strong>Fast by design</strong> mathematical problem solving</div>
          </div>
        </div>

        <section id="about" className="section">
          <div className="container-wide about-layout">
            <Reveal className="about-number">01</Reveal>
            <Reveal className="about-copy delay-1">
              <div className="eyebrow">The person behind the code</div>
              <h2 className="section-heading">Curious all the way <em>down.</em></h2>
              <p>{personal.bio}</p>
              <div className="about-callout">
                <Brackets size={20} />
                <p>When I'm not building, I'm usually exploring Linux, working through a mathematical problem, or speedcubing until an algorithm becomes muscle memory.</p>
              </div>
              <div className="interests">
                {interests.map((item, i) => (
                  <div className="interest-card" key={item.title} data-testid={`interest-${i}`}>
                    {i === 0 ? <Calculator size={18} /> : <Trophy size={18} />}
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.description}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="milestones">
                {achievements.map((a) => (
                  <div className="milestone" key={a.title}>
                    <Award size={15} />
                    <div>
                      <strong>{a.title}</strong>
                      <span>{a.description}</span>
                      <small>{a.period}</small>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="stack" className="section skills-section">
          <div className="container-wide">
            <Reveal>
              <div className="eyebrow">02 / The toolkit</div>
              <h2 className="section-heading">Comfortable at <em>every layer.</em></h2>
            </Reveal>
            <div className="skills-layout">
              <div className="skill-groups">
                {skillGroups.map((group, g) => (
                  <Reveal key={group.value} className={`skill-group delay-${g % 2 === 0 ? 1 : 2}`}>
                    <div className="skill-group-label">{group.label}</div>
                    <div className="skill-bars">
                      {skills.filter((s) => s.category === group.value).map((s) => (
                        <div className="skill-bar" key={s.name} style={{ '--w': `${s.level}%` } as CSSProperties} data-testid={`skill-${s.name}`}>
                          <div className="skill-bar-head"><span>{s.name}</span><span>{s.level}%</span></div>
                          <div className="skill-bar-track"><div className="skill-bar-fill" style={{ width: `${s.level}%` }} /></div>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                ))}
                <Reveal className="skill-group delay-3">
                  <div className="skill-group-label">Operating systems</div>
                  <div className="os-row">
                    {operatingSystems.map((os) => (
                      <span className="os-chip" key={os.name} title={os.level ? `${os.name} — ${os.level}` : os.name}>
                        {os.name}{os.level && <i>{os.level}</i>}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
              <Reveal className="skill-note delay-2">
                <strong>How I choose a tool</strong>
                The stack follows the problem. React and Vite when a product needs speed and clarity. C and C++ when understanding memory, state, and the operating system is the point. Linux and Git are the ground everything runs on.
              </Reveal>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container-wide">
            <Reveal className="work-intro">
              <div>
                <div className="eyebrow">03 / Projects</div>
                <h2 className="section-heading">Proof, not <em>promises.</em></h2>
              </div>
              <p>Every repo, from terminal tools written from scratch to live web apps. Filter by what you care about.</p>
            </Reveal>

            <Reveal>
              <div className="filter-bar" role="group" aria-label="Filter projects by category">
                {projectCategories.map((cat) => {
                  const count = cat.value === 'all' ? projects.length : projects.filter((p) => p.category === cat.value).length;
                  const active = filter === cat.value;
                  return (
                    <button
                      key={cat.value}
                      type="button"
                      className={`filter-chip ${active ? 'is-active' : ''}`}
                      aria-pressed={active}
                      onClick={() => setFilter(cat.value)}
                      data-testid={`filter-${cat.value}`}
                    >
                      {cat.label}
                      <span className="filter-count">{count}</span>
                    </button>
                  );
                })}
              </div>
              <div className="work-stats"><span className="status-dot" /> Showing {visibleCount} of {projects.length} projects · {activeFilterLabel}</div>
            </Reveal>

            {filter === 'all' && (
              <Reveal className="project-card delay-1">
                <div className="project-top">
                  <div className="project-copy">
                    <div className="project-index">{featuredProjects[0].index}</div>
                    <h3 className="project-title">{featuredProjects[0].name} <span>{featuredProjects[0].repo}</span></h3>
                    <p className="project-description">{featuredProjects[0].description}</p>
                    <div className="project-meta">
                      {featuredProjects[0].tech.map((tag) => <span className="meta-tag" key={tag}>{tag}</span>)}
                    </div>
                  </div>
                  <div className="project-visual">
                    <div className="terminal-window">
                      <div className="terminal-bar"><i /><i /><i /><span>abdalla_z_systems — zsh</span></div>
                      <div className="terminal-body">
                        <div><span className="green">abdallah@technion</span><span className="dim">:~/z-systems$</span> ./z-school</div>
                        <br />
                        <div className="cyan">Z-SCHOOL SYSTEM / STUDENTS</div>
                        <div className="dim">────────────────────────────────────</div>
                        <div><span className="orange">ID</span>   NAME             GRADE   STATUS</div>
                        <div>001  Abdallah Zaid    10      <span className="green">ACTIVE</span></div>
                        <div>002  Maria Cohen      11      <span className="green">ACTIVE</span></div>
                        <div>003  Yousef Haddad     9      <span className="orange">REVIEW</span></div>
                        <br />
                        <div className="dim">[j/k] navigate  [a] add  [e] edit  [q] quit</div>
                        <div><span className="green">▌</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-bottom">
                  <p>{featuredProjects[0].foot}</p>
                  <a className="link-arrow" href={featuredProjects[0].github} target="_blank" rel="noreferrer" data-testid="link-big-z-github">Inspect on GitHub <ArrowUpRight size={14} /></a>
                </div>
              </Reveal>
            )}

            {filteredFeatured.length > 0 && (
              <div className="project-grid">
                {filteredFeatured.map((project, i) => (
                  <Reveal key={project.repo} className={`project-tile-wrap delay-${(i % 2) + 1}`}>
                    <ProjectTile project={project} />
                  </Reveal>
                ))}
              </div>
            )}

            {filter === 'all' && filteredOthers.length > 0 && (
              <>
                <div className="archive-head">
                  <Reveal>
                    <div className="eyebrow">Everything else · the full archive</div>
                  </Reveal>
                </div>
                <div className="project-grid">
                  {filteredOthers.map((project, i) => (
                    <Reveal key={project.repo} className={`project-tile-wrap delay-${(i % 2) + 1}`}>
                      <ProjectTile project={project} mini />
                    </Reveal>
                  ))}
                </div>
              </>
            )}

            {filter !== 'all' && filteredOthers.length > 0 && (
              <div className="project-grid">
                {filteredOthers.map((project, i) => (
                  <Reveal key={project.repo} className={`project-tile-wrap delay-${(i % 2) + 1}`}>
                    <ProjectTile project={project} mini />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="path" className="section timeline-section">
          <div className="container-wide">
            <Reveal>
              <div className="eyebrow">04 / Trajectory</div>
              <h2 className="section-heading">Built from <em>first principles.</em></h2>
              <p className="section-copy">The through-line is simple: understand the constraint, then make something useful inside it.</p>
            </Reveal>
            <div className="path-grid">
              <Reveal className="path-col delay-1">
                <div className="eyebrow">Experience</div>
                <div className="timeline">
                  {experience.map((exp) => (
                    <div className="timeline-item" key={exp.company}>
                      <div className="timeline-date">{exp.period}</div>
                      <h3>{exp.role}</h3>
                      <div className="timeline-org">{exp.company} · {exp.location}</div>
                      <ul>
                        {exp.highlights.map((h) => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal className="path-col delay-2">
                <div className="eyebrow">Education</div>
                <div className="timeline">
                  {education.map((edu) => (
                    <div className="timeline-item" key={edu.school}>
                      <div className="timeline-date">{edu.period}</div>
                      <h3>{edu.degree}</h3>
                      <div className="timeline-org">{edu.school}</div>
                      <ul>
                        {edu.highlights.map((h) => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="learnings" className="section">
          <div className="container-wide">
            <Reveal className="work-intro">
              <div>
                <div className="eyebrow">05 / Field notes</div>
                <h2 className="section-heading">What building <em>taught me.</em></h2>
              </div>
              <p>Short lessons extracted from shipping real systems — one build, one lesson set.</p>
            </Reveal>
            <div className="learning-grid">
              {learnings.map((learning, i) => {
                const Icon = learningIcons[i % learningIcons.length];
                return (
                  <Reveal key={learning.project} className={`learning-card delay-${(i % 2) + 1}`}>
                    <div className="learning-top">
                      <span className="learning-icon"><Icon size={16} /></span>
                      <span className="lang-tag">{learning.language}</span>
                    </div>
                    <div className="project-index">{learning.project}</div>
                    <h3>{learning.title}</h3>
                    <div className="lesson-list">
                      {learning.lessons.map((lesson) => (
                        <details className="lesson" key={lesson.title}>
                          <summary>{lesson.title}</summary>
                          <p>{lesson.body}</p>
                        </details>
                      ))}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="blog" className="section blog-section">
          <div className="container-wide">
            <Reveal className="work-intro">
              <div>
                <div className="eyebrow">06 / Notes from the terminal</div>
                <h2 className="section-heading">Writing things <em>down.</em></h2>
              </div>
              <p>Longer write-ups on the builds that changed how I think. Expand a post to read the whole story.</p>
            </Reveal>
            <div className="blog-list">
              {blogPosts.map((post, i) => (
                <Reveal key={post.title} className={`blog-card delay-${(i % 2) + 1}`}>
                  <details className="blog-details">
                    <summary>
                      <div className="blog-meta">
                        <FileText size={14} />
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <div className="blog-tags">
                        {post.tags.map((tag) => <span className="meta-tag" key={tag}>{tag}</span>)}
                      </div>
                    </summary>
                    <div className="blog-body">
                      {post.content.map((para) => <p key={para.slice(0, 24)}>{para}</p>)}
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container-wide contact-layout">
            <Reveal>
              <div className="eyebrow">07 / Start a conversation</div>
              <h2 className="contact-heading">Have a hard<br /><span>problem?</span></h2>
              <p className="contact-sub">I'm looking for thoughtful teams and ambitious problems. If you need someone who can own the interface and understand the process beneath it, let's talk.</p>
              <form className="contact-form" onSubmit={handleSubmit}>
                <input name="subject" type="hidden" value="A conversation about your work" readOnly />
                <input name="message" aria-label="Message" placeholder="Tell me what you're working on..." data-testid="input-contact-message" required />
                <button className="button-primary" type="submit" data-testid="button-send-message">{sent ? <><Check size={15} /> Mail client opened</> : <>Send a note <ArrowUpRight size={15} /></>}</button>
              </form>
              <div className="credentials">
                <div className="cred-col">
                  <div className="eyebrow">Certifications</div>
                  {certifications.map((cert) => (
                    <div className="cred-item" key={cert.title}>
                      <GraduationCap size={15} />
                      <div>
                        {cert.url
                          ? <a href={cert.url} target="_blank" rel="noreferrer">{cert.title}</a>
                          : <span>{cert.title}</span>}
                        <small>{cert.issuer} · {cert.year}</small>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cred-col">
                  <div className="eyebrow">Coursework</div>
                  <div className="os-row">
                    {coursework.map((course) => <span className="os-chip" key={course}>{course}</span>)}
                  </div>
                </div>
              </div>
              {testimonials.map((t) => (
                <blockquote className="testimonial" key={t.name}>
                  “{t.quote}”
                  <cite>— {t.name}, {t.role}</cite>
                </blockquote>
              ))}
            </Reveal>
            <Reveal className="contact-links delay-1">
              <a className="contact-link" href={`mailto:${personal.email}`} data-testid="link-email"><Mail size={18} /> {personal.email} <span>EMAIL</span></a>
              <button className="contact-link" type="button" onClick={copyEmail} data-testid="button-copy-email"><Code2 size={18} /> {copied ? 'Copied to clipboard' : 'Copy email address'} <span>{copied ? 'DONE' : 'COPY'}</span></button>
              <a className="contact-link" href="https://github.com/AbdullahZaid-ggg" target="_blank" rel="noreferrer" data-testid="link-github"><Github size={18} /> github.com/AbdullahZaid-ggg <span>GITHUB</span></a>
              <a className="contact-link" href="https://www.linkedin.com/in/abdalla-zaid-81926439b" target="_blank" rel="noreferrer" data-testid="link-linkedin"><Linkedin size={18} /> LinkedIn profile <span>LINKEDIN</span></a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container-wide footer-inner">
          <span>© 2025 {personal.name}. Built with attention to the details.</span>
          <a href="#top" data-testid="link-back-top">Back to top <ArrowDown size={12} style={{ transform: 'rotate(180deg)' }} /></a>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;