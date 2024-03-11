const express = require('express');
const workAgency = require('./workAgency');
const schemeReportRoutes = require('./schemeReportRoutes');
const reportCardDetails = require('./reportCardRoutes');
const StageWiseDetails = require('./stageAnalyticsRoutes');
const pdfReportDetails = require('./pdfReportsRoutes')

const router = express.Router();

router.use('/workAgency', workAgency);
router.use('/schemeReport', schemeReportRoutes);
router.use('/reportCard', reportCardDetails);
router.use('/stageWise', StageWiseDetails);
router.use('/pdfReport',pdfReportDetails)

module.exports = router;