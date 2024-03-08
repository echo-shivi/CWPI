const express = require('express');
const workAgenciesRoutes = require('./workAgenciesRoutes');
const schemeReportRoutes = require('./schemeReportRoutes');

const router = express.Router();

router.use('/workAgencies', workAgenciesRoutes);
router.use('/schemeReport', schemeReportRoutes);
module.exports = router;