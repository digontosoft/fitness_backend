const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const { upsertUserDetails } = require("../controllers/user.controller");
router.route("/upsertUserDetails").post(upsertUserDetails);


module.exports = router;
