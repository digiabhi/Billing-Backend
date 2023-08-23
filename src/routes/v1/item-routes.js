const express = require('express');

const {ItemController} = require('../../controllers')

const {ItemMiddlewares} = require('../../middlewares')

const router = express.Router();

router.post('/', ItemMiddlewares.validateCreateRequest, ItemController.createItem);

router.get('/',ItemController.getItems)

router.get('/:id',ItemController.getItem)

router.delete('/:id',ItemController.destroyItem)


module.exports = router;