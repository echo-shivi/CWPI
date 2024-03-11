const express = require('express');
const workAgency = require('./workAgency');
const schemeReportRoutes = require('./schemeReportRoutes');
const reportCard = require('./reportCard');
const StageWiseDetails = require('./stageAnalyticsRoutes');
const pdfReportDetails = require('./pdfReportsRoutes')

const router = express.Router();

router.use('/workAgency', workAgency);
router.use('/schemeReport', schemeReportRoutes);
router.use('/reportCard', reportCard);
router.use('/stageWise', StageWiseDetails);
router.use('/pdfReport',pdfReportDetails)

module.exports = router;