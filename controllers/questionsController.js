const express = require("express");
const questions = express.Router();

const answersController = require("./answersController");
questions.use("/:id/answers", answersController);

const {
  getAllQuestions,
  getOneQuestion,
  createAquestion,
  updateAquestion,
  deleteAquestion,
} = require("../queries/questions");

const {  checkName, checkQuestionBody } = require("../validations/checkQuestions.js");


questions.get("/", async (req, res) => {
  const all_questions = await getAllQuestions();
  if (all_questions[0]) {
    res.status(200).json(all_questions);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

questions.get("/:question_id", async (req, res) => {
  const { question_id } = req.params;
  const one_question = await getOneQuestion(question_id);
  if (one_question) {
    res.status(200).json(one_question);
  } else {
    res
      .status(404)
      .json({ error: `bad request for question of id: ${question_id}` });
  }
});

questions.post("/", checkQuestionBody, checkName, async (req, res) => {
  try {
    const ask_a_question = await createAquestion(req.body);
    res.json(ask_a_question);
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
});

questions.put("/:question_id", checkQuestionBody, checkName ,async (req, res) => {
  const { question_id } = req.params;
  try {
    const update_question = await updateAquestion(question_id, req.body);
    res.status(200).json(update_question);
  } catch (error) {
    res.status(404).json({ error: "error updating this question" });
  }
});

questions.delete("/:question_id", async (req, res) => {
  const { question_id } = req.params;
  const deleted_question = await deleteAquestion(question_id);
  if (deleted_question.question_id) {
    res.status(200).json(deleted_question);
  } else {
    res.status(404).json({ error: "question not found" });
  }
});

module.exports = questions;
