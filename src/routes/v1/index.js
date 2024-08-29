const express = require('express');

const { AuthRequestValidators } = require("../../middlewares/index")
const UserController = require('../../controllers/userController');

const router = express.Router();

router.post('/signUp', AuthRequestValidators.validateUserAuth, UserController.create);
router.post('/signIn', AuthRequestValidators.validateUserAuth, UserController.singIn);
router.get('/isAuthenticated', UserController.isAuthenticated);


module.exports = router;