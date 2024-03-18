
const express = require('express');

const router = express.Router();
const BarCharts = require('../../data/dashboard/barchart');

router.get('/details',
  (req, res) => {
    console.log(BarCharts);
    res.send(BarCharts);
  }
);

module.exports = router;

