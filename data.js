// ==========================================================
// PORTFOLIO DATA - BACKEND
// Data lengkap untuk portfolio Agi Muhammad Tengku Aqamaddin
// ==========================================================

// Personal Information
const personalInfo = {
  name: 'Agi Muhammad Tengku Aqamaddin',
  title: 'Front-End Engineer',
  tagline: 'CodeSeed: Growing Into Greatness',
  location: 'Yogyakarta, Indonesia',
  bio: 'Saya adalah mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain antarmuka. Serta sedang menekuni dunia pengembangan web dan mobile application.',
  avatar: 'https://avatars.githubusercontent.com/u/202240388?v=4',
  github: 'ATengkuuu',

  // About Me
  about: {
    description: [
      'Saya adalah mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain antarmuka. Serta sedang menekuni dunia pengembangan web dan mobile application.',
      'Meskipun masih dalam tahap belajar, saya memiliki ketertarikan besar pada UI/UX Design, Frontend, dan Backend Development.',
      'Saya senang mencoba teknologi baru, membangun project kecil, dan terus mengasah kemampuan programming saya.',
      'Terbuka untuk kolaborasi, belajar dari pengalaman, dan berkontribusi dalam pengembangan aplikasi yang bermanfaat.'
    ],
    interests: [
      '💻 Programming',
      '🎨 UI/UX Design',
      '📚 Continuous Learning',
      '🔍 Problem Solving',
      '🌐 Web Development',
      '📱 Mobile Development'
    ]
  },

  // Contact Information
  contact: {
    email: 'tengkuagi@gmail.com',
    phone: '+62 896-0334-9372',
    github: 'https://github.com/ATengkuuu',
    instagram: 'https://instagram.com/a.tengkuu',
    instagramHandle: '@a.tengkuu',
    whatsapp: 'https://wa.me/6289603349372',
    discord: {
      username: '@atengkuu',
      id: '684634138640252957',
      url: 'discord://discord.com/users/684634138640252957',
      fallback: 'https://discordapp.com/users/684634138640252957'
    }
  },

  // Inspirational Quote
  quote: {
    text: "Do not wait the time will never be 'just right'. Start where you stand, and work with whatever tools you may have.",
    author: "Napoleon Hill"
  }
};

// Skills Data
const skills = [
  // Left Column Skills
  {
    id: 1,
    name: 'Vue.js',
    level: 'Mahir',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
    iconColor: 'text-green-500',
    experience: '2+ years',
    description: 'Framework JavaScript progresif untuk membangun user interface'
  },
  {
    id: 2,
    name: 'JavaScript',
    level: 'Mahir',
    category: 'Programming Language',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    iconColor: 'text-yellow-500',
    experience: '3+ years',
    description: 'Bahasa pemrograman untuk web development'
  },
  {
    id: 3,
    name: 'TypeScript',
    level: 'Menengah',
    category: 'Programming Language',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    iconColor: 'text-blue-500',
    experience: '1+ years',
    description: 'Superset JavaScript dengan static typing'
  },
  {
    id: 4,
    name: 'React',
    level: 'Menengah',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    iconColor: 'text-blue-400',
    experience: '1+ years',
    description: 'Library JavaScript untuk membangun user interface'
  },
  {
    id: 5,
    name: 'Node.js',
    level: 'Menengah',
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    iconColor: 'text-green-600',
    experience: '1+ years',
    description: 'Runtime JavaScript untuk server-side development'
  },

  // Right Column Skills
  {
    id: 6,
    name: 'CSS3',
    level: 'Mahir',
    category: 'Styling',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    iconColor: 'text-blue-600',
    experience: '3+ years',
    description: 'Cascading Style Sheets untuk styling web'
  },
  {
    id: 7,
    name: 'HTML5',
    level: 'Mahir',
    category: 'Markup',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    iconColor: 'text-orange-500',
    experience: '3+ years',
    description: 'Markup language untuk struktur web'
  },
  {
    id: 8,
    name: 'Git',
    level: 'Mahir',
    category: 'Version Control',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    iconColor: 'text-red-500',
    experience: '2+ years',
    description: 'Version control system untuk tracking code changes'
  },
  {
    id: 9,
    name: 'Tailwind CSS',
    level: 'Mahir',
    category: 'Styling',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    iconColor: 'text-cyan-500',
    experience: '2+ years',
    description: 'Utility-first CSS framework'
  },
  {
    id: 10,
    name: 'MySQL',
    level: 'Menengah',
    category: 'Database',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    iconColor: 'text-blue-700',
    experience: '1+ years',
    description: 'Relational database management system'
  }
];

