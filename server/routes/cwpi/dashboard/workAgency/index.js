const express = require('express');
const agencyDetailsRoutes = require('./agencyDetails');
const workAgenciesRoutes = require('./workAgenciesRoutes');



const router = express.Router();

router.use('/agencyDetails', agencyDetailsRoutes);
router.use('/workAgencies', workAgenciesRoutes);


module.exports = router;