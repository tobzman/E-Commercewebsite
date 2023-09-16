const router = require("express").Router();
const { Category, Product } = require("../models");

router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

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

router.post("/categories", async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json(err);
  }
});

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
