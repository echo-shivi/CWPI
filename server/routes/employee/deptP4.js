const express = require('express');

const router = express.Router();
const deptP4Details = require('../../data/employee/dept/deptP4');

router.get('/details',
  (req, res) => {
    console.log(deptP4Details);
    res.send(deptP4Details);
  }
);

module.exports = router;
