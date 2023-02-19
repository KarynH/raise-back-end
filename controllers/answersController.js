const express = require("express");
const answers = express.Router({ mergeParams: true });

const { getAllAnswers, getAnswer, deleteAnswer, newAnswer } = require("../queries/answers");

answers.get("/", async (req, res) => {
  const { id } = req.params;
  const all_answers = await getAllAnswers(id);
  if (all_answers[0]) {
    res.status(200).json(all_answers);
  }else if(id) {
    res.status(200).json( {id})
  }else {
    res.status(200).json({ error: "server errorr" });
  }
});



answers.get("/:question_id", async (req, res) => {
  const { id, question_id } = req.params; 
  const showAnswer = await getAnswer(id, question_id);
  if (showAnswer) {
    res.json(showAnswer);
  } else {
    res.status(404).json({ error: "not found" });
  }
});
answers.post("/", async (req, res) => {
  const newA = await newAnswer(req.body);
  res.status(200).json(newA);
});

// DELETE
answers.delete("/:answer_id", async (req, res) => {
  const { id, answer_id } = req.params;

  const deleteOneAnswer = await deleteAnswer(id, answer_id);
  if (deleteOneAnswer.id) {
    res.status(200).json(deleteOneAnswer);
  } else {
    res.status(404).json({ error: "Review not found" });
  }
});

module.exports = answers;

