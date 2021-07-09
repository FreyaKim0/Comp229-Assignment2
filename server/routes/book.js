var express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let jwt = require("jsonwebtoken");
let passport = require("passport");

let bookController = require("../controllers/book");
let storage = require("../helper/storage");

// helper function for guard purposes
function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

/* GET Route for the Book List page - READ Operation */
router.get("/", bookController.displayBookList);

/* POST Route for processing the Add page - CREATE Operation */
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  storage,
  bookController.processAddPage
);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post(
  "/edit/:id",
  storage,
  passport.authenticate("jwt", { session: false }),
  bookController.processEditPage
);

/* POST Route for processing the Edit page - UPDATE Without new image Operation */
router.post(
  "/editWithSameImage/:id",
  passport.authenticate("jwt", { session: false }),
  bookController.processEditWithSameImagePage
);

/* GET to perform  Deletion - DELETE Operation */
router.get(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  bookController.performDelete
);

module.exports = router;
