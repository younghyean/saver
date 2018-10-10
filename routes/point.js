const express = require('express');
const router = express.Router();
const aws = require('aws-sdk');
const pool = require('../config/db_pool');
const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = new aws.S3();
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'soptsaver',
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, Date.now() + '.' + file.originalname.split('.').pop());
    }
  })
});
router.put('/:user_num', async function (req, res) {
  try {
    var connection = await pool.getConnection();
    const point = req.body.point;
    const updatenewuser = 'update  user set ? where user_num=?';
      let newuser = {
        point:point
      };
      let inserted = await connection.query(updatenewuser,[newuser,req.params.user_num]);
      res.status(201).send({
        message: "ok"
      });
    } 
  
  catch (err) {
    res.status(500).send({ message: 'update user error' + err });
  }
  finally {
    pool.releaseConnection(connection);
  }
});
module.exports = router;