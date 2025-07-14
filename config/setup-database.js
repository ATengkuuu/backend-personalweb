const pool = require('./database');

// SQL untuk membuat tabel users
const createUsersTable = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    bio TEXT,
    avatar_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

// SQL untuk membuat tabel projects
const createProjectsTable = `
  CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    tech_stack TEXT[],
    github_url VARCHAR(255),
    live_url VARCHAR(255),
    status VARCHAR(50) DEFAULT 'completed',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

// SQL untuk membuat tabel skills
const createSkillsTable = `
  CREATE TABLE IF NOT EXISTS skills (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    level VARCHAR(50) NOT NULL,
    category VARCHAR(50),
    icon_url VARCHAR(255),
    experience VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

// SQL untuk membuat tabel education
const createEducationTable = `
  CREATE TABLE IF NOT EXISTS education (
    id SERIAL PRIMARY KEY,
    institution VARCHAR(200) NOT NULL,
    major VARCHAR(200),
    degree VARCHAR(100),
    period VARCHAR(100),
    location VARCHAR(200),
    description TEXT,
    status VARCHAR(50) DEFAULT 'completed',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

// Function untuk setup database
async function setupDatabase() {
  try {
    console.log('🔄 Setting up database tables...');
    
    // Buat tabel-tabel
    await pool.query(createUsersTable);
    console.log('✅ Users table created');
    
    await pool.query(createProjectsTable);
    console.log('✅ Projects table created');
    
    await pool.query(createSkillsTable);
    console.log('✅ Skills table created');
    
    await pool.query(createEducationTable);
    console.log('✅ Education table created');
    
    console.log('🎉 Database setup completed successfully!');
  } catch (error) {
    console.error('❌ Error setting up database:', error);
    throw error;
  }
}

// Function untuk insert data awal
async function insertInitialData() {
  try {
    console.log('🔄 Inserting initial data...');
    
    // Insert user data
    const userData = {
      name: 'Agi Muhammad Tengku Aqamaddin',
      email: 'tengkuagi@gmail.com',
      bio: 'Saya adalah mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain antarmuka.',
      avatar_url: 'https://avatars.githubusercontent.com/u/202240388?v=4'
    };
    
    await pool.query(
      'INSERT INTO users (name, email, bio, avatar_url) VALUES ($1, $2, $3, $4) ON CONFLICT (email) DO NOTHING',
      [userData.name, userData.email, userData.bio, userData.avatar_url]
    );
    
    // Insert sample projects
    const projects = [
      {
        title: 'Aplikasi Mental Health Sobat',
        description: 'Platform kesehatan mental yang membantu pengguna untuk konsultasi dengan psikolog.',
        image_url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
        tech_stack: ['React Native', 'Firebase', 'Node.js'],
        status: 'coming-soon'
      },
      {
        title: 'Website Barbershop CutsProject',
        description: 'Website modern untuk barbershop dengan sistem booking online.',
        image_url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&h=300&fit=crop',
        tech_stack: ['Vue.js', 'Express.js', 'PostgreSQL'],
        status: 'on-progress'
      }
    ];
    
    for (const project of projects) {
      await pool.query(
        'INSERT INTO projects (title, description, image_url, tech_stack, status) VALUES ($1, $2, $3, $4, $5)',
        [project.title, project.description, project.image_url, project.tech_stack, project.status]
      );
    }
    
    // Insert sample skills
    const skills = [
      { name: 'Vue.js', level: 'Mahir', category: 'Frontend', experience: '2+ years' },
      { name: 'JavaScript', level: 'Mahir', category: 'Programming Language', experience: '3+ years' },
      { name: 'TypeScript', level: 'Menengah', category: 'Programming Language', experience: '1+ years' },
      { name: 'React', level: 'Menengah', category: 'Frontend', experience: '1+ years' },
      { name: 'Node.js', level: 'Menengah', category: 'Backend', experience: '1+ years' }
    ];
    
    for (const skill of skills) {
      await pool.query(
        'INSERT INTO skills (name, level, category, experience) VALUES ($1, $2, $3, $4)',
        [skill.name, skill.level, skill.category, skill.experience]
      );
    }
    
    // Insert sample education
    const education = [
      {
        institution: 'Universitas Amikom Yogyakarta',
        major: 'S1 - Informatika',
        degree: 'Sarjana Komputer',
        period: '2023 - Sekarang',
        location: 'Yogyakarta, Indonesia',
        status: 'ongoing'
      },
      {
        institution: 'Madrasah Aliyah Negeri Paser',
        major: 'MIPA',
        degree: 'Sekolah Menengah Atas',
        period: '2020 - 2023',
        location: 'Paser, Kalimantan Timur',
        status: 'completed'
      }
    ];
    
    for (const edu of education) {
      await pool.query(
        'INSERT INTO education (institution, major, degree, period, location, status) VALUES ($1, $2, $3, $4, $5, $6)',
        [edu.institution, edu.major, edu.degree, edu.period, edu.location, edu.status]
      );
    }
    
    console.log('✅ Initial data inserted successfully!');
  } catch (error) {
    console.error('❌ Error inserting initial data:', error);
    throw error;
  }
}

module.exports = { setupDatabase, insertInitialData }; 