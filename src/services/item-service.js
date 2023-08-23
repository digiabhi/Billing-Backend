const { ItemRepository } = require('../repositories');
const {StatusCodes} = require("http-status-codes");

const itemRepository = new ItemRepository();

const AppError = require('../utils/errors/app-error');

async function createItem(data){
    try {
        const item = await itemRepository.create(data);
        return item;
    }
    catch(error) {
        if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Item', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getItems() {
    try {
        const items = await itemRepository.getAll();
        return items;
    } catch (error) {
        throw new AppError(
            "Cannot fetch data of all the items",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getItem(id) {
    try {
        const item = await itemRepository.get(id);
        return item;
    } catch (error) {
        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError(
                "The item you requested is not present",
                error.statusCode
            );
        }
        throw new AppError(
            "Cannot fetch data of all the items",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function destroyItem(id) {
    try {
        const response = await itemRepository.destroy(id);
        return response;
    } catch (error) {
        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError(
                "The item you requested to delete is not present",
                error.statusCode
            );
        }
        throw new AppError(
            "Cannot fetch data of all the items",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function updateItem(id) {
    try {
        const response = await itemRepository.update(id);
        return response;
    } catch (error) {
        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError(
                "The item you requested to update is not present",
                error.statusCode
            );
        }
        throw new AppError(
            "Cannot fetch data of all the items",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

module.exports = {
    createItem,
    getItem,
    getItems,
    destroyItem,
    updateItem
};
