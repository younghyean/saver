const mysql = require('mysql');
const pool = require('../config/db_pool');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt-nodejs');
const async = require('async');
const jwtModule = require('../config/jwtModule');

router.post('/', function(req, res) {
  var resultJson = {
    message : '',
    method : '',
    member_token : ''
  };

  var signInViaEmail_task = [
    //1. connection 가져오기
    function(callback) {
      pool.getConnection(function(err, connection) {
        if(err) {
          console.log("getConnection error : ",err);
          callback(err, connection, null);
        }
        else callback(null, connection);
      });
    },
    //2. 이미 존재하는 회원인지 확인
    function(connection, callback) {
      let duplicate_check_query = "select * from user where id = ?";
      connection.query(duplicate_check_query, req.body.id, function(err, data) {
        if(err){
          console.log("duplicate check select query error : ",err);
          callback(err,connection, null);
        }else{
          if(data.length==0){   // 해당회원이 없는 경우
            callback(null, connection);
          }
          else{   // 해당회원이 있으면 이미 가입한 계정이므로 insert 시키면 안됨
            res.status(201).send({
              message : "signup failure",
              detail : "duplicated id"
            });
            callback('ok');
          }
        }
      });
    },
    //4. 받아온 회원정보와 bcrypt로 암호화된 password를 DB에 insert한다.
    function(connection,callback) {
      let insert_query =
      "insert into user "+
      "(id, password, name, birth, phone, bankname, account,local,method,card,visa,wireless,calling) "+
      "values ( ?,?,?,?,?, ?, ?, ?, ?, ?, ?,?,?)";
      let params = [
    req.body.id,
    req.body.password,
    req.body.name,
    req.body.birth,
    req.body.phone,
    req.body.bankname,
    req.body.account,
    req.body.local,
    req.body.method,
    req.body.card,
    req.body.visa,
    req.body.wireless,
    req.body.calling
      ];
      connection.query(insert_query, params, function(err, data) {
        if(err) {
          console.log("insert query error : ", err);
          callback(err, connection, null);
        }
        else{
          resultJson.message = 'signup success';
          resultJson.method = 'id';
          callback(null, connection);
        }
      });
    },
    //5. 회원가입 성공 후, 토큰 발급
    function(connection, callback) {
      let select_query = "select user_num from user where id = ?";
      connection.query(select_query, req.body.id, function(err, data) {
        if(err){
          console.log("select query error while makeToken : ",err);
          callback(err,connection, null);
        }else{
          if(data.length==0){   // 해당회원이 없는 경우
            res.status(201).send({
              message : "signup failure",
              detail : "while making token"
            });
            callback(null, connection);
          }
          else{   // 해당회원이 있으면 토큰 발급
            let tokenString = jwtModule.makeToken(data[0]);
            resultJson.member_token = tokenString;
            res.status(201).send(resultJson);
            callback(null, connection);
          }
        }
      });
    },

  ];

  async.waterfall(signInViaEmail_task, function(err, connection, result) {
    if(connection){
      connection.release();
    }

    if(err){
      if(err!='ok'){
        console.log("async.waterfall error : ",err);
        res.status(503).send({
          message : 'failure',
          detail : 'internal server error'
        });
      }
    }
    else {
      console.log(result);
    }
  });
});
module.exports = router;
