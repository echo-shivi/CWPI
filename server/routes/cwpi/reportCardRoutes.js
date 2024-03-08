const express = require('express');

const router = express.Router();
const reportCardsDetails = require('../../data/reportCards');

router.get('/details',
  (req, res) => {
    console.log(reportCardsDetails);
    res.send(reportCardsDetails);
  }
);

module.exports = router;