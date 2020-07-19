const express = require('express');
const router = express.Router();
const {signupUser} = require('../../../models/users/signupController');
const {login} = require('../../../models/users/loginController');


router.post('/login', login)

router.post('/signup', signupUser)



module.exports = router;