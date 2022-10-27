const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("GET all projects is working")
})
router.get("/", (req, res) => {
    res.send("GET a project is working")
})
router.post("/", (req, res) => {
    res.send("POSt a project is working")
})
router.delete("/", (req, res) => {
    res.send("DELETE a project is working")
})
router.patch("/", (req, res) => {
    res.send("UPDATE a project is working")
})


module.exports = router