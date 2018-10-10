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
       let query = 'select elec_comment.elec_comment_num as num,user.id as sellerid,elec_comment.title as title,elec_comment.price as price,elec_comment.period as period,elec_comment.local as local,elec_comment.method as method,elec_comment.addinformation as addinformation,user.profileimage as profileimage from elec_comment,user where elec_comment_num=? and elec_comment.user_num=user.user_num;';
      let comment = await connection.query(query,req.params.num);
            res.status(200).send({ result: comment[0], message: 'ok' }); 
    }
  catch (err) {
    res.status(500).send({ message: 'selecting elec_comment error' + err });
}
finally {
    pool.releaseConnection(connection);
}
});
module.exports = router;