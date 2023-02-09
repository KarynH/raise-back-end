const answers = require("../controllers/answersController");
const db = require("../db/dbConfig.js")

const getAllAnswers = async (questionId) => {
    try {
        const allAnswers = await db.any("SELECT * FROM answers WHERE question_id=$1",
        [questionId]);
        return allAnswers
    }catch (error) {
        return error
    }
} 












module.exports = {getAllAnswers};