const express = require('express');
const workAgenciesRoutes = require('./workAgenciesRoutes');
const schemeReportRoutes = require('./schemeReportRoutes');
const reportCardDetails = require('./reportCardRoutes');
const StageWiseDetails = require('./stageAnalyticsRoutes');
const pdfReportDetails = require('./pdfReportsRoutes')

const router = express.Router();

router.use('/workAgencies', workAgenciesRoutes);
router.use('/schemeReport', schemeReportRoutes);
router.use('/reportCard', reportCardDetails);
router.use('/stageWise', StageWiseDetails);
router.use('/pdfReport',pdfReportDetails)
module.exports = router;