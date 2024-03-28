const express = require('express');

const router = express.Router();
const departmentalDetails = require('../../data/employee/departmental');

router.get('/details',
  (req, res) => {
    console.log(departmentalDetails);
    res.send(departmentalDetails);
  }
);

module.exports = router;