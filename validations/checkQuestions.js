const checkQuestionBody = (req, res, next) => {
  const { body } = req.body;
  console.log("checking body");
  if (body !== "" || body !== " " || body !== undefined) {
    console.log(`BODY:${body}`);
    next();
  } else {
    res.status(400).json({ error: "A question body is required" });
  }
};

const checkName = (req, res, next) => {
  const { name } = req.body;
  console.log("checking name ");
  if (name !== "" || name !== " " || name !== undefined) {
    console.log(`NAME ${name}`);
    next();
  } else {
    res.status(400).json({ error: "A name is required" });
  }
};



module.exports = { checkQuestionBody, checkName };
