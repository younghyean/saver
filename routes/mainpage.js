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

router.get('/', async function (req, res) {
    try {
        var connection = await pool.getConnection();
       let query = 'select count(user_num) as usercount from saver.user;';
      let usercount= await connection.query(query);
      console.log(usercount);
      let query11='select sum(cnt) as allcommentCount from(select count(elec_comment_num) as cnt from electronics,elec_comment where electronics.elec_num = elec_comment.elec_num union all select count(brand_comment_num) as cnt from brand_comment,brand where brand.brand_num=brand_comment.brand_num union all select count(smart_comment_num) as cnt from smart, smart_comment where smart.smart_num= smart_comment.smart_num union all select count(etc_comment_num) as cnt from etc_comment,etc where etc.etc_num=etc_comment.etc_num union all select count(util_comment_num) as cnt from util_comment,utilize where utilize.util_num=util_comment.util_num)as contt;';
      let allcommentCount= await connection.query(query11);
      let query22='select sum(cnt) as informationCount from(select count(elec_num) as cnt from electronics union all select count(brand_num) as cnt from brand union all select count(smart_num) as cnt from smart union all select count(etc_num) as cnt from etc union all select count(util_num) as cnt from utilize)as contt;';
      let informationCount=await connection.query(query22);
      let query1='SELECT elec_num,title,period,kind,product,price from saver.electronics where sec_to_time(unix_timestamp(period)-unix_timestamp(now()))>=0 order by sec_to_time(unix_timestamp(period)-unix_timestamp(now())) asc, time asc limit 2 ';
      let query2='SELECT brand_num,title,period,kind,product,price from saver.brand where sec_to_time(unix_timestamp(period)-unix_timestamp(now()))>=0 order by sec_to_time(unix_timestamp(period)-unix_timestamp(now())) asc, time asc limit 2';      
      let query3='SELECT smart_num,title,period,kind,product,price from saver.smart where sec_to_time(unix_timestamp(period)-unix_timestamp(now()))>=0 order by sec_to_time(unix_timestamp(period)-unix_timestamp(now())) asc, time asc limit 2 '; 
      let query4='SELECT util_num,title,period,kind,product,price from saver.utilize where sec_to_time(unix_timestamp(period)-unix_timestamp(now()))>=0 order by sec_to_time(unix_timestamp(period)-unix_timestamp(now())) asc, time asc limit 2 '; 
      let query5='SELECT etc_num,title,period,kind,product,price from saver.etc where sec_to_time(unix_timestamp(period)-unix_timestamp(now()))>=0 order by sec_to_time(unix_timestamp(period)-unix_timestamp(now())) asc, time asc limit 2'; 
      let magam1=await connection.query(query1);
       let magam2=await connection.query(query4); 
       let magam3=await connection.query(query2);
        let magam4=await connection.query(query3);
        let magam5=await connection.query(query5);
res.status(200).send({usercount : usercount[0].usercount,
  allcommentCount:allcommentCount[0].allcommentCount,
  informationCount:informationCount[0].informationCount,result:{magam1,magam2,magam3,magam4,magam5},message: 'ok' }); 
 }
  catch (err) {
    res.status(500).send({ message: 'selecting user error' + err });
}
finally {
    pool.releaseConnection(connection);
}
});

module.exports = router;