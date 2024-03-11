const express = require('express');
const cwpiReport = require('./cwpiReport');



const router = express.Router();

router.use('/cwpiReport', cwpiReport);


module.exports = router;