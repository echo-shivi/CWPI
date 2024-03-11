const express = require('express');

const router = express.Router();
const schemeReportsDetails = require('../../../data/dashboard/schemeReports');

router.get('/details',
  (req, res) => {
    console.log(schemeReportsDetails);
    res.send(schemeReportsDetails);
  }
);

module.exports = router;