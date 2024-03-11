const express = require('express');

const cwpiRoutes = require('./cwpi');

const router = express.Router();


router.use('/cwpi', cwpiRoutes);

module.exports = router;