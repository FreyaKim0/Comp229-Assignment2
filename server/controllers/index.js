let express = require("express");
let passport = require("passport");
let jwt = require("jsonwebtoken");

let mongoose = require("mongoose");
let DB = require("../config/db");

let router = express.Router();
let userModel = require("../models/user");
let User = userModel.User;

// ====== Register ======
module.exports.processRegisterPage = (req, res, next) => {
  // instantiate a user object from Ngform
  let newUser = new User({
    username: req.body.username,
    email: req.body.email,
    displayName: req.body.displayName,
  });

  User.register(newUser, req.body.password, (err) => {
    if (err) {
      if (err.name === "UserExistsError") {
        return res.json({
          success: false,
          msg: "This user already exsist, please try another",
        });
      } else {
        return res.json({
          success: false,
          msg: "Registration process failed, refresh and try again",
        });
      }
    } else {
      // If no error exists, then registration is successful.
      return res.json({
        success: true,
        msg: "Registration success",
      });
    }
  });
};
// ====== login logout ======
module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.json({ success: false, msg: "server error" });
    }
    if (!user) {
      return res.json({ success: false, msg: "user or password is not valid" });
    }
    req.login(user, (err) => {
      if (err) {
        return res.json({
          success: false,
          msg: "password and username are correct, but server error while logging",
        });
      }
      const payload = {
        id: user._id,
        displayName: user.displayName,
        username: user.username,
        email: user.email,
      };

      const authToken = jwt.sign(payload, DB.Secret, {
        expiresIn: 604800 /* =expired in a week */,
      });

      // Return the user data that matched and returen in to the client side
      return res.json({
        success: true,
        msg: "User Logged in Successfully!",
        user: {
          id: user._id,
          displayName: user.displayName,
          username: user.username,
          email: user.email,
        },
        token: authToken,
      });
    });
  })(req, res, next);
};

module.exports.performLogout = (req, res, next) => {
  req.logout();
  res.json({ success: true, msg: "User Successfully Logged out!" });
};

// ====== main pages ======
module.exports.displayHomePage = (req, res, next) => {
  res.render("index", {
    title: "Home",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.displayAboutPage = (req, res, next) => {
  res.render("index", {
    title: "About",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.displayProductsPage = (req, res, next) => {
  res.render("index", {
    title: "Products",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.displayServicesPage = (req, res, next) => {
  res.render("index", {
    title: "Services",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.displayContactPage = (req, res, next) => {
  res.render("index", {
    title: "Contact",
    displayName: req.user ? req.user.displayName : "",
  });
};
