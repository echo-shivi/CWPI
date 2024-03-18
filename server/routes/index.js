const express = require('express');

const dashboardRoutes = require('./dashboard');

const router = express.Router();


router.use('/dashboard', dashboardRoutes);

module.exports = router;