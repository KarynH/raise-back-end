// const answers = require("../controllers/answersController");
const db = require("../db/dbConfig.js");

const getAllAnswers = async (questionId) => {
  try {
    const question = await db.one("SELECT * FROM questions WHERE id=$1", questionId);
    const allAnswers = await db.any(
      // "SELECT * FROM answers WHERE question_id=$1",
      "SELECT * FROM answers WHERE question_id=$1 ", [questionId]
    )
    return {allAnswers, question};
  } catch (error) {
    return error;
  }
};

const getAnswer = async (questionId, id) => {
  try {
    const oneAnswer = await db.one(
      "SELECT * FROM answers WHERE id=$1 AND question_id=$2",
      [questionId, id]
    );
    return oneAnswer;
  } catch (error) {
    return error;
  }
};

const newAnswer = async (answer) => {
  try {
    const newAnswer = await db.one(
      "INSERT INTO answers (question_id, response, todays_date, provider_type) VALUES($1, $2, $3, $4, $5) WHERE question_id=$6 RETURNING *",
      [
        answer.question_id,
        answer.response,
        answer.todays_date,
       answer.provider_type,
       
      ]
    );
    return newAnswer;
  } catch (error) {
    return error;
  }
};

const deleteAnswer= async (questionId, id) => {
  try {
    const deletedAnswer= await db.one(
      "DELETE FROM answers WHERE id=$1 AND question_id=$2 RETURNING *",
      [questionId, id]
    );
    return deletedAnswer;
  } catch (error) {
    return error;
  }
};



module.exports = { getAllAnswers, getAnswer, deleteAnswer, newAnswer };
