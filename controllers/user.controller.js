const asyncHandler = require('express-async-handler');
const UserDetail = require('../models/userDetails.Model');

// Create or Update User Details
const upsertUserDetails = asyncHandler(async (req, res) => {
  try {
    const { user_id, ...updateData } = req.body;

    // Find existing user details or create new one
    const userDetails = await UserDetail.findOneAndUpdate(
      { user_id },
      { $set: updateData },
      { new: true, upsert: true }
    );

    res.status(200).json({
      success: true,
      data: userDetails
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = {
  upsertUserDetails
};
