var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var register = require('./routes/register');
var eleclist = require('./routes/eleclist');
var brandlist = require('./routes/brandlist');
var etclist = require('./routes/etclist');
var smartlist = require('./routes/smartlist');
var utilizelist = require('./routes/utilizelist');
var login = require('./routes/login');
var buying = require('./routes/buying');
var mainpage = require('./routes/mainpage');
var elecseller = require('./routes/elecseller');
var brandseller = require('./routes/brandseller');
var etcseller = require('./routes/etcseller');
var smartseller = require('./routes/smartseller');
var utilseller = require('./routes/utilseller');
var mydealwriter = require('./routes/mydealwriter');
var mydealcomment = require('./routes/mydealcomment');
var elecsellering = require('./routes/elecsellering');
var brandsellering = require('./routes/brandsellering');
var etcsellering = require('./routes/etcsellering');
var utilsellering = require('./routes/utilsellering');
var smartsellering = require('./routes/smartsellering');
var search = require('./routes/search');
var brandsearch = require('./routes/brandsearch');
var elecsearch = require('./routes/elecsearch');
var etcsearch = require('./routes/etcsearch');
var utilsearch = require('./routes/utilsearch');
var smartsearch = require('./routes/smartsearch');
var search1 = require('./routes/search1');
var brandsearch1 = require('./routes/brandsearch1');
var elecsearch1 = require('./routes/elecsearch1');
var etcsearch1 = require('./routes/etcsearch1');
var utilsearch1 = require('./routes/utilsearch1');
var smartsearch1 = require('./routes/smartsearch1');
var mypage = require('./routes/mypage');
var infoupdate = require('./routes/infoupdate');
var point = require('./routes/point');
var index = require('./routes/index');
var users = require('./routes/users');
var mail = require('./routes/mail');
var userdelete = require('./routes/userdelete');
var smartdelete = require('./routes/smartdelete');
var elecdelete = require('./routes/elecdelete');
var etcdelete = require('./routes/etcdelete');
var branddelete = require('./routes/branddelete');
var utildelete = require('./routes/utildelete');
var smartcomdelete = require('./routes/smartcomdelete');
var eleccomdelete = require('./routes/eleccomdelete');
var etccomdelete = require('./routes/etccomdelete');
var brandcomdelete = require('./routes/brandcomdelete');
var utilcomdelete = require('./routes/utilcomdelete');
var message = require('./routes/message');
var messagebox = require('./routes/messagebox');
var messagesender = require('./routes/messagesender');
var messagereciver = require('./routes/messagereciver');
var eleccomupdate = require('./routes/eleccomupdate');
var etccomupdate = require('./routes/etccomupdate');
var smartcomupdate = require('./routes/smartcomupdate');
var brandcomupdate = require('./routes/brandcomupdate');
var utilcomupdate = require('./routes/utilcomupdate');
var elecupdate = require('./routes/elecupdate');
var etcupdate = require('./routes/etcupdate');
var smartupdate = require('./routes/smartupdate');
var brandupdate = require('./routes/brandupdate');
var utilupdate = require('./routes/utilupdate');
var logintest = require('./routes/logintest');
var app = express();
var jwt = require('jsonwebtoken');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use( function(req, res, next){
  var token = req.headers.token;
  if(req){
    next();
  } else{
    if(!token) {
      console.log('no token');
      res.status(400).send({message: 'no token'});
      return;
    }
    jwt.verify(token, req.app.get('jwt-secret'), (err, decoded) => {
      if(err){
        res.status(401).send({message: err.message });
        return;
      }
      else{
        req.id = decoded.id;
        console.log('decoded id : ',req.id);
        next();
      }
    });
  }
});


app.use('/', index);
app.use('/users', users);
app.use('/register', register);
app.use('/buying', buying);
app.use('/login', login);
app.use('/eleclist', eleclist);
app.use('/brandlist', brandlist);
app.use('/etclist', etclist);
app.use('/smartlist', smartlist);
app.use('/utilizelist', utilizelist);
app.use('/elecseller', elecseller);
app.use('/brandseller', brandseller);
app.use('/etcseller', etcseller);
app.use('/smartseller', smartseller);
app.use('/utilseller', utilseller);
app.use('/mydealwriter', mydealwriter);
app.use('/mydealcomment', mydealcomment);
app.use('/elecsellering', elecsellering);
app.use('/brandsellering', brandsellering);
app.use('/etcsellering', etcsellering);
app.use('/utilsellering', utilsellering);
app.use('/smartsellering', smartsellering);
app.use('/search', search);
app.use('/brandsearch', brandsearch);
app.use('/elecsearch', elecsearch);
app.use('/etcsearch', etcsearch);
app.use('/utilsearch', utilsearch);
app.use('/smartsearch', smartsearch);
app.use('/search1', search1);
app.use('/brandsearch1', brandsearch1);
app.use('/elecsearch1', elecsearch1);
app.use('/etcsearch1', etcsearch1);
app.use('/utilsearch1', utilsearch1);
app.use('/smartsearch1', smartsearch1);
app.use('/mainpage', mainpage);
app.use('/mail', mail);
app.use('/mypage', mypage);
app.use('/infoupdate', infoupdate);
app.use('/point', point);
app.use('/userdelete', userdelete);
app.use('/smartdelete', smartdelete);
app.use('/elecdelete', elecdelete);
app.use('/etcdelete', etcdelete);
app.use('/branddelete', branddelete);
app.use('/utildelete', utildelete);
app.use('/smartcomdelete', smartcomdelete);
app.use('/eleccomdelete', eleccomdelete);
app.use('/etccomdelete', etccomdelete);
app.use('/brandcomdelete', brandcomdelete);
app.use('/utilcomdelete', utilcomdelete);
app.use('/message', message);
app.use('/messagebox', messagebox);
app.use('/messagesender', messagesender);
app.use('/messagereciver', messagereciver);
app.use('/eleccomupdate', eleccomupdate);
app.use('/etccomupdate', etccomupdate);
app.use('/smartcomupdate', smartcomupdate);
app.use('/brandcomupdate', brandcomupdate);
app.use('/utilcomupdate', utilcomupdate);
app.use('/elecupdate', elecupdate);
app.use('/etcupdate', etcupdate);
app.use('/smartupdate', smartupdate);
app.use('/brandupdate', brandupdate);
app.use('/utilupdate', utilupdate);
app.use('/logintest', logintest);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
