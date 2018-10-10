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
router.get('/:etcsearch', async function (req, res) {
    try {
        var connection = await pool.getConnection();
        let query = `select etc.etc_num as num,etc.category as category,user.id as id,etc.title as title,etc.kind as kind,etc.product as product,etc.price as price,etc.period as period,etc.time as time, 
count(distinct etc_comment_num) as count,etc.image as image 
from etc left join etc_comment on etc.etc_num=etc_comment.etc_num, user
where etc.user_num=user.user_num and etc.product
like ?
group by etc.etc_num
order by etc.etc_num desc;`;
        let data=await connection.query(query,'%' + req.params.etcsearch + '%');
        res.status(200).send({ result:data, message: 'ok' });
    }
    catch (err) {
        res.status(500).send({ message: 'selecting etc error' + err });
    }
    finally {
        pool.releaseConnection(connection);
    }
});
module.exports = router;
