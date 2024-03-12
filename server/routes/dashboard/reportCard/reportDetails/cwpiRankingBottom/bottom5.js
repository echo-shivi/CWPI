const express = require('express');

const router = express.Router();
const bottom5 = require('../../../../../data/dashboard/reportCards/cwpiRankingBottom/bottom5');

router.get('/details',
  (req, res) => {
    console.log(bottom5);
    res.send(bottom5);
  }
);

module.exports = router;