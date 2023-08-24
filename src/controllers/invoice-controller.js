const { StatusCodes } = require('http-status-codes');

const { InvoiceService } =  require('../services')

const { SuccessResponse, ErrorResponse } = require ('../utils/common');
/**
 *
 * POST : /invoices
 * req-body {name: 'Client Name', address: 'Client Address', client_email: 'Client official email', contact_name: 'Primary contact name from client side', contact_no: 'Primary contact name from client side', contact_email: 'Primary contact email from client side', pan: 'Client PAN', gst: 'Client GST'}
 */
async function createInvoice(req, res){
    try {
        const invoice = await InvoiceService.createInvoice({
            invoiceId: req.body.invoiceId,
            clientId: req.body.clientId,
            invoiceDate: req.body.invoiceDate,
            dueDate: req.body.dueDate,
            itemId: req.body.itemId,
            price: req.body.price,
            quantity: req.body.quantity
        });
        SuccessResponse.data = invoice;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    }
    catch(error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
    }
}

/**
 * GET : /invoices
 * req-body {}
 */
async function getAllInvoices(req, res) {
    try {
        const invoices = await InvoiceService.getAllInvoices();
        SuccessResponse.data = invoices;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createInvoice,
    getAllInvoices
}