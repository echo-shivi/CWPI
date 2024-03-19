const express = require('express');

const router = express.Router();
const bottom4 = require('../../../../../data/dashboard/reportCards/cwpiRankingBottom/bottom4');

router.get('/details',
  (req, res) => {
    console.log(bottom4);
    res.send(bottom4);
  }
);

module.exports = router;