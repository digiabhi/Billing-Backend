const express = require('express');

const { InfoController } = require('../../controllers')

const itemRoutes = require('./item-routes')

const router = express.Router();

router.use('/items', itemRoutes);

router.get('/info', InfoController.info);

module.exports = router;
