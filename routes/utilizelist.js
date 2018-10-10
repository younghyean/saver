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
      let query = 'select utilize.util_num as util_num,user.id as id,utilize.title as title,utilize.kind as kind,utilize.product as product,utilize.price as price,utilize.period as period,utilize.time as time,utilize.image as image,count(distinct util_comment_num) as count from utilize left join util_comment on utilize.util_num=util_comment.util_num, user where utilize.user_num=user.user_num group by utilize.util_num order by utilize.util_num desc;';
        connection.query(query, (err, data) => {
          if(err) res.status(500).send({ result: [], message: 'selecting posts error: '+err });
          else res.status(200).send({ result : data, message: 'ok' });
          connection.release();
        });
    });
  })
});
router.get('/:util_num', async function (req, res) {
    try {
        var connection = await pool.getConnection();
       let query = 'select utilize.util_num as util_num,user.id as id,utilize.title as title,utilize.kind as kind,utilize.product as product,utilize.price as price,utilize.period as period,utilize.time as time,utilize.explantion as explantion,utilize.addinformation as addinformation,count(util_comment_num) as count,utilize.image as image,user.profileimage as profileimage from utilize left join util_comment on utilize.util_num=util_comment.util_num, user where utilize.util_num=? and utilize.user_num=user.user_num group by utilize.util_num order by utilize.util_num desc;';
      let info = await connection.query(query,req.params.util_num);
      let comment=`select  util_comment.util_comment_num as num, 
      util_comment.user_num as user_num,util_comment.title as title,
util_comment.price as price, 
user.id as sellerid,
user.profileimage as profileimage, 
util_comment.local as local, 
util_comment.method as method, 
util_comment.period as period 
from user,utilize,util_comment 
where util_comment.util_num=?
and user.user_num=util_comment.user_num
and util_comment.util_num=utilize.util_num
group by util_comment.util_comment_num 
order by util_comment.util_comment_num desc`;
        let elcom=await connection.query(comment,req.params.util_num);
            res.status(200).send({ result: { info: info[0], comment: elcom }, message: 'ok' });
    }
  catch (err) {
    res.status(500).send({ message: 'selecting user error' + err });
}
finally {
    pool.releaseConnection(connection);
}
});


module.exports = router;
