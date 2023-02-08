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
    const askAQuestion = await db.one("INSERT INTO questions (body, name, todays_date, topic, child_age) VALUES ($1, $2, $3, $4, $5) RETURNING *", 
    [question.body, question.name, question.todays_date, question.topic, question.child_age ])
    return askAQuestion;
  }catch (error) {
    return error;
  }
 }


 const updateAQuestion = async (question_id, question) => {
  try {
    const updatedQuestion = await db.one("UPDATE questions SET body=$1, name=$2, todays_date=$3, topic=$4, child_age=$5 WHERE id=$6 RETURNING *", 
    [question.body, question.name, question.todays_date, question.topic, question.child_age, question_id]);
    return updatedQuestion;
  }catch (error) {
    return error;
  }

 }
module.exports = { getAllQuestions, getOneQuestion, createAQuestion, updateAQuestion };
