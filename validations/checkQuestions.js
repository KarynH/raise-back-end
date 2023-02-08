const questionBody = () => {
    const {body} = req.body;
    console.log('checking body')
    if(body) {
        console.log(`BODY:${body}`)
        next();
    }else {
        res.status(400).json({error: "A question body is required"})
    }

}



module.exports = {questionBody};