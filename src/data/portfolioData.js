const portfolioData = {
  personal: {
    name: "Abdallah Ibrahim Zaid",
    nameAr: "عبد الله إبراهيم زيد",
    headline: "Full-Stack Developer & Computer Science Student",
    headlineAr: "مبرمج Full-Stack وطالب علوم حاسوب",
    tagline: "I build elegant, accessible digital experiences. Passionate about problem-solving, Linux, and speedcubing.",
    taglineAr: "أبني تجارب رقمية أنيقة وسهلة الوصول. شغوف بحل المشكلات، بيئات Linux، وحل المكعبات السريعة.",
    bio: "أنا مبرمج Full-Stack شغوف ببناء تطبيقات الويب وحل المشكلات البرمجية المعقدة. أمتلك خلفية تقنية قوية في علوم الحاسوب والفيزياء والإلكترونيات، ومقبل على بدء دراستي الأكاديمية في معهد التخنيون. متميز في العمل على بيئات Linux، وأعشق التحديات الذهنية وسرعة الإنجاز سواء في الأكواد أو في مسابقات حل المكعبات السريعة. أكملت دورة PreTech ودورة Dr. Angela Yu's Full-Stack Web Development Bootcamp على Udemy.",
    bioEn: "I'm a Full-Stack developer passionate about building web applications and solving complex programming problems. I have a strong technical background in Computer Science, Physics, and Electronics, and I'm about to begin my academic studies at the Technion. I specialize in Linux environments and thrive on mental challenges and fast execution — whether in code or speedcubing competitions. I completed the PreTech course and Dr. Angela Yu's Full-Stack Web Development Bootcamp on Udemy.",
    avatar: "/avatar.jpeg",
    resumeUrl: "#",
    location: "Kfar Qari, Israel",
    email: "abdallazeed3@gmail.com",
  },

  social: [
    { name: "GitHub", url: "https://github.com/AbdullahZaid-ggg", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/abdalla-zaid-81926439b", icon: "linkedin" },
    { name: "Email", url: "mailto:abdallazeed3@gmail.com", icon: "email" },
  ],

  skills: [
    { name: "C", level: 85, category: "language" },
    { name: "C++", level: 85, category: "language" },
    { name: "C#", level: 80, category: "language" },
    { name: "Python", level: 85, category: "language" },
    { name: "JavaScript", level: 90, category: "language" },
    { name: "Kotlin", level: 70, category: "language" },
    { name: "HTML5", level: 90, category: "frontend" },
    { name: "CSS3", level: 85, category: "frontend" },
    { name: "React", level: 85, category: "frontend" },
    { name: "Vite", level: 80, category: "frontend" },
    { name: "Git", level: 80, category: "tools" },
  ],
  operatingSystems: [
    { name: "Windows", versions: "10 / 11" },
    { name: "macOS", versions: "" },
    { name: "Arch Linux", versions: "" },
    { name: "Debian", versions: "" },
    { name: "Ubuntu", versions: "" },
    { name: "Linux Mint", versions: "" },
    { name: "Parrot OS", versions: "" },
    { name: "Kali Linux", versions: "" },
    { name: "Fedora", versions: "" },
    { name: "And more", versions: "" },
  ],

  projects: [
    {
      title: "Z-Fahm",
      titleAr: "Z-Fahm",
      description: "تطبيق ويب تفاعلي كامل لإنشاء وحل الاختبارات القصيرة، مبني من الصفر باستخدام React. اختبر معرفتك عبر 12 فئة مع 98 سؤالاً محلياً، أو اجلب أسئلة من Open Trivia Database API. تتبع كل محاولة، قارن أداءك يوماً بيوم، ابنِ سلاسل انتصارات، واحتفل بالنتائج العالية مع confetti.",
      descriptionEn: "A full-featured interactive quiz game built from scratch with React. Test your knowledge across 12 categories with 98 local questions, or fetch fresh questions from the Open Trivia Database API. Track every attempt, compare your performance day by day, build streaks, and celebrate high scores with confetti.",
      image: "https://picsum.photos/seed/zfahm/600/400",
      tags: ["React 19", "Vite 8", "React Router 6", "html2canvas", "CSS Custom Properties", "Web Audio API", "Canvas API", "Context + useReducer", "PWA", "Service Worker", "Open Trivia DB API", "Vitest", "Testing Library", "ESLint"],
      features: [
        "98 Local Questions across 12 categories",
        "API Quizzes from Open Trivia Database",
        "3 Difficulty Levels per category",
        "Practice Mode (no timer) & True / False Mode",
        "Dark / Light Mode with theme toggle",
        "History tracking with daily comparison chart",
        "Streak counter, confetti, and sound effects",
        "Keyboard shortcuts: 1-4 = answer, Enter = next, Arrow keys = navigate",
        "Export results as PNG (html2canvas) & history as JSON",
        "PWA / offline support with service worker",
      ],
      liveUrl: "#",
      repoUrl: "https://github.com/AbdullahZaid-ggg/abdalla-preTech-graduate",
    },
    {
      title: "Tatawo3 65x",
      titleAr: "تطوع65x",
      description: "منصة تفاعلية لكل من يريد التطوع في منطقة وادي عارة، تهدف إلى ربط المتطوعين بمراكز التطوع والفرص التطوعية. توفر قاعدة بيانات محدثة لأكثر من 48 مركزاً تطوعياً مع البحث والتصفية حسب المنطقة والفئة، خريطة تفاعلية، المفضلة، وصفحة فعاليات.",
      descriptionEn: "An interactive volunteer platform connecting volunteers with 48+ volunteer centers in the Wadi Ara region. Features include search and filter by region/category, interactive map (Leaflet + OpenStreetMap), bookmarks, events page, and a fully bilingual Arabic/Hebrew interface.",
      image: "https://picsum.photos/seed/tatawo3/600/400",
      tags: ["React", "Vite", "React Router 6", "Leaflet", "OpenStreetMap", "localStorage", "RTL", "CSS3", "PWA"],
      features: [
        "Database of 48+ volunteer centers across Wadi Ara region",
        "Search and filter by region and category",
        "Interactive map with Leaflet + OpenStreetMap",
        "Bookmarks saved to localStorage",
        "Events page for upcoming volunteer opportunities",
        "Fully Arabic RTL interface with responsive design",
        "Open source — contributions welcome",
      ],
      liveUrl: "#",
      repoUrl: "https://github.com/AbdullahZaid-ggg/MasarEndProgram2526",
    },
  ],

  experience: [
    {
      role: "Full-Stack Developer (Trainee)",
      company: "PreTech Program - Masar",
      location: "Remote",
      period: "2025 - 2026",
      highlights: [
        "Built and shipped Z-Fahm — a full-featured quiz app with React 19 + Vite 8, 98 questions, API integration, PWA support, and history tracking",
        "Developed Tatawo3 65x — a volunteer platform serving 48+ centers with interactive maps, search/filter, and Arabic RTL interface",
        "Completed Dr. Angela Yu's Full-Stack Web Development Bootcamp on Udemy",
        "Worked extensively in Linux environments (Arch, Debian, Ubuntu, Fedora, and more)",
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
      description: "Registered official competitor in the World Cube Association (WCA). Compete in 3x3, 2x2, and One-Handed events. Passionate about algorithmic thinking and finger tricks.",
      descriptionAr: "لاعب ومنافس رسمي مسجل في الاتحاد العالمي للمكعبات (WCA). المشاركة في بطولات رسمية لفئات: 3x3، 2x2، والحل بيد واحدة. شغوف بالتفكير الخوارزمي وتقنيات الحل السريع.",
    },
  ],

  contact: {
    email: "abdallazeed3@gmail.com",
    phone: "",
    location: "Kfar Qari, Israel",
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
