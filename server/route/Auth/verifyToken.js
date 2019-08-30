const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.json({ errorMsg: "Access Denied" });
  } else {
    try {
      const verified = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = verified;

      next();
    } catch (err) {
      res.json({ errorMsg: "Access Denied , Please Login " });
    }
  }
};
