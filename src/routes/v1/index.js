const express = require('express');

const { InfoController } = require('../../controllers');

const itemRoutes = require('./item-routes');

const clientRoutes = require('./client-routes');

const vendorRoutes = require('./vendor-routes');

const router = express.Router();

router.use('/items', itemRoutes);

router.use('/clients', clientRoutes);

router.use('/vendors', vendorRoutes);

router.get('/info', InfoController.info);

module.exports = router;
