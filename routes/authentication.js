const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

// Endpoints authenticators
// /auth/login & /auth/register
router.post('/auth/login', AuthController.signIn);
router.post('/auth/register', AuthController.signUp);

module.exports = router; 