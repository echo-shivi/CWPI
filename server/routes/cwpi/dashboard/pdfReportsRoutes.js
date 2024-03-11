const express = require('express');

const router = express.Router();
const pdfReportDetails = require('../../../data/dashboard/pdfReport');

router.get('/details',
  (req, res) => {
    console.log(pdfReportDetails);
    res.send(pdfReportDetails);
  }
);

module.exports = router;