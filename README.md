### 📁 Windows Explorer – Web Application

A simple Windows Explorer–like web application built as part of a technical assessment.

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

> **Note:**
> File support is intentionally kept minimal. The main focus of this project is folder hierarchy, data structure, and interaction between panels.

---

## 🏗️ Tech Stack

### Backend

* **Runtime:** Bun
* **Framework:** Elysia
* **Language:** TypeScript
* **Database:** MySQL
* **ORM:** Drizzle ORM
* **Architecture:** Service & Repository pattern

### Frontend

* **Framework:** Vue 3
* **API Style:** Composition API
* **Build Tool:** Vite
* **Runtime:** Bun
* **Styling:** Utility-first (minimal UI, focus on logic)

---

## 📂 Monorepo Structure

```bash
apps/
├── backend/
│   ├── src/
│   │   ├── db/
│   │   ├── modules/
│   │   ├── app.ts
│   │   └── server.ts
│   └── bun.lockb
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── views/
│   │   └── main.ts
│   └── bun.lockb
```

---

## ⚙️ Requirements

* **Bun** v1.x
* **MySQL** (or compatible)
* NodeJS is not required

---

## 🚀 Getting Started

### 1️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd windows-explorer
```

---

### 2️⃣ Backend Setup

```bash
cd apps/backend
bun install
```

#### Configure Database

Update your database connection in:

```ts
src/db/index.ts
```

#### Run Backend

```bash
bun run src/server.ts
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

| Method | Endpoint                       | Description           |
| ------ | ------------------------------ | --------------------- |
| GET    | `/api/v1/folders/tree`         | Get full folder tree  |
| GET    | `/api/v1/folders/:id/children` | Get direct subfolders |
| GET    | `/api/v1/folders/:id/path`     | Get breadcrumb path   |

---

## 📌 Personal Note

> This is my first project using **Bun** and **Vue 3 Composition API** in a monorepo setup.
> I focused on writing clean, readable code and applying best practices wherever possible while keeping the solution simple and maintainable.

---

## 🙌 Thank You

Thank you for reviewing this project.
Feedback and suggestions are always welcome.
