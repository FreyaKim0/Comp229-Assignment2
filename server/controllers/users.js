const { User } = require("../models/user");

module.exports.displayUserList = (req, res, next) => {
  User.find((err, userList) => {
    if (err) {
      return console.error(err);
    } else {
      res.json(userList);
    }
  });
};
