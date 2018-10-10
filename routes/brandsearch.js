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

router.get('/:brandsearch', async function (req, res) {
    try {
        var connection = await pool.getConnection();
        let query = `select brand.brand_num as num,category as category,user.id as id,brand.title as title,brand.kind as kind,brand.product as product,brand.price as price,brand.period as period,brand.time as time, 
count(distinct brand_comment_num) as count,brand.image as image  
from brand left join brand_comment on brand.brand_num=brand_comment.brand_num, user
where brand.user_num=user.user_num and brand.product
like  ?
group by brand.brand_num
order by brand.brand_num desc;`;

        let data=await connection.query(query,'%' + req.params.brandsearch + '%');
        res.status(200).send({ result:data, message: 'ok' });
    }
    catch (err) {
        res.status(500).send({ message: 'selecting brand search error' + err });
    }
    finally {
        pool.releaseConnection(connection);
    }
});

module.exports = router;
