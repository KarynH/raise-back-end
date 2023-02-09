const express = require("express");
const answers = express.Router({mergeParams: true});

const {getAllAnswers} = require("../queries/answers")

answers.get("/", async (req, res) => {
    const { id } = req.params; 
    const allAnswers = await getAllAnswers(id);
    if (allAnswers[0]) {
      res.status(200).json(allAnswers);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });

module.exports = answers;