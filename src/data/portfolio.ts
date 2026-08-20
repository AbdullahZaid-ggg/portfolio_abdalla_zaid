export type Skill = {
  name: string;
  level: number;
  category: 'language' | 'frontend' | 'tools';
};

export type OperatingSystem = {
  name: string;
  versions?: string;
  level?: string;
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
};

export type Education = {
  degree: string;
  school: string;
  period: string;
  highlights: string[];
};

export type Learning = {
  project: string;
  language: string;
  title: string;
  lessons: { title: string; body: string }[];
};

export type Interest = {
  title: string;
  description: string;
};

export type BlogPost = {
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  content: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  url: string;
};

export type Achievement = {
  title: string;
  period: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const personal = {
  name: 'Abdallah Ibrahim Zaid',
  shortName: 'Abdallah Zaid',
  headline: 'Full-Stack Developer & Software Engineering Student at Technion',
  tagline:
    'I build elegant, accessible digital experiences. Passionate about mathematics, problem-solving, Linux, and speedcubing.',
  bio: "I'm a Full-Stack developer passionate about building web applications and solving complex programming problems. I'm currently a student at the Technion — Israel Institute of Technology, majoring in Computer Science with a focus on Software Engineering. I have a strong technical background in Physics and Electronics. I specialize in Linux environments and thrive on mental challenges and fast execution — whether in code or speedcubing competitions. I completed the Masar program (PreTech) and am currently taking Dr. Angela Yu's Full-Stack Web Development Bootcamp on Udemy.",
  avatar: '/avatar.jpeg',
  resumeUrl: '/HAAT_CV.pdf',
  location: 'Kfar Qari, Israel',
  email: 'abdallazeed3@gmail.com',
};

export const skills: Skill[] = [
  { name: 'C', level: 95, category: 'language' },
  { name: 'C++', level: 90, category: 'language' },
  { name: 'C#', level: 80, category: 'language' },
  { name: 'Python', level: 95, category: 'language' },
  { name: 'JavaScript', level: 95, category: 'language' },
  { name: 'Kotlin', level: 70, category: 'language' },
  { name: 'HTML5', level: 95, category: 'frontend' },
  { name: 'CSS3', level: 95, category: 'frontend' },
  { name: 'React', level: 85, category: 'frontend' },
  { name: 'Vite', level: 80, category: 'frontend' },
  { name: 'Git', level: 80, category: 'tools' },
];

export const operatingSystems: OperatingSystem[] = [
  { name: 'Windows', versions: '10 / 11', level: 'Advanced' },
  { name: 'macOS', level: 'Basic' },
  { name: 'Ubuntu' },
  { name: 'Debian' },
  { name: 'Fedora' },
  { name: 'Arch Linux' },
  { name: 'Linux Mint' },
  { name: 'Pop!_OS' },
  { name: 'Kali Linux' },
  { name: 'Parrot OS' },
  { name: 'Manjaro' },
  { name: 'Zorin OS' },
  { name: 'EndeavourOS' },
  { name: 'Gentoo' },
];

export const experience: Experience[] = [
  {
    role: 'Full-Stack Developer (Trainee)',
    company: 'Masar Program (PreTech)',
    location: 'Remote',
    period: '2025 — 2026',
    highlights: [
      'Built and shipped Z-Fahm — a full-featured quiz app with React 19 + Vite 8, 98 questions, API integration, PWA support, and history tracking',
      'Developed Tatawo3 65x — a volunteer platform serving 48+ centers with interactive maps, search/filter, and an Arabic RTL interface',
      'Currently taking Dr. Angela Yu\u2019s Full-Stack Web Development Bootcamp on Udemy',
      'Worked extensively in Linux environments (Arch, Debian, Ubuntu, Fedora, and more)',
    ],
  },
];

export const education: Education[] = [
  {
    degree: 'B.Sc. Computer Science — Software Engineering',
    school: 'Technion — Israel Institute of Technology',
    period: 'Current',
    highlights: [
      'Currently pursuing a B.Sc. in Computer Science with a focus on Software Engineering',
    ],
  },
  {
    degree: 'Masar Program (PreTech)',
    school: 'Edmond de Rothschild Foundation & Ministry of Education',
    period: '2025 — 2026',
    highlights: [
      'Annual program for post-high school Arab youth — academic prep, high-tech training, leadership workshops, and community volunteering',
      'Built and shipped two full-stack web projects: Z-Fahm and Tatawo3 65x',
    ],
  },
  {
    degree: 'High School Diploma — Intensive Track',
    school: 'Atid Al-Nahda High School',
    period: 'Graduated',
    highlights: [
      'Specialized in Electronics, Physics, Computer Science, and Mathematics',
    ],
  },
];

export const learnings: Learning[] = [
  {
    project: 'Z-Task Manager CLI',
    language: 'C',
    title: 'What building a JSON-backed CLI in C taught me',
    lessons: [
      {
        title: 'Manual JSON persistence',
        body: 'Writing a hand-rolled JSON writer in C means escaping strings and managing memory yourself — no library to lean on. It forced me to think about every byte.',
      },
      {
        title: 'Cross-platform terminals',
        body: 'ANSI colors and UTF-8 behave completely differently on Windows vs Linux. Detecting the platform at runtime and enabling virtual terminal sequences keeps one codebase working on both.',
      },
      {
        title: 'Robust input handling',
        body: 'Console input is a minefield — stray characters and type mismatches can crash the app. Adding stream-pollution protection taught me defensive programming.',
      },
    ],
  },
  {
    project: 'Z-LIB',
    language: 'C++',
    title: 'What building a zero-dependency TUI library manager taught me',
    lessons: [
      {
        title: 'Zero-dependency engineering',
        body: 'Writing my own JSON engine instead of pulling in nlohmann/json kept the binary tiny and dependency-free — and taught me exactly how serialization works under the hood.',
      },
      {
        title: 'Keyboard-first UX',
        body: 'Modeling the UI after lazygit and archinstall showed me that arrow-key navigation is faster and more satisfying than numeric menus — good UX isn\u2019t just for the web.',
      },
      {
        title: 'Polish is 80% of a tool',
        body: 'A great terminal tool is 20% functionality and 80% polish — the 256-color theme, dynamic highlights, and error resilience are what make it feel like a real product.',
      },
    ],
  },
  {
    project: 'Z-School System',
    language: 'C++',
    title: 'What building a full CRUD school system taught me',
    lessons: [
      {
        title: 'True 24-bit color in the terminal',
        body: 'Building a custom RGB ANSI palette with dynamic selection highlighting taught me how to compose colors programmatically instead of hardcoding.',
      },
      {
        title: 'Composing large TUIs',
        body: 'Tabbed sections for students, teachers, managers and payments taught me how to organize a large keyboard-driven interface into modular, maintainable screens.',
      },
      {
        title: 'Computed metrics with thresholds',
        body: 'Auto-computed GPA with green/orange/red color thresholds taught me to turn raw data into meaningful, at-a-glance visual status.',
      },
    ],
  },
  {
    project: 'Z-Clock/Timer System',
    language: 'C++',
    title: 'What building a digital clock + timer TUI taught me',
    lessons: [
      {
        title: 'UTF-8 vs terminal columns',
        body: 'A box-drawing character is 3 bytes in UTF-8 but only 1 terminal column. Counting bytes with std::string::size() breaks alignment — I wrote a disp_len() helper that counts display width, not bytes.',
      },
      {
        title: 'char vs int gotcha',
        body: 'Pressing \u20181\u2019 reads character \u20181\u2019 (ASCII 49), so comparing to integer 1 never matched. A classic bug that taught me to always think about types at the keyboard level.',
      },
      {
        title: 'Non-blocking input',
        body: 'std::cin blocks waiting for Enter. To quit a running timer instantly I used _kbhit() + _getch() checked every tick — timing and input must never block each other.',
      },
    ],
  },
];

export const interests: Interest[] = [
  {
    title: 'Mathematics',
    description:
      'Passionate about mathematics — from algorithmic thinking and discrete math to competitive problem-solving.',
  },
  {
    title: 'Speedcubing',
    description:
      'Registered official competitor in the World Cube Association (WCA). Compete in 3x3, 2x2, and One-Handed events. Passionate about algorithmic thinking and finger tricks.',
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: 'Z-LIB: A Library Manager That Lives in the Terminal',
    date: 'Aug 2026',
    readTime: '6 min read',
    excerpt:
      'A full library management system in C++17 with zero dependencies — royal gold & navy 256-color TUI, arrow-key navigation, and a hand-rolled JSON engine.',
    tags: ['C++', 'C++17', 'CLI', 'TUI', 'JSON', 'ANSI Colors'],
    content: [
      'Libraries are built to hold books — but managing a catalog usually drags you into a web app with a database and a login. I wanted the opposite: a manager that starts instantly, stores everything in a single pretty-printed JSON file, and feels like a modern console tool. That\u2019s how Z-LIB was born.',
      'The interface is a full TUI driven entirely by arrow keys — up and down to select, ENTER to execute, ESC to go back. No tedious numeric menus. I modeled it after tools like lazygit and archinstall because keyboard-first navigation is faster and more satisfying than any menu prompt.',
      'The visual system is a royal gold & navy blue theme built on 256-color ANSI escapes: crisp Unicode box-drawing borders, a cyan-tinted header, dynamic focus highlights, and status badges that turn red for issued books and blue for available ones.',
      'The hardest part was persistence. Instead of pulling in nlohmann/json, I wrote a small JSON engine by hand — reading and writing structured data with proper escaping and pretty-printing. It keeps the whole program dependency-free and tiny.',
      'Beyond CRUD there\u2019s a real-time search across titles, authors, and genres, plus a live dashboard computing total records, available inventory, and checked-out books. And because console input is a minefield, I added robust stream-pollution protection so a stray character can\u2019t crash the app.',
      'Writing Z-LIB taught me that a great terminal tool is 20% functionality and 80% polish — the color system, the key handling, and the error resilience are what make it feel like a real product instead of a school exercise.',
    ],
  },
  {
    title: 'Building a Terminal Task Manager in C',
    date: 'Jan 2026',
    readTime: '6 min read',
    excerpt:
      'Why I wrote a full-featured task manager that lives entirely in the terminal — color-coded tables, JSON persistence, and UTF-8 support without a single UI library.',
    tags: ['C', 'CLI', 'JSON', 'File I/O'],
    content: [
      'Most task managers are web apps with databases and auth. I wanted the opposite: something that starts in 10 milliseconds, stores everything in one JSON file, and runs on any Linux or Windows box with a terminal.',
      'The core loop is simple — add, list, check, and remove tasks. But the details matter: auto-incrementing IDs, a color-coded table rendered with ANSI escape sequences, keyword search, and a "clear all" safety prompt.',
      'Persistence was the trickiest part. Writing structured JSON by hand in C means careful string escaping and dynamic memory management. I used a small hand-rolled writer instead of pulling in a library, which kept the binary tiny and dependency-free.',
      'Finally, UTF-8 and ANSI colors behave differently on Windows vs Linux. Detecting the platform at runtime and enabling virtual terminal sequences keeps the same codebase working cleanly on both.',
    ],
  },
  {
    title: 'A Terminal OS Running on an ESP32',
    date: 'Dec 2025',
    readTime: '7 min read',
    excerpt:
      'Ten shell commands, a nano-style editor, and a virtual file system on LittleFS — all over a plain serial connection with no LCD or display attached.',
    tags: ['C++', 'ESP32', 'Embedded', 'LittleFS'],
    content: [
      'The ESP32 is powerful enough to feel like a tiny computer. I built a mini shell with commands you\u2019d expect from a real OS: pwd, ls, touch, cat, rm, and even a nano-inspired text editor.',
      'The file system sits on LittleFS with a custom partition table, so files survive reboots. I/O redirection — echo text > file — is handled by parsing the command line and re-routing output into the file writer.',
      'The editor was the fun part: a fixed grid buffer, cursor movement over serial keys, and a status bar. Because there\u2019s no LCD, everything is drawn by reprinting the screen over the serial monitor.',
      'Writing a shell teaches you about parsing, state machines, and resource limits — everything compiles down to just a few hundred kilobytes on a microcontroller.',
    ],
  },
  {
    title: 'What Building Everything From Scratch Taught Me',
    date: 'Nov 2025',
    readTime: '5 min read',
    excerpt:
      'From a Snake game on an LED matrix to a terminal OS on a microcontroller — no libraries, no frameworks, just C/C++ and hardware.',
    tags: ['C', 'C++', 'Hardware', 'Learning'],
    content: [
      'There\u2019s a huge difference between wiring libraries together and building something from scratch. My hardware projects forced me to read datasheets, reason about memory, and debug things I couldn\u2019t just console.log.',
      'The 8x8 LED matrix Snake game taught me non-blocking timing with millis() — no delay() anywhere, so input and rendering never stall.',
      'The ESP32 terminal OS taught me about parsing, virtual file systems, and staying lean when your whole program has to fit in a few hundred KB of flash.',
      'If you\u2019re learning to code, build something with zero dependencies at least once. The constraint is the teacher.',
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: 'Full-Stack Web Development Bootcamp',
    issuer: 'Dr. Angela Yu — Udemy',
    year: 'In progress',
    url: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/',
  },
  {
    title: 'Masar Program (PreTech) — Graduate',
    issuer: 'Edmond de Rothschild Foundation & Ministry of Education',
    year: '2026',
    url: '',
  },
];

export const coursework = [
  'Discrete Mathematics',
  'Data Structures',
  'Algorithms',
  'Operating Systems',
  'Computer Architecture',
  'Linear Algebra',
  'Physics',
  'Electronics',
];

export const achievements: Achievement[] = [
  {
    title: 'Registered WCA Speedcubing Competitor',
    period: 'Ongoing',
    description:
      'Official competitor in the World Cube Association — competing in 3x3, 2x2, and One-Handed events.',
  },
  {
    title: 'Graduated Masar Program (PreTech)',
    period: '2026',
    description:
      'Completed the annual program for Arab youth with two shipped full-stack projects and leadership workshops.',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'Abdallah ships fast and thinks in systems — from a full web app to a microcontroller OS, he goes deep on every layer.',
    name: 'Masar Program Mentor',
    role: 'Full-Stack Trainee Review',
  },
];