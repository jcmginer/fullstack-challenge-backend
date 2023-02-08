const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controllers")
const { checkJwt } = require('../middlewares/check-middleware');


router.get('/checkuser/:email', userController.checkUser)
router.post('/createuser', userController.createUser)




module.exports = router;