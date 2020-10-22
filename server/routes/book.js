let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let bookController = require('../controllers/book');
const book = require('../models/book');

//helper function for guard purpose
function requireAuth(req,res,next){
  //check if the user is logged in
  if(!req.isAuthenticated())
  {
      return res.redirect('/login');
  }
  next();
}

/* GET Route for the book list page - read operation */
router.get('/',bookController.displayBookList);

/* Get Route for the ADD page- CREATE operation */
router.get('/add', requireAuth,bookController.displayAddPage);

/* POST Route for processing the Add page- CREATE operation */
router.post('/add', requireAuth,bookController.processAddPage);

/* Get Route for the EDIT page-  UPDAGE operation */
router.get('/edit/:id', requireAuth,bookController.displayEditPage);

/* POST Route for processing the EDIT page- UPDAGE operation*/
router.post('/edit/:id', requireAuth,bookController.processEditPage);

/* Get to perform Deletion- DELETE operation*/
router.get('/delete/:id', requireAuth,bookController.performDelete);

module.exports=router;