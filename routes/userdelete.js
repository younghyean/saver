const express = require('express');
const router = express.Router();
const aws = require('aws-sdk');
const dateformat = require('dateformat');
const moment = require('moment');
const pool = require('../config/db_pool');

router.delete('/:user_num', async function (req, res) {
  try {
    var connection = await pool.getConnection();
    let query='delete from user where user_num=?'
      let deleteuser= await connection.query(query,req.params.user_num);
      res.status(201).send({   message: "ok"  });
    } 
  
  catch (err) {
    res.status(500).send({ message: 'delete user error' + err });
  }
  finally {
    pool.releaseConnection(connection);
  }
});
module.exports = router;