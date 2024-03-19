const express = require('express');

const router = express.Router();
const bottom2 = require('../../../../../data/dashboard/reportCards/cwpiRankingBottom/bottom2');

router.get('/details',
  (req, res) => {
    console.log(bottom2);
    res.send(bottom2);
  }
);

module.exports = router;