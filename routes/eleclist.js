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
      let query = 'select electronics.elec_num as elec_num,user.id as id,electronics.title as title,electronics.kind as kind,electronics.product as product,electronics.price as price,electronics.period as period,electronics.time as time,electronics.image as image,count(distinct elec_comment_num) as count from electronics left join elec_comment on electronics.elec_num=elec_comment.elec_num, user where electronics.user_num=user.user_num group by electronics.elec_num order by electronics.elec_num desc;';
        connection.query(query, (err, data) => {
          if(err) res.status(500).send({ result: [], message: 'selecting posts error: '+err });
          else res.status(200).send({ result : data, message: 'ok' });
          connection.release();
        });
    });
  })
});
router.get('/:elec_num', async function (req, res) {
    try {
        var connection = await pool.getConnection();
       let query = 'select electronics.elec_num as elec_num,user.id as id,electronics.title as title,electronics.kind as kind,electronics.product as product,electronics.price as price,electronics.period as period,electronics.time as time,electronics.explantion as explantion,electronics.addinformation as addinformation,count(elec_comment_num) as count,electronics.image as image,user.profileimage as profileimage from electronics left join elec_comment on electronics.elec_num=elec_comment.elec_num, user where electronics.elec_num=? and electronics.user_num=user.user_num group by electronics.elec_num order by electronics.elec_num desc;';
      let info = await connection.query(query,req.params.elec_num);
      let comment=`select  elec_comment.elec_comment_num as num,
      elec_comment.user_num as user_num,elec_comment.title as title,
elec_comment.price as price, 
user.id as sellerid,
user.profileimage as profileimage, 
elec_comment.local as local, 
elec_comment.method as method, 
elec_comment.period as period 
from user,electronics,elec_comment 
where elec_comment.elec_num=? 
and user.user_num=elec_comment.user_num
and elec_comment.elec_num=electronics.elec_num
group by elec_comment.elec_comment_num 
order by elec_comment.elec_comment_num desc`;
        let elcom=await connection.query(comment,req.params.elec_num);
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