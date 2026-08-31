export type Language = "en" | "th";

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  image: string;
  degree: string;
  school: string;
  location: string;
  period: string;
  gpa: string;
  description: string;
  achievements: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  date: string;
  githubUrl: string;
  liveUrl: string;
  features: string[];
}

export interface SiteContent {
  nav: {
    home: string;
    about: string;
    education: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    roles: string[];
    intro: string;
    ctaExplore: string;
    ctaContact: string;
  };
  about: {
    heading: string;
    headingHighlight: string;
    paragraphs: string[];
    location: string;
    availability: string;
    githubLabel: string;
    linkedinLabel: string;
  };
  education: {
    heading: string;
    headingHighlight: string;
    achievementsLabel: string;
    items: EducationItem[];
  };
  experience: {
    heading: string;
    headingHighlight: string;
    achievementsLabel: string;
    technologiesLabel: string;
    items: ExperienceItem[];
  };
  skills: {
    heading: string;
    headingHighlight: string;
    subtitle: string;
    categories: {
      backend: string;
      frontend: string;
      databases: string;
      tools: string;
    };
  };
  projects: {
    heading: string;
    headingHighlight: string;
    subtitle: string;
    keyFeaturesLabel: string;
    viewMoreLabel: string;
    items: ProjectItem[];
  };
  contact: {
    heading: string;
    headingHighlight: string;
    subtitle: string;
    emailCardTitle: string;
    locationCardTitle: string;
    locationValue: string;
    availabilityCardTitle: string;
    availabilityValue: string;
    formHeading: string;
    formSubtitle: string;
    quickResponseTitle: string;
    quickResponseDesc: string;
    flexScheduleTitle: string;
    flexScheduleDesc: string;
    sendEmailLabel: string;
    connectLinkedinLabel: string;
    otherPlatformsLabel: string;
  };
}

