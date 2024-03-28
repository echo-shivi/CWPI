const express = require('express');
const workAgency = require('./workAgency/index.js');
const schemeReportRoutes = require('./schemeReportRoutes.js');
const reportCard = require('./reportCard/index.js');
const StageWiseDetails = require('./stageAnalyticsRoutes.js');
const pdfReportDetails = require('./pdfReportsRoutes.js')
const stagewisegraph = require('./stagewisegraphs.js')
const barchart = require('./barchart.js')
const reactTable = require('./reactTable.js')

const router = express.Router();

router.use('/workAgency', workAgency);
router.use('/schemeReport', schemeReportRoutes);
router.use('/reportCard', reportCard);
router.use('/stageWise', StageWiseDetails);
router.use('/pdfReport',pdfReportDetails)
router.use('/stagewisegraph', stagewisegraph );
router.use('/barchart', barchart);
router.use('/reactTable', reactTable);

module.exports = router;