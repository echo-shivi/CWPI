const express = require('express');
const adminRoutes = require('./admin');
const employeeDetailsRoutes = require('./employeeDetails');
const schemeSubmittedRoutes = require('./schemeSubmitted');


const router = express.Router();

router.use('/admin', adminRoutes);
router.use('/employeeDetails', employeeDetailsRoutes);
router.use('/schemeSubmitted', schemeSubmittedRoutes);

module.exports = router;