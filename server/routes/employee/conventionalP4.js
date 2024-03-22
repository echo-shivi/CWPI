const express = require('express');

const router = express.Router();
const conventionalP4Details = require('../../data/employee/conventionalP4');

router.get('/details',
  (req, res) => {
    console.log(conventionalP4Details);
    res.send(conventionalP4Details);
  }
);

module.exports = router;