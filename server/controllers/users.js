const { User } = require("../models/user");


module.exports.displayUserList = (req, res, next) => {
    User.find((err, userList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);

            /*
            res.render('book/list', 
            {title: 'Books', 
            BookList: bookList, 
            displayName: req.user ? req.user.displayName : ''});      
            */

            res.json(userList);
        }
    });
}
