const express = require('express');

const {ClientController} = require('../../controllers')

const {ClientMiddlewares} = require('../../middlewares')

const router = express.Router();

router.post('/', ClientMiddlewares.validateCreateRequest, ClientController.createClient)

module.exports = router;