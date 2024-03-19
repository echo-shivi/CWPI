const express = require('express');

const router = express.Router();
const workAgenciesDetails = require('../../../data/dashboard/workAgencies');

router.get('/details',
    (req, res) => {
        console.log(workAgenciesDetails);
        res.send(workAgenciesDetails);
    }
);

module.exports = router;
