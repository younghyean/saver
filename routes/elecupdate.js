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
router.get('/:elec_num', async function (req, res) {
    try {
        var connection = await pool.getConnection();
       let query = 'select * from electronics where elec_num = ?';
      let info = await connection.query(query,req.params.elec_num);
            res.status(200).send({ result:info[0], message: 'ok' }); 
    }
  catch (err) {
    res.status(500).send({ message: 'updating electronics error' + err });
}
finally {
    pool.releaseConnection(connection);
}
});

router.put('/:elec_num',upload.single('image'),async function (req, res) {
  try {
    var connection = await pool.getConnection();
       let userinfo = {
           title: req.body.title,
           product: req.body.product,
            kind : req.body.kind,
           price : req.body.price,
           url : req.body.url,
          period: req.body.period,
          addinformation: req.body.addinformation,
           explantion:req.body.explantion,
          image : req.file ? req.file.location : null
      };
    const updatenewuser = 'update  electronics set ? where elec_num=?';
      let inserted = await connection.query(updatenewuser,[userinfo,req.params.elec_num]);
      res.status(201).send({
        message: "ok"
      });
    } 
  
  catch (err) {
    res.status(500).send({ message: 'updating electronics error' + err });
  }
  finally {
    pool.releaseConnection(connection);
  }
});
module.exports = router;