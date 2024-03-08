const express = require('express');
const workAgenciesRoutes = require('./workAgenciesRoutes');
const schemeReportRoutes = require('./schemeReportRoutes');
const reportCardDetails = require('./reportCardRoutes');
const StageWiseDetails = require('./stageAnalyticsRoutes')
const router = express.Router();

router.use('/workAgencies', workAgenciesRoutes);
router.use('/schemeReport', schemeReportRoutes);
router.use('/reportCard', reportCardDetails);
router.use('/stageWise', StageWiseDetails);
module.exports = router;