// const answers = require("../controllers/answersController");
const db = require("../db/dbConfig.js");

const getAllAnswers = async (questionId) => {
  try {
    const allAnswers = await db.any(
      // "SELECT * FROM answers WHERE question_id=$1",
      "SELECT answers.todays_date,answers.response,answers.provider_type,answers.id,answers.question_id,questions.child_age,questions.body FROM answers JOIN questions ON answers.question_id=questions.id WHERE questions.id=$1",
      [questionId]
    );
    return allAnswers;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllAnswers };
