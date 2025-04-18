const express = require("express");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const Item = require("../models/Items");
const cloudinary = require("../config/cloudinary");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const {
      name,
      description,
      location_found,
      finder_name,
      finder_contact,
      found_date,
    } = req.body;

    const result = await cloudinary.uploader.upload_stream(
      { resource_type: "image" },
      async (error, result) => {
        if (error) return res.status(500).json({ error: error.message });

        const item = new Item({
          id: uuidv4(),
          name,
          description,
          location_found,
          finder_name,
          finder_contact,
          status: "found",
          image_url: result.secure_url,
          found_date: new Date(found_date),
        });

        await item.save();
        res.json(item);
      }
    );

    result.end(req.file.buffer);
  } catch (e) {
    res.status(500).json({ error: `Error creating item: ${e.message}` });
  }
});

router.get("/", async (req, res) => {
  const { status } = req.query;
  const query = status ? { status } : {};
  const items = await Item.find(query);
  res.json(items);
});

router.get("/:item_id", async (req, res) => {
  const item = await Item.findOne({ id: req.params.item_id });
  if (!item) return res.status(404).json({ error: "Item not found" });
  res.json(item);
});

router.put("/:item_id/claim", async (req, res) => {
  const result = await Item.updateOne(
    { id: req.params.item_id },
    { $set: { status: "claimed" } }
  );
  if (result.modifiedCount === 0)
    return res.status(404).json({ error: "Item not found" });
  res.json({ message: "Item claimed successfully" });
});

module.exports = router;
