/* LOCAL MOCK DATA -  book-list , orders */
const { getAutomaticTypeDirectiveNames } = require("typescript");

module.exports = function () {
  return {
    "book-list": [
      {
        _id: 1,
        name: "Harry potter",
        author: "JK Rowlin",
        published: "1999.01.12",
        description: "Advature with wizard",
        price: 12.9,
        originalPrice: 20.0,
        store: "Admin",
        __v: 0,
      },
      {
        _id: 2,
        name: "Monster",
        author: "Jsone bilst",
        published: "2001",
        description: "Please contact the IAJC-HR department",
        price: 15.9,
        originalPrice: 30.0,
        store: "Admin",
        __v: 0,
      },
      {
        _id: 3,
        name: "Monster2",
        author: "Jsone bilst",
        published: "2008",
        description: "Please contact the IAJC-HR department",
        price: 15.9,
        originalPrice: 30.0,
        store: "Billy",
        __v: 0,
      },
    ],
    orders: [],
  };
};
