const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const AdminUser = require("../../models/AdminUser");
const verify = require("./verifyToken");
const bcrypt = require("bcrypt");
router.get("/getAdminProfile", verify, async (req, res) => {
  try {
    const data = await AdminUser.findOne({ _id: req.user._id });

    res.json({
      AdminProfile: {
        user: data.user,
        name: data.name,
        department: data.department
      },
      successMsg: "Get Admin Profile Success"
    });
  } catch (err) {
    res.json({ errorMsg: "Something went Wrong , Try again" });
  }
});
router.post("/addAdmin", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt, null);

    const user = req.body.user;
    const password = hash;
    const name = req.body.name;
    const department = req.body.department;
    const newAdmin = { user, password, name, department };
    const data = await AdminUser.create(newAdmin);
    res.json({ newAdmin: data });
  } catch (err) {
    res.json({ errorMsg: "Something went Wrong , Try again", err: err });
  }
});

router.post("/deleteAdmin/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await AdminUser.findByIdAndDelete(id);
    res.json({ DeleteAdmin: data });
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
      const validPass = await bcrypt.compare(
        req.body.password,
        userAdmin.password
      );
      if (!validPass) {
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
          },
          successMsg: "Login Success"
        });
      }
    }
  }
});

module.exports = router;
