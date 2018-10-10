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
      let query = 'select brand.brand_num as brand_num,user.id as id,brand.title as title,brand.kind as kind,brand.product as product,brand.price as price,brand.period as period,brand.time as time,brand.image as image,count(distinct brand_comment_num) as count from brand left join brand_comment on brand.brand_num=brand_comment.brand_num, user where brand.user_num=user.user_num group by brand.brand_num order by brand.brand_num desc;';
        connection.query(query, (err, data) => {
          if(err) res.status(500).send({ result: [], message: 'selecting brand error: '+err });
          else res.status(200).send({ result : data, message: 'ok' });
          connection.release();
        });
    });
  })
});
router.get('/:brand_num', async function (req, res) {
    try {
        var connection = await pool.getConnection();
       let query = 'select brand.brand_num as brand_num,user.id as id,brand.title as title,brand.kind as kind,brand.product as product,brand.price as price,brand.period as period,brand.time as time,brand.explantion as explantion,brand.addinformation as addinformation,count(brand_comment_num) as count,brand.image as image,user.profileimage as profileimage from brand left join brand_comment on brand.brand_num=brand_comment.brand_num, user where brand.brand_num=? and brand.user_num=user.user_num group by brand.brand_num order by brand.brand_num desc;';
      let info = await connection.query(query,req.params.brand_num);
      let comment=`select brand_comment.brand_comment_num as num, 
      brand_comment.user_num as user_num,brand_comment.title as title,
brand_comment.price as price, 
user.id as sellerid,
user.profileimage as profileimage, 
brand_comment.local as local, 
brand_comment.method as method, 
brand_comment.period as period 
from user,brand,brand_comment 
where brand_comment.brand_num=?
and user.user_num=brand_comment.user_num
and brand_comment.brand_num=brand.brand_num
group by brand_comment.brand_comment_num 
order by brand_comment.brand_comment_num desc`;
        let elcom=await connection.query(comment,req.params.brand_num);
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
