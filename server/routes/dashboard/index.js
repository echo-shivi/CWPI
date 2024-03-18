const express = require('express');
const workAgency = require('./workAgency');
const schemeReportRoutes = require('./schemeReportRoutes');
const reportCardDetails = require('./reportCardRoutes');
const StageWiseDetails = require('./stageAnalyticsRoutes');
const pdfReportDetails = require('./pdfReportsRoutes')
const stagewisegraph = require('./stagewisegraphs')
const barchart = require('./barchart')
const reactTable = require('./reactTable.js')

const router = express.Router();

router.use('/workAgency', workAgency);
router.use('/schemeReport', schemeReportRoutes);
router.use('/reportCard', reportCardDetails);
router.use('/stageWise', StageWiseDetails);
router.use('/pdfReport',pdfReportDetails)
router.use('/stagewisegraph', stagewisegraph );
router.use('/barchart', barchart);
router.use('/reactTable', reactTable);

module.exports = router;