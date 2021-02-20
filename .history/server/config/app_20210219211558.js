// ----------installed 3rd party packages----------
let createError = require('http-errors'); // Tom's

let express = require('express'); // express module
let path = require('path'); // Acceess to the files (node.js)
let logger = require('morgan'); // Tom's
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

// Tom's
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs'); // express  -e
app.use(logger('dev'));

// T setup express session
app.use(session({
  secret: "SomeSecret",
  saveUninitialized: false,
  resave: false
}));
 
// T initialize flash
app.use(flash());
app.use(passport.session());




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




//-----------------------DB------------------------
/*module.exports = 
{
    //"URI":"mongodb://localhost/book_store",
    "Secret":"SomeSecret",
    "URI":"mongodb+srv://freyakim:popo2929@mongodbserver.aj3jp.mongodb.net/book_store?retryWrites=true&w=majority"
}
*/



const mongoose = require('mongoose');
require('dotenv').config();

/**
// database setup
let mongoose = require('mongoose');

// point mongoose to the DB URI
mongoose.connect(DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', ()=>{
  console.log('Connected to MongoDB...');
});
* -------------- DATABASE ----------------
*/

/**
* Connect to MongoDB Server using the connection string in the `.env` file.  To implement this, place the following
* string into the `.env` file
*
* DB_STRING=mongodb://<user>:<password>@localhost:27017/database_name
* DB_STRING_PROD=<your production database string>
*/

const devConnection = process.env.DB_STRING; // I am useing the product string already
const prodConnection = process.env.DB_STRING; 

// Connect to the correct environment database
if (process.env.NODE_ENV === 'production') {

   mongoose.connect(prodConnection, {

       useNewUrlParser: true,
       useUnifiedTopology: true
   });

   mongoose.connection.on('connected', () => {
       console.log('Database connected(develope)');
   });

} else {
   mongoose.connect(devConnection, {
       useNewUrlParser: true,
       useUnifiedTopology: true
   });
   mongoose.connection.on('connected', () => {
       console.log('Database connected(Product)');
   });
}

//-----------------------Generate key----------------------

/*
* This module will generate a public and private keypair 
* and save to current directory
*
* Make sure to save the private key elsewhere after generated!
*/


const crypto = require('crypto');
const fs = require('fs');


function genKeyPair() {

   // Generates an object where the keys are stored in properties
   // `privateKey` and `publicKey`

   const keyPair = crypto.generateKeyPairSync('rsa', {
       modulusLength: 4096, // bits - standard for RSA keys
       publicKeyEncoding: {
           type: 'pkcs1', // "Public Key Cryptography Standards 1"
           format: 'pem' // Most common formatting choice
       },
       privateKeyEncoding: {
           type: 'pkcs1', // "Public Key Cryptography Standards 1"
           format: 'pem' // Most common formatting choice
       }
   });


   // Create the public key file
   fs.writeFileSync(__dirname + '/id_rsa_pub.pem', keyPair.publicKey);

   // Create the private key file
   fs.writeFileSync(__dirname + '/id_rsa_priv.pem', keyPair.privateKey);
}

// Generate the keypair
genKeyPair();

//-------------passport----------------------
const fs = require('fs');
const path = require('path');
const User = require('mongoose').model('User');
const JWTStrategy = require('passport-jwt').Strategy;

// extract jwt from Http header
const ExtractJwt = require('passport-jwt').ExtractJwt;

const pathToKey = path.join(__dirname,'..','id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey,'utf8');

//----------All options from documentation---------
// const passportJWTOptions={
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey: PUB_KEY || DB.Secret,
//     issuer:'enter issuer here',
//     audience:'enter audience here',
//     algorithms:['RS256'],
//     ingoreExpiration: false,
//     passReqToCallback: false,
//     jsonWebTokenOptions:{
//         complete:flase,
//         clockTolerance:'',
//         maxAge:'2d',
//         clockTimestamp:'100',
//         nonce:'string here for OpenID'
//     }   
// }

const options={
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secret: PUB_KEY,
    algorithms: ['RS256']
};

// Using passport-jwt logic
// the options will go through the authentication, into databse,
// put the correct user info in payload , then return result
const strategy = new JWTStrategy(options,(payload,done)=>{
    User.findOne({ _id: payload.sub})
        .then((user)=>{
           if(user){
               return done(null,user); //null error, yes user
           }
           else{
               return done(null,flase); //null error, wrong user
           }
        })
        .catch(err=>done(err,null)); // yes error, null user
});

module.exports=(passport)=>{
    passport.use(strategy);
}

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







