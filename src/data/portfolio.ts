export const portfolioData = {
  personalInfo: {
    name: "سلمى عبدالله بريكان",
    nameEn: "Salma Abdullah Brekan",
    title: "مطورة برمجيات وتقنية معلومات",
    tagline: "أبني الحلول البرمجية وأحوّل الأفكار إلى تجارب رقمية متميزة",
    email: "salma.brekan@email.com",
    phone: "+967 777 000 000",
    location: "الشحر - حضرموت - اليمن",
    github: "https://github.com/salma-design1",
    linkedin: "https://www.linkedin.com/in/salma-brekan-designer",
    currentJob: "موظفة خدمة عملاء وأمين صندوق",
    currentEmployer: "بنك أمجاد",
    currentBranch: "فرع دفيقة",
    availability: "متاحة للفرص المهنية",
  },

  about: {
    headline: "شغفي بالتقنية يُحرّكني نحو الإبداع",
    paragraphs: [
      "أنا سلمى عبدالله بريكان، مطوّرة برمجيات وخرّيجة تقنية المعلومات من جامعة حضرموت. أجمع بين الخلفية الأكاديمية العميقة في علوم الحاسوب والخبرة العملية في قطاع الخدمات المصرفية.",
      "أؤمن إيمانًا راسخًا بأن التقنية قادرة على تغيير العالم، وأسعى دائمًا لبناء حلول برمجية تُحدث فارقًا حقيقيًا في حياة المستخدمين. من تطوير تطبيقات الجوال إلى بناء واجهات برمجية متقدمة، أتعامل مع كل مشروع كفرصة لإثبات أن الكود يمكن أن يكون فنًّا.",
      "خارج عالم البرمجة، أُغذّي عقلي باستمرار من خلال التعلم الذاتي ومتابعة أحدث توجهات الصناعة. الهدف دائمًا واحد: أن أصبح مطوّرة يُثق بها وتُقدّم نتائج استثنائية.",
    ],
    stats: [
      { number: "7+", label: "مشاريع مكتملة" },
      { number: "4", label: "سنوات دراسية" },
      { number: "13+", label: "تقنية متقنة" },
      { number: "∞", label: "شغف بالتعلم" },
    ],
  },

  experience: [
    {
      id: 1,
      company: "بنك أمجاد",
      companyEn: "Amjad Bank",
      role: "موظفة خدمة عملاء وأمين صندوق",
      branch: "فرع دفيقة",
      location: "الشحر - حضرموت - اليمن",
      startDate: "2025",
      endDate: "الحاضر",
      current: true,
      type: "دوام كامل",
      description:
        "تقديم خدمات مصرفية متميزة للعملاء وإدارة العمليات المالية اليومية في البنك. أعمل على ضمان دقة المعاملات المالية وتقديم تجربة عملاء استثنائية.",
      achievements: [
        "إدارة العمليات النقدية اليومية بدقة ومهنية عالية",
        "تقديم خدمات عملاء متميزة وحل استفسارات العملاء",
        "التعامل مع التحويلات المالية والمدفوعات الإلكترونية",
        "المساهمة في تحقيق أهداف الفرع وتطوير العمل البنكي",
      ],
      logo: "🏦",
    },
  ],

  education: [
    {
      id: 1,
      degree: "بكالوريوس تقنية المعلومات",
      institution: "جامعة حضرموت",
      faculty: " كلية الحاسبات و تقنية المعلومات",
      startYear: "2021",
      endYear: "2025",
      gpa: null,
      description:
        "دراسة شاملة في علوم الحاسوب وتطوير البرمجيات وقواعد البيانات وشبكات الحاسوب وهندسة البرمجيات",
      courses: [
        "هندسة البرمجيات",
        "قواعد البيانات",
        "تطوير الويب",
        "تطوير التطبيقات"
      ],
      icon: "🎓",
    },
    {
      id: 2,
      degree: "شهادة الثانوية العامة",
      institution: "المدارس الحكومية",
      faculty: "",
      startYear: "2020",
      endYear: "2021",
      gpa: "98.15%",

      description: "تخرجت بتفوق بمعدل98.15 ",
      courses: [],
      icon: "📚",
    },
    {
      id: 3,
      degree: "دبلوم اللغة الإنجليزية",
      institution: "MKI Institute",
      faculty: "",
      startYear: "2022",
      endYear: "2023",
      gpa: null,
      description:
        "دبلوم متخصص في اللغة الإنجليزية يركز على مهارات التواصل المهني والكتابة الأكاديمية",
      courses: [],
      icon: "🌐",
    },
  ],

  skills: {
    categories: [
      {
        name: "تطوير الواجهة الأمامية",
        icon: "🎨",
        color: "from-green-400 to-brand-600",
        items: [
          { name: "HTML", level: 95, years: "3+" },
          { name: "CSS", level: 90, years: "3+" },
          { name: "Flutter", level: 75, years: "2+" },
        ],
      },
      {
        name: "لغات البرمجة",
        icon: "💻",
        color: "from-brand-500 to-green-600",
        items: [
          { name: "Java", level: 80, years: "3+" },
          { name: "C#", level: 78, years: "2+" },
          { name: "Python", level: 72, years: "2+" },
        ],
      },
      {
        name: "تطوير الخلفية والـ API",
        icon: "⚙️",
        color: "from-green-500 to-brand-700",
        items: [
          { name: "Laravel", level: 82, years: "2+" },
          { name: "ASP.NET Core Web API", level: 75, years: "1+" },
          { name: "REST API", level: 85, years: "2+" },
          { name: "SQL", level: 88, years: "3+" },
        ],
      },
      {
        name: "التصميم وتجربة المستخدم",
        icon: "✏️",
        color: "from-brand-400 to-green-700",
        items: [
          { name: "Figma", level: 85, years: "2+" },
          { name: "Adobe XD", level: 80, years: "2+" },
          { name: "Photoshop", level: 70, years: "1+" },
        ],
      },
    ],
  },

  projects: [
    {
      id: 1,
      title: "متجر المنتجات الطبيعية",
      description:
        "منصة تجارة إلكترونية متكاملة لبيع المنتجات الطبيعية والعضوية، مع نظام إدارة المخزون وسلة التسوق ودفع آمن.",
      tech: ["Laravel", "MySQL", "HTML", "CSS", "JavaScript"],
      category: "تطوير ويب",
      github: "https://github.com/salma-design1/natural_products_store",
      demo: null,
      image: null,
      featured: true,
      color: "from-green-400 to-brand-600",
      icon: "🌿",
    },
    {
      id: 2,
      title: "منصة التبرعات",
      description:
        "منصة رقمية تُمكّن المتبرعين من دعم القضايا الإنسانية بسهولة وشفافية، مع لوحة تحكم تفاعلية لتتبع التبرعات في الوقت الفعلي.",
      tech: ["ASP.NET Core", "SQL Server", "React", "REST API"],
      category: "تطوير ويب",
      github: "https://github.com/salma-design1",
      demo: null,
      image: null,
      featured: true,
      color: "from-brand-500 to-green-600",
      icon: "❤️",
    },
    {
      id: 3,
      title: "منصة دعم المبتعثين",
      description:
        "نظام شامل لإدارة شؤون الطلاب المبتعثين، يشمل متابعة الوثائق والبعثات الدراسية وتقديم الدعم الإداري الإلكتروني.",
      tech: ["Laravel", "MySQL", "Flutter", "REST API"],
      category: "تطوير متكامل",
      github: "https://github.com/salma-design1",
      demo: null,
      image: null,
      featured: true,
      color: "from-green-500 to-brand-700",
      icon: "✈️",
    },
    {
      id: 4,
      title: "متجر إلكتروني",
      description:
        "متجر تجارة إلكترونية متكامل بميزات البحث المتقدم وتصنيف المنتجات وعرض التقييمات ونظام الطلبات الذكي.",
      tech: ["C#", "ASP.NET", "SQL Server", "HTML", "CSS"],
      category: "تطوير ويب",
      github: "https://github.com/salma-design1",
      demo: null,
      image: null,
      featured: false,
      color: "from-brand-400 to-green-700",
      icon: "🛒",
    },
    {
      id: 5,
      title: "نظام إدارة العملاء",
      description:
        "نظام CRM متكامل لإدارة قاعدة العملاء وتتبع التفاعلات والصفقات مع تقارير تحليلية شاملة وتصدير البيانات.",
      tech: ["Java", "MySQL", "JavaFX"],
      category: "تطبيقات سطح المكتب",
      github: "https://github.com/salma-design1",
      demo: null,
      image: null,
      featured: false,
      color: "from-green-400 to-brand-600",
      icon: "👥",
    },
    {
      id: 6,
      title: "موقع تأجير سيارات",
      description:
        "منصة متكاملة لتأجير السيارات مع نظام حجز ذكي وتتبع الأسطول وإدارة العقود والمدفوعات الإلكترونية.",
      tech: ["Laravel", "MySQL", "HTML", "CSS", "JavaScript"],
      category: "تطوير ويب",
      github: "https://github.com/salma-design1",
      demo: null,
      image: null,
      featured: false,
      color: "from-brand-500 to-green-600",
      icon: "🚗",
    },
    {
      id: 7,
      title: "متجر عطور",
      description:
        "متجر إلكتروني أنيق لبيع العطور الفاخرة مع تصميم جذاب وتجربة مستخدم سلسة وعرض احترافي للمنتجات.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "تطوير ويب",
      github: "https://github.com/salma-design1",
      demo: null,
      image: null,
      featured: false,
      color: "from-green-500 to-brand-700",
      icon: "🌸",
    },
  ],

  socialLinks: {
    github: "https://github.com/salma-design1",
    linkedin: "https://www.linkedin.com/in/salma-brekan-designer",
    email: "salma.brekan@email.com",
    phone: "+967 779 626 266 ",
  },

  resume: {
    title: "السيرة الذاتية",
    subtitle: "تحميل السيرة الذاتية بصيغة PDF",
    downloadUrl: "/cv.pdf",
    previewText:
      "سيرة ذاتية احترافية تعكس المسيرة الأكاديمية والمهنية لسلمى عبدالله بريكان في مجال تطوير البرمجيات وتقنية المعلومات.",
    lastUpdated: "يناير 2025",
  },

  contact: {
    title: "تواصل معي",
    subtitle: "هل لديك مشروع أو فرصة عمل؟ أنا دائمًا منفتحة للحوار.",
    formTitle: "أرسل رسالة",
    cta: "دعنا نبني شيئًا رائعًا معًا",
    responseTime: "أرد عادةً خلال 24 ساعة",
  },

  meta: {
    title: "سلمى بريكان | مطورة برمجيات وتقنية معلومات",
    description:
      "موقع سلمى عبدالله بريكان - مطورة برمجيات وخرّيجة تقنية معلومات من حضرموت، اليمن. متخصصة في تطوير الويب والتطبيقات.",
    keywords:
      "سلمى بريكان, مطورة برمجيات, تقنية معلومات, حضرموت, اليمن, تطوير ويب",
    author: "سلمى عبدالله بريكان",
    url: "https://salma-brekan.dev",
  },
};
