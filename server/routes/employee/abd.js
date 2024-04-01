const express = require('express');

const router = express.Router();
const abdDetails = require('../../data/employee/abd/abd');

router.get('/details',
  (req, res) => {
    console.log(abdDetails);
    res.send(abdDetails);
  }
);

module.exports = router;