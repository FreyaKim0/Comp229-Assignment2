const e = require('express');
let express=require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//define the user Model instance
let userModel = require('../models/user');
let User = userModel.User; //alias

module.exports.displayHomePage = (req,res,next)=>{
    res.render('index',{title:'HOME',displayName:req.user ? req.user.displayName:''});
}

module.exports.displayAboutPage = (req,res,next)=>{
    res.render('index',{title:'ABOUT',displayName:req.user ? req.user.displayName:''});
}

module.exports.displayArtPage = (req,res,next)=>{
    res.render('index',{title:'BUSINESS CONTACT',displayName:req.user ? req.user.displayName:''});
}

module.exports.displayServicePage = (req,res,next)=>{
    res.render('index',{title:'SERVICE',displayName:req.user ? req.user.displayName:''});
}

module.exports.displayContactPage = (req,res,next)=>{
    res.render('contact',{title:'CONTACT',displayName:req.user ? req.user.displayName:''});
}

module.exports.displayProjectPage = (req,res,next)=>{
    res.render('index',{title:'PROJECT',displayName:req.user ? req.user.displayName:''});
}

module.exports.displayLoginPage = (req,res,next)=>{
    //check if user is already logged in
    if(!req.user)
    {
        res.render('auth/login',
        {
            title:"LOGIN",
            messages:req.flash('loginMessage'),
            displayName:req.user?req.user.displayName:''
        })
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req,res,next)=>{
 passport.authenticate('local',
 (err,user,info)=>{ 
   // server err?
   if(err)
   {
       return next(err);
   }
   // is there a user login error?
   if(!user)
   {
       req.flash('loginMessage','Authentication Error');
       return res.redirect('/login');
   }
   req.login(user,(err)=>{
       //server error?
       if(err)
       {
           return next(err);
       }
       return res.redirect('/book-list');
    });

   })(req,res,next);
}

module.exports.displayRegisterPage =(req,res,next)=>{
    if(!req.user){
        res.render('auth/register',{
            title:'Resigter',
            messages: req.flash('registerMessage'),
            displayName: req.user? req.user.displayName:''
        });
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processRegisterPage=(req,res,next)=>{
    // instantiate a user object
    let newUser=new User({
        username:req.body.username,
        //password:req.body.password
        email:req.body.email,
        displayName:req.body.displayName
    });

    User.register(newUser,req.body.password,(err)=>{
        if(err){
            console.log("Error: Inserting new user");
            if(err.name=="UserExisistError"){
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log('Error:User Already Exists!')
            }
            return res.render('auth/register',
            {
                title:'Resigter',
                messages: req.flash('registerMessage'),
                displayName: req.user? req.user.displayName:''
            });
        }
        else
        {
             // if no error exsists, then regiatration is successful
             //redirect the user and authenticate them

             return passport.authenticate('local')(req,res,()=>{
                  res.redirect('/book-list')
             });
        }
    });
}

module.exports.performLogout = (req,res,next)=>{
    req.logout();
    res.redirect('/');
}