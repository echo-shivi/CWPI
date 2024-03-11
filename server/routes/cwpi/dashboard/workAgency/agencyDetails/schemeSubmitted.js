const express = require('express');

const router = express.Router();
const schemeSubmitted = require('../../../../../data/dashboard/agencyDetail/schemeSubmitted');

router.get('/details',
    (req, res) => {
        console.log(schemeSubmitted);
        res.send(schemeSubmitted);
    }
);

module.exports = router;