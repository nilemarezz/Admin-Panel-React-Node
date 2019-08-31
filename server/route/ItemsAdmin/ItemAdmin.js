const express = require("express");
const router = express.Router();
const Customer = require("../../models/Customer");
 const verify = require("../AuthAdmin/verifyToken");
const Foods = require("../../models/Foods");

router.get("/",verify ,async (req, res) => {
  const CustomerList = await Customer.find({});
  const FoodList = await Foods.find({});
  res.json({
    Customer: {
      CustomerList: CustomerList,
      NumOfCustomer: CustomerList.length
    },
    Food: {
      FoodsList: FoodList,
      NumOfFoods: FoodList.length
    }
  });
});

module.exports = router;
