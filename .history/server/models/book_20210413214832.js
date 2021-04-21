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
    imagePath0: String,
    imagePath1: String,
    imagePath2: String,
    imagePath3: String,
    imagePath4: String,
    imagePath5: String,
  },
  {
    collection: "books",
  }
);

module.exports = mongoose.model("Book", bookModel);
