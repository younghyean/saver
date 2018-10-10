const express = require('express');
const router = express.Router();
const aws = require('aws-sdk');
const dateformat = require('dateformat');
const moment = require('moment');
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
router.get('/:user_num', async function (req, res) {
    try {
        var connection = await pool.getConnection();
        let query=`select user.id as buyerid,message.content as content,message.time as time,message.user_num as user_num
from message, user
where message.user_num=user.user_num
and message.id=? order by mnum desc`;
       let  message= await connection.query(query,req.params.elec_num);
            res.status(200).send({ result: message, message: 'ok' }); 
    }
  catch (err) {
    res.status(500).send({ message: 'selecting user error' + err });
}
finally {
    pool.releaseConnection(connection);
}
});
module.exports = router;