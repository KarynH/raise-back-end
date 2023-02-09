const checkQuestionBody = (req, res, next) => {
  const { body } = req.body;
  console.log("checking body");
  console.log(`BODY:${body}`);
 if(body != " ") {
  next();
 }else {
  res.status(500).json({error: "a body for a question is required"})
 }
};


// const checkName = (req, res, next) => {
//   const { name } = req.body;
//   console.log("checking name ");
//   if (name !== "" || name !== " " || name !== undefined) {
//     console.log(`NAME ${name}`);
//     next();
//   } else {
//     res.status(400).json({ error: "A name is required" });
//   }
// };



module.exports = { checkQuestionBody };
