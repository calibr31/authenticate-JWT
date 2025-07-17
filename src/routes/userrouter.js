const { Router } = require("express");
const { signup, login, getprofile, logout ,newtoken } = require("../controller/usercontroller");
const { signupValidation,loginValidation } = require("../validator/uservalidator");
const { authenticate } = require("../middleware/authenticate");



const router = Router()

router.post("/signup",signupValidation,signup)
router.post("/login",loginValidation,login)
router.get("/profile",authenticate,getprofile)
router.get("/newtoken",newtoken)
router.get("/logout",authenticate,logout)

module.exports =router