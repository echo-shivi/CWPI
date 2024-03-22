const express = require('express');

const router = express.Router();
const conventionalDetails = require('../../data/employee/conventional');

router.get('/details',
  (req, res) => {
    console.log(conventionalDetails);
    res.send(conventionalDetails);
  }
);

module.exports = router;