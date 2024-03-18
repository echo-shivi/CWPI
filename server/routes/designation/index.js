const express = require('express');
const addDesignation = require('./designation');


const router = express.Router();

router.use('/addDesignation', addDesignation);
module.exports = router;