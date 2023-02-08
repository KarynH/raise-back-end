const cors = require("cors");
const express = require("express");

const questionsController = require("./controllers/questionsController.js")
const app = express();

app.use(cors());
app.use(express.json());



app.use("/Questions", questionsController)
//ROUTES
app.get("/", (req, res) => {
    res.send('Welcome to raise');
});



module.exports = app;