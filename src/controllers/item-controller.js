const { StatusCodes } = require('http-status-codes');

const { ItemService } =  require('../services')

const { SuccessResponse, ErrorResponse } = require ('../utils/common');
/**
 *
 * POST : /items
 * req-body {name: 'ITEM NAME', hsn: '1237435', buyPrice: 78, sellPrice: 80, unit:KG, tracking: false}
 */
async function createItem(req, res){
    try {
        const item = await ItemService.createItem({
            name: req.body.name,
            hsn:req.body.hsn,
            buyPrice: req.body.buyPrice,
            sellPrice: req.body.sellPrice,
        });
        SuccessResponse.data = item;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    }
    catch(error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
    }
}

/**
 * GET : /items
 * req-body {}
 */
async function getItems(req, res) {
    try {
        const items = await ItemService.getItems();
        SuccessResponse.data = items;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * GET : /items/:id
 * req-body {}
 */
async function getItem(req, res) {
    try {
        const items = await ItemService.getItem(req.params.id);
        SuccessResponse.data = items;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * DELETE : /items/:id
 * req-body {}
 */
async function destroyItem(req, res) {
    try {
        const response = await ItemService.destroyItem(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createItem,
    getItem,
    getItems,
    destroyItem
}