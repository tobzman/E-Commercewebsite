const express = require("express");
const router = express.Router();
const { Product, Category, Tag, ProductTag } = require("../../models");


router.get("/", async (req, res) => {
  try {
    const allProducts = await Product.findAll({
      include: [{ model: Category }, { model: Tag }],
    });
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(400).json(error);
  }
});


router.get("/:id", async (req, res) => {
  try {
    const foundProduct = await Product.findOne({
      include: [{ model: Category }, { model: Tag }],
      where: { id: req.params.id },
    });
    res.status(200).json(foundProduct);
  } catch (error) {
    res.status(400).json(error);
  }
});


router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
});


router.put("/:id", async (req, res) => {
  try {
    const product = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(product);
  } catch (error) {
    res.status(400).json(error);
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(deletedProduct);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
