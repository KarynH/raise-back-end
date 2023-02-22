const checkQuestionBody = (req, res, next) => {
  const { body } = req.body;
  console.log("CHECKING BODY");
  console.log(`BODY:${body}`);
 if( body !== "") {
  next();
 }else {
  res.status(500).json({error: "a body for a question is required"});
 }
};



const checkName = (req, res, next) => {
  const {name} = req.body;
  console.log("CHECKING NAME");
  console.log(`NAME: ${name}`);
  if(name !== "") {
    next();
  }else {
    res.status(500).json({error: "a name for a question is required"});

  }
};




module.exports = {checkQuestionBody, checkName};
