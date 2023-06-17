const { StatusCodes } = require('http-status-codes');

const { ClientService } =  require('../services')

const { SuccessResponse, ErrorResponse } = require ('../utils/common');
/**
 *
 * POST : /clients
 * req-body {name: 'Client Name', address: 'Client Address', client_email: 'Client official email', contact_name: 'Primary contact name from client side', contact_no: 'Primary contact name from client side', contact_email: 'Primary contact email from client side', pan: 'Client PAN', gst: 'Client GST'}
 */
async function createClient(req, res){
    try {
        const client = await ClientService.createClient({
            name: req.body.name,
            address: req.body.address,
            client_email: req.body.client_email,
            contact_name: req.body.contact_name,
            contact_no: req.body.contact_no,
            contact_email: req.body.contact_email,
            pan: req.body.pan,
            gst: req.body.gst
        });
        SuccessResponse.data = client;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    }
    catch(error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
    }
}

module.exports = {
    createClient
}