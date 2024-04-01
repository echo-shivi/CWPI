const express = require('express');

const router = express.Router();
const epcP4Details = require('../../data/employee/epc/epcP4');

router.get('/details',
  (req, res) => {
    console.log(epcP4Details);
    res.send(epcP4Details);
  }
);

module.exports = router;
