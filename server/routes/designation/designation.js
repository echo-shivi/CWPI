const express = require('express');

const router = express.Router();
const designationDetails = require('../../data/designation/designation');

router.get('/details',
  (req, res) => {
    console.log(designationDetails);
    res.send(designationDetails);
  }
);

module.exports = router;