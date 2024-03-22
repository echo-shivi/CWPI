const express = require('express');

const router = express.Router();
const conventionalP1Details = require('../../data/employee/conventionalP1');

router.get('/details',
  (req, res) => {
    console.log(conventionalP1Details);
    res.send(conventionalP1Details);
  }
);

module.exports = router;