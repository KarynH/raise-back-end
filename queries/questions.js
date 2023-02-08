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


module.exports = {getAllQuestions};