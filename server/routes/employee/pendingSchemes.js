const express = require('express');

const router = express.Router();
const pendingSchemeDetails = require('../../data/employee/pendingSchemes');

router.get('/details',
  (req, res) => {
    console.log(pendingSchemeDetails);
    res.send(pendingSchemeDetails);
  }
);

module.exports = router;