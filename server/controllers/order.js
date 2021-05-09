let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let Order = require("../models/order");
let Store = require("../models/store");
let Cart = Store.Cart;
let Book = Store.Book;

module.exports.displayOrderList = (req, res, next) => {
  Order.find((err, orderList) => {
    if (err) {
      return console.error(err);
    } else {
      res.json(orderList);
    }
  });
};

module.exports.processAddPage = (req, res, next) => {
  // Serialize the Cart Data
  let cart = new Cart();

  // Serialize the Line Data (each purchase item)
  let book_data = req.body.cart;

  for (let counter = 0; counter < book_data.lines.length; counter++) {
    let book = new Book(
      book_data.lines[counter].book._id,
      book_data.lines[counter].book.name,
      book_data.lines[counter].book.author,
      book_data.lines[counter].book.description,
      book_data.lines[counter].book.price,
      book_data.lines[counter].book.originalPrice,
      book_data.lines[counter].book.store,
      book_data.lines[counter].book.imagePath
    );

    let quantity = req.body.cart.lines[counter].quantity;
    cart.lines.push({ book: book, quantity: quantity, shipping: false }); // Initial shpping status: false
  }

  cart.itemCount = req.body.cart.itemCount;
  cart.cartPrice = req.body.cart.cartPrice;

  // Create a new Order Object
  let newOrder = Order({
    buyer: req.body.buyer,
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    province: req.body.province,
    postalCode: req.body.postalCode,
    country: req.body.country,
    cart: cart,
  });

  // Add New Order Object to the Database
  Order.create(newOrder, (err, Order) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json({
        success: "true",
        msg: "Successfully Added New Order",
        order: newOrder,
      });
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
  // Get avlue from API params
  const id = req.params.id;
  const originalShipping = req.params.originalShipping;
  const updateShipping = req.params.changedShipping;
  const store = req.params.store;

  // Change the shipping status only for books with matching store & id
  Order.updateMany(
    {
      _id: id,
      "cart.lines.book.store": store,
      "cart.lines.shipping": originalShipping,
    },
    { $set: { "cart.lines.$.shipping": updateShipping } },
    (err) => {
      if (err) {
        res.json({
          success: false,
          msg: err,
        });
      } else {
        res.json({
          success: true,
          msg: "Successfully Update Order",
        });
      }
    }
  );
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  Order.deleteOne({ _id: id }, (err) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json({ success: true, msg: "Successfully Deleted Order" });
    }
  });
};
