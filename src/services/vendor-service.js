const { VendorRepository} = require('../repositories');
const {StatusCodes} = require("http-status-codes");

const vendorRepository = new VendorRepository();

const AppError = require('../utils/errors/app-error')
async function createVendor(data){
    try {
        const vendor = await vendorRepository.create(data);
        return vendor;
    }
    catch(error) {
        if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Vendor', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createVendor
};
