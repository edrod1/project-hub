const express = require("express");
const router = express.Router();
const Project = require("../models/Project")

router.get("/", async (req, res) => {
    try {
        const getProjects = await Project.find()
        res.json(getProjects)
    } catch (err) {
        res.json({ message: err })
    }
})
router.get("/:id", async (req, res) => {
    try {
        const oneProject = await Project.findById({ _id: req.params.id })
        res.json(oneProject)
    } catch (err) {
        res.json({ message: err })
    }
})
router.post("/", async (req, res) => {
    const createdProject = new Project({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        github: req.body.github
    })
    try {
        const savedProject = await createdProject.save()
        res.json(savedProject)
    } catch (err) {
        res.json({ message: err })
    }

})
router.delete("/:id", async (req, res) => {
    try {
        const deleteProject = await Project.findByIdAndDelete({ _id: req.params.id })
        res.json(deleteProject)
    } catch (err) {
        res.json({ message: err })
    }
})
router.patch("/:id", async (req, res) => {
    try {
        const updateProject = await Project.updateOne({ _id: req.params.id }, { $set: req.body })
        res.json(updateProject)
    } catch (err) {
        res.json({ message: err })
    }
})


module.exports = router