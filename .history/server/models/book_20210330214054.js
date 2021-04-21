let mongoose = require("mongoose");

// create a model class
let bookModel = mongoose.Schema(
  {
    name: String,
    author: String,
    published: String,
    description: String,
    originalPrice: Number,
    price: Number,
    store: String,
    image0: String,
    //image1: String,
    //image2: String,
    //image3: String,
    //image4: String,
    //image5: String,
  },
  {
    collection: "books",
  }
);

module.exports = mongoose.model("Book", bookModel);
