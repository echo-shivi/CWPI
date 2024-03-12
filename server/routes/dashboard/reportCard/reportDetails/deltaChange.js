const express = require('express');

const router = express.Router();
const deltaChangeDetails = require('../../../../data/dashboard/reportCards/deltaChange');

router.get('/details',
  (req, res) => {
    console.log(deltaChangeDetails);
    res.send(deltaChangeDetails);
  }
);

module.exports = router;