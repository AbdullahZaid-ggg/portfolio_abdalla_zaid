const portfolioData = {
  personal: {
    name: "Your Name",
    headline: "Full-Stack Developer & UI/UX Enthusiast",
    tagline: "I build elegant, accessible digital experiences.",
    bio: "I'm a passionate developer with experience building modern web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.",
    avatar: "https://i.pravatar.cc/200?img=11",
    resumeUrl: "#",
    location: "City, Country",
    email: "hello@example.com",
  },

  social: [
    { name: "GitHub", url: "https://github.com/", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com/", icon: "twitter" },
  ],

  skills: [
    { name: "React", level: 90, category: "frontend" },
    { name: "JavaScript", level: 90, category: "language" },
    { name: "TypeScript", level: 80, category: "language" },
    { name: "Tailwind CSS", level: 85, category: "frontend" },
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Python", level: 75, category: "language" },
    { name: "Git", level: 85, category: "tools" },
    { name: "Docker", level: 65, category: "tools" },
  ],

  projects: [
    {
      title: "Project Alpha",
      description: "A full-stack web application built with React and Node.js that helps teams collaborate in real-time.",
      image: "https://picsum.photos/seed/project1/600/400",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Project Beta",
      description: "An e-commerce platform with payment processing, inventory management, and analytics dashboard.",
      image: "https://picsum.photos/seed/project2/600/400",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Project Gamma",
      description: "A mobile-first weather app with beautiful animations and location-based forecasts.",
      image: "https://picsum.photos/seed/project3/600/400",
      tags: ["React Native", "TypeScript", "API Integration"],
      liveUrl: "#",
      repoUrl: "#",
    },
  ],

  experience: [
    {
      role: "Senior Frontend Developer",
      company: "Tech Corp",
      location: "Remote",
      period: "Jan 2023 - Present",
      highlights: [
        "Led migration from legacy codebase to React + TypeScript",
        "Improved Core Web Vitals by 40%",
        "Mentored 4 junior developers",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      period: "Mar 2021 - Dec 2022",
      highlights: [
        "Built and shipped 3 major product features",
        "Designed RESTful API serving 10k+ requests/day",
        "Reduced deployment time by 60% with CI/CD pipelines",
      ],
    },
    {
      role: "Junior Developer",
      company: "Web Agency Co.",
      location: "New York, NY",
      period: "Jun 2019 - Feb 2021",
      highlights: [
        "Developed 15+ client websites using React",
        "Introduced component library adopted company-wide",
      ],
    },
  ],

  education: [
    {
      degree: "B.S. in Computer Science",
      school: "University of Technology",
      period: "2015 - 2019",
    },
  ],

  contact: {
    email: "hello@example.com",
    phone: "+1 234 567 890",
    location: "City, Country",
  },

  nav: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};

export default portfolioData;
