const express = require('express');

const router = express.Router();
const lastMonthSchemeDetails = require('../../data/DeptAdmin/dashboard/lastMonthScheme');

router.get('/details',
  (req, res) => {
    console.log(lastMonthSchemeDetails);
    res.send(lastMonthSchemeDetails);
  }
);

module.exports = router;