const express = require('express');

const workAgenciesRoutes = require('./workAgenciesRoutes');
const router = express.Router();

router.use('/workAgencies', workAgenciesRoutes);
module.exports = router;