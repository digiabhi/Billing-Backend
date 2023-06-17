const { ClientRepository } = require('../repositories');
const {StatusCodes} = require("http-status-codes");

const clientRepository = new ClientRepository();

const AppError = require('../utils/errors/app-error')
async function createClient(data){
    try {
        const client = await clientRepository.create(data);
        return client;
    }
    catch(error) {
        if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Client', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createClient
};
