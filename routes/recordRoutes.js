const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
  filterRecords,
} = require("../controllers/recordController");

router.post("/", auth, role("admin"), createRecord);
router.get("/", auth, getRecords);
router.put("/:id", auth, role("admin"), updateRecord);
router.delete("/:id", auth, role("admin"), deleteRecord);
router.get("/filter/search", auth, filterRecords);

module.exports = router;