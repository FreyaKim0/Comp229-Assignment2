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

/*const options={
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
}*/