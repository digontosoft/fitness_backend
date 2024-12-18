const express = require('express');
const passport = require('passport');
const generateToken = require('../utils/generateToken');
const router = express.Router();

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/auth/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    const token = generateToken(req.user._id);
    console.log("token", token);
    // You can redirect to your frontend with the token
    res.redirect(`${process.env.FRONTEND_URL}/login?token=${token}`); //passing toke to 
  }
);

module.exports = router; 