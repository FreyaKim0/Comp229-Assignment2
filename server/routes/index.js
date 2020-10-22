let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* Get home page */
router.get('/',indexController.displayHomePage);
router.get('/home',indexController.displayHomePage);

/* GET service page. */
router.get('/service',indexController.displayServicePage);

/* GET project page. */
router.get('/project',indexController.displayProjectPage);

/* GET about page. */
router.get('/about',indexController.displayAboutPage);

/* GET contact page. */
router.get('/contact',indexController.displayContactPage);

/* Get Route for displaying the login page*/
router.get('/login',indexController.displayLoginPage);

/* POST Route for processing the login page*/
router.post('/login',indexController.processLoginPage);

/* Get Route for displaying the register page*/
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the register page*/
router.post('/register', indexController.processRegisterPage);

/* Get to perform user logout*/
router.get('/logout',indexController.performLogout);

module.exports = router;
