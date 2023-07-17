// routes/tag-routes.js
const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../models");

// GET all tags
router.get("/tags", async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
    res.json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single tag by id
router.get("/tags/:id", async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }],
    });
    res.json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new tag
router.post("/tags", async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(201).json(tag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT update a tag by id
router.put("/tags/:id", async (req, res) => {
  try {
    const tag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(tag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a tag by id
router.delete("/tags/:id", async (req, res) => {
  try {
    const tag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(tag);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
