const { InvoiceRepository } = require('../repositories');
const {StatusCodes} = require("http-status-codes");

const invoiceRepository = new InvoiceRepository();

const AppError = require('../utils/errors/app-error')
async function createInvoice(data){
    try {
        const invoice = await invoiceRepository.create(data);
        return invoice;
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

async function getAllInvoices() {
    try {
        const invoices = await invoiceRepository.getAllInvoices();
        return invoices;
    } catch (error) {
        console.log(error);
        throw new AppError(
            "Cannot fetch data of all the invoices",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}
module.exports = {
    createInvoice,
    getAllInvoices
};
