const express = require('express');
const router = express.Router();
const aws = require('aws-sdk');
const dateformat = require('dateformat');
const moment = require('moment');
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
   router.post('/:util_num',  (req, res) => {
  return new Promise((fulfill, reject) => {
    pool.getConnection((err, connection) => {  //커낵션 객체 가져오기
      if(err) reject(err);
      else fulfill(connection);
    });
  })
  .catch(err => { res.status(500).send({ message: "getConnection error: "+err });})
  .then((connection) => {
    return new Promise((fulfill, reject) => {
      if(!(req.body.title)) 
        res.status(403).send({ message: 'please input all '});
      else {
          const query = 'insert into util_comment set ?'; 
         let record = {
           util_num: req.params.util_num,
           user_num: req.body.user_num,
           title: req.body.title,
                   price : req.body.price,
          time: moment(new Date()).format('MM-DD, h:mm a'),
          period: req.body.period,
          addinformation: req.body.addinformation,
           local:req.body.local,
           method:req.body.method,
        };
        connection.query(query, record, err => {
           if(err) res.status(500).send({ message: "inserting util_comment error: "+err});
           else res.status(201).send({ message: 'ok' });
        });
           
      }
      connection.release();
    });
   });
});
module.exports = router;