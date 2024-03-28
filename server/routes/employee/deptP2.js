const express = require('express');

const router = express.Router();
const deptP2Details = require('../../data/employee/dept/deptP2');

router.get('/details',
  (req, res) => {
    console.log(deptP2Details);
    res.send(deptP2Details);
  }
);

module.exports = router;
