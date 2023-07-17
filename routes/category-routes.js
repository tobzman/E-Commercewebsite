// routes/category-routes.js
const router = require("express").Router();
const { Category, Product } = require("../models");

// GET all categories
router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single category by id
router.get("/categories/:id", async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new category
router.post("/categories", async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT update a category by id
router.put("/categories/:id", async (req, res) => {
  try {
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(category);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a category by id
router.delete("/categories/:id", async (req, res) => {
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(category);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
