const checkQuestionBody = (req, res, next) => {
    const {body} = req.body.body;
    console.log('checking body')
    if(body !== "") {
        console.log(`BODY:${body}`)
        next();
    }else {
        res.status(400).json({error: "A question body is required"})
    }

}

const checkNameAndDate = (req, res, next) => {
    const {name} = req.body.name;
    console.log('checking name ')
    if(name !== "") {
        console.log(`NAME ${name}`)
        next();

    }else {
        res.status(400).json({error: "A name is required"})

    }
}


module.exports = {checkQuestionBody, checkNameAndDate};