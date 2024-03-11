const express = require('express');

const router = express.Router();
const cwpiReportDetails = require('../../../../data/dashboard/reportCards/cwpiReport');

router.get('/details',
  (req, res) => {
    console.log(cwpiReportDetails);
    res.send(cwpiReportDetails);
  }
);

module.exports = router;