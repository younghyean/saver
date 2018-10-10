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

   router.post('/:user_num', upload.single('image'), (req, res) => {
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
          const query = 'insert into electronics set ?'; 
        const query1 = 'insert into brand set ?'; 
        const query2 = 'insert into smart set ?'; 
        const query3 = 'insert into utilize set ?'; 
        const query4 = 'insert into etc set ?'; 
         let record = {
           user_num: req.params.user_num,
           title: req.body.title,
           category:req.body.category,
           product: req.body.product,
           price : req.body.price,
          time: moment(new Date()).format('MM-DD, h:mm a'),
          addinformation:req.body.addinformation,
          explantion:req.body.explantion,
            kind : req.body.kind,
           period: req.body.period,
           url: req.body.url,
           image: req.file ? req.file.location : null
        };
           if(req.body.category =='전자제품'){
        connection.query(query, record, err => {
           if(err) res.status(500).send({ message: "inserting electronics error: "+err});
           else res.status(201).send({ message: 'ok' });
        });
           }
              else if(req.body.category =='브랜드'){
        connection.query(query1, record, err => {
           if(err) res.status(500).send({ message: "inserting brand error: "+err});
           else res.status(201).send({ message: 'ok' });
        });
           }
             else  if(req.body.category =='스마트'){
        connection.query(query2, record, err => {
           if(err) res.status(500).send({ message: "inserting smart error: "+err});
           else res.status(201).send({ message: 'ok' });
        });
           }
           else if(req.body.category =='이용권'){
        connection.query(query3, record, err => {
           if(err) res.status(500).send({ message: "inserting utilize error: "+err});
           else res.status(201).send({message: 'ok' });
        });
           }
      else if(req.body.category=='기타'){
        connection.query(query4, record, err => {
           if(err) res.status(500).send({ message: "inserting etc error: "+err});
           else res.status(201).send({ message: 'ok' });
        });
           }
      }
      connection.release();
    });
   });
});
module.exports = router;