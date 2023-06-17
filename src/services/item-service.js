const { ItemRepository } = require('../repositories');
const {StatusCodes} = require("http-status-codes");

const itemRepository = new ItemRepository();

const AppError = require('../utils/errors/app-error')
async function createItem(data){
    try {
        const item = await itemRepository.create(data);
        return item;
    }
    catch (error) {
        if(error.name === 'SequelizeValidationError'){
            let explanation = [];
            error.error.forEach((err) =>{
                explanation.push(err.message)
            })
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw error;
    }
}

module.exports = {
    createItem
};
