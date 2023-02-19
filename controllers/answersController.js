const express = require("express");
const answers = express.Router({ mergeParams: true });

const { getAllAnswers } = require("../queries/answers");

answers.get("/", async (req, res) => {
  const { id } = req.params;
  const {body, name, todays_date, child_age} = req.body;
  const all_answers = await getAllAnswers(id);
  if (all_answers[0]) {
    res.status(200).json(all_answers);
  }else if(id) {
    res.status(200).json({body, name, todays_date, child_age})
  }else {
    res.status(200).json({ error: "server errorr" });
  }
});

module.exports = answers;
