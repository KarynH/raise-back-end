const questions = require("../controllers/questionsController");
const db = require("../db/dbConfig.js");

const getAllQuestions = async () => {
  try {
    const allQuestions = await db.any("SELECT *  FROM questions");
    return allQuestions;
  } catch (error) {
    return error;
  }
};

const getOneQuestion = async (id) => {
  try {
    const oneQuestion = await db.oneOrNone("SELECT * FROM questions WHERE id=$1", id);
    return oneQuestion;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllQuestions, getOneQuestion };
