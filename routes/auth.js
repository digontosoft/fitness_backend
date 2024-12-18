const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const router = express.Router();

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    const token = jwt.sign({ id: req.user.id }, config.jwtSecret, {
      expiresIn: '7d',
    });
    
    res.redirect(`${config.clientUrl}/auth/success?token=${token}`);
  }
);

router.get('/user', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json(req.user);
});

export default router;