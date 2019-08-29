const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const AdminUser = require("../../models/AdminUser");

router.post("/addAdmin", async (req, res) => {
  const user = req.body.user;
  const password = req.body.password;
  const name = req.body.name;
  const department = req.body.department;
  const newAdmin = { user, password, name, department };
  try {
    await AdminUser.create(newAdmin);
    res.json({ successMsg: "Add new Admin Success" });
  } catch (err) {
    res.json({ errorMsg: "Something went Wrong , Try again" });
  }
});
router.post("/login", async (req, res) => {
  const user = req.body.user;
  const password = req.body.password;
  if (user === null || password === null) {
    res.json({ errorMsg: "Something went Wrong , Try again" });
  } else {
    const userAdmin = await AdminUser.findOne({ user: user });
    if (!userAdmin) {
      res.json({ errorMsg: "Username does not exist" });
    } else {
      if (userAdmin.password !== password) {
        res.json({ errorMsg: "Password not match , try again" });
      } else {
        const token = jwt.sign(
          { _id: userAdmin._id },
          process.env.TOKEN_SECRET
        );
        res.header("auth-token", token).json({
          token: token,
          user: {
            user: userAdmin.user,
            name: userAdmin.name,
            department: userAdmin.department
          }
        });
      }
    }
  }
});

module.exports = router;
