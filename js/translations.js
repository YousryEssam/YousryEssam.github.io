/* ============================================
   Translations - English & Arabic
   Portfolio Website for Yousry Essam Ayoub
   ============================================ */

const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      awards: "Awards",
      contact: "Contact"
    },

    // Hero Section
    hero: {
      badge: "Available for opportunities",
      greeting: "Hello, I'm",
      name: "Yousry Ayoub",
      title: "Software Engineer",
      subtitle: "Full-Stack Developer & Problem Solver",
      description: "Software Engineer with strong problem-solving skills and a solid grasp of software engineering principles. Experienced in developing full-stack applications with .NET technologies.",
      cta_primary: "View My Work",
      cta_secondary: "Download CV",
      stat_problems: "Problems Solved",
      stat_experience: "Years Experience",
      stat_projects: "Projects Built"
    },

    // About Section
    about: {
      subtitle: "About Me",
      title: "Passionate Software Engineer",
      description: "Software Engineer with strong problem-solving skills and a solid grasp of software engineering principles and competitive programming. Experienced in developing full-stack applications with .NET technologies, with knowledge in solving complex problems, and solved more than +3500 problems on various online judges.",
      description2: "Quick to learn new technologies and focused on writing clean, maintainable code. Looking to contribute to a collaborative tech team while continuing to grow professionally.",
      info_location: "Location",
      info_location_value: "Cairo, Egypt",
      info_email: "Email",
      info_phone: "Phone",
      info_status: "Status",
      info_status_value: "Ready to relocate",
      skills_title: "Technical Skills",
      tab_backend: "Backend",
      tab_frontend: "Frontend",
      tab_languages: "Languages",
      tab_tools: "Tools & Practices"
    },

    // Experience Section
    experience: {
      subtitle: "Work Experience",
      title: "My Professional Journey",
      positions: {
        toq: {
          title: "Junior Software Engineer",
          company: "Toq Information Technology",
          location: "Riyadh, Saudi Arabia · Remote",
          date: "Nov 2025 – Present",
          duties: [
            "Developing full-stack web applications using ASP.NET MVC, ASP.NET Core, C#, and the .NET ecosystem.",
            "Building responsive and intuitive UI components using Angular and modern front-end practices.",
            "Implementing APIs, data access layers, and back-end features to support business requirements.",
            "Collaborating with cross-functional teams to deliver clean, maintainable, and scalable solutions."
          ]
        },
        ipmagix: {
          title: "Software Engineer",
          company: "IPMagiX",
          location: "Cairo, Egypt · Remote",
          date: "Jun 2025 – Present",
          duties: [
            "Developing and maintaining software applications using .NET technologies and modern development practices.",
            "Working on projects utilizing ASP.NET Core, Entity Framework, and related .NET ecosystem tools.",
            "Applied problem-solving skills and software engineering principles to address complex technical challenges."
          ]
        },
        petra: {
          title: "Summer Internship",
          company: "Petra Software Industries",
          location: "Assiut, Egypt · Onsite",
          date: "Jul 2023 – Aug 2023",
          duties: [
            "Designed and managed databases using MySQL for real-world project implementations.",
            "Wrote efficient, high-quality SQL queries to support diverse application needs."
          ]
        }
      }
    },

    // Projects Section
    projects: {
      subtitle: "Featured Projects",
      title: "Things I've Built",
      items: {
        shahrazad: {
          badge: "Graduation Project",
          title: "ShahraZad",
          description: "Cross-platform app that converts stories into expressive audio using deep learning and generative AI with emotional TTS, voice customization, and Arabic/English support."
        },
        fit4job: {
          badge: "Full-Stack",
          title: "Fit4Job",
          description: "Full-stack recruitment platform with advanced job search, applicant tracking, skill-based matching, and online exams."
        },
        bloo: {
          badge: "Social Media",
          title: "BlOO",
          description: "Full-featured social platform with real-time messaging, post sharing, social interactions, and responsive design."
        },
        trendora: {
          badge: "E-Commerce",
          title: "TrendOra",
          description: "RESTful APIs for an e-commerce platform supporting 3 user roles (Admin, Trader, Customer) with product management and order tracking."
        },
        cms: {
          badge: "CMS Platform",
          title: "Dynamic CMS",
          description: "WordPress-like CMS platform with RESTful APIs enabling content management from design to production with scalable architecture."
        },
        portfolio: {
          badge: "Personal",
          title: "Portfolio Website",
          description: "Responsive, accessible portfolio site showcasing projects and skills, with clean design and performance optimization."
        },
        todo: {
          badge: "Utility",
          title: "Todo App",
          description: "Responsive task management app with add, filter, and delete features, plus light/dark mode for better UX."
        }
      },
      view_code: "View Code",
      live_demo: "Live Demo"
    },

    // Education Section
    education: {
      subtitle: "Education",
      title: "Academic Background",
      iti: {
        degree: "9-Month Diploma",
        field: "Professional Training Program (PTP)",
        school: "Information Technology Institute (ITI)",
        specialization: "Professional Development & BI-infused CRM",
        date: "Oct 2024 – Jul 2025"
      },
      university: {
        degree: "Bachelor of Computer Science",
        school: "Assiut University",
        faculty: "Faculty of Computer Science and Information Technology",
        date: "Oct 2020 – Jul 2024",
        gpa: "GPA: 2.93/4.0"
      }
    },

    // Awards Section
    awards: {
      subtitle: "Awards & Achievements",
      title: "Recognition & Competitions",
      items: {
        ecpc2024: {
          title: "ECPC 2024 Finals",
          description: "Egypt's premier competitive programming contest",
          rank: "Ranked 51st / 397 teams"
        },
        ecpc2024q: {
          title: "ECPC 2024 Qualifications",
          description: "National programming competition qualifier",
          rank: "29th / 447 teams (Top 7%)"
        },
        ecpc2023: {
          title: "ECPC 2023 Qualifications",
          description: "National programming competition qualifier",
          rank: "22nd / 235 teams (Top 10%)"
        },
        ecpc2022: {
          title: "ECPC 2022 Qualifications",
          description: "National programming competition qualifier",
          rank: "24th / 237 teams (Top 11%)"
        },
        warfare: {
          title: "Programming Warfare 2023",
          description: "Upper Egypt's regional programming competition",
          rank: "19th / 150 teams"
        },
        problems: {
          title: "3500+ Problems Solved",
          description: "Across Codeforces, LeetCode, HackerRank and other platforms",
          rank: "Competitive Programmer"
        }
      }
    },

    // Volunteering Section
    volunteering: {
      subtitle: "Volunteering",
      title: "Community Contributions",
      items: {
        iti: {
          role: "Problem Solving Training Lead",
          org: "ITI - Assiut Intake 45",
          date: "Oct 2024 – Jul 2025",
          description: "Led problem-solving training sessions for ITI colleagues, covering algorithms, data structures, and competitive programming techniques. Mentored and instructed peers in developing analytical thinking and coding problem-solving skills."
        },
        icpc_eelu: {
          role: "Instructor & Mentor",
          org: "ICPC EELU Community",
          date: "Mar 2024 – Jun 2025",
          description: "Led C++ and problem-solving sessions, created lesson plans, and mentored students on algorithms, debugging, and coding best practices."
        },
        icpc_assiut: {
          role: "Mentor",
          org: "ICPC Assiut Community",
          date: "Oct 2021 – Jun 2024",
          description: "Guided peers in C++ and algorithms, offering support in debugging and problem-solving while strengthening mentoring and communication skills."
        }
      }
    },

    // Contact Section
    contact: {
      subtitle: "Get in Touch",
      title: "Let's Work Together",
      description: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      form_name: "Your Name",
      form_email: "Your Email",
      form_subject: "Subject",
      form_message: "Your Message",
      form_submit: "Send Message",
      info_email: "Email",
      info_phone: "Phone",
      info_location: "Location"
    },

    // Footer
    footer: {
      designed: "Designed & Built by",
      rights: "All rights reserved."
    },

    // Misc
    misc: {
      scroll_top: "Scroll to top",
      theme_light: "Switch to light mode",
      theme_dark: "Switch to dark mode",
      lang_switch: "Switch language"
    }
  },

  ar: {
    // Navigation
    nav: {
      home: "الرئيسية",
      about: "عنّي",
      experience: "الخبرات",
      projects: "المشاريع",
      education: "التعليم",
      awards: "الجوائز",
      contact: "تواصل"
    },

    // Hero Section
    hero: {
      badge: "متاح للفرص الوظيفية",
      greeting: "مرحباً، أنا",
      name: "يسري أيوب",
      title: "مهندس برمجيات",
      subtitle: "مطور Full-Stack وحلّال مشكلات",
      description: "مهندس برمجيات يتمتع بمهارات قوية في حل المشكلات وفهم عميق لمبادئ هندسة البرمجيات. خبرة في تطوير تطبيقات Full-Stack باستخدام تقنيات .NET.",
      cta_primary: "شاهد أعمالي",
      cta_secondary: "تحميل السيرة الذاتية",
      stat_problems: "مسألة تم حلها",
      stat_experience: "سنوات خبرة",
      stat_projects: "مشروع منجز"
    },

    // About Section
    about: {
      subtitle: "عنّي",
      title: "مهندس برمجيات شغوف",
      description: "مهندس برمجيات يتمتع بمهارات قوية في حل المشكلات وفهم عميق لمبادئ هندسة البرمجيات والبرمجة التنافسية. خبرة في تطوير تطبيقات Full-Stack باستخدام تقنيات .NET، مع معرفة في حل المشكلات المعقدة، وحلّ أكثر من 3500 مسألة على منصات مختلفة.",
      description2: "سريع التعلم للتقنيات الجديدة ومركّز على كتابة كود نظيف وقابل للصيانة. أتطلع للمساهمة في فريق تقني تعاوني مع الاستمرار في النمو المهني.",
      info_location: "الموقع",
      info_location_value: "القاهرة، مصر",
      info_email: "البريد الإلكتروني",
      info_phone: "الهاتف",
      info_status: "الحالة",
      info_status_value: "مستعد للانتقال",
      skills_title: "المهارات التقنية",
      tab_backend: "الباك إند",
      tab_frontend: "الفرونت إند",
      tab_languages: "اللغات",
      tab_tools: "الأدوات والممارسات"
    },

    // Experience Section
    experience: {
      subtitle: "الخبرات العملية",
      title: "مسيرتي المهنية",
      positions: {
        toq: {
          title: "مهندس برمجيات مبتدئ",
          company: "توق لتقنية المعلومات",
          location: "الرياض، السعودية · عن بُعد",
          date: "نوفمبر 2025 – حتى الآن",
          duties: [
            "تطوير تطبيقات ويب متكاملة باستخدام ASP.NET MVC و ASP.NET Core و C# ومنظومة .NET.",
            "بناء مكونات واجهة مستخدم متجاوبة وبديهية باستخدام Angular والممارسات الحديثة.",
            "تنفيذ واجهات برمجة التطبيقات وطبقات الوصول للبيانات لدعم متطلبات العمل.",
            "التعاون مع فرق متعددة التخصصات لتقديم حلول نظيفة وقابلة للتطوير."
          ]
        },
        ipmagix: {
          title: "مهندس برمجيات",
          company: "IPMagiX",
          location: "القاهرة، مصر · عن بُعد",
          date: "يونيو 2025 – حتى الآن",
          duties: [
            "تطوير وصيانة تطبيقات برمجية باستخدام تقنيات .NET والممارسات الحديثة.",
            "العمل على مشاريع تستخدم ASP.NET Core و Entity Framework وأدوات منظومة .NET.",
            "تطبيق مهارات حل المشكلات ومبادئ هندسة البرمجيات لمعالجة التحديات التقنية المعقدة."
          ]
        },
        petra: {
          title: "تدريب صيفي",
          company: "بترا للصناعات البرمجية",
          location: "أسيوط، مصر · حضوري",
          date: "يوليو 2023 – أغسطس 2023",
          duties: [
            "تصميم وإدارة قواعد البيانات باستخدام MySQL لتنفيذ مشاريع حقيقية.",
            "كتابة استعلامات SQL فعّالة وعالية الجودة لدعم احتياجات التطبيقات المتنوعة."
          ]
        }
      }
    },

    // Projects Section
    projects: {
      subtitle: "المشاريع المميزة",
      title: "أعمالي وإنجازاتي",
      items: {
        shahrazad: {
          badge: "مشروع التخرج",
          title: "شهرزاد",
          description: "تطبيق متعدد المنصات يحول القصص إلى صوت معبّر باستخدام التعلم العميق والذكاء الاصطناعي التوليدي مع TTS عاطفي وتخصيص الصوت ودعم العربية والإنجليزية."
        },
        fit4job: {
          badge: "Full-Stack",
          title: "Fit4Job",
          description: "منصة توظيف متكاملة مع بحث متقدم عن الوظائف وتتبع المتقدمين ومطابقة المهارات واختبارات إلكترونية."
        },
        bloo: {
          badge: "شبكة اجتماعية",
          title: "BlOO",
          description: "منصة اجتماعية متكاملة مع رسائل فورية ومشاركة منشورات وتفاعلات اجتماعية وتصميم متجاوب."
        },
        trendora: {
          badge: "تجارة إلكترونية",
          title: "TrendOra",
          description: "واجهات برمجة RESTful لمنصة تجارة إلكترونية تدعم 3 أدوار مستخدمين مع إدارة المنتجات وتتبع الطلبات."
        },
        cms: {
          badge: "نظام محتوى",
          title: "نظام إدارة محتوى ديناميكي",
          description: "منصة CMS شبيهة بـ WordPress مع واجهات برمجة RESTful تمكّن إدارة المحتوى من التصميم إلى الإنتاج."
        },
        portfolio: {
          badge: "شخصي",
          title: "موقع البورتفوليو",
          description: "موقع شخصي متجاوب وسهل الوصول لعرض المشاريع والمهارات مع تصميم نظيف وأداء محسّن."
        },
        todo: {
          badge: "أداة",
          title: "تطبيق المهام",
          description: "تطبيق إدارة مهام متجاوب مع ميزات الإضافة والتصفية والحذف، بالإضافة إلى الوضع المظلم/الفاتح."
        }
      },
      view_code: "عرض الكود",
      live_demo: "عرض مباشر"
    },

    // Education Section
    education: {
      subtitle: "التعليم",
      title: "الخلفية الأكاديمية",
      iti: {
        degree: "دبلوم 9 أشهر",
        field: "برنامج التدريب المهني",
        school: "معهد تكنولوجيا المعلومات (ITI)",
        specialization: "التطوير المهني و CRM المدعوم بالذكاء الاصطناعي",
        date: "أكتوبر 2024 – يوليو 2025"
      },
      university: {
        degree: "بكالوريوس علوم الحاسب",
        school: "جامعة أسيوط",
        faculty: "كلية الحاسبات والمعلومات",
        date: "أكتوبر 2020 – يوليو 2024",
        gpa: "المعدل التراكمي: 2.93/4.0"
      }
    },

    // Awards Section
    awards: {
      subtitle: "الجوائز والإنجازات",
      title: "التقدير والمسابقات",
      items: {
        ecpc2024: {
          title: "نهائيات ECPC 2024",
          description: "مسابقة مصر الأولى للبرمجة التنافسية",
          rank: "المركز 51 / 397 فريق"
        },
        ecpc2024q: {
          title: "تصفيات ECPC 2024",
          description: "تصفيات مسابقة البرمجة الوطنية",
          rank: "29 / 447 فريق (أفضل 7%)"
        },
        ecpc2023: {
          title: "تصفيات ECPC 2023",
          description: "تصفيات مسابقة البرمجة الوطنية",
          rank: "22 / 235 فريق (أفضل 10%)"
        },
        ecpc2022: {
          title: "تصفيات ECPC 2022",
          description: "تصفيات مسابقة البرمجة الوطنية",
          rank: "24 / 237 فريق (أفضل 11%)"
        },
        warfare: {
          title: "Programming Warfare 2023",
          description: "مسابقة البرمجة الإقليمية لصعيد مصر",
          rank: "19 / 150 فريق"
        },
        problems: {
          title: "+3500 مسألة محلولة",
          description: "عبر Codeforces و LeetCode و HackerRank ومنصات أخرى",
          rank: "مبرمج تنافسي"
        }
      }
    },

    // Volunteering Section
    volunteering: {
      subtitle: "العمل التطوعي",
      title: "المساهمات المجتمعية",
      items: {
        iti: {
          role: "قائد تدريب حل المشكلات",
          org: "ITI - أسيوط الدفعة 45",
          date: "أكتوبر 2024 – يوليو 2025",
          description: "قيادة جلسات تدريب حل المشكلات لزملاء ITI، تغطي الخوارزميات وهياكل البيانات وتقنيات البرمجة التنافسية. إرشاد الزملاء في تطوير التفكير التحليلي ومهارات حل المشكلات البرمجية."
        },
        icpc_eelu: {
          role: "مدرب ومرشد",
          org: "مجتمع ICPC EELU",
          date: "مارس 2024 – يونيو 2025",
          description: "قيادة جلسات C++ وحل المشكلات، وإعداد خطط الدروس، وإرشاد الطلاب في الخوارزميات وتصحيح الأخطاء وأفضل ممارسات البرمجة."
        },
        icpc_assiut: {
          role: "مرشد",
          org: "مجتمع ICPC أسيوط",
          date: "أكتوبر 2021 – يونيو 2024",
          description: "إرشاد الزملاء في C++ والخوارزميات، وتقديم الدعم في تصحيح الأخطاء وحل المشكلات مع تعزيز مهارات الإرشاد والتواصل."
        }
      }
    },

    // Contact Section
    contact: {
      subtitle: "تواصل معي",
      title: "لنعمل معاً",
      description: "أنا حالياً أبحث عن فرص جديدة. سواء كان لديك سؤال أو تريد فقط إلقاء التحية، سأبذل قصارى جهدي للرد عليك!",
      form_name: "اسمك",
      form_email: "بريدك الإلكتروني",
      form_subject: "الموضوع",
      form_message: "رسالتك",
      form_submit: "إرسال الرسالة",
      info_email: "البريد الإلكتروني",
      info_phone: "الهاتف",
      info_location: "الموقع"
    },

    // Footer
    footer: {
      designed: "صُمم وبُني بواسطة",
      rights: "جميع الحقوق محفوظة."
    },

    // Misc
    misc: {
      scroll_top: "العودة للأعلى",
      theme_light: "التبديل للوضع الفاتح",
      theme_dark: "التبديل للوضع المظلم",
      lang_switch: "تغيير اللغة"
    }
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = translations;
}
