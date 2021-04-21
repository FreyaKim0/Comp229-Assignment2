let mongoose = require("mongoose");

// create order model class
let Order = mongoose.Schema(
  {
    // ===Buyer Info===
    buyer: String,
    created: {
      type: Date,
      default: Date.now,
    },

    // ===Address===
    name: String,
    address: String,
    city: String,
    province: String,
    postalCode: String,
    country: String,
    shipped: Boolean,
    cart: {
      line: [
        {
          book: {
            _id: String,
            name: String,
            author: String,
            published: String,
            description: String,
            originalPrice: Number,
            price: Number,
            store: String,
            __v: Number,
            originalPrice: Number,
          },
          quantity: Number,
        },
      ],
      itemCount: Number,
      cartPrice: Number,
    },
  },
  {
    collection: "orders",
  }
);

module.exports = mongoose.model("Order", Order);
