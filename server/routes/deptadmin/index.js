const express = require('express');
const thisMonthScheme = require('./thisMonthScheme');
const lastMonthScheme = require('./lastMonthScheme');


const router = express.Router();


router.use('/thisMonthScheme', thisMonthScheme);
router.use('/lastMonthScheme', lastMonthScheme);

module.exports = router;