const express = require("express");
const questions = express.Router();

const {
getAllQuestions, getOneQuestion, createAQuestion
} = require("../queries/questions")


const {checkBody} = require("../validations/checkQuestions.js")
// INDEX
questions.get("/", async (req, res) => {
    const all_questions = await getAllQuestions();
    if (all_questions[0]) {
      res.status(200).json(all_questions);
    } else {
      res.status(500).json({ error: "server error" });
    }

  });

questions.get("/:question_id", async (req, res) => {
    const {question_id} = req.params;
    const one_question = await getOneQuestion(question_id);
    if(one_question) {
        res.status(200).json(one_question);
    }else {
        res.status(404).json({error: `bad request for ${question_id}` })
    }
})

questions.post("/", async (req, res) => {
  try {
    const ask_a_question = await createAQuestion(req.body);
    res.json(ask_a_question);
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
});

module.exports = questions;