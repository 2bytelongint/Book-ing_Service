const { StatusCodes } = require("http-status-codes");

class ValidationError extends Error {
    constructor(error){
        let explanation = [];
        error.errors.forEach(err => {
            explanation.push(err.message)
        });
        super();
        this.name = "ValidationError",
        this.message = 'Not able to validate the data sent in the request',
        this.explanations = explanation,
        this.statusCodes = StatusCodes.BAD_REQUEST   }
}

module.exports = ValidationError