const express = require("express");
const router = express.Router();
const Customer = require("../../models/Customer");
const verify = require('../Auth/verifyToken.js');


router.get("/numOfCustomer", verify, async (req, res) => {
    const numOfCustomer = await Customer.count();
    res.json({ numOfCustomer: numOfCustomer });
});

router.get("/CustomerList",verify,async (req,res)=>{
  const CustomerList = await Customer.find({})
  res.json({Customer:CustomerList})
})


module.exports = router;