const en: SiteContent = {
  nav: {
    home: "Home",
    about: "About",
    education: "Education",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    roles: [
      "Backend Engineer",
      "Full Stack Developer",
      "Go Developer",
      "Problem Solver",
    ],
    intro:
      "Backend engineer on TCC Technology's platform team, building shared services used by product teams across the company. Growing into backend & infrastructure-focused roles at international product companies.",
    ctaExplore: "Explore My Work",
    ctaContact: "Get In Touch",
  },
  about: {
    heading: "About",
    headingHighlight: "Me",
    paragraphs: [
      "Hello! I'm Tirawat Pongpratisonthi (Prem), a backend engineer on TCC Technology's platform team, building shared services — including a real-time chat service and an LLM intent router — consumed by product teams across the company.",
      "I have full-stack experience across Go, C#/.NET, and modern JS frameworks, and I'm currently deepening my knowledge of Go, distributed systems, and infrastructure.",
      "My goal is to grow into backend and infrastructure-focused roles at international product companies, while staying hands-on with modern web technologies.",
    ],
    location: "Bangkok, Thailand",
    availability: "Open to backend/infra opportunities",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
  },
  education: {
    heading: "My",
    headingHighlight: "Education",
    achievementsLabel: "Key Achievements:",
    items: [
      {
        image: "/kasertLogo.png",
        degree: "Bachelor of Science in Computer Science",
        school: "Kasetsart University, Bangkhen Campus",
        location: "Bangkok, Thailand",
        period: "June 2021 - 2024",
        gpa: "3.33",
        description:
          "Focused on software engineering, algorithms, and data structures.",
        achievements: [
          "Part of a team that developed a web application for virtual KasetFair 2024",
        ],
      },
      {
        image: "/suanRangsitLogo.png",
        degree: "Mathematics and Science Program",
        school: "Suankularb Wittayalai Rangsit School",
        location: "Bangkok, Thailand",
        period: "2018 - 2021",
        gpa: "3.54",
        description:
          "Graduated with honors, specializing in Mathematics and Science.",
        achievements: [],
      },
    ],
  },
  experience: {
    heading: "Work",
    headingHighlight: "Experience",
    achievementsLabel: "Key Achievements:",
    technologiesLabel: "Technologies Used:",
    items: [
      {
        title: "Full Stack Developer, Platform / Shared Services Team",
        company: "TCC Technology",
        location: "Thailand",
        period: "May 2025 - Present",
        type: "Full-time",
        description:
          "Work on the central platform team building shared backend services consumed by other product teams across the organization.",
        achievements: [
          "Built and maintain chat-service, a real-time messaging backend, and an LLM intent router that classifies requests and routes them to downstream services (Doris, Qdrant, PostgreSQL)",
          "Built the Finance Reconciliation System, automating backend reconciliation processes that were previously done manually, reducing errors and freeing the finance team from repetitive checks",
        ],
        technologies: [
          "Go",
          "C#",
          ".NET Core",
          "gRPC",
          "RabbitMQ",
          "PostgreSQL",
          "Qdrant",
        ],
      },
      {
        title: "Frontend Developer, E-Voting & Transfer Point App",
        company: "JElite",
        location: "Thailand",
        period: "July 2025 - Jan 2026",
        type: "Freelance",
        description:
          "Built a CMS-driven E-Voting platform and a customer-facing point-transfer service for Jaymart's loyalty program.",
        achievements: [
          "E-Voting Platform: enabled admins to create elections, manage candidates, and view real-time results, serving roughly 100-200 users per election",
          "Transfer Point Service: developed the point-transfer feature letting Jaymart customers securely move loyalty points to partner platforms",
          "Collaborated with design and backend teams to ship responsive UI and integrate APIs on schedule",
        ],
        technologies: ["Next.js", "React", "TypeScript"],
      },
      {
        title: "School Information Management System",
        company: "Freelance",
        location: "Remote",
        period: "Nov 2024 - July 2025",
        type: "Freelance",
        description:
          "Built a school information system covering teacher timetable/schedule management and a student academic progression workflow, including admin tools for staff to manage both.",
        achievements: [
          "Built responsive frontend using Next.js with an intuitive user interface",
          "Developed a robust backend system using C# and .NET Core",
        ],
        technologies: ["Next.js", "C#", ".NET Core", "React", "TypeScript"],
      },
      {
        title: "Intern, WMS-Agent & MCMC POS System",
        company: "TCC Technology",
        location: "Thailand",
        period: "May 2024 - Nov 2024",
        type: "Internship",
        description:
          "Designed and built the WMS-Agent warehouse management system end-to-end, and contributed to the MCMC POS system's microservices architecture.",
        achievements: [
          "Designed and built the WMS-Agent warehouse management system end-to-end, from workflow design to deployment, using Next.js (frontend) and C# (backend services)",
          "Contributed to the MCMC POS system's microservices architecture; developed a secure C# authentication module",
          "Optimized API response times through backend refactoring",
        ],
        technologies: ["Next.js", "C#", "Microservices", ".NET Core"],
      },
    ],
  },
  skills: {
    heading: "Skills &",
    headingHighlight: "Tools",
    subtitle:
      "Here are the technologies and tools I work with to bring ideas to life",
    categories: {
      backend: "Backend",
      frontend: "Frontend",
      databases: "Databases",
      tools: "Tools",
    },
  },
  projects: {
    heading: "My",
    headingHighlight: "Projects",
    subtitle:
      "Here are some of the projects I've worked on, showcasing my skills and passion for development",
    keyFeaturesLabel: "Key Features:",
    viewMoreLabel: "View More on GitHub",
    items: [
      {
        title: "OBAC",
        description:
          "Full-stack system for a client: backend API and database design, deployed to production.",
        image: "/obacProject.png",
        technologies: ["Next.js", "C#", ".NET Core", "React", "TypeScript"],
        category: "Client Project",
        date: "2024",
        githubUrl: "https://github.com/OBACProject",
        liveUrl: "https://ekawit.ac.th/",
        features: [
          "Backend API and database design",
          "Deployed to production for a real client",
          "Responsive frontend with Next.js",
        ],
      },
      {
        title: "CareMate",
        description:
          "Mobile app built with a team; backend integration for a healthcare-focused product.",
        image: "/careMateProject.png",
        technologies: ["Flutter", "Backend Integration"],
        category: "Team Project",
        date: "2026",
        githubUrl: "https://github.com/Tirawat1",
        liveUrl: "",
        features: [
          "Healthcare-focused mobile product",
          "Backend integration built with a team",
        ],
      },
      {
        title: "Diary App with Whisper ASR",
        description:
          "An AI-powered diary application that converts spoken conversations into text using the Whisper ASR Model. Built with Flutter and Spring Boot for seamless voice-to-text functionality.",
        image: "/seniorProject.png",
        technologies: [
          "Flutter",
          "Spring Boot",
          "MongoDB",
          "Whisper ASR",
          "AI/ML",
        ],
        category: "Senior Project",
        date: "2024",
        githubUrl: "https://github.com/Tirawat1",
        liveUrl: "",
        features: [
          "Fine-tuned Whisper ASR model for enhanced speech-to-text accuracy",
          "Backend system with Spring Boot for API communication",
          "MongoDB integration for efficient data storage and retrieval",
        ],
      },
    ],
  },
  contact: {
    heading: "Let's",
    headingHighlight: "Connect",
    subtitle:
      "Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.",
    emailCardTitle: "Email Me",
    locationCardTitle: "Location",
    locationValue: "Bangkok, Thailand",
    availabilityCardTitle: "Availability",
    availabilityValue: "Open to backend/infra opportunities",
    formHeading: "Let's Work Together",
    formSubtitle:
      "I'm currently open to backend and infrastructure-focused opportunities. Let's create something amazing together!",
    quickResponseTitle: "Quick Response",
    quickResponseDesc: "I typically respond to emails within 24 hours",
    flexScheduleTitle: "Flexible Schedule",
    flexScheduleDesc: "Available for meetings in Thailand timezone (GMT+7)",
    sendEmailLabel: "Send Email",
    connectLinkedinLabel: "Connect on LinkedIn",
    otherPlatformsLabel: "Prefer a different platform? Find me on:",
  },
};

