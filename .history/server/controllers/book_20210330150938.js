let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let jwt = require("jsonwebtoken");

// create a reference to the model
let Book = require("../models/book");

// image storage
const storage = require("../helper/storage");

// display book store
module.exports.displayBookList = (req, res, next) => {
  Book.find((err, bookList) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(BookList);

      /*
            res.render('book/list', 
            {title: 'Books', 
            BookList: bookList, 
            displayName: req.user ? req.user.displayName : ''});      
            */

      res.json(bookList);
    }
  });
};

// Add New books
module.exports.displayAddPage = (req, res, next) => {
  /*
    res.render('book/add', {title: 'Add Book', 
    displayName: req.user ? req.user.displayName : ''});
    */

  res.json({ success: true, msg: "Succesfully Displayed Add Page" });
};

module.exports.processAddPage = (req, res, next) => {
  let newBook = Book({
    name: req.body.name,
    author: req.body.author,
    published: req.body.published,
    description: req.body.description,
    originalPrice: req.body.originalPrice,
    price: req.body.price,
    store: req.body.store,
    image0: "http://localhost:3000/images/" + req.file.filename, // Note: set path dynamically
    //image1: "http://localhost:3000/images/" + req.file.filename, // Note: set path dynamically
    // image2: "http://localhost:3000/images/" + req.file.filename, // Note: set path dynamically
    //image3: "http://localhost:3000/images/" + req.file.filename, // Note: set path dynamically
    //image4: "http://localhost:3000/images/" + req.file.filename, // Note: set path dynamically
    //image5: "http://localhost:3000/images/" + req.file.filename, // Note: set path dynamically
  });

  Book.create(newBook, (err) => {
    if (err) {
      res.json({
        success: false,
        msg: "Server: Failed at creating this new book.",
      });
    } else {
      res.json({ success: true, msg: "Server: Successfully Added New Book" });
    }
  });
};

// Edit old books
module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;

  Book.findById(id, (err, bookToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({
        success: true,
        msg: "Successfully Displayed Book to Edit",
        book: bookToEdit,
      });
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
  let id = req.params._id;

  let updatedBook = Book({
    _id: id,
    name: req.body.name,
    author: req.body.author,
    published: req.body.published,
    description: req.body.description,
    price: req.body.price,
    originalPrice: req.body.originalPrice,
    store: req.body.store,
  });

  Book.updateOne({ _id: id }, updatedBook, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({
        success: true,
        msg: "Successfully Edited Book",
        book: updatedBook,
      });
    }
  });
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  Book.deleteOne({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the book list
      //res.redirect('/book-list');
      res.json({ success: true, msg: "Successfully Deleted Book" });
    }
  });
};
