const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require ('../utils/common');

const AppError = require('../utils/errors/app-error')
function validateCreateRequest(req, res, next){
    if(!req.body.clientName){
        ErrorResponse.message = 'Something went wrong while creating client';
        ErrorResponse.error = new AppError(['Client Name not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.clientAddress){
        ErrorResponse.message = 'Something went wrong while creating client';
        ErrorResponse.error = new AppError(['Client Address not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.clientEmail){
        ErrorResponse.message = 'Something went wrong while creating client';
        ErrorResponse.error = new AppError(['Client email not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.contactName){
        ErrorResponse.message = 'Something went wrong while creating client';
        ErrorResponse.error = new AppError(['Contact Name not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.contactNo){
        ErrorResponse.message = 'Something went wrong while creating client';
        ErrorResponse.error = new AppError(['Contact number not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next();
}

module.exports = {
    validateCreateRequest
}