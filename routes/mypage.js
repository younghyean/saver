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
router.get('/:user_num', async function (req, res) {
    try {
        var connection = await pool.getConnection();
       let query = 'select id,name,profileimage,point from user where user_num=?;';
    let data=await connection.query(query,req.params.user_num);
res.status(200).send({result:data[0],  message: "ok" }); 
 }
  catch (err) {
    res.status(500).send({ message: 'selecting user error' + err });
}
finally {
    pool.releaseConnection(connection);
}
});
  router.put('/:user_num',upload.single('profileimage'),async function (req, res) {
  try {
    var connection = await pool.getConnection();
    const update1 = 'update user set profileimage=? where user_num=?;';
    let profileimage = await connection.query(update1,[ req.file ? req.file.location : null, req.params.user_num]);

      res.status(201).send({
        message: "ok"
      });
    } 
  catch (err) {
    res.status(500).send({ message: 'update user error' + err });
  }
  finally {
    pool.releaseConnection(connection);
  }
});
module.exports = router;
