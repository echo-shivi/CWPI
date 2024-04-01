const express = require('express');

const router = express.Router();
const epcP6Details = require('../../data/employee/epc/epcP6');

router.get('/details',
  (req, res) => {
    console.log(epcP6Details);
    res.send(epcP6Details);
  }
);

module.exports = router;
