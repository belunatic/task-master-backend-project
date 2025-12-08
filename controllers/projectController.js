const Project = require("../models/Project");

const getAllProjectByUserId = async (req, res) => {
	// This currently finds all projects in the database.
	// It should only find projects owned by the logged in user.
	try {
		const projects = await Project.find({ user: req.user._id });
		res.json(projects);
	} catch (err) {
		res.status(500).json(err);
	}
};

const getProjectById = async (req, res) => {
	// This currently finds a projects in the database with an ID.
	// the owner is only one with permission to view it.
	try {
		// This needs an authorization check
		//get to be update project
		const project = await Project.findById(req.params.id);
		if (!project) {
			return res.status(400).json({ message: "Invalid ID" });
		}
		// check if the user field on that project matches the authenticated user’s _id.
		if (project.user.toString() !== req.user._id) {
			return res
				.status(403)
				.json({ message: "Not Authorize to view this project" });
		}

		res.json(project);
	} catch (err) {
		res.status(500).json(err);
	}
};

const createProject = async (req, res) => {
	try {
		const project = await Project.create({
			...req.body,
			// The user ID needs to be added here
			user: req.user._id,
		});
		res.status(201).json(project);
	} catch (err) {
		res.status(400).json(err);
	}
};

const updateProject = async (req, res) => {
	try {
		// This needs an authorization check
		//get to be update project
		const getUpdateProject = await Project.findById(req.params.id);
		if (!getUpdateProject) {
			return res.status(400).json({ message: "Invalid ID" });
		}
		// check if the user field on that project matches the authenticated user’s _id.
		if (getUpdateProject.user.toString() !== req.user._id) {
			return res
				.status(403)
				.json({ message: "Not Authorize to update this project" });
		}

		const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!project) {
			return res
				.status(404)
				.json({ message: "No project found with this id!" });
		}
		res.json(project);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

const deleteProject = async (req, res) => {
	try {
		// This needs an authorization check
		//get to be update project
		const getDeleteProject = await Project.findById(req.params.id);
		if (!getDeleteProject) {
			return res.status(400).json({ message: "Invalid ID" });
		}
		// check if the user field on that project matches the authenticated user’s _id.
		if (getDeleteProject.user.toString() !== req.user._id) {
			return res
				.status(403)
				.json({ message: "Not Authorize to delete this project" });
		}
		const project = await Project.findByIdAndDelete(req.params.id);
		if (!project) {
			return res
				.status(404)
				.json({ message: "No project found with this id!" });
		}
		res.json({ message: "project deleted!" });
	} catch (err) {
		res.status(500).json(err);
	}
};

module.exports = {
	getAllProjectByUserId,
	getProjectById,
	createProject,
	updateProject,
	deleteProject,
};
