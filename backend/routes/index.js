const express = require("express")
const router = express.Router()

router.use('/admin', require("./admin"));
router.use(require("./shop"));
router.use('/auth', require("./auth"))

module.exports = router;