const express = require('express');
const reportDetailsRoutes = require('./reportDetails');
const reportCardRoutes = require('./reportCardRoutes');



const router = express.Router();

router.use('/reportDetails', reportDetailsRoutes);
router.use('/reportCardRoutes', reportCardRoutes);


module.exports = router;