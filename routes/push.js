const express = require('express');
const router = express.Router();
const pool = require('../config/db_pool.js');
const aws = require('aws-sdk');
const moment = require('moment');
const FCM = require('fcm-push');
var serverKey = require('../config/serverKey');
var fcm = new FCM(serverKey);

function callAlarm(token, device, msg){
  var message = {
      to: token, // required fill with device token or topics
      collapse_key: 'your_collapse_key',
      data: {
          your_custom_data_key: msg //메세지 날리는 경우
            //내 글 댓글알람  =:user.id+님이 댓글을 남겼습니다.
            //const msg = user.id+"님이 댓글을 남겼습니다.";
      },
      notification: {
          title: 'Title of your push notification',
          body: 'Body of your push notification'
      }
  };
  fcm.send(message)
      .then(function(response){
          console.log("Successfully sent with response: ", response);
      })
      .catch(function(err){
          console.log("Something has gone wrong!");
          console.error(err);
      });
}

module.exports = router;