var express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let jwt = require("jsonwebtoken");
let passport = require("passport");

let userController = require("../controllers/users");

// helper function for guard purposes
function requireAuth(req, res, next) {
  // check if the user is logged in (only HR can create new user)
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

/* GET users listing. */
router.get("/", userController.displayUserList);

module.exports = router;
