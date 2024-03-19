const express = require('express');

const router = express.Router();
const ReactTable = require('../../data/dashboard/reactTable');

router.get('/details',
  (req, res) => {
    console.log(ReactTable);
    res.send(ReactTable);
  }
);

module.exports = router;