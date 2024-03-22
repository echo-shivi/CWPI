const express = require('express');

const router = express.Router();
const conventionalP3Details = require('../../data/employee/conventionalP3');

router.get('/details',
  (req, res) => {
    console.log(conventionalP3Details);
    res.send(conventionalP3Details);
  }
);

module.exports = router;