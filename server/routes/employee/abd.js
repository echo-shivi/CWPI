const express = require('express');

const router = express.Router();
const conventionalDetails = require('../../data/employee/abd');

router.get('/details',
  (req, res) => {
    console.log(abdDetails);
    res.send(abdDetails);
  }
);

module.exports = router;