// Projects Data
const projects = [
  {
    id: 1,
    title: 'Aplikasi Mental Health Sobat',
    slug: 'mental-health-sobat',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
    description: 'Platform kesehatan mental yang membantu pengguna untuk konsultasi dengan psikolog, tracking mood harian, dan akses ke artikel-artikel kesehatan mental. Dilengkapi dengan fitur chat real-time dan reminder untuk self-care.',
    features: [
      'Konsultasi dengan psikolog',
      'Tracking mood harian',
      'Artikel kesehatan mental',
      'Chat real-time',
      'Reminder self-care',
      'Dashboard analytics'
    ],
    tech: ['React Native', 'Firebase', 'Node.js', 'Socket.io', 'MongoDB'],
    category: 'Mobile App',
    status: 'coming-soon',
    link: '#',
    github: '#',
    demo: '#',
    startDate: '2024-01-01',
    endDate: null,
    teamSize: 1,
    role: 'Full Stack Developer',
    challenges: [
      'Real-time messaging implementation',
      'User data privacy and security',
      'Mental health content curation'
    ],
    achievements: [
      'Designed intuitive user interface for mental health tracking',
      'Implemented secure real-time chat system',
      'Created comprehensive mood analytics dashboard'
    ]
  },
  {
    id: 2,
    title: 'Website Barbershop CutsProject',
    slug: 'barbershop-cutsproject',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&h=300&fit=crop',
    description: 'Website modern untuk barbershop dengan sistem booking online, galeri potong rambut, profil barber, dan manajemen jadwal. Dilengkapi dengan fitur pembayaran digital dan review pelanggan.',
    features: [
      'Sistem booking online',
      'Galeri potong rambut',
      'Profil barber',
      'Manajemen jadwal',
      'Pembayaran digital',
      'Review pelanggan',
      'Dashboard admin'
    ],
    tech: ['Vue.js', 'Express.js', 'PostgreSQL', 'Stripe', 'Socket.io'],
    category: 'Web Application',
    status: 'on-progress',
    link: '#',
    github: '#',
    demo: '#',
    startDate: '2024-03-01',
    endDate: null,
    teamSize: 2,
    role: 'Frontend Developer',
    challenges: [
      'Complex booking system logic',
      'Payment gateway integration',
      'Real-time schedule updates'
    ],
    achievements: [
      'Built responsive booking interface',
      'Integrated secure payment system',
      'Developed real-time notification system'
    ]
  }
];

// Education History
const education = [
  {
    id: 1,
    period: '2023 - Sekarang',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 - Informatika',
    degree: 'Sarjana Komputer',
    location: 'Yogyakarta, Indonesia',
    status: 'ongoing',
    gpa: null,
    description: 'Fokus pada pengembangan web, mobile application, dan software engineering',
    achievements: [
      'Aktif dalam organisasi kampus',
      'Mengikuti berbagai workshop teknologi',
      'Berpartisipasi dalam hackathon'
    ],
    relevantCourses: [
      'Pemrograman Web',
      'Basis Data',
      'Algoritma dan Struktur Data',
      'Rekayasa Perangkat Lunak',
      'Mobile Programming',
      'UI/UX Design'
    ]
  },
  {
    id: 2,
    period: '2020 - 2023',
    institution: 'Madrasah Aliyah Negeri Paser',
    major: 'MIPA',
    degree: 'Sekolah Menengah Atas',
    location: 'Paser, Kalimantan Timur',
    status: 'completed',
    gpa: null,
    description: 'Jurusan Matematika dan Ilmu Pengetahuan Alam dengan fokus pada logika dan pemecahan masalah',
    achievements: [
      'Lulus dengan nilai memuaskan',
      'Aktif dalam kegiatan ekstrakurikuler',
      'Juara dalam kompetisi matematika tingkat kabupaten'
    ],
    relevantCourses: [
      'Matematika',
      'Fisika',
      'Kimia',
      'Biologi',
      'Bahasa Inggris',
      'TIK'
    ]
  },
  {
    id: 3,
    period: '2017 - 2020',
    institution: 'Madrasah Tsanawiyah Negeri 3 Paser',
    major: 'Umum',
    degree: 'Sekolah Menengah Pertama',
    location: 'Paser, Kalimantan Timur',
    status: 'completed',
    gpa: null,
    description: 'Pendidikan menengah pertama dengan kurikulum umum',
    achievements: [
      'Lulus dengan prestasi baik',
      'Aktif dalam kegiatan sekolah',
      'Mengembangkan minat di bidang teknologi'
    ],
    relevantCourses: [
      'Matematika',
      'IPA',
      'Bahasa Indonesia',
      'Bahasa Inggris',
      'TIK',
      'Seni Budaya'
    ]
  }
];

