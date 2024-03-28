const express = require('express');

const router = express.Router();
const conventionalP2Details = require('../../data/employee/conventionalP2');

router.get('/details',
  (req, res) => {
    console.log(conventionalP2Details);
    res.send(conventionalP2Details);
  }
);

module.exports = router;