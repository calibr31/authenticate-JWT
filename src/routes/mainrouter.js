const { Router } = require("express");
const userrouter = require('./userrouter');
const { swaggerSpec,swaggerUi } = require("../config/swagger");

const router = Router()
router.use("/docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec))
router.use("/user",userrouter)

module.exports = router