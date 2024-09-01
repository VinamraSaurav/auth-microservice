const { StatusCodes } = require("http-status-codes");

class AppError extends Error{
    constructor(
        name = "AppError" ,
        message = 'Something went wrong', 
        explanation = "Looks like something went wrong on our end, please try again later", 
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR){
        super();
        this.name = name;
        this.message = message;
        this.explanation = explanation;
        this.statusCode = statusCode;

    }
}

module.exports = AppError;