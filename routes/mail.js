const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');
var smtpTransport = nodemailer.createTransport( {  
    service: 'Gmail',
    auth: {
        user: 'kkang9413@gmail.com',
        pass: 'tpdlqjWkd12'
    }
});


  router.post('/', function(req, res){
      var mailOptions = {  
    from: req.body.from,//'kkang9413@gmail.com'
    to: req.body.to, //보내는사람
    subject: req.body.subject,
    text: req.body.text
};
    smtpTransport.sendMail(mailOptions, function(error, response){
    if (error){
        console.log(error);
    } else {
      res.status(200).send({  message: 'ok' }); 
    }
    smtpTransport.close();
  });

});

module.exports = router;
