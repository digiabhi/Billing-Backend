const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require ('../utils/common');

const AppError = require('../utils/errors/app-error')
function validateCreateRequest(req, res, next){
    if(!req.body.name){
        ErrorResponse.message = 'Something went wrong while creating vendor';
        ErrorResponse.error = new AppError(['Vendor Name not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.address){
        ErrorResponse.message = 'Something went wrong while creating vendor';
        ErrorResponse.error = new AppError(['Vendor Address not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.vendor_email){
        ErrorResponse.message = 'Something went wrong while creating vendor';
        ErrorResponse.error = new AppError(['Vendor email not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.contact_name){
        ErrorResponse.message = 'Something went wrong while creating vendor';
        ErrorResponse.error = new AppError(['Contact Name not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.contact_no){
        ErrorResponse.message = 'Something went wrong while creating vendor';
        ErrorResponse.error = new AppError(['Contact number not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next();
}

module.exports = {
    validateCreateRequest
}