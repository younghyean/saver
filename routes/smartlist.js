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
      let query = 'select smart.smart_num as smart_num,user.id as id,smart.title as title,smart.kind as kind,smart.product as product,smart.price as price,smart.period as period,smart.time as time,smart.image as image,count(distinct smart_comment_num) as count from smart left join smart_comment on smart.smart_num=smart_comment.smart_num, user where smart.user_num=user.user_num group by smart.smart_num order by smart.smart_num desc;';
        connection.query(query, (err, data) => {
          if(err) res.status(500).send({ result: [], message: 'selecting posts error: '+err });
          else res.status(200).send({ result : data, message: 'ok' });
          connection.release();
        });
    });
  })
});
router.get('/:smart_num', async function (req, res) {
    try {
        var connection = await pool.getConnection();
       let query = `select smart.smart_num as smart_num,user.id as id,smart.title as title,smart.kind as kind,smart.product as product,smart.price as price,smart.period as period,smart.time as time,smart.explantion as explantion,smart.addinformation as addinformation,count(smart_comment_num) as count,smart.image as image,user.profileimage as profileimage from smart left join smart_comment on smart.smart_num=smart_comment.smart_num, user where smart.smart_num=?
        and smart.user_num=user.user_num
         group by smart.smart_num order by smart.smart_num desc`;
      let info = await connection.query(query,req.params.smart_num);
      let comment=`select smart_comment.smart_comment_num as num, 
       smart_comment.user_num as user_num,smart_comment.title as title,
smart_comment.price as price, 
user.id as sellerid,
user.profileimage as profileimage, 
smart_comment.local as local, 
smart_comment.method as method, 
smart_comment.period as period 
from user,smart,smart_comment 
where smart_comment.smart_num=? 
and user.user_num=smart_comment.user_num
and smart_comment.smart_num=smart.smart_num
group by smart_comment.smart_comment_num 
order by smart_comment.smart_comment_num desc`;
        let elcom=await connection.query(comment,req.params.smart_num);
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
