const express = require('express');

const router = express.Router();
const epcP2Details = require('../../data/employee/epc/epcP2');

router.get('/details',
  (req, res) => {
    console.log(epcP2Details);
    res.send(epcP2Details);
  }
);

module.exports = router;
