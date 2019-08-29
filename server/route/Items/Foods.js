const express = require("express");
const router = express.Router();
const verify = require("../Auth/verifyToken.js");

const Foods = require("../../models/Foods");

router.get("/numOfFood", verify, async (req, res) => {
  const numOfFoods = await Foods.count();
  res.json({ numOfFoods: numOfFoods });
});

router.get("/FoodList",verify,async (req,res)=>{
    const FoodList = await Foods.find({})
    res.json({FoodList:FoodList})
  })
  

module.exports = router;
