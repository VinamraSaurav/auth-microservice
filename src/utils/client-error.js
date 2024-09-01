const AppError = require("./error-handlers");
const { StatusCodes } = require("http-status-codes");

class ClientError extends AppError{
    constructor(name, message, explation, statusCode){
        super(
            name,
            message,
            explation,
            statusCode
        )
    }
}

module.exports = ClientError;