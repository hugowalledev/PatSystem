# PatSystem — Patient Management App

![Node.js](https://img.shields.io/badge/Node.js-22-green?logo=node.js)
![Express](https://img.shields.io/badge/Express-5-black?logo=express)
![Vue](https://img.shields.io/badge/Vue-3.5-brightgreen?logo=vue.js)
![SQLite](https://img.shields.io/badge/SQLite-3-blue?logo=sqlite)

Fullstack CRUD application for managing patient records, built to explore a **Node.js/Express + Vue 3** stack in a healthcare context.

---

## Features

- List, create, update and delete patients
- View patient details
- Client-side routing (Vue Router)
- Centralized error handling (custom `ApiError` class)
- REST API with layered backend architecture

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Backend | Node.js, Express 5, SQLite3, CORS |
| Frontend | Vue 3.5, Vue Router, Vite |
| Architecture | Controller / Service / Repository |

---

## Architecture

```
backend/src/
├── controllers/   # HTTP request handling
├── services/      # Business logic
├── repositories/  # Database queries (SQLite)
├── routes/        # API route definitions
├── middlewares/   # Error handler, 404
└── utils/         # ApiError class

frontend/src/
├── views/         # PatientListView, PatientCreateView, PatientEditView
├── components/    # PatientList, PatientForm
├── api/           # PatientApi (fetch wrapper)
└── router/        # Vue Router config
```

---

## Installation

**Prerequisites:** Node.js 18+

### Backend

```bash
cd backend
npm install
npm run dev     # starts on http://localhost:3000
```

### Frontend

```bash
cd frontend
npm install
npm run dev     # starts on http://localhost:5173
```

---

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/patients` | List all patients |
| GET | `/patients/:id` | Get patient by ID |
| POST | `/patients` | Create a patient |
| PUT | `/patients/:id` | Update a patient |
| DELETE | `/patients/:id` | Delete a patient |

---

## Author

**Hugo Walle** — [github.com/hugowalledev](https://github.com/hugowalledev)
