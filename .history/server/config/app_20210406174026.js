// ========= installed 3rd party packages ==========

let createError = require("http-errors"); // create errirs fir express,connection...ect
let express = require("express"); // express module
let path = require("path"); // Access to file (node.js)
let cookieParser = require("cookie-parser"); // parse cookie header with keys by cookie name
let logger = require("morgan"); // http req logger middleware for node.js
let cors = require("cors"); // Take http header from localhost to online

// ========= modules for authentication =========

let session = require("express-session"); // create session middlware with given options
let passport = require("passport"); // Authantication logic

let passportJWT = require("passport-jwt"); //Authactication jwt
let JWTStrategy = passportJWT.Strategy;
let ExtractJWT = passportJWT.ExtractJwt;

let passportLocal = require("passport-local");
let localStrategy = passportLocal.Strategy;
let flash = require("connect-flash"); // Temprary carry the message and display to user

// ========== Set up database ============

let mongoose = require("mongoose"); // MongoDB modeling tool
let DB = require("./db");

// point mongoose to the DB URI
mongoose.connect(DB.URI, { useNewUrlParser: true, useUnifiedTopology: true });

let mongoDB = mongoose.connection;
mongoDB.on("error", console.error.bind(console, "Connection Error:"));
mongoDB.once("open", () => {
  console.log("Connected to MongoDB...");
});

// ========== Setup Routes Paths ============

let indexRouter = require("../routes/index");
let usersRouter = require("../routes/users");
let booksRouter = require("../routes/book");
let ordersRouter = require("../routes/order");

let app = express();

// ========== Setup view engines ============
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs"); // express  -e

app.use(logger("dev")); // Morgan logger is for simplifies the process of logging req
app.use(express.json()); // recognize incoming req obj as JSON obj
app.use(express.urlencoded({ extended: false })); // parse incoming req with urlencoded payload
app.use(cookieParser()); // parse cookie header with keys by cookie name

// ========== Setup ng build ============
app.use(express.static(path.join(__dirname, "../../public")));
app.use(express.static(path.join(__dirname, "../../node_modules")));

app.use(cors()); // Take http header from localhost to online

// ========== setup express session ==========
// (every user of the website will be assigned a unique session)
app.use(
  session({
    secret: "SomeSecret",
    saveUninitialized: false,
    resave: false,
  })
);

// initialize flash
app.use(flash());

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// ============= passport user configuration ================

// create a User Model Instance (Schema)
let userModel = require("../models/user");
let User = userModel.User;

// implement a User Authentication Strategy
passport.use(User.createStrategy());

// serialize: setting id as cookie in user's browser and passport
// deserialize: getting id from cookie then use in call back whenever need authantication
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = DB.Secret;

let strategy = new JWTStrategy(jwtOptions, (jwt_payload, done) => {
  User.findById(jwt_payload.id)
    .then((user) => {
      return done(null, user);
    })
    .catch((err) => {
      return done(err, false);
    });
});

passport.use(strategy);

// ============= API routing (+ /api for product mode) ===============
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/book-list", booksRouter);
app.use("/orders", ordersRouter);
app.use("server/images", express.static(path.join("server/images")));

/*app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});*/

// ============= catch 404 and forward to error handler =============
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { title: "Error" });
});

module.exports = app;
