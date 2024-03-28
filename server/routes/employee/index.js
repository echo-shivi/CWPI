const express = require('express');

const deptP1 = require('./deptP1');
const deptP2 = require('./deptP2');
const deptP3 = require('./deptP3');
const deptP4 = require('./deptP4');



const router = express.Router();


router.use('/deptP1', deptP1);
router.use('/deptP2', deptP2);
router.use('/deptP3', deptP3);
router.use('/deptP4', deptP4);

module.exports = router;
