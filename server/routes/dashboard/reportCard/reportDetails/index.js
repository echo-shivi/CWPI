const express = require('express');
const cwpiReport = require('./cwpiReport');

const deltaChange = require('./deltaChange');


const router = express.Router();

router.use('/cwpiReport', cwpiReport);
router.use('/deltaChange', deltaChange);


module.exports = router;