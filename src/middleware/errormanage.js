const { ValidationError } = require("express-validation")

const notfound = (req,res,next)=>{
    res.status(404).json({
        message:`page not found`,
        statuscode:404
    })
}

const findeerror = (err,req,res,next)=>{
    let status = err.status || 500
    let message =err.message || "internal server error"
    if(err instanceof ValidationError){
        message = err.details.body.map(detail => detail.message);
        status = 400
    }
    res.status(status).json({
        message,status
    })
}
module.exports = {
    notfound,
    findeerror
}