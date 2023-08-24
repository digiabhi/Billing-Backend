const express = require('express');

const {InvoiceController} = require('../../controllers');

// const {InvoiceMiddlewares} = require('../../middlewares')

const router = express.Router();

router.post('/',  InvoiceController.createInvoice);

router.get('/',InvoiceController.getAllInvoices)

module.exports = router;