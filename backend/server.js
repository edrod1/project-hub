const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const routes = require("./routes/projects")
const app = express();


//middleware
app.use(express.json())

//route
app.use("/projects", routes)

//DB
mongoose.connect(process.env.DB_URL, () => {
    console.log("Connected to database")
})

//Listener
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
