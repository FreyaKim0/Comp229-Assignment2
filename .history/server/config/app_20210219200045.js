// ----------installed 3rd party packages----------
let express = require('express'); // express module
let path = require('path'); // Acceess to the files (node.js)
let cors = require('cors'); // Take the http header from localhost to online 
let passport = require('passport');

// give access to .env file (switching from local to product server)
require('dotenv').config(); 

// create express app
let app = express();

// import the configuration of db (loginc of .env link) 
require('db.js');

// load backend db schema (table cloumns names and settings)
require('../models/user');
require('../models/book');
require('../models/store');
require('../models/store');

// import passport-jwt strategy
require('.config/passport')(passport);

// initialize passport
app.use(passport.initialize());

// use new express implementation instead the bodyparser.json()
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// allow our angular app to make HTTP requests to Express app
app.use(cors());

// location for ng build
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

// router links 
let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let booksRouter = require('../routes/book');
let ordersRouter = require('../routes/order');

// routing
app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/book-list', booksRouter);
app.use('/api/orders',ordersRouter);
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'../../public/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
 
// error handler
app.use(function(err, req, res, next) {

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
 
  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error'});
});


module.exports = app;


















// // Tom's
// let logger = require('morgan');
// let createError = require('http-errors');

// app.set('views', path.join(__dirname, '../views'));
// app.set('view engine', 'ejs'); // express  -e
// app.use(logger('dev'));

// //setup express session
// app.use(session({
//   secret: "SomeSecret",
//   saveUninitialized: false,
//   resave: false
// }));
 
// // initialize flash
// app.use(flash());
// app.use(passport.session());

