// Mock local user data
const jwt = require("jsonwebtoken");
const APP_SECRET = "Secret";
const USERNAME = "local";
const PASSWORD = "123";
const mappings = {
  get: ["/api/orders", "/orders"],
  post: [
    "/api/book-list",
    "/book-list",
    "/api/users",
    "/users", // <-----try to make mock data user
    "api/categories",
    "/categories",
  ],
};

function requiresAuth(method, url) {
  return (
    (mappings[method.toLowerCase()] || []).find((p) => url.startsWith(p)) !==
    undefined
  );
}

module.exports = function (req, res, next) {
  console.log("authMiddleware function");
  if (req.url.endsWith("/login") && req.method == "POST") {
    console.log("authMiddleware function ===> /login POST delected");
    if (
      req.body &&
      req.body.name == USERNAME &&
      req.body.password == PASSWORD
    ) {
      let token = jwt.sign({ data: USERNAME, expiresIn: "1h" }, APP_SECRET);
      res.json({ success: true, token: token });
    } else if (
      req.body &&
      req.body.name == "billy" &&
      req.body.password == PASSWORD
    ) {
      let token = jwt.sign({ data: "billy", expiresIn: "1h" }, APP_SECRET);
      res.json({ success: true, token: token });
    } else {
      res.json({ success: false });
    }
    res.end();
    return;
  } else if (requiresAuth(req.method, req.url)) {
    let token = req.headers["authorization"] || "";
    if (token.startsWith("Bearer<")) {
      token = token.substring(7, token.length - 1);
      try {
        jwt.verify(token, APP_SECRET);
        next();
        return;
      } catch (err) {}
    }
    res.statusCode = 401;
    res.end();
    return;
  }
  next();
};
