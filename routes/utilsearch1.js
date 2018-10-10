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

router.get('/:utilsearch', async function (req, res) {
    try {
        var connection = await
        pool.getConnection();
        let query = `select utilize.util_num as util_num,utilize.category as category,user.id as id,utilize.title as title,utilize.kind as kind,utilize.product as product,utilize.price as price,utilize.period as period,utilize.time as time, 
count(distinct util_comment_num) as count,utilize.image as image 
from utilize left join util_comment on utilize.util_num=util_comment.util_num, user
where utilize.user_num=user.user_num and utilize.product
like ?
group by utilize.util_num
order by utilize.util_num desc;`;
        let data = await
        connection.query(query, '%' + req.params.utilsearch + '%');
        res.status(200).send({result: data, message: 'ok'});
    }
    catch (err) {
        res.status(500).send({message: 'selecting user error' + err});
    }
    finally {
        pool.releaseConnection(connection);
    }
});
module.exports = router;
