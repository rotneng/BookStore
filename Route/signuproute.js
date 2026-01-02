const express = require('express')
const { signUp, signin, verifyEmail } = require('../Controller/signup')
const router = express.Router()

router.post("/signUp", signUp)
router.post("/signin", signin)
router.post("/verifyEmail", verifyEmail)

module.exports = router
