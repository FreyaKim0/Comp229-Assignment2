module.exports = {
  Backend: "http://localhost:3500/images/",
  URI: "mongodb://localhost/book_store",
  Secret: "SomeSecret",
  //"URI":"mongodb+srv://freyakim:popo2929@mongodbserver.aj3jp.mongodb.net/book_store?retryWrites=true&w=majority"
};

/*
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
/*
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
*/
