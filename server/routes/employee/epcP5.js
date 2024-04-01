const express = require('express');

const router = express.Router();
const epcP5Details = require('../../data/employee/epc/epcP5');

router.get('/details',
  (req, res) => {
    console.log(epcP5Details);
    res.send(epcP5Details);
  }
);

module.exports = router;
