const express = require("express");
const router = express.Router();
require("../db/conn");
const productDetail = require("../modals/userschema");

router.post("/product", async (req, res) => {
  const { name, price, description, createDate, modifiedDate } = req.body;
  if (!name || !price || !description) {
    return res.status(422).json({ error: "Fill all the details" });
  }
  try {
    // we can also create new items in the database
    // by using create method of mongoose
    const details = new productDetail({
      name,
      price,
      description,
    
    });
    await details.save();
    res.status(201).json(details);
  } catch (err) {
    res.send(err);
  }
});

//get product

router.get("/product", async (req, res) => {
  try {
    const allProduct = await productDetail.find({});
    res.send(allProduct);
  } catch (err) {
    res.status(400).send(err);
  }
});

//get product by ID
router.get("/product/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const productid = await productDetail.findById(_id);
    res.send(productid);
  } catch (err) {
    res.status(400).send(err);
  }
});



//delete by id
router.delete("/product/:id", async (req, res) => {
  try {
    const productDelete = await productDetail.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(productDelete);
  } catch (err) {
    res.status(500).send(err);
  }
});

//modified by id
router.put("/product/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const productUpdate = await productDetail.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(productUpdate);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
