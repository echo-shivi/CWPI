const express = require('express');

const router = express.Router();
const StageWiseAnalyticsDetails = require('../../../data/dashboard/stagePhase');

router.get('/details',
  (req, res) => {
    console.log(StageWiseAnalyticsDetails);
    res.send(StageWiseAnalyticsDetails);
  }
);

module.exports = router;