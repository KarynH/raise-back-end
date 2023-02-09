const express = require("express");
const answers = express.Router({ mergeParams: true });

const { getAllAnswers } = require("../queries/answers");

answers.get("/", async (req, res) => {
  const { id } = req.params;
  const all_answers = await getAllAnswers(id);
  if (all_answers[0]) {
    res.status(200).json(all_answers);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

module.exports = answers;
