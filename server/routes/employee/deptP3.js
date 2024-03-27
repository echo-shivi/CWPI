const express = require('express');

const router = express.Router();
const deptP1Details = require('../../data/employee/dept/deptP3');

router.get('/details',
  (req, res) => {
    console.log(deptP3Details);
    res.send(deptP3Details);
  }
);

module.exports = router;
