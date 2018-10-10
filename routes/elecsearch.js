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
router.get('/:elecsearch', async function (req, res) {
    try {
        var connection = await pool.getConnection();
       let query ='select electronics.elec_num as num,electronics.category as category,user.id as id,electronics.title as title,electronics.kind as kind,electronics.product as product,electronics.price as price,electronics.period as period,electronics.time as time, count(distinct elec_comment_num) as count,electronics.image as image from electronics left join elec_comment on electronics.elec_num=elec_comment.elec_num, user where electronics.user_num=user.user_num and electronics.product like ? group by electronics.elec_num order by electronics.elec_num desc;';
        let data=await connection.query(query,'%' + req.params.elecsearch + '%');
        res.status(200).send({ result:data, message: 'ok' });
    }
    catch (err) {
            res.status(500).send({ message: 'selecting electronics error' + err });
        }
    finally {
            pool.releaseConnection(connection);
        }
    });

module.exports = router;
