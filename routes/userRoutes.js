const express = require("express");
const router = express.Router();
const { protect, isShipper, isCarrier } = require("../middleware/auth");
const {
  Login,
  Registration,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getAllAgentUsers,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");

router.route("/register").post(Registration);
router.route("/login").post(Login);
router.route("/forgotPassword").post(forgotPassword);
router.route("/resetPassword").post(resetPassword);
router.route("/users").get(protect, getAllUsers);
router
  .route("/user/:id")
  .get(protect, getUserById)
  .put(protect, updateUser)
  .delete(protect, deleteUser);
router.route("/agent-users").get(protect, getAllAgentUsers);

module.exports = router;
