const express = require('express');
const router = express.Router();
const aws = require('aws-sdk');
const dateformat = require('dateformat');
const moment = require('moment');
const pool = require('../config/db_pool');
router.delete('/:num', async function (req, res) {
  try {
    var connection = await pool.getConnection();
    let query='delete from etc_comment where etc_comment_num=?'
      let deletecate= await connection.query(query,req.params.num);
      res.status(201).send({   message: "ok"  });
    } 
  
  catch (err) {
    res.status(500).send({ message: 'delete etc_comment error' + err });
  }
  finally {
    pool.releaseConnection(connection);
  }
});
module.exports = router;