const express = require("express");
const router = express.Router();
const { Tag, Product, ProductTag } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });

    res.status(200).json(tagData);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tagData = await Tag.findOne({
      include: [{ model: Product }],
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res.status(200).json({ message: "No Tag Found" });
      return;
    }

    res.status(200).json(tagData);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/", async (req, res) => {
  const { tag_name } = req.body;

  if (!tag_name) {
    return res.status(200).json({
      message: "No tag_name found",
    });
  }

  try {
    const tagCreated = await Tag.create({ tag_name });
    res.status(200).json(tagCreated);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/:id", async (req, res) => {
  const { tag_name } = req.body;

  if (!tag_name) {
    return res.status(200).json({
      message: "No tag_name found",
    });
  }

  try {
    const tagUpdated = await Tag.update(
      { tag_name },
      {
        where: { id: req.params.id },
      }
    );

    res.status(200).json(tagUpdated);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const tagDeleted = await Tag.destroy({
      where: { id: req.params.id },
    });

    res.status(200).json(tagDeleted);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
