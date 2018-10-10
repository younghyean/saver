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
//메세지를 읽는부분   구매자가 판매자가한테 보냈을떄
router.get('/:sellerid', async function (req, res) {
    try {
        var connection = await pool.getConnection();
        let query=`select user.id as buyerid,message.content as content,message.time as time,message.user_num as user_num
from message, user
where message.user_num=user.user_num
and message.sellerid=? order by mnum desc limit 1`;
       let  message= await connection.query(query,req.params.sellerid);
            res.status(200).send({ result: message, message: 'ok' }); 
    }
  catch (err) {
    res.status(500).send({ message: 'selecting message error' + err });
}
finally {
    pool.releaseConnection(connection);
}
});
router.get('/:user_num', async function (req, res) {
    try {
        var connection = await pool.getConnection();
        let query=`select sellerid,message.content as content,message.time as time,message.user_num as user_num
from message, user
where message.user_num=user.user_num
and message.user_num=? order by mnum desc`;
       let  message= await connection.query(query,req.params.user_num);
            res.status(200).send({ result: message, message: 'ok' }); 
    }
  catch (err) {
    res.status(500).send({ message: 'selecting message error' + err });
}
finally {
    pool.releaseConnection(connection);
}
});
//구매자가 판매자에게 메세지보낼때
router.post('/:user_num',  (req, res) => {
  return new Promise((fulfill, reject) => {
    pool.getConnection((err, connection) => {  //커낵션 객체 가져오기
      if(err) reject(err);
      else fulfill(connection);
    });
  })
  .catch(err => { res.status(500).send({ message: "getConnection error: "+err });})
  .then((connection) => {
    return new Promise((fulfill, reject) => {
      if(!(req.body.content)) 
        res.status(403).send({ message: 'please input content '});
      else {
          const query = 'insert into message set ?'; 
         let record = {
           user_num: req.params.user_num,
           sellerid: req.body.sellerid,
           content: req.body.content,
          time: moment(new Date()).format('MM-DD, h:mm:ss a'),
        };
        connection.query(query, record, err => {
           if(err) res.status(500).send({ message: "inserting message error: "+err});
           else res.status(201).send({ message: 'ok' });
        });
           
      }
      connection.release();
    });
   });
});
router.post('/:sellerid',  (req, res) => {
  return new Promise((fulfill, reject) => {
    pool.getConnection((err, connection) => {  //커낵션 객체 가져오기
      if(err) reject(err);
      else fulfill(connection);
    });
  })
  .catch(err => { res.status(500).send({ message: "getConnection error: "+err });})
  .then((connection) => {
    return new Promise((fulfill, reject) => {
      if(!(req.body.content)) 
        res.status(403).send({ message: 'please input content '});
      else {
          const query = 'insert into message set ?'; 
         let record = {
           sellerid: req.params.sellerid,
           user_num: req.params.user_num,
           content: req.body.content,
          time: moment(new Date()).format('MM-DD, h:mm a'),
        };
        connection.query(query, record, err => {
           if(err) res.status(500).send({ message: "inserting message error: "+err});
           else res.status(201).send({ message: 'ok' });
        });
      }
      connection.release();
    });
   });
});

module.exports = router;