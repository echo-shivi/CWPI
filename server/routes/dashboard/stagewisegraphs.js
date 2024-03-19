
const express = require('express');

const router = express.Router();
const StageWiseGraphs = require('../../data/dashboard/stagewisegraph');

router.get('/details',
  (req, res) => {
    console.log(StageWiseGraphs);
    res.send(StageWiseGraphs);
  }
);

module.exports = router;

