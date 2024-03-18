const express = require('express');
const agencies = require('./agencies');


const router = express.Router();

router.use('/addAgencies', agencies);
module.exports = router;