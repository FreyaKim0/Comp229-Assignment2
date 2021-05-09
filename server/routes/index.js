let express = require("express");
let router = express.Router();

let indexController = require("../controllers/index");

/* POST Route for processing the login page*/
router.post("/login", indexController.processLoginPage);

/* POST Route for processing the register page*/
router.post("/register", indexController.processRegisterPage);

/* Get to perform user logout*/
router.get("/logout", indexController.performLogout);

module.exports = router;
