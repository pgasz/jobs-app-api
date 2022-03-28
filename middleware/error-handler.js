const { CustomAPIError } = require('../errors');
const { StatusCodes } = require('http-status-codes');
const errorHandlerMiddleware = (err, req, res, next) => {
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong try again later.',
    };

    if (err.name === 'ValidationError') {
        customError = {
            ...customError,
            msg: Object.values(err.errors)
                .map((item) => item.message)
                .join(', '),
            statusCode: 400,
        };
    }

    if (err.name === 'CastError') {
        customError = {
            ...customError,
            msg: `No item found with id: ${err.value}`,
            statusCode: 404,
        };
    }

    if (err.code && err.code === 11000) {
        customError = {
            ...customError,
            msg: `Duplicate value entered for ${Object.keys(
                err.keyValue
            )} fields, please choose another value.`,
            statusCode: 400,
        };
    }
    return res.status(customError.statusCode).json({ msg: err.message });
};

module.exports = errorHandlerMiddleware;
