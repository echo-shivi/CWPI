const express = require('express');

const router = express.Router();
const thisMonthSchemeDetails = require('../../data/DeptAdmin/dashboard/thisMonthScheme');

router.get('/details',
  (req, res) => {
    console.log(thisMonthSchemeDetails);
    res.send(thisMonthSchemeDetails);
  }
);

module.exports = router;