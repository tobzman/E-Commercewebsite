const express = require("express");
const router = express.Router();
const { Category, Product } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const categoriesData = await Category.findAll({
      include: [{ model: Product }],
    });
    if (!categoriesData) {
      res.status(400).json({ message: "No categories found" });
      return;
    }
    res.status(200).json(categoriesData);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!categoryData) {
      res.status(400).json({ message: "No category found" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/", async (req, res) => {
  const { category_name } = req.body;
  if (!category_name) {
    res.status(400).json({ message: "No category_name sent" });
    return;
  }
  try {
    const createCategory = await Category.create({
      category_name: category_name,
    });
    res.status(200).json(createCategory);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/:id", async (req, res) => {
  const { category_name } = req.body;
  if (!category_name) {
    res.status(400).json({ message: "No category_name" });
    return;
  }
  try {
    const updateCategory = await Category.update(
      { category_name: category_name },
      { where: { id: req.params.id } }
    );
    if (updateCategory[0] === 0) {
      res.status(200).json({ message: "No category updated" });
      return;
    }
    res.status(200).json(updateCategory);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: { id: req.params.id },
    });
    if (deletedCategory === 0) {
      res.status(200).json({ message: "No category found to delete" });
      return;
    }
    res.status(200).json(deletedCategory);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
