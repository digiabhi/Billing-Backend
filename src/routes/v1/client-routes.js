const express = require('express');

const {ClientController} = require('../../controllers')

const {ClientMiddlewares} = require('../../middlewares')

const router = express.Router();

router.post('/', ClientMiddlewares.validateCreateRequest, ClientController.createClient);

router.get('/',ClientController.getClients)

module.exports = router;