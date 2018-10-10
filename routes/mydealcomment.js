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
       let query = `select electronics.elec_num as num,user.id as id,electronics.category as category,electronics.title as title,electronics.kind as kind,electronics.product as product,electronics.price as price,electronics.period as period,electronics.time as time,electronics.image as image,count(distinct elec_comment_num) as count from electronics,elec_comment,user where elec_comment.elec_num=electronics.elec_num and electronics.user_num=user.user_num and elec_comment.user_num=? group by electronics.elec_num order by electronics.elec_num desc;`;
    let data=await connection.query(query,req.params.user_num);
     let query1 =`select brand.brand_num as num,user.id as id,brand.category as category,brand.title as title,brand.kind as kind,brand.product as product,brand.price as price,brand.period as period,brand.time as time,brand.image as image,count(distinct brand_comment_num) as count from brand,brand_comment,user where brand_comment.brand_num=brand.brand_num and brand.user_num=user.user_num and brand_comment.user_num=? group by brand.brand_num order by brand.brand_num desc;`;
      let data1=await connection.query(query1,req.params.user_num);
      let query2 =`select etc.etc_num as num,user.id as id,etc.category as category,etc.title as title,etc.kind as kind,etc.product as product,etc.price as price,etc.period as period,etc.time as time,etc.image as image,count(distinct etc_comment_num) as count from etc,etc_comment,user where etc_comment.etc_num=etc.etc_num and etc.user_num=user.user_num and etc_comment.user_num=? group by etc.etc_num order by etc.etc_num desc;`;
      let data2=await connection.query(query2,req.params.user_num);
      let query3 =`select smart.smart_num as num,user.id as id,smart.category as category,smart.title as title,smart.kind as kind,smart.product as product,smart.price as price,smart.period as period,smart.time as time,smart.image as image,count(distinct smart_comment_num) as count from smart,smart_comment,user where smart_comment.smart_num=smart.smart_num and smart.user_num=user.user_num and smart_comment.user_num=? group by smart.smart_num order by smart.smart_num desc;`;
      let data3=await connection.query(query3,req.params.user_num);
      let query4 =`select utilize.util_num as num,user.id as id,utilize.category as category,utilize.title as title,utilize.kind as kind,utilize.product as product,utilize.price as price,utilize.period as period,utilize.time as time,utilize.image as image,count(distinct util_comment_num) as count from utilize,util_comment,user where util_comment.util_num=utilize.util_num and utilize.user_num=user.user_num and util_comment.user_num=? group by utilize.util_num order by utilize.util_num desc;`;
      let data4=await connection.query(query4,req.params.user_num);
      array=[];
      for(let i of data) array.push(i);
     for(let i of data1) array.push(i);
     for(let i of data2) array.push(i);
     for(let i of data3) array.push(i);
     for(let i of data4) array.push(i);
res.status(200).send({ result:array, message: 'ok' }); 
 }
  catch (err) {
    res.status(500).send({ message: 'selecting user error' + err });
}
finally {
    pool.releaseConnection(connection);
}
});
module.exports = router;