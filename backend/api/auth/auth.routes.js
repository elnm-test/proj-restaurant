const express = require('express');
const router = express.Router();
const { doSignup, doLogout, doLogin } = require('./auth.controller')
const { requireAuth } = require('../../middlewares/requireAuth.middleware')

router.post('/signup', doSignup);
router.post('/login', doLogin);
router.post('/logout',requireAuth, doLogout);

module.exports = router