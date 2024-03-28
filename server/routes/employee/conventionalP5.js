const express = require('express');

const router = express.Router();
const conventionalP5Details = require('../../data/employee/conventionalP5');

router.get('/details',
  (req, res) => {
    console.log(conventionalP5Details);
    res.send(conventionalP5Details);
  }
);

module.exports = router;