const express = require('express');
const router = express.Router();
const {currentUser} = require('../../../models/users/loggedUserController');
const {verifyToken} = require('../../../middlewares/authMiddleware');


router.get('/currentUser', verifyToken, currentUser);





module.exports = router;