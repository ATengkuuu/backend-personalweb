# Portfolio Backend API

Backend API untuk portfolio Agi Muhammad Tengku Aqamaddin menggunakan Node.js, Express, dan PostgreSQL.

## 🚀 Fitur

- REST API untuk portfolio data
- PostgreSQL database dengan Neon
- CORS support untuk frontend
- Contact form endpoint
- Health check endpoint
- CRUD operations untuk projects
- Deploy ke Vercel

## 📋 Endpoints

### Health Check
- `GET /api/health` - Status API

### Users
- `GET /api/users` - Get semua users
- `GET /api/users/:id` - Get user by ID

### Projects
- `GET /api/projects` - Get semua projects
- `GET /api/projects/:id` - Get project by ID
- `POST /api/projects` - Create project baru
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Skills
- `GET /api/skills` - Get semua skills

### Education
- `GET /api/education` - Get education history

### Contact
- `POST /api/contact` - Submit contact form

## 🛠️ Setup Local Development

### 1. Clone Repository
```bash
git clone <repository-url>
cd interactive-backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Buat file `.env` di root directory:

```env
# Database Configuration
DATABASE_URL=postgresql://username:password@host:port/database_name?sslmode=require

# Environment
NODE_ENV=development

# Server Configuration
PORT=5000

# CORS Configuration (untuk production)
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

### 4. Setup Neon PostgreSQL Database

1. **Buat akun di Neon** (https://neon.tech)
2. **Buat project baru** di dashboard Neon
3. **Copy connection string** dari dashboard Neon
4. **Update DATABASE_URL** di file `.env`

### 5. Setup Database Tables
```bash
# Jalankan server
npm run dev

# Setup database (development only)
curl -X POST http://localhost:5000/api/setup-database
```

### 6. Test API
```bash
# Health check
curl http://localhost:5000/api/health

# Get projects
curl http://localhost:5000/api/projects

# Get skills
curl http://localhost:5000/api/skills
```

## 🚀 Deployment ke Vercel

### 1. Install Vercel CLI
```bash
npm i -g vercel
```

### 2. Login ke Vercel
```bash
vercel login
```

### 3. Setup Environment Variables di Vercel
```bash
vercel env add DATABASE_URL
vercel env add NODE_ENV
vercel env add FRONTEND_URL
```

### 4. Deploy
```bash
vercel --prod
```

### 5. Setup Database di Production
Setelah deploy, setup database:
```bash
curl -X POST https://your-backend-domain.vercel.app/api/setup-database
```

## 🔧 Konfigurasi CORS

Update domain frontend di `api/index.js`:

```javascript
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-frontend-domain.vercel.app'] // Ganti dengan domain frontend Anda
    : ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}));
```

## 📱 Contoh Penggunaan dari Frontend

### Fetch Projects
```javascript
const fetchProjects = async () => {
  try {
    const response = await fetch('https://your-backend-domain.vercel.app/api/projects');
    const data = await response.json();
    
    if (data.success) {
      console.log('Projects:', data.data);
    }
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
};
```

### Submit Contact Form
```javascript
const submitContact = async (formData) => {
  try {
    const response = await fetch('https://your-backend-domain.vercel.app/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    const data = await response.json();
    
    if (data.success) {
      console.log('Message sent successfully!');
    }
  } catch (error) {
    console.error('Error sending message:', error);
  }
};
```

## 🔒 Security Best Practices

1. **Environment Variables**: Jangan commit file `.env` ke repository
2. **CORS**: Konfigurasi CORS dengan domain yang spesifik
3. **Input Validation**: Validasi semua input dari user
4. **Error Handling**: Handle error dengan proper error messages
5. **Database Security**: Gunakan connection pooling dan prepared statements

## 📊 Database Schema

### Users Table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  bio TEXT,
  avatar_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Projects Table
```sql
CREATE TABLE projects (
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
```

### Skills Table
```sql
CREATE TABLE skills (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  level VARCHAR(50) NOT NULL,
  category VARCHAR(50),
  icon_url VARCHAR(255),
  experience VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Education Table
```sql
CREATE TABLE education (
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
```

## 🐛 Troubleshooting

### Database Connection Error
- Pastikan `DATABASE_URL` sudah benar
- Cek apakah database Neon sudah aktif
- Pastikan SSL mode sudah dikonfigurasi

### CORS Error
- Update domain frontend di konfigurasi CORS
- Pastikan protocol (http/https) sudah benar

### Vercel Deployment Error
- Cek environment variables di Vercel dashboard
- Pastikan `vercel.json` sudah benar
- Cek build logs di Vercel

## 📝 License

MIT License - Agi Muhammad Tengku Aqamaddin
