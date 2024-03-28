const express = require('express');

const router = express.Router();
const deptP1Details = require('../../data/employee/dept/deptP1');

router.get('/details',
  (req, res) => {
    console.log(deptP1Details);
    res.send(deptP1Details);
  }
);

module.exports = router;
