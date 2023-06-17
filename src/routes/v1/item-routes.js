const express = require('express');

const {ItemController} = require('../../controllers')

const {ItemMiddlewares} = require('../../middlewares')

const router = express.Router();

router.post('/', ItemMiddlewares.validateCreateRequest, ItemController.createItem)

module.exports = router;