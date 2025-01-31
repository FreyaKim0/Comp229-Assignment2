"use strict";
class Book {
  constructor(
    _id = "",
    name = "",
    author = "",
    description = "",
    price = 0,
    originalPrice = 0,
    store = "",
    imagePath = ""
  ) {
    this._id = _id;
    this.name = name;
    this.author = author;
    this.description = description;
    this.price = price;
    this.originalPrice = originalPrice;
    this.store = store;
    this.imagePath = imagePath;
  }

  toString() {
    return (
      "_id            :" +
      this._id +
      "\n" +
      " name          : " +
      this.name +
      "\n" +
      " author        : " +
      this.author +
      "\n" +
      " description   :" +
      this.description +
      "\n" +
      " price         :" +
      this.price +
      "\n" +
      " originalprice :" +
      this.originalPrice +
      "\n" +
      " store         :" +
      this.store +
      "\n" +
      " imagePath         :" +
      this.imagePath
    );
  }
}

class Line {
  constructor(book = new Book(), quantity = 1, shipping = false) {
    this.book = book;
    this.quantity = quantity;
    this.shipping = false;
  }

  toString() {
    return "{" + this.book.toString() + "}, \n" + " quantity: " + this.quantity;
  }

  total() {
    return this.book.price * this.quantity;
  }
}

class Cart {
  constructor(lines = [], itemCount = 0, cartPrice = 0) {
    this.lines = lines;
    this.itemCount = itemCount;
    this.cartPrice = cartPrice;
  }

  toString() {
    let outputString = "";
    let count = 0;

    for (let line of this.lines) {
      outputString += "{" + line.toString();
      count++;
      outputString += count > this.lines.length ? "}, \n" : "} \n";
    }
    outputString += ", itemCount: " + this.itemCount + "\n";
    outputString += ", cartPrice: " + this.cartPrice;
    return outputString;
  }

  addLine(line) {
    this.lines.push(line);
    this.cartPrice += line.total();
  }

  empty() {
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }
}

module.exports.Cart = Cart;
module.exports.Line = Line;
module.exports.Book = Book;
