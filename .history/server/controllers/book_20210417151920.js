let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let jwt = require("jsonwebtoken");

// create a reference to the model
let Book = require("../models/book");

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
  const imagePath0 =
    "http://localhost:3500/server/images/" + req.file.filename0;
  const imagePath1 =
    "http://localhost:3500/server/images/" + req.file.filename1;
  const imagePath2 =
    "http://localhost:3500/server/images/" + req.file.filename2;
  const imagePath3 =
    "http://localhost:3500/server/images/" + req.file.filename3;
  const imagePath4 =
    "http://localhost:3500/server/images/" + req.file.filename4;
  const imagePath5 =
    "http://localhost:3500/server/images/" + req.file.filename5;
  const x = req.body.price;
  const price = Number(x);
  const y = req.body.originalPrice;
  const originalPrice = Number(y);

  let newBook = Book({
    name: req.body.name,
    author: req.body.author,
    published: req.body.published,
    description: req.body.description,
    originalPrice: originalPrice,
    price: price,
    store: req.body.store,
    imagePath0: imagePath0,
    imagePath1: imagePath1,
    imagePath2: imagePath2,
    imagePath3: imagePath3,
    imagePath4: imagePath4,
    imagePath5: imagePath5,
  });

  Book.create(newBook, function (err, docsInserted) {
    if (err) {
      res.json({
        //success: false,
        //msg: "Server: Failed at creating this new book.",
        id: String(docsInserted._id),
      });
    } else {
      res.json({
        //success: true,
        //msg: "Success to creadt book",
        id: String(docsInserted._id),
      });
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
  let id = req.body._id;
  const imagePath0 =
    "http://localhost:3500/server/images/" + req.file.filename[0];
  const imagePath1 =
    "http://localhost:3500/server/images/" + req.file.filename[1];
  const imagePath2 =
    "http://localhost:3500/server/images/" + req.file.filename[2];
  const imagePath3 =
    "http://localhost:3500/server/images/" + req.file.filename[3];
  const imagePath4 =
    "http://localhost:3500/server/images/" + req.file.filename[4];
  const imagePath5 =
    "http://localhost:3500/server/images/" + req.file.filename[5];
  const x = req.body.price;
  const price = Number(x);
  const y = req.body.originalPrice;
  const originalPrice = Number(y);

  let updatedBook = Book({
    _id: id,
    name: req.body.name,
    author: req.body.author,
    published: req.body.published,
    description: req.body.description,
    price: price,
    originalPrice: originalPrice,
    store: req.body.store,
    imagePath0: imagePath0,
    imagePath1: imagePath1,
    imagePath2: imagePath2,
    imagePath3: imagePath3,
    imagePath4: imagePath4,
    imagePath5: imagePath5,
  });

  Book.updateOne({ _id: id }, updatedBook, (err) => {
    if (err) {
      res.json({
        //success: false,
        //msg: "Server: Failed at upadting this new book.",
        book: updatedBook,
      });
    } else {
      res.json({
        //success: true,
        //msg: "Successfully Updated Book",
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
