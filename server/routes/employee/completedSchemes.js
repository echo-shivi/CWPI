const express = require('express');

const router = express.Router();
const completedSchemesDetails = require('../../data/employee/completedSchemes');

router.get('/details',
  (req, res) => {
    console.log(completedSchemesDetails);
    res.send(completedSchemesDetails);
  }
);

module.exports = router;