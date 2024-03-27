const express = require('express');

const dashboardRoutes = require('./dashboard');
const designatioRoutes = require('./designation');
const agenciesRoutes = require('./agencies');
const deptAdminRoutes = require('./deptadmin')
const router = express.Router();


router.use('/dashboard', dashboardRoutes);
router.use('/designation', designatioRoutes);
router.use('/agencies', agenciesRoutes);
router.use('/deptadmin',deptAdminRoutes )
module.exports = router;