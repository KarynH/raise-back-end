const express = require("express");
const questions = express.Router();

const {
getAllQuestions
} = require("../queries/questions")


// INDEX
questions.get("/", async (req, res) => {
    const all_questions = await getAllQuestions();
    if (all_questions[0]) {
      res.status(200).json(all_questions);
    } else {
      res.status(500).json({ error: "server error" });
    }

  });



module.exports = questions;