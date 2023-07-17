// routes/product-routes.js
const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../models");

// GET all products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Category }, { model: Tag, through: ProductTag }],
    });
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single product by id
router.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag, through: ProductTag }],
    });
    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new product
router.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT update a product by id
router.put("/products/:id", async (req, res) => {
  try {
    const product = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(product);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a product by id
router.delete("/products/:id", async (req, res) => {
  try {
    const product = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(product);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
