
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
router.get('/:smartsearch', async function (req, res) {
    try {
        var connection = await pool.getConnection();
        let query = `select smart.smart_num as smart_num,smart.category as category,user.id as id,smart.title as title,smart.kind as kind,smart.product as product,smart.price as price,smart.period as period,smart.time as time, 
count(distinct smart_comment_num) as count,smart.image as image  
from smart left join smart_comment on smart.smart_num=smart_comment.smart_num, user
where smart.user_num=user.user_num and smart.product
like ?
group by smart.smart_num
order by smart.smart_num desc;`;
        let data=await connection.query(query,'%' + req.params.smartsearch + '%');
        res.status(200).send({ result:data, message: 'ok' });
    }
    catch (err) {
        res.status(500).send({ message: 'selecting user error' + err });
    }
    finally {
        pool.releaseConnection(connection);
    }
});

module.exports = router;
