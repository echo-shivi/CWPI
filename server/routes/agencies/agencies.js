const express = require('express');

const router = express.Router();
const agenciesDetails = require('../../data/agencies/agencies');

router.get('/details',
  (req, res) => {
    console.log(agenciesDetails);
    res.send(agenciesDetails);
  }
);

module.exports = router;