const { StatusCodes } = require('http-status-codes');

const { ItemService } =  require('../services')

const { SuccessResponse, ErrorResponse } = require ('../utils/common');
/**
 *
 * POST : /items
 * req-body {name: 'ITEM NAME', hsn: '1237435', price: 78}
 */
async function createItem(req, res){
    try {
        const item = await ItemService.createItem({
            name: req.body.name,
            hsn:req.body.hsn,
            price: req.body.price
        });
        SuccessResponse.data = item;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    }
    catch(error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
    }
}

module.exports = {
    createItem
}