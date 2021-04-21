const { Int32 } = require("bson");
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
            id: String,
            name: String,
            author: String,
            published: String,
            description: String,
            originalPrice: Number,
            price: Number,
            store: String,
            __v: Int32,
            originalPrice: Number,
            // 也許資料沒有對其
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
