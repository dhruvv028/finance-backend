const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const {
  getAllUsers,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");

router.get("/", auth, role("admin"), getAllUsers);
router.put("/:id", auth, role("admin"), updateUserRole);
router.delete("/:id", auth, role("admin"), deleteUser);

module.exports = router;