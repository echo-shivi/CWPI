const express = require('express');

const router = express.Router();
const admin = require('../../../../../data/dashboard/agencyDetail/admin');

router.get('/details',
    (req, res) => {
        console.log(admin);
        res.send(admin);
    }
);

module.exports = router;