const express = require("express");
const { authVerify } = require("../middlewares/authVerify");
const router = express.Router()

// authVerify.verifyAccessToken.bind(authVerify) --middleware za protekciju ruta

router.use('/admin', require("./admin"));
router.use(require("./shop"));
router.use('/auth', require("./auth"))

module.exports = router;