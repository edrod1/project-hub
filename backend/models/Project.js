const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    github: {
        type: String
    }
});

module.exports = mongoose.model("Project", ProjectSchema)