const express = require('express');

const router = express.Router();
const bottom1 = require('../../../../../data/dashboard/reportCards/cwpiRankingBottom/bottom1');

router.get('/details',
  (req, res) => {
    console.log(bottom1);
    res.send(bottom1);
  }
);

module.exports = router;