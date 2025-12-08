const router = require("express").Router();
const { authMiddleware } = require("../middleware/auth");
const {
	getAllProjectByUserId,
	getProjectById,
	createProject,
	updateProject,
	deleteProject,
} = require("../controllers/projectController");

// Apply authMiddleware to all routes in this file
router.use(authMiddleware);

// GET /api/projects - Get all projects for the logged-in user
// THIS IS THE ROUTE THAT CURRENTLY HAS THE FLAW
router.get("/", getAllProjectByUserId);

// GET /api/projects/:id - Get a projects
// THIS IS THE ROUTE THAT CURRENTLY HAS THE FLAW
router.get("/:id", getProjectById);

// POST /api/projects - Create a new project
router.post("/", createProject);

// PUT /api/projects/:id - Update a project
router.put("/:id", updateProject);

// DELETE /api/projects/:id - Delete a project
router.delete("/:id", deleteProject);

module.exports = router;
