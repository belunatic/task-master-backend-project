# Task Management Backend

## Overview

This is the **backend API** for the Task Management System.  
It provides secure endpoints for user authentication, project management, and task management, built with **Node.js**, **Express**, **passport**, and **Mongoose**.

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT, Passport (GitHub OAuth)
- **Middleware:** Custom `authMiddleware`, `adminOnly`

## 🚀 Getting Started

1. Clone the repository:
   `git clone https://github.com/belunatic/task-master-backend-project`

2. `npm install`
3. Set up environment variables in .env

```
    FRONTEND_URL = http://localhost:5173
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    GITHUB_CLIENT_ID=your_client_id
    GITHUB_CLIENT_SECRET=your_client_secret
    GITHUB_CALLBACK_URL = github_callback

```

4. Run the server `npm run dev`

## Frontend Repo

[Task Master Frontend Repo Link](https://github.com/belunatic/task-master-frontend-project)

### Routes (routes folder)

- routes/userRoutes.js

  - POST /auth/register — Register a new user and send email verification
  - POST /auth/login — Authenticate and return access (and optional refresh) token
  - routes/taskRoute.js

- routes/taskRoutes.js

  - GET /projects/:projectId/tasks — List tasks (protected).
  - POST /projects/:projectId/tasks — Create a new task (protected).
  - PUT /tasks/:taskId — Replace/update a task (protected).
  - DELETE /projects/:projectId/members/:userId — Remove a member from a project (protected)

- routes/projectRoutes.js
  - GET /projects — List projects by the login user (protected).
  - POST /projects — Create a new project (protected).
  - GET /projects/:id — Get project details by ID (protected)
  - PUT /projects/:id — Update a project (protected)
  - DELETE /projects/:id — Delete a project (protected)
  - DELETE /projects/:id/members/:userId — Remove a member from a project (protected)
  - GET /projects/:id/tasks — List tasks for a project (protected) — can delegate to /tasks with projectId filter

## Dependencies

- Express
- MongoDB/Mongoose
- Dotenv
- Morgan
- Cors
- jwtwebtoken
- bcrypt

## Dev Dependencies

- Nodemon
