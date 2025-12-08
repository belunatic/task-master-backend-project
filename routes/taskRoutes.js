const router = require("express").Router();
const {
	getAllTaskByProjectId,
	createTask,
	updateTask,
	deleteTask,
} = require("../controllers/taskController");
const { authMiddleware } = require("../middleware/auth");

// Apply authMiddleware to all routes in this file
router.use(authMiddleware);

// GET /:projectId/tasks- Get all task for the given project ID
router.get("/projects/:projectId/tasks", getAllTaskByProjectId);

// POST /:projectId/tasks - Create a new task
router.post("/projects/:projectId/tasks", createTask);

// PUT /api/tasks/:taskId - Update a task
router.put("/tasks/:taskId", updateTask);

// DELETE /api/projects/:id - Delete a task
router.delete("/tasks/:taskId", deleteTask);

module.exports = router;
