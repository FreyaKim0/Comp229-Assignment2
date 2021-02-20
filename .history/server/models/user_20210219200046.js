// require modules for the User Model
let mongoose = require('mongoose');

let User = mongoose.Schema
(
    {
       _id: String,
       username: String,
       email: String,
       displayName: String,      
       created: 
       {
            type: Date,
            default: Date.now
       },
       update: 
       {
            type: Date,
            default: Date.now
       },
       hash:String,
       salt:String
    },
    {
        collection: "users"
    }
);

// configure options for User Model

let options = ({ missingPasswordError: 'Wrong / Missing Password'});

User.plugin(passportLocalMongoose, options);

/*module.exports.User =*/ mongoose.model('User', User);