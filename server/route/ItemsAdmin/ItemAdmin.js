const express = require("express");
const router = express.Router();
const Customer = require("../../models/Customer");
const verify = require("../AuthAdmin/verifyToken");
const Foods = require("../../models/Foods");
const AdminUser = require("../../models/AdminUser");

router.get("/", verify, async (req, res) => {
  const CustomerList = await Customer.find({});
  const FoodList = await Foods.find({});
  const AdminList = await AdminUser.find({});
  res.json({
    Customer: {
      CustomerList: CustomerList,
      NumOfCustomer: CustomerList.length
    },
    Food: {
      FoodsList: FoodList,
      NumOfFoods: FoodList.length
    },
    Admin: {
      AdminList: AdminList,
      NumOfAdmin: AdminList.length
    }
  });
});

router.post("/addFood", verify,async (req, res) => {
  const newFood = {
    name: req.body.name,
    amount: req.body.amount,
    description: req.body.description,
    price: req.body.price
  };
  const data = await Foods.create(newFood);
  res.json({newFood:data})
});
module.exports = router;
