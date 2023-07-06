const express = require("express");
const router = express.Router();
const productModel = require("../model/Product");


router.post("/products", async (req, res) => {
  const { name, description, price, isDraft, ownerID} = req.body;
  console.log(req.body);
  const productName = await productModel.findOne({name})

  if (productName) {
    res.statusMessage = "Product already exists";
     res.status(209).end();
  }
  
  try {
    const newProduct = new productModel({name, description, price, isDraft, ownerID});
    await newProduct.save();
     res.status(200).send('Product Added successfully');
  } catch (err) {
     res.status(400).send("Unable to Add the Product: " + err.message);
  }
  
  
});
router.get("/products", async (req, res) => {
  try {
   const ans =  await productModel.find()

     res.status(200).json(ans);
  } catch (err) {
     res.status(400).send("Unable to Add the Product: " + err.message);
  }
  
  
});
module.exports = router;
