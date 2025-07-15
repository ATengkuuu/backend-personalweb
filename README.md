# 🚀 Portfolio Backend API

> Modern RESTful API built with **Express.js**, connected to **Neon PostgreSQL**, and deployed serverlessly on **Vercel**.  
> Used for powering [personal-profile.atengku.my.id](https://personal-profile.atengku.my.id).

![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg)
![Express](https://img.shields.io/badge/Express-5.x-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-brightgreen)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow)

---

## 🌍 **Live API**
| Environment | URL |
|-------------|-----|
| Production  | [`https://backend-personalweb.vercel.app`](https://backend-personalweb.vercel.app) |

---

## ✨ **Features**
- RESTful API with Express
- Connected to serverless Neon PostgreSQL
- Deployed on Vercel (serverless)
- CRUD for projects
- Static & dynamic endpoints (skills, education, contact form, etc)
- CORS with whitelist for local & production
- Well-structured modular code
- Health check & clean error handling

---

## 📂 **Project Structure**
```bash
api/
  ├── index.js              # Serverless function entry point
  └── server.js             # Express app
config/
  ├── database.js       # Database connection
  └── setup-database.js # Create tables & seed initial data
data.js               # Static data (personal info, config, etc.)
vercel.json
package.json
.env.example
README.md
```
---

## 📦 **Endpoints**
✅ Health & Info
| Method | Endpoint      | Description                   |
| ------ | ------------- | ----------------------------- |
| GET    | `/api/health` | API health check              |
| GET    | `/`           | Welcome page + list of routes |

📝 Personal & Site Info
| Method | Endpoint             | Description               |
| ------ | -------------------- | ------------------------- |
| GET    | `/api/personal-info` | Get static personal info  |
| GET    | `/api/site-config`   | Get site config           |
| GET    | `/api/experience`    | Get experience data       |
| GET    | `/api/certificates`  | Get certificates          |
| GET    | `/api/blog-posts`    | Get blog posts            |
| GET    | `/api/personal`      | Get personal info from DB |

🛠 Skills & Education
| Method | Endpoint         | Description            |
| ------ | ---------------- | ---------------------- |
| GET    | `/api/skills`    | List skills from DB    |
| GET    | `/api/education` | List education history |

📦 Projects (CRUD)
| Method | Endpoint            | Description                 |
| ------ | ------------------- | --------------------------- |
| GET    | `/api/projects`     | List all projects           |
| GET    | `/api/projects/:id` | Get detail of project by ID |
| POST   | `/api/projects`     | Create new project          |
| PUT    | `/api/projects/:id` | Update project by ID        |
| DELETE | `/api/projects/:id` | Delete project by ID        |

✉️ Contact
| Method | Endpoint       | Description         |
| ------ | -------------- | ------------------- |
| POST   | `/api/contact` | Submit contact form |

---

## ⚙️ **Tech Stack**
- Node.js 20x
- Express.js 5.x
- PostgreSQL (Neon serverless)
- Vercel (deployment)
- dotenv (config management)
- CORS

---

## 🤝 **Contributing**
Pull requests are welcome! For major changes, please open an issue first to discuss.

## 📄 **License**
MIT © 2025 Agi Muhammad Tengku Aqamaddin

## 🌐 **Author**
- GitHub: ATengkuuu
- Portfolio: personal-profile.atengku.my.id