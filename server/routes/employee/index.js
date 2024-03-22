const express = require('express');
const completedSchemes = require('./completedSchemes');
const pendingSchemes = require('./pendingSchemes');
const conventional = require('./conventional');
const conventionalP1 = require('./conventionalP1');
const conventionalP2 = require('./conventionalP2');
const conventionalP3 = require('./conventionalP3');
const conventionalP4 = require('./conventionalP4');
const conventionalP5 = require('./conventionalP5');


const router = express.Router();

router.use('/completedSchemes', completedSchemes);
router.use('/pendingSchemes', pendingSchemes);
router.use('/conventional', conventional);
router.use('/conventionalP1', conventionalP1);
router.use('/conventionalP2', conventionalP2);
router.use('/conventionalP3', conventionalP3);
router.use('/conventionalP4', conventionalP4);
router.use('/conventionalP5', conventionalP5);
module.exports = router;