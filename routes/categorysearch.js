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
router.get('/:product', async function (req, res) {
    try {
        var connection = await pool.getConnection();
       let query = `select user.id as id,electronics.title as title,electronics.kind as kind,electronics.product as product,electronics.price as price,electronics.period as period,electronics.time as time, 
count(distinct elec_comment_num) as count 
from electronics left join elec_comment on electronics.elec_num=elec_comment.elec_num, user
where electronics.user_num=user.user_num and electronics.product
like "%?%"
group by electronics.elec_num
order by electronics.elec_num desc;`;
    let data=await connection.query(query,req.params.product);
    
     let query1 =`select user.id as id,brand.title as title,brand.kind as kind,brand.product as product,brand.price as price,brand.period as period,brand.time as time, 
count(distinct brand_comment_num) as count 
from brand left join brand_comment on brand.brand_num=brand_comment.brand_num, user
where brand.user_num=user.user_num and brand.product
like "%?%"
group by brand.brand_num
order by brand.brand_num desc;`;
      let data1=await connection.query(query1,req.params.user_num);

      let query2 =`select user.id as id,etc.title as title,etc.kind as kind,etc.product as product,etc.price as price,etc.period as period,etc.time as time, 
count(distinct etc_comment_num) as count 
from etc left join etc_comment on etc.etc_num=etc_comment.etc_num, user
where etc.user_num=user.user_num and etc.product
like "%?%"
group by etc.etc_num
order by etc.etc_num desc;`;
      let data2=await connection.query(query2,req.params.user_num);

      let query3 =`select user.id as id,smart.title as title,smart.kind as kind,smart.product as product,smart.price as price,smart.period as period,smart.time as time, 
count(distinct smart_comment_num) as count 
from smart left join smart_comment on smart.smart_num=smart_comment.smart_num, user
where smart.user_num=user.user_num and smart.product
like "%?%"
group by smart.smart_num
order by smart.smart_num desc;`;
      let data3=await connection.query(query3,req.params.user_num);

      let query4 =`select user.id as id,utilize.title as title,utilize.kind as kind,utilize.product as product,utilize.price as price,utilize.period as period,utilize.time as time, 
count(distinct util_comment_num) as count 
from utilize left join util_comment on utilize.util_num=util_comment.util_num, user
where utilize.user_num=user.user_num and utilize.product
like "%?%"
group by utilize.util_num
order by utilize.util_num desc;`;
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
