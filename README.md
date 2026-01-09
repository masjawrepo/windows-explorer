# 📁 Windows Explorer – Web Application

A simple Windows Explorer–like web application.

This project demonstrates how to build a scalable folder tree structure with a clear separation between frontend and backend, using modern tools and best practices.

---

## 🧩 Features

* Folder tree displayed on the left panel (unlimited depth)
* Direct subfolders displayed on the right panel
* Expand / collapse folders like Windows Explorer
* Breadcrumb navigation
* REST API with versioning
* Monorepo structure (frontend + backend)
* Clean separation between service and repository layers

---

## 🏗️ Tech Stack

### Backend

* **Runtime:** Bun **v1.3.5**
* **Framework:** Elysia
* **Language:** TypeScript
* **Database:** MySQL
* **ORM:** Drizzle ORM
* **API Style:** REST API with versioning (`/api/v1`)
* **Architecture:** Service & Repository pattern (clean separation of concerns)

### Frontend

* **Framework:** Vue 3
* **API Style:** Composition API
* **Build Tool:** Vite
* **Runtime:** Bun **v1.3.5**
* **Styling:** Utility-first (minimal UI, focus on logic & behavior)

---

## 📂 Monorepo Structure

This project uses a **monorepo setup** to keep frontend and backend in a single repository while maintaining clear separation of responsibilities.

```bash
apps/
├── backend/        # REST API, database access, business logic
│   ├── src/
│   │   ├── db/     # Drizzle schema, migrations, seed
│   │   ├── modules/# Feature-based modules (service & repository)
│   │   ├── app.ts  # Elysia app instance
│   │   └── server.ts # HTTP server & routes
│   └── bun.lockb
│
├── frontend/       # Vue 3 application (UI & interaction)
│   ├── src/
│   │   ├── components/
│   │   ├── views/
│   │   └── main.ts
│   └── bun.lockb
```

---

## ⚙️ Requirements

This project was developed and tested using:

* **Bun** v1.3.5
* **MySQL** (or compatible)
* NodeJS is not required

---

## 🚀 Getting Started

### 1️⃣ Clone Repository

```bash
git clone https://github.com/masjawrepo/windows-explorer.git
cd windows-explorer
```

---

### 2️⃣ Backend Setup

```bash
cd apps/backend
bun install
```

#### Configure Database

Create a `.env` file in `apps/backend` directory:

```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=windows_explorer
DB_USER=root
DB_PASSWORD=your_password
```

> Make sure the database already exists before running migrations.

#### Generate Database Migrations

Generate migration files from Drizzle schema:

```bash
bun run db:generate
```

#### Run Database Migrations

Apply migrations to the database:

```bash
bun run db:migrate
```

#### Seed Sample Data

Insert sample folders and files into the database:

```bash
bun run db:seed
```


#### Run Backend

```bash
bun run dev
```

Backend will run at:

```
http://localhost:3000
```

---

### 3️⃣ Frontend Setup

```bash
cd apps/frontend
bun install
bun run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 🔌 API Endpoints

| Method | Endpoint                       | Description                                  |
| ------ | ------------------------------ | -------------------------------------------- |
| GET    | `/api/v1/folders/tree`         | Get full folder tree (recursive, all levels) |
| GET    | `/api/v1/folders/:id/children` | Get direct subfolders of a folder            |
| GET    | `/api/v1/folders/:id/path`     | Get breadcrumb path (from root to folder)    |

---

## 📌 Personal Note

> This is my first project using **Bun** and **Vue 3 Composition API** in a monorepo setup.
> I focused on writing clean, readable code and applying best practices wherever possible while keeping the solution simple and maintainable.

---

## 🙌 Thank You

Thank you for reviewing this project.
Feedback and suggestions are always welcome.
