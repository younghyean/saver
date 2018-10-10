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
       let query = 'select * from user where user_num = ?';
      let info = await connection.query(query,req.params.user_num);
            res.status(200).send({ result:info[0], message: 'ok' }); 
    }
  catch (err) {
    res.status(500).send({ message: 'selecting user error' + err });
}
finally {
    pool.releaseConnection(connection);
}
});

router.put('/:user_num', async function (req, res) {
  try {
    var connection = await pool.getConnection();
    const password = req.body.password;
    const name = req.body.name;
    const birth = req.body.birth;
    const phone = req.body.phone;
    const bankname = req.body.bankname;
    const account = req.body.account;
     const local = req.body.local;
    const method = req.body.method;
    const card = req.body.card;
    const visa = req.body.visa;
    const wireless = req.body.wireless;
    const calling = req.body.calling;
       let userinfo = {
        password:password,
        name:name,
        birth:birth,
        phone:phone,
        bankname:bankname,
        account:account,
         local:local,
     method:method,
     card:card,
     visa:visa,
     wireless:wireless,
     calling:calling
      };
    const updatenewuser = 'update  user set ? where user_num=?';
      let inserted = await connection.query(updatenewuser,[userinfo,req.params.user_num]);
      res.status(201).send({
        message: "ok"
      });
    } 
  
  catch (err) {
    res.status(500).send({ message: 'selecting user error' + err });
  }
  finally {
    pool.releaseConnection(connection);
  }
});
module.exports = router;