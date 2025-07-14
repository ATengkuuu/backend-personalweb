-- ===================================
-- Skills Table
-- ===================================
CREATE TABLE IF NOT EXISTS skills (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    level TEXT,
    category TEXT,
    icon TEXT,
    iconColor TEXT,
    experience TEXT,
    description TEXT
);

INSERT INTO skills (name, level, category, icon, iconColor, experience, description) VALUES
('Vue.js', 'Mahir', 'Frontend', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg', 'text-green-500', '2+ years', 'Framework JavaScript progresif untuk membangun user interface'),
('JavaScript', 'Mahir', 'Programming Language', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', 'text-yellow-500', '3+ years', 'Bahasa pemrograman untuk web development'),
('TypeScript', 'Menengah', 'Programming Language', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', 'text-blue-500', '1+ years', 'Superset JavaScript dengan static typing'),
('React', 'Menengah', 'Frontend', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', 'text-blue-400', '1+ years', 'Library JavaScript untuk membangun user interface'),
('Node.js', 'Menengah', 'Backend', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', 'text-green-600', '1+ years', 'Runtime JavaScript untuk server-side development'),
('CSS3', 'Mahir', 'Styling', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', 'text-blue-600', '3+ years', 'Cascading Style Sheets untuk styling web'),
('HTML5', 'Mahir', 'Markup', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', 'text-orange-500', '3+ years', 'Markup language untuk struktur web'),
('Git', 'Mahir', 'Version Control', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', 'text-red-500', '2+ years', 'Version control system untuk tracking code changes'),
('Tailwind CSS', 'Mahir', 'Styling', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', 'text-cyan-500', '2+ years', 'Utility-first CSS framework'),
('MySQL', 'Menengah', 'Database', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', 'text-blue-700', '1+ years', 'Relational database management system');

-- ===================================
-- Projects Table
-- ===================================
CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT,
    image TEXT,
    description TEXT,
    features TEXT[],
    tech TEXT[],
    category TEXT,
    status TEXT,
    link TEXT,
    github TEXT,
    demo TEXT,
    startDate DATE,
    endDate DATE,
    teamSize INTEGER,
    role TEXT,
    challenges TEXT[],
    achievements TEXT[]
);

INSERT INTO projects (title, slug, image, description, features, tech, category, status, link, github, demo, startDate, endDate, teamSize, role, challenges, achievements) VALUES
(
  'Aplikasi Mental Health Sobat',
  'mental-health-sobat',
  'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
  'Platform kesehatan mental yang membantu pengguna untuk konsultasi dengan psikolog, tracking mood harian, dan akses ke artikel-artikel kesehatan mental. Dilengkapi dengan fitur chat real-time dan reminder untuk self-care.',
  ARRAY['Konsultasi dengan psikolog','Tracking mood harian','Artikel kesehatan mental','Chat real-time','Reminder self-care','Dashboard analytics'],
  ARRAY['React Native','Firebase','Node.js','Socket.io','MongoDB'],
  'Mobile App',
  'coming-soon',
  '#',
  '#',
  '#',
  '2024-01-01',
  NULL,
  1,
  'Full Stack Developer',
  ARRAY['Real-time messaging implementation','User data privacy and security','Mental health content curation'],
  ARRAY['Designed intuitive user interface for mental health tracking','Implemented secure real-time chat system','Created comprehensive mood analytics dashboard']
),
(
  'Website Barbershop CutsProject',
  'barbershop-cutsproject',
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&h=300&fit=crop',
  'Website modern untuk barbershop dengan sistem booking online, galeri potong rambut, profil barber, dan manajemen jadwal. Dilengkapi dengan fitur pembayaran digital dan review pelanggan.',
  ARRAY['Sistem booking online','Galeri potong rambut','Profil barber','Manajemen jadwal','Pembayaran digital','Review pelanggan','Dashboard admin'],
  ARRAY['Vue.js','Express.js','PostgreSQL','Stripe','Socket.io'],
  'Web Application',
  'on-progress',
  '#',
  '#',
  '#',
  '2024-03-01',
  NULL,
  2,
  'Frontend Developer',
  ARRAY['Complex booking system logic','Payment gateway integration','Real-time schedule updates'],
  ARRAY['Built responsive booking interface','Integrated secure payment system','Developed real-time notification system']
);

-- ===================================
-- Education Table
-- ===================================
CREATE TABLE IF NOT EXISTS education (
    id SERIAL PRIMARY KEY,
    period TEXT,
    institution TEXT,
    major TEXT,
    degree TEXT,
    location TEXT,
    status TEXT,
    gpa TEXT,
    description TEXT,
    achievements TEXT[],
    relevantCourses TEXT[]
);

INSERT INTO education (period, institution, major, degree, location, status, gpa, description, achievements, relevantCourses) VALUES
(
  '2023 - Sekarang',
  'Universitas Amikom Yogyakarta',
  'S1 - Informatika',
  'Sarjana Komputer',
  'Yogyakarta, Indonesia',
  'ongoing',
  NULL,
  'Fokus pada pengembangan web, mobile application, dan software engineering',
  ARRAY['Aktif dalam organisasi kampus','Mengikuti berbagai workshop teknologi','Berpartisipasi dalam hackathon'],
  ARRAY['Pemrograman Web','Basis Data','Algoritma dan Struktur Data','Rekayasa Perangkat Lunak','Mobile Programming','UI/UX Design']
),
(
  '2020 - 2023',
  'Madrasah Aliyah Negeri Paser',
  'MIPA',
  'Sekolah Menengah Atas',
  'Paser, Kalimantan Timur',
  'completed',
  NULL,
  'Jurusan Matematika dan Ilmu Pengetahuan Alam dengan fokus pada logika dan pemecahan masalah',
  ARRAY['Lulus dengan nilai memuaskan','Aktif dalam kegiatan ekstrakurikuler','Juara dalam kompetisi matematika tingkat kabupaten'],
  ARRAY['Matematika','Fisika','Kimia','Biologi','Bahasa Inggris','TIK']
),
(
  '2017 - 2020',
  'Madrasah Tsanawiyah Negeri 3 Paser',
  'Umum',
  'Sekolah Menengah Pertama',
  'Paser, Kalimantan Timur',
  'completed',
  NULL,
  'Pendidikan menengah pertama dengan kurikulum umum',
  ARRAY['Lulus dengan prestasi baik','Aktif dalam kegiatan sekolah','Mengembangkan minat di bidang teknologi'],
  ARRAY['Matematika','IPA','Bahasa Indonesia','Bahasa Inggris','TIK','Seni Budaya']
);

-- ===================================
-- Personal Table
-- ===================================
CREATE TABLE IF NOT EXISTS personal (
    id SERIAL PRIMARY KEY,
    name TEXT,
    title TEXT,
    tagline TEXT,
    location TEXT,
    bio TEXT,
    avatar TEXT,
    github TEXT
);

INSERT INTO personal (name, title, tagline, location, bio, avatar, github) VALUES
(
  'Agi Muhammad Tengku Aqamaddin',
  'Front-End Engineer',
  'CodeSeed: Growing Into Greatness',
  'Yogyakarta, Indonesia',
  'Saya adalah mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain antarmuka. Serta sedang menekuni dunia pengembangan web dan mobile application.',
  'https://avatars.githubusercontent.com/u/202240388?v=4',
  'ATengkuuu'
);
