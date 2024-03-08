const express = require('express');

const router = express.Router();
const StageWiseAnalyticsDetails = require('../../data/stagePhase');

router.get('/details',
  (req, res) => {
    console.log(StageWiseAnalyticsDetails);
    res.send(StageWiseAnalyticsDetails);
  }
);

module.exports = router;