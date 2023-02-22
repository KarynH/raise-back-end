const db = require("../db/dbConfig.js");

const getAllAnswers = async (questionId) => {
  try {
    const allReviews = await db.any(
      "SELECT * FROM answers WHERE question_id=$1",
      [questionId]
    );
    return allReviews;

  } catch (error) {
    return error;
  }
};

module.exports = { getAllAnswers};
