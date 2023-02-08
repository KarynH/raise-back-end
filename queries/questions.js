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


const createAQuestion = async (question) => {
  try {
    const askAQuestion = await db.one("INSERT INTO QUESTIONS (body, name, todays_date, topic, child_age) VALUES ($1, $2, $3, $4, $5) RETURNING *", 
    [question.body, question.name, question.todays_date, question.topic, question.child_age ])
    return askAQuestion;
  }catch (error) {
    return error;
  }
 }
module.exports = { getAllQuestions, getOneQuestion, createAQuestion };
