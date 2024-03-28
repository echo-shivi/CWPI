const express = require('express');

const dashboardRoutes = require('./dashboard');
const designatioRoutes = require('./designation');
const agenciesRoutes = require('./agencies');
const deptAdminRoutes = require('./deptadmin');
const employeeRoutes = require('./employee')
const router = express.Router();


router.use('/dashboard', dashboardRoutes);
router.use('/designation', designatioRoutes);
router.use('/agencies', agenciesRoutes);
router.use('/deptadmin',deptAdminRoutes );
router.use('/employee', employeeRoutes );
module.exports = router;