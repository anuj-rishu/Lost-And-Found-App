const express = require("express");
const multer = require("multer");
const itemsController = require("../controllers/itemsController");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/report-item", upload.single("image"), itemsController.createItem);
router.get("/get-items", itemsController.getItems);
router.get("/:item_id", itemsController.getItemById);
router.put("/:item_id/claim", itemsController.claimItem);

module.exports = router;