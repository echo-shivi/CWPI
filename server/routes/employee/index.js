const express = require('express');
const completedSchemes = require('./completedSchemes');
const pendingSchemes = require('./pendingSchemes');
const conventional = require('./conventional');
const conventionalP1 = require('./conventionalP1');
const conventionalP2 = require('./conventionalP2');
const conventionalP3 = require('./conventionalP3');
const conventionalP4 = require('./conventionalP4');
const conventionalP5 = require('./conventionalP5');
const departmental = require('./departmental')
const deptP1 = require('./deptP1');
const deptP2 = require('./deptP2');
const deptP3 = require('./deptP3');
const deptP4 = require('./deptP4');

const router = express.Router();

router.use('/completedSchemes', completedSchemes);
router.use('/pendingSchemes', pendingSchemes);
router.use('/conventional', conventional);
router.use('/conventionalP1', conventionalP1);
router.use('/conventionalP2', conventionalP2);
router.use('/conventionalP3', conventionalP3);
router.use('/conventionalP4', conventionalP4);
router.use('/conventionalP5', conventionalP5);
router.use('/departmental',departmental)
router.use('/deptP1', deptP1);
router.use('/deptP2', deptP2);
router.use('/deptP3', deptP3);
router.use('/deptP4', deptP4);

module.exports = router;
