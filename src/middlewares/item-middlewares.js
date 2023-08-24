const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require ('../utils/common');

const AppError = require('../utils/errors/app-error')
function validateCreateRequest(req, res, next){
    if(!req.body.name){
        ErrorResponse.message = 'Something went wrong while creating item';
        ErrorResponse.error = new AppError(['Item Name not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.hsn){
        ErrorResponse.message = 'Something went wrong while creating item';
        ErrorResponse.error = new AppError(['Item HSN Code not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.buyPrice){
        ErrorResponse.message = 'Something went wrong while creating item';
        ErrorResponse.error = new AppError(['Item Buy Price not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.sellPrice){
        ErrorResponse.message = 'Something went wrong while creating item';
        ErrorResponse.error = new AppError(['Item Sell Price not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next();
}

module.exports = {
    validateCreateRequest
}