const portfolioData = {
  personal: {
    name: "Abdallah Ibrahim Zaid",
    nameAr: "عبد الله إبراهيم زيد",
    headline: "Full-Stack Developer & Computer Science Student",
    headlineAr: "مبرمج Full-Stack وطالب علوم حاسوب",
    tagline: "I build elegant, accessible digital experiences. Passionate about problem-solving, Linux, and speedcubing.",
    taglineAr: "أبني تجارب رقمية أنيقة وسهلة الوصول. شغوف بحل المشكلات، بيئات Linux، وحل المكعبات السريعة.",
    bio: "أنا مبرمج Full-Stack شغوف ببناء تطبيقات الويب وحل المشكلات البرمجية المعقدة. أمتلك خلفية تقنية قوية في علوم الحاسوب والفيزياء، ومقبل على بدء دراستي الأكاديمية في معهد التخنيون. متميز في العمل على بيئات Linux، وأعشق التحديات الذهنية وسرعة الإنجاز سواء في الأكواد أو في مسابقات حل المكعبات السريعة.",
    bioEn: "I'm a Full-Stack developer passionate about building web applications and solving complex programming problems. I have a strong technical background in Computer Science and Physics, and I'm about to begin my academic studies at the Technion. I specialize in Linux environments and thrive on mental challenges and fast execution — whether in code or speedcubing competitions.",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=AZ&backgroundColor=6750A4&textColor=ffffff",
    resumeUrl: "#",
    location: "Israel",
    email: "abdallazeed3@gmail.com",
  },

  social: [
    { name: "GitHub", url: "https://github.com/AbdullahZaid-ggg", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/", icon: "linkedin" },
    { name: "Email", url: "mailto:abdallazeed3@gmail.com", icon: "email" },
  ],

  skills: [
    { name: "C", level: 80, category: "language" },
    { name: "C++", level: 80, category: "language" },
    { name: "C#", level: 75, category: "language" },
    { name: "Python", level: 85, category: "language" },
    { name: "JavaScript", level: 90, category: "language" },
    { name: "React", level: 85, category: "frontend" },
    { name: "Vite", level: 80, category: "frontend" },
    { name: "HTML5 & CSS3", level: 90, category: "frontend" },
    { name: "Linux (Arch/Debian)", level: 85, category: "tools" },
    { name: "Git", level: 80, category: "tools" },
  ],

  projects: [
    {
      title: "Z-Fahm",
      titleAr: "Z-Fahm",
      description: "تطبيق ويب تفاعلي غني بالميزات مخصص لإنشاء وحل الاختبارات القصيرة (Interactive Web Quiz Application).",
      descriptionEn: "A feature-rich interactive web application for creating and solving quizzes.",
      image: "https://picsum.photos/seed/zfahm/600/400",
      tags: ["React", "Vite", "JavaScript", "CSS3"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Tatawo3 65x - Graduation Project",
      titleAr: "مشروع التخرج - تطوع 65x",
      description: "تصميم وتقديم العرض التقني الختامي (Pitch Deck) لمشاريع تطوير الويب التي تم العمل عليها خلال تدريب PreTech كخطوة ختامية مميزة.",
      descriptionEn: "Designed and delivered the final technical pitch deck for web development projects completed during the PreTech training program.",
      image: "https://picsum.photos/seed/tatawo3/600/400",
      tags: ["React", "Presentation", "Web Development"],
      liveUrl: "#",
      repoUrl: "#",
    },
  ],

  experience: [
    {
      role: "Full-Stack Developer (Trainee)",
      company: "PreTech Program - Tatawo3 65x",
      location: "Remote",
      period: "2025 - 2026",
      highlights: [
        "Built and delivered a complete web quiz application (Z-Fahm) using React & Vite",
        "Designed the final graduation pitch deck for the training program",
        "Worked extensively in Linux environments (Arch & Debian)",
      ],
    },
  ],

  education: [
    {
      degree: "B.Sc. in Computer Science (Expected)",
      degreeAr: "بكالوريوس في علوم الحاسوب (متوقع)",
      school: "Technion - Israel Institute of Technology",
      schoolAr: "معهد التخنيون للتكنولوجيا",
      period: "Oct 2026 - Present",
    },
    {
      degree: "High School Diploma - Intensive Track",
      degreeAr: "شهادة الثانوية العامة - مسار مكثف",
      school: "Atid Al-Nahda High School",
      schoolAr: "مدرسة عتيد النهضة الثانوية",
      period: "Graduated",
      highlights: ["Specialized in Electronics, Physics, Computer Science, and Mathematics"],
    },
  ],

  interests: [
    {
      title: "Speedcubing",
      titleAr: "حل المكعبات السريعة",
      description: "Registered official competitor in the World Cube Association (WCA). Compete in 3x3, 2x2, and One-Handed events.",
      descriptionAr: "لاعب ومنافس رسمي مسجل في الاتحاد العالمي للمكعبات (WCA). المشاركة في بطولات رسمية لفئات: 3x3، 2x2، والحل بيد واحدة.",
    },
  ],

  contact: {
    email: "abdallazeed3@gmail.com",
    phone: "",
    location: "Israel",
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
