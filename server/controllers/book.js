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
      res.json(bookList);
    }
  });
};

// Add New books
module.exports.displayAddPage = (req, res, next) => {
  res.json({ success: true, msg: "Succesfully Displayed Add Page" });
};

module.exports.processAddPage = (req, res, next) => {
  const imagePath0 =
    "https://xu-tung-jin-assignment2.herokuapp.com/api/server/images/" +
    req.file.filename;
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
    imagePath: imagePath0,
  });

  Book.create(newBook, function (err, docsInserted) {
    if (err) {
      res.json({
        success: false,
        msg: "Server: Failed at creating this new book.",
        id: String(docsInserted._id),
      });
    } else {
      res.json({
        success: true,
        msg: "Success to creadt book",
        imagePath: imagePath0,
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

// This is for update case which image has been changed
module.exports.processEditPage = (req, res, next) => {
  const imagePath0 =
    "https://xu-tung-jin-assignment2.herokuapp.com/api/server/images/" +
    req.file.filename;
  const id = req.params.id;

  const x = req.body.price;
  const price = Number(x);
  const y = req.body.originalPrice;
  const originalPrice = Number(y);

  const name = req.body.name;
  const author = req.body.author;
  const published = req.body.published;
  const description = req.body.description;
  const store = req.body.store;

  let updatedBook = Book({
    name: name,
    author: author,
    published: published,
    description: description,
    originalPrice: originalPrice,
    price: price,
    store: store,
    imagePath: imagePath0,
  });

  Book.updateOne(
    { _id: id },
    {
      $set: {
        name: name,
        author: author,
        published: published,
        description: description,
        price: price,
        originalPrice: originalPrice,
        store: store,
        imagePath: imagePath0,
      },
    },
    (err) => {
      if (err) {
        res.json({
          success: false,
          msg: "Server: Failed at upadting this new book.",
          book: updatedBook,
          imagePath: imagePath0,
        });
      } else {
        res.json({
          success: true,
          msg: "Successfully Updated Book (with image change)",
          book: updatedBook,
          id: id,
          imagePath: imagePath0,
        });
      }
    }
  );
};

module.exports.processEditWithSameImagePage = (req, res, next) => {
  const id = req.params.id;
  const price = req.params.price;
  const originalPrice = req.params.originalPrice;
  const name1 = req.params.name;
  const author1 = req.params.author;
  const published1 = req.params.published;
  const description1 = req.params.description;
  const store1 = req.params.store;

  Book.updateOne(
    { _id: id },
    {
      $set: {
        name: name1,
        author: author1,
        published: published1,
        description: description1,
        price: price,
        originalPrice: originalPrice,
        store: store1,
      },
    },
    (err) => {
      if (err) {
        res.json({
          success: false,
        });
      } else {
        res.json({
          success: true,
        });
      }
    }
  );
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  Book.deleteOne({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({ success: true, msg: "Successfully Deleted Book" });
    }
  });
};
