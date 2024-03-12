const express = require('express');

const router = express.Router();
const bottom6 = require('../../../../../data/dashboard/reportCards/cwpiRankingBottom/bottom6');

router.get('/details',
  (req, res) => {
    console.log(bottom6);
    res.send(bottom6);
  }
);

module.exports = router;