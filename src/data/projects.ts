export type ProjectCategory = 'systems' | 'embedded' | 'web' | 'meta';

export type Project = {
  name: string;
  repo: string;
  index: string;
  description: string;
  foot?: string;
  tech: string[];
  language: string;
  category: ProjectCategory;
  github: string;
  live?: string;
  visual?: string;
  featured?: boolean;
};

export const projectCategories: { value: 'all' | ProjectCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'systems', label: 'Systems' },
  { value: 'embedded', label: 'Embedded' },
  { value: 'web', label: 'Web' },
  { value: 'meta', label: 'Meta' },
];

const base = 'https://github.com/AbdullahZaid-ggg';

export const projects: Project[] = [
  {
    featured: true,
    name: 'The Big Z Project',
    repo: 'ABD_Z_Systems',
    index: '01 — SYSTEMS / C + C++',
    category: 'systems',
    description:
      'The family of terminal TUI and CLI tools built from scratch with zero external dependencies. A deliberate study in state, persistence, keyboard-driven interfaces, and how much can be built with a standard library and a clear mental model.',
    foot: 'task manager · library system · school system · clock/timer · command shell',
    tech: ['C', 'C++', 'TUI / CLI', 'no external deps'],
    language: 'C++',
    github: `${base}/ABD_Z_Systems`,
  },
  {
    featured: true,
    name: 'ABD_Z_Shell',
    repo: 'ABD_Z_Shell',
    index: '02 — SYSTEMS / C++',
    category: 'systems',
    description:
      'A command shell written in C++ from scratch. Custom prompt, built-in commands, and the plumbing of a real terminal session — built to understand exactly what an operating system hands you.',
    tech: ['C++', 'shell', 'systems'],
    language: 'C++',
    github: `${base}/ABD_Z_Shell`,
  },
  {
    featured: true,
    name: 'Z-School System',
    repo: 'Z_School_System',
    index: '03 — SYSTEMS / C++ / TUI',
    category: 'systems',
    description:
      'A keyboard-driven school management TUI covering students, teachers, managers, and payments with zero-dependency persistence — dense data made navigable.',
    tech: ['C++', 'TUI', 'persistence'],
    language: 'C++',
    github: `${base}/Z_School_System`,
    visual: '/z-school.svg',
  },
  {
    featured: true,
    name: 'Z Clock & Timer',
    repo: 'Z_Clock_Timer_System',
    index: '04 — SYSTEMS / C++ / TUI',
    category: 'systems',
    description:
      'A terminal clock and timer system in C++ — elapsed time, countdowns, and alarms, living inside the Z-Systems family.',
    tech: ['C++', 'TUI', 'time'],
    language: 'C++',
    github: `${base}/Z_Clock_Timer_System`,
    visual: '/z-clock.svg',
  },
  {
    featured: true,
    name: 'Z Tasks Manager CLI',
    repo: 'Z_Tasks_Manager_CLI',
    index: '05 — SYSTEMS / C / CLI',
    category: 'systems',
    description:
      'A lightweight task manager in C — create, track, and persist tasks from the terminal with a clean keyboard-driven flow.',
    tech: ['C', 'CLI', 'persistence'],
    language: 'C',
    github: `${base}/Z_Tasks_Manager_CLI`,
  },
  {
    featured: true,
    name: 'Z-LIB',
    repo: 'Z-LIB',
    index: '06 — SYSTEMS / C++ / TUI',
    category: 'systems',
    description:
      'A library management TUI in C++ — catalog, members, and loans, built as part of the Z-Systems family.',
    tech: ['C++', 'TUI', 'data'],
    language: 'C++',
    github: `${base}/Z-LIB`,
    visual: '/z-lib.svg',
  },
  {
    featured: true,
    name: 'Z-Timer Pro',
    repo: 'Abdullah-Z-Timer',
    index: '07 — WEB / PRODUCT',
    category: 'web',
    description:
      'A polished Pomodoro timer web app — focused sessions, clear state, and a UI built entirely around the clock.',
    tech: ['HTML', 'JavaScript', 'web'],
    language: 'HTML',
    github: `${base}/Abdullah-Z-Timer`,
    live: 'https://abdullahzaid-ggg.github.io/Abdullah-Z-Timer/English-Version/index.html',
  },
  {
    featured: true,
    name: 'Masar End Program',
    repo: 'MasarEndProgram2526',
    index: '08 — WEB / MASAR',
    category: 'web',
    description:
      'The capstone web app for the Masar computer-science track — a JavaScript project shipped live for end-of-program review.',
    tech: ['JavaScript', 'web', 'Vercel'],
    language: 'JavaScript',
    github: `${base}/MasarEndProgram2526`,
    live: 'https://masar-end-program2526.vercel.app',
  },
  {
    featured: true,
    name: 'Graduation Robot Car',
    repo: 'My-School-Graduation-Project',
    index: '09 — EMBEDDED / C++',
    category: 'embedded',
    description:
      'Graduation robot car project in C++ — an embedded build that turns sensors, motors, and control logic into motion.',
    tech: ['C++', 'embedded', 'robotics'],
    language: 'C++',
    github: `${base}/My-School-Graduation-Project`,
    visual: '/robot-car.svg',
  },
  {
    name: 'Snake Game on ESP32',
    repo: '-Interactive-Terminal-Snake-Game-ESP32-C-',
    index: '10 — EMBEDDED / ESP32',
    category: 'embedded',
    description:
      'An interactive terminal Snake game running on the ESP32 — C++ embedded programming with real input handling and a tiny footprint.',
    tech: ['C++', 'ESP32', 'embedded'],
    language: 'C++',
    github: `${base}/-Interactive-Terminal-Snake-Game-ESP32-C-`,
    visual: '/snake.svg',
  },
  {
    name: 'MicroChat ESP32',
    repo: 'MicroChat-ESP32',
    index: '11 — EMBEDDED / ESP32',
    category: 'embedded',
    description:
      'A micro chat system in C for ESP32 boards — minimal messaging between devices with a small, focused stack.',
    tech: ['C', 'ESP32', 'embedded'],
    language: 'C',
    github: `${base}/MicroChat-ESP32`,
    visual: '/microchat.svg',
  },
  {
    name: 'Small Computer',
    repo: 'small_computer_abdalla_zaid',
    index: '12 — SYSTEMS / C++',
    category: 'systems',
    description:
      'A small computer built from first principles in C++ — a hands-on machine that demystifies what happens between code and silicon.',
    tech: ['C++', 'systems', 'from scratch'],
    language: 'C++',
    github: `${base}/small_computer_abdalla_zaid`,
    visual: '/mini-terminal.svg',
  },
  {
    name: 'Teaching How to Solve a Rubik\u2019s Cube',
    repo: 'TeachingHowToSolveRubikCube',
    index: '13 — WEB / EDUCATION',
    category: 'web',
    description:
      'A beginner-friendly website that teaches the Rubik\u2019s cube step by step — interactive, visual, and free of jargon.',
    tech: ['JavaScript', 'web', 'education'],
    language: 'JavaScript',
    github: `${base}/TeachingHowToSolveRubikCube`,
  },
  {
    name: 'Z-Fahm',
    repo: 'Z-Fahm',
    index: '14 — WEB / PRODUCT',
    category: 'web',
    description:
      'An interactive JavaScript web tool built to learn by doing — published on GitHub Pages for anyone to open.',
    tech: ['JavaScript', 'web'],
    language: 'JavaScript',
    github: `${base}/Z-Fahm`,
    live: 'https://z-fahm.vercel.app',
  },
  {
    name: 'Udros Mni 7',
    repo: 'udrusMni7',
    index: '15 — WEB / STUDY',
    category: 'web',
    description:
      'A study-focused web app in JavaScript — a structured space for learning, reviewing, and keeping track of progress.',
    tech: ['JavaScript', 'web', 'study'],
    language: 'JavaScript',
    github: `${base}/udrusMni7`,
    live: 'https://abdullahzaid-ggg.github.io/udrusMni7/',
  },
  {
    name: 'This Portfolio',
    repo: 'portfolio_abdalla_zaid',
    index: '16 — WEB / THIS SITE',
    category: 'web',
    description:
      'This portfolio — the site you are looking at, built with React and Vite and deployed to Vercel.',
    tech: ['React', 'Vite', 'web'],
    language: 'JavaScript',
    github: `${base}/portfolio_abdalla_zaid`,
    live: 'https://portfolio-abdalla-zaid.vercel.app',
  },
  {
    name: 'GitHub Profile README',
    repo: 'AbdullahZaid-ggg',
    index: '17 — META / GITHUB',
    category: 'meta',
    description:
      'The GitHub profile README — the public face of the Abdalla-Z-Systems project.',
    tech: ['markdown', 'meta'],
    language: 'README',
    github: base,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);