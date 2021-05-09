const express = require("express")
const { signUp,signIn} = require("../controllers/usersController")

const router = express.Router()

router.route("/register").post(signUp)
router.route("/login").post(signIn)

module.exports = router;