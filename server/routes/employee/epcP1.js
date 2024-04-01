const express = require('express');

const router = express.Router();
const epcP1Details = require('../../data/employee/epc/epcP1');

router.get('/details',
  (req, res) => {
    console.log(epcP1Details);
    res.send(epcP1Details);
  }
);

module.exports = router;
