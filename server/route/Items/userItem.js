const express = require("express");
const router = express.Router();
const Customer = require("../../models/Customer");

const Foods = require("../../models/Foods");

router.get("/numOfUser", async (req, res) => {
  const numOfCustomer = Customer.count();
  res.json({ numOfCustomer: numOfCustomer });
});

router.get("/numOfFood", async (req, res) => {
  const numOfFoods = Foods.count();
  res.json({ numOfFoods: numOfFoods });
});
module.exports = router;
