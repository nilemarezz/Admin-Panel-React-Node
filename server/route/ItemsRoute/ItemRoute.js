const express = require("express");
const router = express.Router();
const Customer = require("../../models/Customer");
const verify = require("../AuthAdmin/verifyToken");
const Foods = require("../../models/Foods");
const AdminUser = require("../../models/AdminUser");
const multer = require('multer');

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

router.post("/addFood", verify, async (req, res) => {
  const newFood = {
    name: req.body.name,
    amount: req.body.amount,
    description: req.body.description,
    price: req.body.price
  };
  try {
    const data = await Foods.create(newFood);
    res.json({ newFood: data });
  } catch (err) {
    res.json({ errorMsg: "Add fail , try again" });
  }
});

router.get("/getgender", verify , async (req,res)=>{
  try{
    const male = await Customer.find({gender:"Male"})
    const female = await Customer.find({gender:"Female"})
    res.json({numOfMale:male.length,numOfFemale:female.length})
  }catch(err){
    res.json({errorMsg:err})
  }
})

router.post("/addCustomer", verify, async (req, res) => {
  const newCust = {
    user: req.body.name,
    password: req.body.password,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender
  };
  try {
    const data = await Customer.create(newCust);
    res.json({ Customer: data });
  } catch (err) {
    res.json({ errorMsg: "Add fail , try again", err: err });
  }
});

router.post("/deleteCustomer/:id", verify, async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Customer.findByIdAndDelete(id);
    res.json({ deleteCustomer: data });
  } catch (err) {
    res.json({ errorMsg: "Delete fail , try again" });
  }
});

router.post("/deleteFood/:id", verify, async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Foods.findByIdAndDelete(id);
    res.json({ deleteFood: data });
  } catch (err) {
    res.json({ errorMsg: "Delete fail , try again" });
  }
});

router.post("/editFood/:id", verify, async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Foods.findByIdAndUpdate(id, { amount: req.body.amount });
    res.json({ editAmount: data, amount: req.body.amount });
  } catch (err) {
    res.json({ errorMsg: "Edit fail , try again" });
  }
});
module.exports = router;
