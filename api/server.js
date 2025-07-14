const express = require('express');
const cors = require('cors');
const pool = require('../config/database');
const {
  getPersonalInfo,
  getSiteConfig,
  getExperience,
  getCertificates,
  getBlogPosts
} = require('../data');
const { setupDatabase, insertInitialData } = require('../config/setup-database');

const app = express();

// Allowed origins (frontend dev & prod)
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:3000',
  'http://localhost:5173'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==================================
// ✅ HEALTH CHECK
// ==================================
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: '🚀 Portfolio Backend API is running!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// ==================================
// ✅ PERSONAL INFO & SITE CONFIG
// ==================================
app.get('/api/personal-info', (req, res) => res.json(getPersonalInfo()));
app.get('/api/site-config', (req, res) => res.json(getSiteConfig()));
app.get('/api/experience', (req, res) => res.json(getExperience()));
app.get('/api/certificates', (req, res) => res.json(getCertificates()));
app.get('/api/blog-posts', (req, res) => res.json(getBlogPosts()));

// ==================================
// ✅ SKILLS
// ==================================
app.get('/api/skills', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM skills ORDER BY name ASC');
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// ==================================
// ✅ EDUCATION
// ==================================
app.get('/api/education', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM education ORDER BY created_at DESC');
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error fetching education:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// ==================================
// ✅ PROJECTS (CRUD)
// ==================================
// List projects
app.get('/api/projects', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projects ORDER BY created_at DESC');
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Detail project by id
app.get('/api/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM projects WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Create project
app.post('/api/projects', async (req, res) => {
  try {
    const { title, description, image_url, tech_stack, github_url, live_url, status } = req.body;
    if (!title || !description) {
      return res.status(400).json({ success: false, message: 'Title and description are required' });
    }
    const result = await pool.query(
      'INSERT INTO projects (title, description, image_url, tech_stack, github_url, live_url, status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [title, description, image_url, tech_stack, github_url, live_url, status || 'completed']
    );
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Update project
app.put('/api/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image_url, tech_stack, github_url, live_url, status } = req.body;
    const result = await pool.query(
      'UPDATE projects SET title = COALESCE($1, title), description = COALESCE($2, description), image_url = COALESCE($3, image_url), tech_stack = COALESCE($4, tech_stack), github_url = COALESCE($5, github_url), live_url = COALESCE($6, live_url), status = COALESCE($7, status), updated_at = CURRENT_TIMESTAMP WHERE id = $8 RETURNING *',
      [title, description, image_url, tech_stack, github_url, live_url, status, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Delete project
app.delete('/api/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM projects WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.json({ success: true, message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Personal
app.get('/api/personal', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM personal LIMIT 1');
    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error fetching personal info:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// ==================================
// ✅ CONTACT FORM
// ==================================
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email format' });
    }
    console.log('📧 New contact message:', { name, email, subject, message, timestamp: new Date().toISOString() });
    res.json({ success: true, message: 'Message received successfully!' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// ==================================
// ✅ DEV ONLY: setup database
// ==================================
if (process.env.NODE_ENV !== 'production') {
  app.post('/api/setup-database', async (req, res) => {
    try {
      await setupDatabase();
      await insertInitialData();
      res.json({ success: true, message: 'Database setup completed successfully!' });
    } catch (error) {
      console.error('Error setting up database:', error);
      res.status(500).json({ success: false, message: 'Error setting up database' });
    }
  });
}

// ==================================
// ✅ 404 & Error Handler
// ==================================
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error('❌ Server Error:', err.stack);
  res.status(500).json({ success: false, message: 'Something went wrong!' });
});

module.exports = app;
