const express = require("express");
const router = express.Router();
const Customer = require("../../models/Customer");
const verify = require('../Auth/verifyToken.js');



router.get("/",verify,async (req,res)=>{
  const CustomerList = await Customer.find({})
  res.json({Customer:CustomerList,NumOfCustomer:CustomerList.length})
})


module.exports = router;
