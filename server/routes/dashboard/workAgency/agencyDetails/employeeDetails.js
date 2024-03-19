const express = require('express');

const router = express.Router();
const employeeDetails = require('../../../../data/dashboard/agencyDetail/employeeDetails');

router.get('/details',
    (req, res) => {
        console.log(employeeDetails);
        res.send(employeeDetails);
    }
);

module.exports = router;