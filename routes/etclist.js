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
//전체 게시글 조회
router.get('/', (req, res) => {
  return new Promise((fulfill, reject) => {
    pool.getConnection((err, connection) => {
      if(err) reject(err);
      else fulfill(connection);
    });
  })
  .catch(err => { res.status(500).send({ result: [], message: 'getConnection error : '+err}); })
  .then(connection => {
    return new Promise((fulfill, reject) => {
      let query = 'select etc.etc_num as etc_num,user.id as id,etc.title as title,etc.kind as kind,etc.product as product,etc.price as price,etc.period as period,etc.time as time,etc.image as image,count(distinct etc_comment_num) as count from etc left join etc_comment on etc.etc_num=etc_comment.etc_num, user where etc.user_num=user.user_num group by etc.etc_num order by etc.etc_num desc;';
        connection.query(query, (err, data) => {
          if(err) res.status(500).send({ result: [], message: 'selecting posts error: '+err });
          else res.status(200).send({ result : data, message: 'ok' });
          connection.release();
        });
    });
  })
});
router.get('/:etc_num', async function (req, res) {
    try {
        var connection = await pool.getConnection();
       let query = 'select etc.etc_num as etc_num,user.id as id,etc.title as title,etc.kind as kind,etc.product as product,etc.price as price,etc.period as period,etc.time as time,etc.explantion as explantion,etc.addinformation as addinformation,count(etc_comment_num) as count,etc.image as image,user.profileimage as profileimage from etc left join etc_comment on etc.etc_num=etc_comment.etc_num, user where etc.etc_num=? and etc.user_num=user.user_num group by etc.etc_num order by etc.etc_num desc;';
      let info = await connection.query(query,req.params.etc_num);
      let comment=`select  etc_comment.etc_comment_num as num, 
       etc_comment.user_num as user_num,etc_comment.title as title,
etc_comment.price as price, 
user.id as sellerid,
user.profileimage as profileimage, 
etc_comment.local as local, 
etc_comment.method as method, 
etc_comment.period as period 
from user,etc,etc_comment 
where etc_comment.etc_num=?
and user.user_num=etc_comment.user_num
and etc_comment.etc_num=etc.etc_num
group by etc_comment.etc_comment_num 
order by etc_comment.etc_comment_num desc`;
        let elcom=await connection.query(comment,req.params.etc_num);
            res.status(200).send({ result: { info: info[0], comment: elcom }, message: 'ok' });
    }
  catch (err) {
    res.status(500).send({ message: 'selecting etc error' + err });
}
finally {
    pool.releaseConnection(connection);
}
});


module.exports = router;
