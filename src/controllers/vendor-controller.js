const { StatusCodes } = require('http-status-codes');

const { VendorService } =  require('../services')

const { SuccessResponse, ErrorResponse } = require ('../utils/common');
/**
 *
 * POST : /clients
 * req-body {name: 'Vendor Name', address: 'Vendor Address', client_email: 'Vendor official email', contact_name: 'Primary contact name from vendor side', contact_no: 'Primary contact name from vendor side', contact_email: 'Primary contact email from vendor side', pan: 'Vendor PAN', gst: 'Vendor GST'}
 */
async function createVendor(req, res){
    try {
        const vendor = await VendorService.createVendor({
            name: req.body.name,
            address: req.body.address,
            vendor_email: req.body.vendor_email,
            contact_name: req.body.contact_name,
            contact_no: req.body.contact_no,
            contact_email: req.body.contact_email,
            pan: req.body.pan,
            gst: req.body.gst
        });
        SuccessResponse.data = vendor;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    }
    catch(error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
    }
}

module.exports = {
    createVendor
}