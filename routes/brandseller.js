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
router.get('/:num', async function (req, res) {
    try {
        var connection = await pool.getConnection();
       let query = 'select brand_comment.brand_comment_num as num,user.id as sellerid,brand_comment.title as title,brand_comment.price as price,brand_comment.period as period,brand_comment.local as local,brand_comment.method as method,brand_comment.addinformation as addinformation,user.profileimage as profileimage from brand_comment,user where brand_comment_num=? and brand_comment.user_num=user.user_num;';
      let comment = await connection.query(query,req.params.num);
            res.status(200).send({ result: comment[0], message: 'ok' });
    }
  catch (err) {
    res.status(500).send({ message: 'selecting brand_comment error' + err });
}
finally {
    pool.releaseConnection(connection);
}
});
module.exports = router;
