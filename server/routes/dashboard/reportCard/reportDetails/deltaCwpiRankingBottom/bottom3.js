const express = require('express');

const router = express.Router();
const bottom3 = require('../../../../../data/dashboard/reportCards/cwpiRankingBottom/bottom3');

router.get('/details',
  (req, res) => {
    console.log(bottom3);
    res.send(bottom3);
  }
);

module.exports = router;