const th: SiteContent = {
  nav: {
    home: "หน้าแรก",
    about: "เกี่ยวกับฉัน",
    education: "การศึกษา",
    experience: "ประสบการณ์",
    skills: "ทักษะ",
    projects: "ผลงาน",
    contact: "ติดต่อ",
  },
  hero: {
    greeting: "สวัสดีครับ ผมชื่อ",
    roles: [
      "Backend Engineer",
      "Full Stack Developer",
      "Go Developer",
      "นักแก้ปัญหา",
    ],
    intro:
      "Backend Engineer ในทีม Platform ของ TCC Technology สร้าง shared services ที่ทีมผลิตภัณฑ์อื่นๆ ในบริษัทนำไปใช้ กำลังพัฒนาตัวเองเพื่อก้าวสู่สาย backend และ infrastructure ในบริษัทระดับสากล",
    ctaExplore: "ดูผลงานของฉัน",
    ctaContact: "ติดต่อฉัน",
  },
  about: {
    heading: "เกี่ยวกับ",
    headingHighlight: "ฉัน",
    paragraphs: [
      "สวัสดีครับ! ผมธีรวัฒน์ พงศ์ประทีปชัย (เปรม) เป็น Backend Engineer ในทีม Platform ของ TCC Technology สร้าง shared services — รวมถึงระบบแชทแบบ real-time และ LLM intent router — ที่ทีมผลิตภัณฑ์อื่นๆ ในบริษัทใช้งาน",
      "ผมมีประสบการณ์ full-stack ทั้ง Go, C#/.NET และ JS framework สมัยใหม่ ตอนนี้กำลังเจาะลึก Go, distributed systems และ infrastructure เพิ่มเติม",
      "เป้าหมายของผมคือการเติบโตไปสู่สาย backend และ infrastructure ในบริษัทผลิตภัณฑ์ระดับสากล พร้อมกับยังคงลงมือทำงานฝั่งเว็บสมัยใหม่ต่อไป",
    ],
    location: "กรุงเทพมหานคร ประเทศไทย",
    availability: "เปิดรับโอกาสสาย Backend/Infra",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
  },
  education: {
    heading: "การ",
    headingHighlight: "ศึกษา",
    achievementsLabel: "ผลงานเด่น:",
    items: [
      {
        image: "/kasertLogo.png",
        degree: "วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์",
        school: "มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตบางเขน",
        location: "กรุงเทพมหานคร ประเทศไทย",
        period: "มิ.ย. 2564 - 2567",
        gpa: "3.33",
        description: "เน้นด้านวิศวกรรมซอฟต์แวร์ อัลกอริทึม และโครงสร้างข้อมูล",
        achievements: [
          "เป็นส่วนหนึ่งของทีมที่พัฒนาเว็บแอปพลิเคชันสำหรับงาน Virtual KasetFair 2024",
        ],
      },
      {
        image: "/suanRangsitLogo.png",
        degree: "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
        school: "โรงเรียนสวนกุหลาบวิทยาลัย รังสิต",
        location: "กรุงเทพมหานคร ประเทศไทย",
        period: "2561 - 2564",
        gpa: "3.54",
        description:
          "จบการศึกษาด้วยเกียรตินิยม เน้นด้านวิทยาศาสตร์และคณิตศาสตร์",
        achievements: [],
      },
    ],
  },
  experience: {
    heading: "ประสบการณ์",
    headingHighlight: "ทำงาน",
    achievementsLabel: "ผลงานเด่น:",
    technologiesLabel: "เทคโนโลยีที่ใช้:",
    items: [
      {
        title: "Full Stack Developer, ทีม Platform / Shared Services",
        company: "TCC Technology",
        location: "ประเทศไทย",
        period: "พ.ค. 2568 - ปัจจุบัน",
        type: "งานประจำ",
        description:
          "ทำงานในทีม platform กลาง สร้าง shared backend services ที่ทีมผลิตภัณฑ์อื่นๆ ในองค์กรนำไปใช้",
        achievements: [
          "สร้างและดูแล chat-service ระบบส่งข้อความแบบ real-time และ LLM intent router ที่จำแนกคำขอและส่งต่อไปยัง service ปลายทาง (Doris, Qdrant, PostgreSQL)",
          "สร้างระบบ Finance Reconciliation System ที่ทำให้กระบวนการกระทบยอดทางการเงินที่เคยทำด้วยมือเป็นแบบอัตโนมัติ ลดข้อผิดพลาดและลดงานซ้ำซ้อนของทีมการเงิน",
        ],
        technologies: [
          "Go",
          "C#",
          ".NET Core",
          "gRPC",
          "RabbitMQ",
          "PostgreSQL",
          "Qdrant",
        ],
      },
      {
        title: "Frontend Developer, แอป E-Voting & Transfer Point",
        company: "JElite",
        location: "ประเทศไทย",
        period: "ก.ค. 2568 - ม.ค. 2569",
        type: "งานประจำ",
        description:
          "พัฒนาแพลตฟอร์ม E-Voting แบบ CMS-driven และฟีเจอร์โอนแต้มสะสมให้ลูกค้าของ Jaymart",
        achievements: [
          "E-Voting Platform: ให้แอดมินสร้างการเลือกตั้ง จัดการผู้สมัคร และดูผลแบบ real-time รองรับผู้ใช้ราว 100-200 คนต่อการเลือกตั้ง",
          "Transfer Point Service: พัฒนาฟีเจอร์โอนแต้มสะสมให้ลูกค้า Jaymart โอนแต้มไปยังแพลตฟอร์มพาร์ทเนอร์ได้อย่างปลอดภัย",
          "ทำงานร่วมกับทีมดีไซน์และ backend เพื่อส่งมอบ UI ที่ responsive และเชื่อมต่อ API ได้ตามกำหนด",
        ],
        technologies: ["Next.js", "React", "TypeScript"],
      },
      {
        title: "ระบบบริหารจัดการข้อมูลโรงเรียน",
        company: "ฟรีแลนซ์",
        location: "ทำงานทางไกล",
        period: "พ.ย. 2567 - ก.ค. 2568",
        type: "ฟรีแลนซ์",
        description:
          "พัฒนาระบบบริหารจัดการข้อมูลโรงเรียน ครอบคลุมตารางสอนของครูและระบบติดตามความก้าวหน้าทางการเรียนของนักเรียน พร้อมเครื่องมือแอดมินสำหรับเจ้าหน้าที่",
        achievements: [
          "สร้าง frontend ที่ responsive ด้วย Next.js พร้อม UI ที่ใช้งานง่าย",
          "พัฒนาระบบ backend ที่แข็งแรงด้วย C# และ .NET Core",
        ],
        technologies: ["Next.js", "C#", ".NET Core", "React", "TypeScript"],
      },
      {
        title: "นักศึกษาฝึกงาน, ระบบ WMS-Agent & MCMC POS",
        company: "TCC Technology",
        location: "ประเทศไทย",
        period: "พ.ค. 2567 - พ.ย. 2567",
        type: "ฝึกงาน",
        description:
          "ออกแบบและพัฒนาระบบ WMS-Agent แบบครบวงจร และร่วมพัฒนาสถาปัตยกรรม microservices ของระบบ MCMC POS",
        achievements: [
          "ออกแบบและพัฒนาระบบจัดการคลังสินค้า WMS-Agent แบบครบวงจร ตั้งแต่ออกแบบ workflow จนถึง deploy ด้วย Next.js (frontend) และ C# (backend)",
          "ร่วมพัฒนาสถาปัตยกรรม microservices ของระบบ MCMC POS พัฒนาโมดูลยืนยันตัวตนด้วย C# ที่ปลอดภัย",
          "ปรับปรุงเวลาตอบสนองของ API ให้เร็วขึ้นด้วยการ refactor backend",
        ],
        technologies: ["Next.js", "C#", "Microservices", ".NET Core"],
      },
    ],
  },
  skills: {
    heading: "ทักษะและ",
    headingHighlight: "เครื่องมือ",
    subtitle: "เทคโนโลยีและเครื่องมือที่ผมใช้ในการสร้างสรรค์ผลงาน",
    categories: {
      backend: "Backend",
      frontend: "Frontend",
      databases: "ฐานข้อมูล",
      tools: "เครื่องมือ",
    },
  },
  projects: {
    heading: "ผล",
    headingHighlight: "งานของฉัน",
    subtitle:
      "ตัวอย่างผลงานที่ผมเคยทำ สะท้อนทักษะและความหลงใหลในงานพัฒนาซอฟต์แวร์",
    keyFeaturesLabel: "ฟีเจอร์เด่น:",
    viewMoreLabel: "ดูเพิ่มเติมบน GitHub",
    items: [
      {
        title: "OBAC",
        description:
          "ระบบ full-stack ให้ลูกค้า ออกแบบ backend API และฐานข้อมูล deploy ใช้งานจริง",
        image: "/obacProject.png",
        technologies: ["Next.js", "C#", ".NET Core", "React", "TypeScript"],
        category: "งานลูกค้า",
        date: "2567",
        githubUrl: "https://github.com/OBACProject",
        liveUrl: "https://ekawit.ac.th/",
        features: [
          "ออกแบบ backend API และฐานข้อมูล",
          "deploy ใช้งานจริงให้ลูกค้า",
          "frontend ที่ responsive ด้วย Next.js",
        ],
      },
      {
        title: "CareMate",
        description:
          "แอปมือถือที่พัฒนาร่วมกับทีม เชื่อมต่อ backend ให้ผลิตภัณฑ์ด้านสุขภาพ",
        image: "/careMateProject.png",
        technologies: ["Flutter", "Backend Integration"],
        category: "งานทีม",
        date: "2569",
        githubUrl: "https://github.com/Tirawat1",
        liveUrl: "",
        features: ["ผลิตภัณฑ์มือถือด้านสุขภาพ", "เชื่อมต่อ backend ร่วมกับทีม"],
      },
      {
        title: "Diary App with Whisper ASR",
        description:
          "แอปไดอารีขับเคลื่อนด้วย AI แปลงเสียงพูดเป็นข้อความด้วยโมเดล Whisper ASR พัฒนาด้วย Flutter และ Spring Boot",
        image: "/seniorProject.png",
        technologies: [
          "Flutter",
          "Spring Boot",
          "MongoDB",
          "Whisper ASR",
          "AI/ML",
        ],
        category: "โปรเจกต์จบการศึกษา",
        date: "2567",
        githubUrl: "https://github.com/Tirawat1",
        liveUrl: "",
        features: [
          "ปรับจูนโมเดล Whisper ASR ให้แปลงเสียงเป็นข้อความแม่นยำขึ้น",
          "ระบบ backend ด้วย Spring Boot สำหรับสื่อสาร API",
          "เชื่อมต่อ MongoDB สำหรับจัดเก็บและเรียกข้อมูล",
        ],
      },
    ],
  },
  contact: {
    heading: "มา",
    headingHighlight: "คุยกัน",
    subtitle:
      "พร้อมนำไอเดียของคุณมาสร้างสรรค์ไหม? มาคุยเรื่องโปรเจกต์ถัดไปและสร้างสิ่งดีๆ ไปด้วยกัน",
    emailCardTitle: "อีเมลหาผม",
    locationCardTitle: "ที่อยู่",
    locationValue: "กรุงเทพมหานคร ประเทศไทย",
    availabilityCardTitle: "สถานะการรับงาน",
    availabilityValue: "เปิดรับโอกาสสาย Backend/Infra",
    formHeading: "มาทำงานร่วมกัน",
    formSubtitle:
      "ตอนนี้ผมเปิดรับโอกาสสาย backend และ infrastructure มาสร้างสิ่งดีๆ ไปด้วยกันครับ!",
    quickResponseTitle: "ตอบกลับรวดเร็ว",
    quickResponseDesc: "ปกติผมจะตอบอีเมลภายใน 24 ชั่วโมง",
    flexScheduleTitle: "เวลานัดหมายยืดหยุ่น",
    flexScheduleDesc: "สะดวกนัดประชุมตามเวลาประเทศไทย (GMT+7)",
    sendEmailLabel: "ส่งอีเมล",
    connectLinkedinLabel: "เชื่อมต่อทาง LinkedIn",
    otherPlatformsLabel: "อยากติดต่อช่องทางอื่น? ตามหาผมได้ที่:",
  },
};

export const content: Record<Language, SiteContent> = { en, th };
