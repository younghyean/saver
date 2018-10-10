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
       let query = 'select util_comment.util_comment_num as util_comment_num,user.id as sellerid,util_comment.title as title,util_comment.price as price,util_comment.period as period,util_comment.local as local,util_comment.method as method,util_comment.addinformation as addinformation,user.profileimage as profileimage from util_comment,user where util_comment_num=? and util_comment.user_num=user.user_num;';
      let comment = await connection.query(query,req.params.num);
            res.status(200).send({ result: comment[0], message: 'ok' });
    }
  catch (err) {
    res.status(500).send({ message: 'selecting util_comment error' + err });
}
finally {
    pool.releaseConnection(connection);
}
});
module.exports = router;
