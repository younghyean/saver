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
router.get('/:brand_comment_num', async function (req, res) {
    try {
        var connection = await pool.getConnection();
       let query = 'select * from brand_comment where brand_comment_num = ?';
      let info = await connection.query(query,req.params.brand_comment_num);
            res.status(200).send({ result:info[0], message: 'ok' }); 
    }
  catch (err) {
    res.status(500).send({ message: 'updating brand_comment error' + err });
}
finally {
    pool.releaseConnection(connection);
}
});

router.put('/:num', async function (req, res) {
  try {
    var connection = await pool.getConnection();
       let userinfo = {
           title: req.body.title,
           price : req.body.price,
          period: req.body.period,
          addinformation: req.body.addinformation,
           local:req.body.local,
           method:req.body.method,
      };
    const updatenewuser = 'update  brand_comment set ? where brand_comment_num=?';
      let inserted = await connection.query(updatenewuser,[userinfo,req.params.num]);
      res.status(201).send({
        message: "ok"
      });
    } 
  
  catch (err) {
    res.status(500).send({ message: 'updating brand_comment error' + err });
  }
  finally {
    pool.releaseConnection(connection);
  }
});
module.exports = router;