const express = require('express');

const dashboardRoutes = require('./dashboard');
const designatioRoutes = require('./designation');

const router = express.Router();


router.use('/dashboard', dashboardRoutes);
router.use('/designation', designatioRoutes);
module.exports = router;