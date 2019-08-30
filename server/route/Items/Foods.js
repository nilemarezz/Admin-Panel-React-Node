const express = require("express");
const router = express.Router();
const verify = require("../Auth/verifyToken.js");

const Foods = require("../../models/Foods");


router.get("/",verify,async (req,res)=>{
    const FoodList = await Foods.find({})
    res.json({FoodList:FoodList,NumOfFood:FoodList.length})
  })
  

module.exports = router;
