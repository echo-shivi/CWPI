const express = require('express');
const cwpiReport = require('./cwpiReport');

const deltaChange = require('./deltaChange');
const cwpiRankingTop = require('./cwpiRankingTop');
const cwpiRankingBottom = require('./cwpiRankingBottom');
const deltaCwpiRankingBottom = require('./deltaCwpiRankingBottom');
const deltaCwpiRankingTop = require('./deltaCwpiRankingTop');


const router = express.Router();

router.use('/cwpiReport', cwpiReport);
router.use('/deltaChange', deltaChange);
router.use('/cwpiRankingTop', cwpiRankingTop);
router.use('/cwpiRankingBottom', cwpiRankingBottom);
router.use('/deltaCwpiRankingBottom', deltaCwpiRankingBottom);
router.use('/deltaCwpiRankingTop', deltaCwpiRankingTop);


module.exports = router;