const cors = require("cors");
const express = require("express");

const questionsController = require("./controllers/questionsController.js");
const answersController = require("./controllers/answersController");
const app = express();

app.use(cors());
app.use(express.json());



app.use("/Questions", questionsController)
app.use("/answers", answersController);
//ROUTES
app.get("/", (req, res) => {
    res.send('Welcome to raise');
});

app.get("*", (req, res) => {
    res.send("You may be searching for a route that doesn't exist 🚏")
})


module.exports = app;