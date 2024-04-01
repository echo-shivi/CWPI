const express = require('express');

const router = express.Router();
const epcP3Details = require('../../data/employee/epc/epcP3');

router.get('/details',
  (req, res) => {
    console.log(epcP3Details);
    res.send(epcP3Details);
  }
);

module.exports = router;
