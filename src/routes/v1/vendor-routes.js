const express = require('express');

const {VendorController} = require('../../controllers')

const {VendorMiddlewares} = require('../../middlewares')

const router = express.Router();

router.post('/', VendorMiddlewares.validateCreateRequest, VendorController.createVendor)

module.exports = router;