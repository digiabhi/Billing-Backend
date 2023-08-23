const express = require('express');

const {InvoiceController} = require('../../controllers');

// const {InvoiceMiddlewares} = require('../../middlewares')

const router = express.Router();

// router.post('/', ClientMiddlewares.validateCreateRequest, ClientController.createClient);

router.get('/',InvoiceController.getInvoices)

module.exports = router;