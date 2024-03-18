const express = require('express');
const bottom1 = require('./bottom1');
const bottom2 = require('./bottom2');
const bottom3 = require('./bottom3');
const bottom4 = require('./bottom4');
const bottom5 = require('./bottom5');
const bottom6 = require('./bottom6');



const router = express.Router();

router.use('/bottom1', bottom1);
router.use('/bottom2', bottom2);
router.use('/bottom3', bottom3);
router.use('/bottom4', bottom4);
router.use('/bottom5', bottom5);
router.use('/bottom6', bottom6);


module.exports = router