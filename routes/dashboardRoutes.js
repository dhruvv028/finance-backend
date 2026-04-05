const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { getSummary, getCategorySummary, getRecentActivity } = require("../controllers/dashboardController");

router.get("/summary", auth, getSummary);

router.get("/category-summary", auth, getCategorySummary);

router.get("/recent", auth, getRecentActivity);

module.exports = router;