// Experience Data (untuk masa depan)
const experience = [
  // Placeholder for future work experience
  {
    id: 1,
    position: 'Frontend Developer Intern',
    company: 'Tech Company',
    location: 'Yogyakarta, Indonesia',
    period: 'Coming Soon',
    status: 'planned',
    description: 'Placeholder for future internship or work experience',
    responsibilities: [],
    technologies: [],
    achievements: []
  }
];

// Certificates Data (untuk masa depan)
const certificates = [
  // Placeholder for future certificates
  {
    id: 1,
    name: 'Vue.js Certification',
    issuer: 'Vue.js Organization',
    date: 'Coming Soon',
    status: 'planned',
    credentialId: '',
    verificationUrl: '',
    description: 'Official Vue.js framework certification'
  }
];

// Blog Posts Data (untuk masa depan)
const blogPosts = [
  // Placeholder for future blog posts
  {
    id: 1,
    title: 'Getting Started with Vue.js',
    slug: 'getting-started-with-vuejs',
    excerpt: 'A beginner guide to Vue.js framework',
    content: '',
    author: 'Agi Muhammad Tengku Aqamaddin',
    publishDate: 'Coming Soon',
    status: 'draft',
    tags: ['Vue.js', 'JavaScript', 'Frontend'],
    readTime: '5 min',
    featured: false
  }
];

// Site Configuration
const siteConfig = {
  siteName: 'Agi Muhammad Tengku Aqamaddin - Portfolio',
  siteDescription: 'Portfolio website of Agi Muhammad Tengku Aqamaddin - Frontend Developer and Student of Informatics Engineering',
  siteUrl: 'https://agitengku.my.id',
  author: 'Agi Muhammad Tengku Aqamaddin',
  keywords: [
    'Agi Muhammad Tengku Aqamaddin',
    'Frontend Developer',
    'Vue.js Developer',
    'Web Developer',
    'UI/UX Designer',
    'Student',
    'Informatika',
    'Portfolio',
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js'
  ],
  social: {
    github: 'https://github.com/ATengkuuu',
    instagram: 'https://instagram.com/a.tengkuu',
    discord: 'discord://discord.com/users/684634138640252957',
    email: 'tengkuagi@gmail.com'
  },
  formspreeEndpoint: 'https://formspree.io/f/mjkrqdro',
  cv: {
    filename: 'CV-Agi-Muhammad-Tengku-Aqamaddin.pdf',
    path: '/cv/CV-Agi-Muhammad-Tengku-Aqamaddin.pdf'
  }
};

// API Responses Helper Functions
const getPersonalInfo = () => ({
  success: true,
  data: personalInfo
});

const getSkills = () => ({
  success: true,
  data: skills
});

const getProjects = () => ({
  success: true,
  data: projects
});

const getEducation = () => ({
  success: true,
  data: education
});

const getExperience = () => ({
  success: true,
  data: experience
});

const getCertificates = () => ({
  success: true,
  data: certificates
});

const getBlogPosts = () => ({
  success: true,
  data: blogPosts
});

const getSiteConfig = () => ({
  success: true,
  data: siteConfig
});

// Export all data
module.exports = {
  // Data
  personalInfo,
  skills,
  projects,
  education,
  experience,
  certificates,
  blogPosts,
  siteConfig,

  // Helper Functions
  getPersonalInfo,
  getSkills,
  getProjects,
  getEducation,
  getExperience,
  getCertificates,
  getBlogPosts,
  getSiteConfig
};