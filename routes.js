const express = require('express');
const router = express.Router();

// Controllers
const AuthController = require('./controllers/AuthController');

//Routes 
router.use('/characters', require('./routes/characters'))
router.use('/movies', require('./routes/movies'))
router.use('/genre', require('./routes/genre'))

router.post('/auth/login', AuthController.signIn);
router.post('/auth/register', AuthController.signUp);

module.exports = router;