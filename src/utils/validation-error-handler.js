const AppError = require("./error-handlers");
const { StatusCodes } = require("http-status-codes");

class ValidationError extends AppError{
    constructor(error){
        let explation = [];
        error.errors.map((error) => {
            explation.push(error.message);
        });
        let errorName = error.name;
        super(
            errorName,
            "Not able to validate the data sent in request",
            explation,
            StatusCodes.BAD_REQUEST,
        )
    }
}

module.exports = ValidationError;