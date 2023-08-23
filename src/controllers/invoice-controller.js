const { StatusCodes } = require('http-status-codes');

const { InvoiceService } =  require('../services')

const { SuccessResponse, ErrorResponse } = require ('../utils/common');
/**
 *
 * POST : /clients
 * req-body {name: 'Client Name', address: 'Client Address', client_email: 'Client official email', contact_name: 'Primary contact name from client side', contact_no: 'Primary contact name from client side', contact_email: 'Primary contact email from client side', pan: 'Client PAN', gst: 'Client GST'}
 */
// async function createClient(req, res){
//     try {
//         const client = await ClientService.createClient({
//             name: req.body.name,
//             address: req.body.address,
//             client_email: req.body.client_email,
//             contact_name: req.body.contact_name,
//             contact_no: req.body.contact_no,
//             contact_email: req.body.contact_email,
//             pan: req.body.pan,
//             gst: req.body.gst
//         });
//         SuccessResponse.data = client;
//         return res.status(StatusCodes.CREATED).json(SuccessResponse);
//     }
//     catch(error) {
//         ErrorResponse.error = error;
//         return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
//     }
// }

/**
 * GET : /invoices
 * req-body {}
 */
async function getInvoices(req, res) {
    try {
        const invoices = await InvoiceService.getInvoices();
        SuccessResponse.data = invoices;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    getInvoices
}