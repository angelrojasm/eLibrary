const express = require('express');
const router = express.Router();
const userController = require('../Authentication/userController');
router.post('/register', userController.create);
router.get('/authenticate', userController.authenticate);
module.exports = router;