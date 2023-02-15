const jwt = require("../utils/jsonwebtoken");
const config = require("../config");

exports.authentication = async (req, res, next) => {
  const token = req.cookies["auth"];

  if (token) {
    try {
      const decodedToken = await jwt.verify(token, config.SECRET);
      req.user = decodedToken
      req.usAuthenticated = true;
    } catch (err) {
      console.log(err.message);
      res.clearCookie("auth");
      res.redirect("/404");
    }
  }
  next();
};
