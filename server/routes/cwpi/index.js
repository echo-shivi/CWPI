const express = require('express');
const workAgenciesRoutes = require('./workAgenciesRoutes');
const schemeReportRoutes = require('./schemeReportRoutes');
const reportCardDetails = require('./reportCardRoutes');
const router = express.Router();

router.use('/workAgencies', workAgenciesRoutes);
router.use('/schemeReport', schemeReportRoutes);
router.use('/reportCard', reportCardDetails);
module.exports = router;