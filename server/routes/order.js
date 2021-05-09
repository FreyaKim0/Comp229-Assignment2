var express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let jwt = require("jsonwebtoken");
let passport = require("passport");

let orderController = require("../controllers/order");

// Authentication
function requireAuth(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

/* Get order list page - read opreation */
router.get("/", orderController.displayOrderList);

/* POSt route for processing the add order page */
router.post("/add", orderController.processAddPage);

/* POSt request = update the database with data from the Edit order page */
router.post(
  "/edit/:id/:store/:originalShipping/:changedShipping",
  orderController.processEditPage
);

/* GET request = perform the delete Order Action */
router.get(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  orderController.performDelete
);

module.exports = router;
